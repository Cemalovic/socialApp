import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {Routes} from './Routes';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

// NE RADI DRAWER!!!
// const Drawer = createDrawerNavigator();

// const MainMenuNavigation = () => {
//   <Drawer.Navigator screenOptions={{header: () => null, headerShown: false}}>
//     <Drawer.Screen name={Routes.Home} component={Home} />
//     <Drawer.Screen name={Routes.Profile} component={Profile} />
//   </Drawer.Navigator>;
// };

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'Tab 1'}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title="Photos" isFocused={focused} />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Tab 2'}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title="Videos" isFocused={focused} />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Tab 3'}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title="Saved" isFocused={focused} />
          ),
        }}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      {/* <Stack.Screen name={'Drawer'} component={MainMenuNavigation} /> */}
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
