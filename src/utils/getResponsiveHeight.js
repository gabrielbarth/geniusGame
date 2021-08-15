import { Dimensions, PixelRatio, Platform } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;

// Get responsive height based on screen device size
const getResponsiveHeight = (heightPercentage, height = SCREEN_HEIGHT) => {
    const elemHeight = typeof heightPercentage === "number"
        ? heightPercentage
        : parseFloat(heightPercentage);
    
    const divider = 100 + (PixelRatio.get() * 10);
        
    return PixelRatio.roundToNearestPixel(height * elemHeight / divider);
};

export { getResponsiveHeight };