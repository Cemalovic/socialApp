import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: verticalScale(35),
    borderBottomWidth: 1,
    borderBottomColor: '#eff2f6',
    paddingBottom: verticalScale(20),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter_18pt', '600'),
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#79869f',
    fontFamily: getFontFamily('Inter_18pt', '400'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  userPostStats: {
    marginLeft: horizontalScale(10),
    flexDirection: 'row',
  },
  userPostStatButton: {
    flexDirection: 'row',
  },
  userPostStatButtonRight: {
    flexDirection: 'row',
    marginLeft: horizontalScale(27),
  },
  userPostStatText: {
    marginLeft: horizontalScale(3),
    color: '#79869f',
  },
});

export default style;
