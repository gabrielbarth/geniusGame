import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useRef,
    useCallback
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DifficultyModal from '../components/DifficultyModal';

import { EDifficultyLevel } from '../utils/enums/EDifficultyLevel';

const GameContext = createContext({});

const GameProvider = ({ children }) => {
    const [difficultyLevel, setDifficultyLevel] = useState(EDifficultyLevel.EASY);
    const [userMaxScore, setUserMaxScore] = useState(0);

    const getUserData = async () => {
        try {
            const maxScore = await AsyncStorage.getItem('@userMaxScore')
            if (maxScore !== null) {
                let score = JSON.parse(maxScore);
                setUserMaxScore(parseInt(score))
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    const changeDifficultyLevel = (level) => {
        if (level == EDifficultyLevel.MEDIUM) setDifficultyLevel(EDifficultyLevel.MEDIUM);
        if (level == EDifficultyLevel.HARD) setDifficultyLevel(EDifficultyLevel.HARD);
        else
            setDifficultyLevel(EDifficultyLevel.EASY);
    };

    const updateUserMaxScore = async (score) => {
        if (userMaxScore >= score) return;

        setUserMaxScore(score);

        try {
            const jsonValue = JSON.stringify(score);
            await AsyncStorage.setItem('@userMaxScore', jsonValue);
        } catch (error) {
            console.log(error);
        }

    };

    const modalRef = useRef(null);
    const toggleDifficultyModal = () => modalRef.current && modalRef.current.toggleModal();

    return (
        <GameContext.Provider
            value={{
                difficultyLevel,
                changeDifficultyLevel,
                userMaxScore,
                updateUserMaxScore,
                toggleDifficultyModal
            }}
        >
            <DifficultyModal ref={modalRef} />
            {children}
        </GameContext.Provider>
    );
}

const useGameContext = () => useContext(GameContext);

export { GameProvider, useGameContext };