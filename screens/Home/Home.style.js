import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(30),
    marginRight: horizontalScale(17),
    marginLeft: horizontalScale(27),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(14),
    borderRadius: horizontalScale(100),
    backgroundColor: '#f2f2f2',
  },
  messageNumberContainer: {
    backgroundColor: '#f35bac',
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(10),
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(10),
  },
  messageNumber: {
    color: '#fff',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter_18pt', '600'),
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(24),
  },
});

export default style;
