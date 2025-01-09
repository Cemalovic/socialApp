import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImage: {
    width: horizontalScale(110),
    height: horizontalScale(110),
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150ec',
    borderRadius: horizontalScale(110),
    padding: horizontalScale(4),
  },
  userName: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontFamily: getFontFamily('Inter_18pt', '600'),
    fontSize: scaleFontSize(20),
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(30),
    borderBottomWidth: 1,
    borderColor: '#e9eff1',
  },
  statAmount: {
    fontFamily: getFontFamily('Inter_18pt', '600'),
    fontSize: scaleFontSize(20),
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontFamily: getFontFamily('Inter_18pt', '400'),
    fontSize: scaleFontSize(16),
    color: '#79869f',
    textAlign: 'center',
  },
  statBorder: {
    borderRightWidth: 1,
    borderRightColor: '#e9eff1',
  },
});

export default style;
