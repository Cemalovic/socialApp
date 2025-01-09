import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Title from '../../components/Title/Title';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPosts/UserPost';
import {scaleFontSize} from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';
import style from './Home.style';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const userStories = [
    {
      firstName: 'Joseph',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 1,
    }, // index 0
    {
      firstName: 'Angel',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'White',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Olivier',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Milos',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 5,
    }, // index 4
    {
      firstName: 'Nicolas',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 6,
    },
    {
      firstName: 'Alexandros',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 7,
    },
    {
      firstName: 'Nata',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 8,
    },
    {
      firstName: 'Adam',
      profileImage: require('../../assets/images/default_profile.png'),
      id: 9,
    }, // index 8
  ];

  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jeniffer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 100,
      comments: 8,
      bookmarks: 3,
      id: 3,
    },
    {
      firstName: 'Milos',
      lastName: 'Cemalovic',
      location: 'Belgrade, Serbia',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 1100,
      comments: 22,
      bookmarks: 11,
      id: 4,
    },
    {
      firstName: 'Noa',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 220,
      comments: 29,
      bookmarks: 331,
      id: 5,
    },
  ];

  const userStoriesPageSize = 4;

  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;

  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  // const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  // const [isOn, setIsOn] = useState(false);

  // console.log(Platform);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);

    // Dimensions.addEventListener('change', result => {
    //   setScreenData(result.screen);
    // });
  }, []);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      {/* <View
          style={{
            backgroundColor: 'red',
            width: screenData.width / 2,
            height: screenData.height / 2,
          }}>
          <Text style={{fontSize: screenData.height / 20}}>
            This box will have half of the screens width and height
          </Text>
        </View> */}

      {/* <StatusBar backgroundColor={'red'} barStyle={'light-content'} /> */}

      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title={`Let's Explore`} />

                <TouchableOpacity
                  style={style.messageIcon}
                  onPress={() => {
                    navigation.navigate(Routes.Profile);
                  }}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color="#898dae"
                    size={scaleFontSize(20)}
                  />

                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <Switch
                    value={isOn}
                    onValueChange={value => setIsOn(value)}
                    style={
                      Platform.OS === 'android' && {transform: [{scale: 1.2}]}
                    }
                    trackColor={
                      Platform.OS === 'android' && {false: 'grey', true: 'green'}
                    }
                    ios_backgroundColor={'#000'} // samo za IOS/Mac
                  />
                </View> */}

              <View style={style.userStoryContainer}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) return;

                    setIsLoadingUserStories(true);

                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );

                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }

                    setIsLoadingUserStories(false);
                  }}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) return;

            setIsLoadingUserPosts(true);

            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );

            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }

            setIsLoadingUserPosts(false);
          }}
          data={userPostsRenderedData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={style.userPostContainer}>
              <UserPost
                key={'userPost' + item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                image={item.image}
                profileImage={item.profileImage}
                likes={item.likes}
                location={item.location}
                comments={item.comments}
                bookmarks={item.bookmarks}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
