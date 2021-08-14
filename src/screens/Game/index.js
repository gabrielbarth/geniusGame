import React, { useEffect, useRef, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { tint } from 'polished';

import { EPadColor } from '../../utils/enums/EPadColor';
import { playSound } from '../../utils/playSound';
import { song } from '../../utils/padSongs';

import { colors } from '../../styles/colors';
import { styles } from './styles';

const Game = () => {
    const computerPadTrackRecord = useRef([]);
    const userPadTrackRecord = useRef([]);
    const [computerPadPressed, setComputerPadPressed] = useState(null);
    const [maxScore, setMaxScore] = useState(0);

    useEffect(() => {
        return () => {
            computerPadTrackRecord.current = [];
            userPadTrackRecord.current = [];
        }
    }, []);

    const pickupNextPadToPlay = () => Math.floor(Math.random() * (4)) + 1;

    const isCorrectAnwser = () =>
        JSON.stringify(computerPadTrackRecord.current) === JSON.stringify(userPadTrackRecord.current);

    const updateUserRecord = (score) => {
        if (maxScore < score) setMaxScore(score)
    }

    const computerPlayPad = () => {
        const nextPadToPlay = pickupNextPadToPlay();
        computerPadTrackRecord.current = [...computerPadTrackRecord.current, nextPadToPlay];
        const challengeLength = computerPadTrackRecord.current.length;

        let i = 0;
        playComputerPadTrackRecord();

        function playComputerPadTrackRecord() {
            setTimeout(() => {
                handlePlayPad(computerPadTrackRecord.current[i]);
                setComputerPadPressed(computerPadTrackRecord.current[i])
                i++;

                if (i < challengeLength)
                    playComputerPadTrackRecord();

                setTimeout(() => {
                    setComputerPadPressed(null)
                }, 500);
            }, 1000);
        }

    }

    const handlePlayPad = (padType, isUserPlaying) => {
        if (padType == EPadColor.GREEN) playSound(song.green, this);
        if (padType == EPadColor.RED) playSound(song.red, this);
        if (padType == EPadColor.YELLOW) playSound(song.yellow, this);
        if (padType == EPadColor.BLUE) playSound(song.blue, this);

        if (isUserPlaying) {
            userPadTrackRecord.current = [...userPadTrackRecord.current, padType];

            if (userPadTrackRecord.current.length >= computerPadTrackRecord.current.length) {
                if (isCorrectAnwser()) {
                    userPadTrackRecord.current = [];
                   setTimeout(() => computerPlayPad(), 1000);
                }
                else {
                    alert('nao foi dessa vez');
                    updateUserRecord(userPadTrackRecord.current.length);
                    userPadTrackRecord.current = [];
                    computerPadTrackRecord.current = [];
                }
            }
        }
    }

    return (
        <View style={styles.container} >
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
                    />
                </View>

                <View style={styles.centerWrapper}>

                </View>

            </View>
            <TouchableOpacity onPress={() => computerPlayPad()}>
                <Text>Play</Text>

                <Text>Score</Text>
                <Text>{maxScore}</Text>
            </TouchableOpacity>
        </View>
    );
};

export { Game };