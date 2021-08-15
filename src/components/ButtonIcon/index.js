import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { getResponsiveHeight } from '../../utils/getResponsiveHeight';

import { colors } from '../../styles/colors';
import { styles } from './styles';

const ButtonIcon = ({ 
    iconName = "emoji-happy", 
    onPress = () => { },
    iconColor = colors.black,
    ...props
}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={onPress}
            {...props}
        >
            <Icon
                name={iconName}
                size={getResponsiveHeight(11)}
                style={styles.icon}
                color={iconColor}
            />
        </TouchableOpacity>
    )
}

export { ButtonIcon };