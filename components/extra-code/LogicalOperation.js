import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    Alert,
    
    Pressable
} from 'react-native';
import { Switch } from 'react-native-paper';

const LogicalOperations = () => {
    const [nand, setNand] = useState(1);
    const [nor, setNor] = useState(1);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [nandToggle, setNandToggle] = useState(false);
    const [norToggle, setNorToggle] = useState(false);

    const calculateNand = () => {
        if (x == 1 && y == 1)
            setNand(0);
        else
            setNand(1);
    }

    const calculateNor = () => {
        if (x == 0 && y == 0)
            setNor(1);
        else
            setNor(0);
    }

    return (
        <View style={styles.mainView}>
            
            <View style={{alignContent:'center'}}>
                <Text style={styles.title}>
                        Logical Operations
                </Text>
            </View>
            
            <View style={styles.gateView}>
                <Text style={styles.gateName}>
                    NAND Gate
                </Text>
                <Switch
                    trackColor={{ false: 'grey', true: '#7F7CAF' }}
                    thumbColor={norToggle ? 'white' : 'white'}
                    onValueChange={() => setNandToggle(previousState => !previousState)}
                    value={nandToggle}
                />
                <TextInput
                    style={styles.answer}
                    editable={false}
                    value={nandToggle ? nand.toString() : "OFF"}
                ></TextInput>
            </View>

            <View style={styles.gateView}>
                <Text style={styles.gateName}>
                    NOR Gate
                </Text>
                <Switch
                    trackColor={{ false: 'grey', true: '#7F7CAF' }}
                    thumbColor={norToggle ? 'white' : 'white'}
                    onValueChange={() => setNorToggle(previousState => !previousState)}
                    value={norToggle}
                />
                <TextInput
                    style={styles.answer}   
                    editable={false}
                    value={norToggle ? nor.toString() : "OFF"}
                ></TextInput>
            </View>

            <View style={styles.mainInputView}>

                <View style={styles.innerInputView}>
                    <Text style={styles.answer}>Input 1</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={setX} 
                        value={x}
                    ></TextInput>
                </View>

                <View style={styles.innerInputView}>
                    <Text style={styles.answer}>Input 2</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={setY} 
                        value={y}
                    ></TextInput>
                </View>

            </View>

            <Pressable 
                disabled={x<0||x>1||y<0||y>1}
                style={styles.pressable}
                onPress={()=>{calculateNand();calculateNor();}}
            >
                <Text style={styles.calculate}>
                    Calculate
                </Text>
            </Pressable>

        </View>
    )

}


const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'white',
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:20
    },
    gateView:{
        // width:'90%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    gateName:{
        color:'black',
        fontSize:12
    },
    answer:{
        color:'black',
        textAlign:'center',
    },
    mainInputView:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:"center",
    },
    innerInputView:{

        alignItems:'center',
    },
    input:{
        borderWidth:1.5,
        width:'90%',
        borderRadius:8,
        padding:5,
        margin:20,
        textAlign:'center',
        color:'black'
    },
    pressable:{
        width:'80%',
        backgroundColor:'#7F7CAF',
        alignItems:'center',
        borderRadius:8,
    },
    calculate:{
        fontWeight:'bold',
        color:'white',
        fontSize:17,
    },

});

export default LogicalOperations;
