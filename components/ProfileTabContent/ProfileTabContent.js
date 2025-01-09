import {Image, ScrollView, View} from 'react-native';
import style from './ProfileTabContent.style';

const ProfileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContentContainer}>
      <View style={style.profileTabContent}>
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
