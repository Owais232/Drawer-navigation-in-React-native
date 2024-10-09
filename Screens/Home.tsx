import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home Screen</Text>
      <Button title="Open Drawer" onPress={()=>navigation.openDrawer()} />
    </View>
  );
};

export default Home;