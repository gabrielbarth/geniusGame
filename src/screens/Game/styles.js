import { StyleSheet } from 'react-native';
import { darken } from 'polished';

import { getResponsiveHeight } from '../../utils/getResponsiveHeight';

import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    gameWrapper: {
        width: getResponsiveHeight(60),
        height: getResponsiveHeight(60),
        borderRadius: getResponsiveHeight(30),
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
    },
    bottomWrapper: {
        flexDirection: 'row'       
    },
    centerWrapper: {
        position: 'absolute',
        width: getResponsiveHeight(20),
        height: getResponsiveHeight(20),
        borderRadius: getResponsiveHeight(20),
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
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
        opacity: 0.7,
        elevation: 10
    },
    redPad: {
        width: getResponsiveHeight(28),
        height: getResponsiveHeight(28),
        borderTopRightRadius: getResponsiveHeight(28),
        backgroundColor: colors.red,
        borderWidth: 2,
        borderColor: colors.black,
        opacity: 0.7,
        elevation: 10
    },
    bluePad: {
        width: getResponsiveHeight(28),
        height: getResponsiveHeight(28),
        borderBottomRightRadius: getResponsiveHeight(28),
        backgroundColor: colors.blue,
        borderWidth: 2,
        borderColor: colors.black,
        opacity: 0.7,
        elevation: 10
    },
    yellowPad: {
        width: getResponsiveHeight(28),
        height: getResponsiveHeight(28),
        borderBottomLeftRadius: getResponsiveHeight(28),
        backgroundColor: colors.yellow,
        borderWidth: 2,
        borderColor: colors.black,
        opacity: 0.7,
        elevation: 10
    },
    scoreLabelText: {
        fontSize: getResponsiveHeight(3),
        color: colors.gray,
    },
    scoreValueText: {
        fontSize: getResponsiveHeight(3.5),
        color: darken(0.2, colors.background),
    },
    topContainer: {
        width: '100%',
        paddingVertical: getResponsiveHeight(3.5),
    },
    recordTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    recordLabelText: {
        fontSize: getResponsiveHeight(3),
        color: colors.black,
        textAlign: 'center'
    },
    recordValueText: {
        fontSize: getResponsiveHeight(3),
        color: colors.blue,
        marginLeft: getResponsiveHeight(1),
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row' ,
        width: '100%',
        justifyContent: 'space-around',
        marginTop: getResponsiveHeight(3),
    }
});

export { styles };