import 'react-native-gesture-handler'; // This should be at the top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import Intro1 from './Screens/Intro1';
import Intro2 from './Screens/Intro2';
import Home from './Screens/Home';
import Drawer1 from './Screens/Drawer1';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const IntroStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Intro1" component={Intro1} options={{ headerShown: false }} />
            <Stack.Screen name="Intro2" component={Intro2} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={AppDrawer} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Drawer1" component={Drawer1} />
        </Drawer.Navigator>
    );
};

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <IntroStack />
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};

export default App;
