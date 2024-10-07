// Intro2.js
import { Button, Text, View } from "react-native";

const Intro2 = ({ navigation }) => {
    return (
        <View>
            <Text>Intro 2</Text>
            <Button 
                title="Go to Home" 
                onPress={() => navigation.navigate('MainApp')} // Navigate to Home here
            />
        </View>
    );
};

export default Intro2;
