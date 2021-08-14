import Sound from 'react-native-sound';

function playSound(audioData, component) {
    const callback = (error, sound) => {
        if (error) {
            Alert.alert('error', error.message);
            return;
        }
        // Run optional pre-play callback
        audioData.onPrepared && audioData.onPrepared(sound, component);
        sound.play(() => {
            // Success counts as getting to the end
            // Release when it's done so we're not using up resources
            sound.release();
        });
    };

    // If the audio is a 'require' then the second parameter must be the callback.
    if (audioData.isRequire) {
        const sound = new Sound(audioData.url, error => callback(error, sound));
    } else {
        const sound = new Sound(audioData.url, audioData.basePath, error => callback(error, sound));
    }
}

export { playSound };