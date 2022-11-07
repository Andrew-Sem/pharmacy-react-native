import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ChevronRightIcon} from "react-native-heroicons/mini";


//@ts-ignore
const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("table1")} style={styles.button}>
                <Text style={styles.text}>
                    Drugs <ChevronRightIcon size={20} color={"white"}/>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("table2")} style={styles.button}>
                <Text style={styles.text}>
                    Producers <ChevronRightIcon size={20} color={"white"}/>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("table3")} style={styles.button}>
                <Text style={styles.text}>
                    Dosage <ChevronRightIcon size={20} color={"white"}/>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#b594ff",
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
    }
})

export default Home;