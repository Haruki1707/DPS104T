import Home from "./Home";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Detalle from "./Detalle";
import React from "react";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detalle" component={Detalle}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;