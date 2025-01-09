import PropTypes from 'prop-types';
import {Text} from 'react-native';
import style from './ProfileTabTitle.style';

const ProfileTabTitle = ({title, isFocused}) => {
  return (
    <Text style={[style.title, !isFocused && style.titleNotFocused]}>
      {title}
    </Text>
  );
};

ProfileTabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default ProfileTabTitle;
