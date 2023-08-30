import React from "react";
import {Image, Text, View} from 'react-native';

export default function Detalle({route, navigation}) {
    const {urlImagen} = route.params;
    console.log(urlImagen);
    return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={{uri: urlImagen}} style={{width: 400, height: 400}}/>
        <Text>ASD</Text>
    </View>);
}