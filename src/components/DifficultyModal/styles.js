import { StyleSheet } from 'react-native';
import { lighten } from 'polished';

import { colors } from "../../styles/colors";
import { getResponsiveHeight } from '../../utils/getResponsiveHeight';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    modalView: {
        backgroundColor: colors.background,
        borderRadius: 20,
        padding: getResponsiveHeight(5),
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 20
    },
    button: {
        marginVertical: getResponsiveHeight(0.5),
        borderRadius: 20,
        padding: getResponsiveHeight(1),
        paddingHorizontal: getResponsiveHeight(2),
        elevation: 2
    },
    buttonEasy: {
        backgroundColor: lighten(0.4, colors.green),
    },
    buttonMedium: {
        backgroundColor: lighten(0.4, colors.blue),
    },
    buttonHard: {
        backgroundColor: lighten(0.4, colors.red)
    },
    textStyle: {
        fontSize: getResponsiveHeight(2.5),
        color: colors.black,
        textAlign: "center"
    },
    modalText: {
        fontSize: getResponsiveHeight(3),
        color: colors.black,
        marginBottom: getResponsiveHeight(3),
        textAlign: "center"
    }
});

export { styles };