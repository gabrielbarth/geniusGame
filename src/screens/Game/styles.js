import { StyleSheet } from 'react-native';

import { getResponsiveHeight } from '../../utils/getResponsiveHeight';

import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background
    },
    gameWrapper: {
        width: getResponsiveHeight(60),
        height: getResponsiveHeight(60),
        borderRadius: getResponsiveHeight(30),
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomWrapper: {
        flexDirection: 'row'       
    },
    centerWrapper: {
        position: 'absolute',
        width: getResponsiveHeight(20),
        height: getResponsiveHeight(20),
        borderRadius: getResponsiveHeight(20),
        backgroundColor: colors.black
    },
    topWrapper: {
        flexDirection: 'row'       
    },
    greenPad: {
        width: getResponsiveHeight(28),
        height: getResponsiveHeight(28),
        borderTopLeftRadius: getResponsiveHeight(28),
        backgroundColor: colors.green,
        borderWidth: 2,
        borderColor: colors.black,
        opacity: 0.7
    },
    redPad: {
        width: getResponsiveHeight(28),
        height: getResponsiveHeight(28),
        borderTopRightRadius: getResponsiveHeight(28),
        backgroundColor: colors.red,
        borderWidth: 2,
        borderColor: colors.black,
        opacity: 0.7
    },
    bluePad: {
        width: getResponsiveHeight(28),
        height: getResponsiveHeight(28),
        borderBottomRightRadius: getResponsiveHeight(28),
        backgroundColor: colors.blue,
        borderWidth: 2,
        borderColor: colors.black,
        opacity: 0.7
    },
    yellowPad: {
        width: getResponsiveHeight(28),
        height: getResponsiveHeight(28),
        borderBottomLeftRadius: getResponsiveHeight(28),
        backgroundColor: colors.yellow,
        borderWidth: 2,
        borderColor: colors.black,
        opacity: 0.7
    },
    
});

export { styles };