import React from "react";
import {Button, FlatList, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Tts from 'react-native-tts';

export default function Home({navigation}) {
    const DATA = [{
        name: 'Barcelona',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png'
    }, {
        name: 'Real Madrid',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png'
    }, {
        name: 'Atletico del madrid',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png'
    }];

    const Item = ({title, img}) => (<View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Image source={{uri: img}} style={styles.img}/>
            <Button title="Visitar" onPress={() => navigation.navigate('Detalle', {urlImagen: img})}/>
        </View>);

    const renderItem = ({item}) => (<Item title={item.name} img={item.img}/>);

    return (<SafeAreaView style={styles.container}>
            <FlatList data={DATA} renderItem={renderItem}/>
        </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#ccc', alignItems: 'center', justifyContent: 'center', padding: 16
    }, item: {
        backgroundColor: '#f9c2ff', padding: 20, marginVertical: 8, marginHorizontal: 16,
    }, title: {
        fontSize: 32,
    }, img: {
        width: 200, height: 125, borderWidth: 2, borderColor: '#d35647', resizeMode: 'contain', margin: 8
    }
});
