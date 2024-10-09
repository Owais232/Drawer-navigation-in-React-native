// Intro1.js
import { Button, Text, View } from "react-native";

const Intro1 = ({ navigation }) => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Intro 1</Text>
            <Button 
                title="Next Screen" 
                onPress={()=>navigation.navigate("Intro2")} 
            />
        </View>
    );
};

export default Intro1;
