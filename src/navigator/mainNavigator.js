import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile148754Navigator from '../features/UserProfile148754/navigator';
import Maps148714Navigator from '../features/Maps148714/navigator';
import Add-Item148713Navigator from '../features/Add-Item148713/navigator';
import Maps148709Navigator from '../features/Maps148709/navigator';
import UserProfile148705Navigator from '../features/UserProfile148705/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile148754: { screen: UserProfile148754Navigator },
Maps148714: { screen: Maps148714Navigator },
Add-Item148713: { screen: Add-Item148713Navigator },
Maps148709: { screen: Maps148709Navigator },
UserProfile148705: { screen: UserProfile148705Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
