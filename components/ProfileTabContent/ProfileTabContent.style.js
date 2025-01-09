import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileTabContentContainer: {
    backgroundColor: '#fff',
  },
  profileTabContent: {
    paddingHorizontal: horizontalScale(21),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: horizontalScale(150),
    height: verticalScale(90),
    marginTop: verticalScale(11),
  },
});

export default style;
