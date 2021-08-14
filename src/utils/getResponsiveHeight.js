import { Dimensions, PixelRatio } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;

// Get responsive height based on screen device size
const getResponsiveHeight = (heightPercentage, height = SCREEN_HEIGHT) => {
    const elemHeight = typeof heightPercentage === "number"
        ? heightPercentage
        : parseFloat(heightPercentage);
        
    return PixelRatio.roundToNearestPixel(height * elemHeight / 100);
};

export { getResponsiveHeight };