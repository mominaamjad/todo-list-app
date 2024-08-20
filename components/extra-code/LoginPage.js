import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    Alert,
} from 'react-native';

const App = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (<View style={styles.alignment}>
        <View style={styles.container}>
            <Image source={require('./assets/logo.png')} style={styles.logo} />
            <Text style={styles.login}>LOGIN</Text>
        </View>
        <Text>Username</Text>
        <TextInput style={styles.input} placeholder='Enter username' onChangeText={setUsername}></TextInput>
        <Text>Password</Text>
        <TextInput style={styles.input} placeholder='Enter password' onChangeText={setPassword} secureTextEntry></TextInput>
        <Button title='Submit' onPress={() => { }} disabled={username === '' || password === ''}></Button>
        <Text>No account?{' '}<Text style={styles.signup} onPress={() => alert('signup')}>Sign Up</Text>{' '}here</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50,
    },
    login: {
        // color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 20,
    },
    alignment: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        width: '75%', 
        borderWidth: 1,
        borderRadius: 15,
    },
    signup: {
        color: 'cyan',
        fontWeight: 'bold',

    }
});

export default App;
