
import { EPadColor } from './enums/EPadColor';

const song = {
    green: {
        padColorType: EPadColor.GREEN,
        title: 'violin song',
        isRequire: true,
        url: require('../assets/song-violin.mp3'),
    },
    red: {
        padColorType: EPadColor.RED,
        title: 'guitar',
        isRequire: true,
        url: require('../assets/song-guitar.mp3'),
    },
    blue: {
        padColorType: EPadColor.BLUE,
        title: 'tambourine song',
        isRequire: true,
        url: require('../assets/song-tambourine.mp3'),
    },
    yellow: {
        padColorType: EPadColor.YELLOW,
        title: 'drum song',
        isRequire: true,
        url: require('../assets/song-drum.mp3'),
    }
}

export { song };