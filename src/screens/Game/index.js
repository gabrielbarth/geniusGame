import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { tint } from 'polished';

import { EPadColor } from '../../utils/enums/EPadColor';
import { playSound } from '../../utils/playSound';
import { song } from '../../utils/padSongs';

import { useGameContext } from '../../context';

import { ButtonIcon } from '../../components/ButtonIcon';

import { colors } from '../../styles/colors';
import { styles } from './styles';
import { EDifficultyLevel } from '../../utils/enums/EDifficultyLevel';

const Game = () => {
    const {
        difficultyLevel,
        userMaxScore,
        updateUserMaxScore,
        toggleDifficultyModal
    } = useGameContext();

    const computerPadTrackRecord = useRef([]);
    const userPadTrackRecord = useRef([]);

    const [computerPadPressed, setComputerPadPressed] = useState(null);
    const [userScore, setUserScore] = useState(0);
    const [computerPlaying, setIsComputerPlaying] = useState(false);
    const [isLostGame, setIsLostGame] = useState(false);

    useEffect(() => {
        return () => {
            computerPadTrackRecord.current = [];
            userPadTrackRecord.current = [];
        }
    }, []);

    const pickupNextPadToPlay = () => Math.floor(Math.random() * (4)) + 1;


    const isCorrectAnwser = () =>
        JSON.stringify(computerPadTrackRecord.current) === JSON.stringify(userPadTrackRecord.current)

    const getDifficultyLevelTime = () => {
        if (difficultyLevel == EDifficultyLevel.HARD) return 500;
        if (difficultyLevel == EDifficultyLevel.MEDIUM) return 1000;
        else return 1500;
    };

    const computerPlayPad = (newTrack = false) => {
        setIsComputerPlaying(true);

        if (newTrack) {
            computerPadTrackRecord.current = [];
            setUserScore(0);
        }

        let i = 0;
        let nextPadToPlay = null;
        const difficultyLevelTime = getDifficultyLevelTime();

        playComputerPadTrackRecord();
        nextPadToPlay = pickupNextPadToPlay();
        computerPadTrackRecord.current = [...computerPadTrackRecord.current, nextPadToPlay];
        const challengeLength = computerPadTrackRecord.current.length;

        function playComputerPadTrackRecord() {
            setTimeout(() => {
                handlePlayPad(computerPadTrackRecord.current[i]);
                setComputerPadPressed(computerPadTrackRecord.current[i])
                i++;

                if (i < challengeLength)
                    playComputerPadTrackRecord();
                else
                    setIsComputerPlaying(false);

                setTimeout(() => {
                    setComputerPadPressed(null)
                }, (difficultyLevelTime / 2));
            }, difficultyLevelTime);

        }
    };

    const handlePlayPad = async (padType, isUserPlaying) => {
        if (padType == EPadColor.GREEN) playSound(song.green, this);
        if (padType == EPadColor.RED) playSound(song.red, this);
        if (padType == EPadColor.YELLOW) playSound(song.yellow, this);
        if (padType == EPadColor.BLUE) playSound(song.blue, this);

        if (isUserPlaying) {
            userPadTrackRecord.current = [...userPadTrackRecord.current, padType];

            if (userPadTrackRecord.current.length >= computerPadTrackRecord.current.length) {
                if (isCorrectAnwser()) {
                    setUserScore(prev => prev + 1);
                    userPadTrackRecord.current = [];
                    setTimeout(() => computerPlayPad(), 1000);
                    await updateUserMaxScore(userScore + 1);
                }
                else {
                    setIsLostGame(true);
                    Alert.alert('Errou', `Ops, infelizmente você errou no ponto ${formatScore(userScore)}.
                                \nTente novamente clicando no botão Restart.`);
                    await updateUserMaxScore(userScore);

                    userPadTrackRecord.current = [];
                    computerPadTrackRecord.current = [];
                }
            }
        }
    };

    const formatScore = useCallback((score) => {
        if (score == 0) return score;
        if (String(score).length == 1) return `0${score}`;
        else return score;
    }, []);

    return (
        <View style={styles.container} >

            <View style={styles.topContainer}>
                <View style={styles.recordTextContainer}>
                    <Text style={styles.recordLabelText} >Your record is:</Text>
                    <Text style={styles.recordValueText}>{formatScore(userMaxScore)}</Text>
                </View>
                <Text style={styles.recordLabelText}>Let's increase it!</Text>
            </View>

            <View style={styles.gameWrapper}>
                <View style={styles.topWrapper}>
                    <TouchableOpacity
                        style={[styles.greenPad,
                        {
                            backgroundColor: computerPadPressed == EPadColor.GREEN
                                ? tint(0.3, colors.green)
                                : colors.green
                        }]}
                        activeOpacity={1}
                        onPress={() => handlePlayPad(EPadColor.GREEN, true)}
                        disabled={computerPlaying}
                    />
                    <TouchableOpacity
                        style={[styles.redPad,
                        {
                            backgroundColor: computerPadPressed == EPadColor.RED
                                ? tint(0.3, colors.red)
                                : colors.red
                        }]}
                        activeOpacity={1}
                        onPress={() => handlePlayPad(EPadColor.RED, true)}
                        disabled={computerPlaying}
                    />
                </View>

                <View style={styles.bottomWrapper}>
                    <TouchableOpacity
                        style={[styles.yellowPad,
                        {
                            backgroundColor: computerPadPressed == EPadColor.YELLOW
                                ? tint(0.3, colors.yellow)
                                : colors.yellow
                        }]}
                        activeOpacity={1}
                        onPress={() => handlePlayPad(EPadColor.YELLOW, true)}
                        disabled={computerPlaying}
                    />
                    <TouchableOpacity
                        style={[styles.bluePad,
                        {
                            backgroundColor: computerPadPressed == EPadColor.BLUE
                                ? tint(0.3, colors.blue)
                                : colors.blue
                        }]}
                        activeOpacity={1}
                        onPress={() => handlePlayPad(EPadColor.BLUE, true)}
                        disabled={computerPlaying}
                    />
                </View>

                <View style={styles.centerWrapper}>
                    {userScore == 0 && !isLostGame
                        ? <ButtonIcon
                            iconName="play"
                            iconColor={colors.gray}
                            onPress={() => computerPlayPad(true)}
                        />
                        : <>
                            <View>
                                <Text style={styles.scoreLabelText}>SCORE</Text>
                            </View>
                            <View>
                                <Text style={styles.scoreValueText}>{formatScore(userScore)}</Text>
                            </View>
                        </>
                    }
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <ButtonIcon
                    iconName="speedometer"
                    onPress={() => toggleDifficultyModal()}
                    disabled={userScore > 0 && !isLostGame}
                />
                {isLostGame &&
                    <ButtonIcon
                        iconName="reload-circle"
                        onPress={() => {
                            setUserScore(0);
                            setIsLostGame(false);
                            computerPlayPad(true);
                        }}
                        disabled={computerPlaying}
                    />
                }
            </View>
        </View>
    );
};

export { Game };