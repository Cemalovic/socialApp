import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import style from './UserStory.style';
import {horizontalScale} from '../../assets/styles/scaling';

const UserStory = ({firstName, profileImage}) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage
        profileImage={profileImage}
        imageDimensions={horizontalScale(65)}
      />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStory;
