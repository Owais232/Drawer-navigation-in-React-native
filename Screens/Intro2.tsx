// Intro2.js
import { Button, Text, View } from "react-native";

const Intro2 = ({ navigation }) => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Intro 2</Text>
            <Button 
                title="Go to Home" 
                onPress={()=>navigation.navigate("MainHome")} // Navigate to Home here
            />
        </View>
    );
};

export default Intro2;
