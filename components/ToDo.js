
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Keyboard,
    ToastAndroid,
    TouchableHighlight,
    Pressable,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// create D, read D,update D, delte D,search D

const ToDoList = () => {

    const [item, setItem] = useState("")
    const [list, setList] = useState([])
    const [original, setOriginal] = useState([])    
    const [edit, setEdit] = useState(-1)
    const [search, setSearch] = useState("")

    const addItem = () => {
        if (item !== "") {
            setList([...list, item])
            // pehlay i was doing setOriginal(list) which was wrong because list and original were pointing
            // to the same array sooo i was still loosing the original array when i thought i was saving it
            setOriginal([...list, item])
            // spread operator to keep the previous list as well, returns values not array
            // set list is an array
            setItem("")
            Keyboard.dismiss()
            ToastAndroid.show("Item added!", ToastAndroid.SHORT)
        }
        else {
            ToastAndroid.show("u forgot to write something :(", ToastAndroid.SHORT)
        }
    }

    const deleteItem = (currIndex) => {
        setList(() => list.filter((element, index) => index !== currIndex))
        setOriginal(() => list.filter((element, index) => index !== currIndex))
        ToastAndroid.show("Item deleted!", ToastAndroid.SHORT)
    }

    const updateItem = (currIndex) => {
        setItem(list.find((element, index) => index === currIndex))
        setEdit(currIndex)
    }
    // this will go on the button
    const updateList = () => {
        // edit ke andar value pari hai of the task we are editing, we need to
        // rewrite the list but when index equal to edit, we will write the setItem wali new value
        setList(() => list.map((element, index) => index !== edit ? element : item))
        setOriginal(() => list.map((element, index) => index !== edit ? element : item))
        // (?the ones i want to keep as is:the one i want to be updated)
        setEdit(-1)
        setItem("")
        Keyboard.dismiss()
        ToastAndroid.show("Item Updated!", ToastAndroid.SHORT)
    }

    const searchItem = (text) => {

        if (text === "") {
            setList(original)
        }
        else {
            setList(()=>original.filter((element) => element.toLowerCase().includes(text.toLowerCase())))
        } 
        setSearch(text)
    }

    return (
        <View style={styles.mainView}>
            <StatusBar backgroundColor={"pink"}></StatusBar>

            <View style={styles.headerView}>
                <Text style={styles.mainText}>To Do List</Text>
                <TextInput style={styles.search} label="Search" backgroundColor="white" onChangeText={(text) => {searchItem(text)}} value={search} onBlur={() => {setSearch(""); setList(original);}}></TextInput>
            </View>

          
            <View style={styles.midView}>
                <TextInput mode="outlined" label="Enter an item" style={styles.input} onChangeText={setItem} value={item} right={edit === -1 ? <TextInput.Icon icon="plus-box" color={"grey"} /> : <TextInput.Icon icon="clipboard-edit" color={"grey"} />}></TextInput>
                
                <Pressable style={styles.touch} onPress={edit === -1 ? addItem : updateList}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>{edit === -1 ? "Add" : "Update"}</Text>
                </Pressable>
                
            </View>

            <ScrollView style={{ marginTop: 10 }}>
                {list.map((element, index) =>
                    <View style={styles.listItem}>
                        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }} onPress={() => updateItem(index)}>
                            <Text style={styles.element}><Text style={styles.index}>{" "}{index + 1}{" "}</Text>{"  "}{element}</Text>
                            <TouchableOpacity onPress={() => deleteItem(index)}>
                                <MaterialCommunityIcons name="delete" size={20} color="grey"></MaterialCommunityIcons>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

export default ToDoList

const styles = StyleSheet.create({
    mainView: { backgroundColor: "white", flex: 1 },
    headerView: {
        backgroundColor: "pink",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    mainText: {
        fontWeight: "bold",
        color: "white",
        backgroundColor: "pink",
        fontSize: 26,
        padding: 5,
        margin: 5,
    },
    search: {
        width: "50%",
        margin: 10,
    },
    midView: {
        marginTop: 10,
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    input: {
        width: "75%",
        margin: 17,
    },
    touch: {
        borderRadius: 20,
        padding: 12,
        backgroundColor: "pink",
    },
    listItem: {
        borderWidth: 2,
        borderColor: "pink",
        marginLeft: 17,
        marginRight: 17,
        margin: 5,
        padding: 10,
        borderRadius: 12,
    },
    element: {
        color: "black",
        fontSize: 14,
    },
    index: {
        color: "white",
        fontWeight: "bold",
        backgroundColor: "grey",
        padding: 5
    }
})