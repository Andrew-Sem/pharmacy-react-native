import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ChevronRightIcon} from "react-native-heroicons/mini";
import {i18n} from "../../assets/resourses/localization";


//@ts-ignore
const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Drugs")} style={styles.button}>
                <Text style={styles.text}>
                    {i18n.t("Drugs")} <ChevronRightIcon size={20} color={"white"}/>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Producers")} style={styles.button}>
                <Text style={styles.text}>
                    {i18n.t("Producers")} <ChevronRightIcon size={20} color={"white"}/>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Dosage")} style={styles.button}>
                <Text style={styles.text}>
                    {i18n.t("Dosage")} <ChevronRightIcon size={20} color={"white"}/>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
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