import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';

import { EDifficultyLevel } from '../../utils/enums/EDifficultyLevel';

import { useGameContext } from '../../context';

import { styles } from './styles';

const DifficultyModal = (_, ref) => {
    const { changeDifficultyLevel } = useGameContext();
    const [modalVisible, setModalVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        toggleModal() {
            setModalVisible(!modalVisible);
        }
    }));

    const updateDifficulty = (level) => {
        changeDifficultyLevel(level);
        setModalVisible(false);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
            ref={ref}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Choose a difficulty level!</Text>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonEasy]}
                        onPress={() => updateDifficulty(EDifficultyLevel.EASY)}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.textStyle}>EASY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonMedium]}
                        onPress={() => updateDifficulty(EDifficultyLevel.MEDIUM)}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.textStyle}>MEDIUM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonHard]}
                        onPress={() => updateDifficulty(EDifficultyLevel.HARD)}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.textStyle}>HARD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};



export default forwardRef(DifficultyModal);