import { StyleSheet } from 'react-native';

import { getResponsiveHeight } from '../../utils/getResponsiveHeight';

const styles = StyleSheet.create({
    container: {
        borderRadius: getResponsiveHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 20        
    },
    icon: {
        marginLeft: getResponsiveHeight(0.5),
    }
});

export { styles };  