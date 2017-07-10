import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
  window: {
    width: width < height ? width : height,
    height: width < height ? height : width,
  },
};
