import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Intro1 from "./Screens/Intro1";
import Intro2 from "./Screens/Intro2";
import Home from "./Screens/Home";
import Drawwer1 from "./Screens/Drawer1";
import Tab1 from "./Screens/Tab1";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



const Tab=createBottomTabNavigator();

const Stack=createStackNavigator();
const Drawer=createDrawerNavigator();

const Stackroute=()=>{
  return(
    <Stack.Navigator initialRouteName="Intro1">
      <Stack.Screen  name="Intro1" component={Intro1}/>
      <Stack.Screen name="Intro2" component={Intro2}/>
      <Stack.Screen name="MainHome" component={Tabnavigation} options={{headerShown:false}}/>

    </Stack.Navigator>
  )
}

const Drawernavigation=()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen  name="Home" component={Home} />
      <Drawer.Screen name="Drawer1" component={Drawwer1}/>
      
      
    </Drawer.Navigator>
  )
}

const Tabnavigation=()=>{
  return(
    <Tab.Navigator>
      <Tab.Screen name=" Tab Home"  component={Drawernavigation} options={{headerShown:false}}/>
      
      <Tab.Screen name="Tab1" component={Tab1}/>

    </Tab.Navigator>
  )
}

const App=()=>{
  return(
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
        <Stackroute/>
      </NavigationContainer>

    </GestureHandlerRootView>
  );
}

export default App;