import {Button, Image, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import {useState} from "react";

export default function App2() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');

    const handleInputChange = (value) => {
        setNumber(value);
    }

    const handleCalculate = () => {
        if (number !== '') {
            const parsedNumber = parseFloat(number);
            const squaredNumber = parsedNumber * parsedNumber;
            setResult(`El cuadrado de ${parsedNumber} es ${squaredNumber}`);
        }
    }

    return (<SafeAreaView style={styles.container}>
            <TextInput style={styles.input} placeholder="Ingrese un numero" keyboardType="numeric" value={number}
                       onChangeText={handleInputChange}/>
            <Button title="Calcular Cuadrado" onPress={handleCalculate}/>
            {result !== '' && <Text style={styles.resultText}>{result}</Text>}
            <Image source={require('./assets/imagen.jpg')} style={styles.image}/>
        </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#ccc', alignItems: 'center', justifyContent: 'center', padding: 16
    }, input: {}, resultText: {}, image: {
        width: '100%', height: 200, resizeMode: 'contain'
    }
});
