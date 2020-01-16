import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../pages/main/index';
import Profile from '../pages/profile/index';

const screens = createStackNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
            },
        },

        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil do Github',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
            },
        },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7159AC',
            },
        },
    }
);

const Routes = createAppContainer(screens);

export default Routes;
