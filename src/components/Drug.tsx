import React, {FC} from 'react';
import {IDrug} from "../models/IDrug";
import {View, Text, StyleSheet} from "react-native";
import {XMarkIcon} from "react-native-heroicons/mini";

interface DrugProps{
    drug: IDrug
}

const Drug:FC<DrugProps> = ({drug}) => {
    return (
        <View style={styles.drug}>
            <Text style={styles.text}>
                {drug.drugName}
                <XMarkIcon size={20} color={"red"}/>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    drug:{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000",
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    text:{
        fontSize: 26
    }
})

export default Drug;