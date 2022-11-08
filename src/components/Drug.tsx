import React, {FC} from 'react';
import {IDrug} from "../models/IDrug";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {PencilIcon, PencilSquareIcon, XMarkIcon} from "react-native-heroicons/mini";
import {useAppDispatch} from "../hooks/redux";
import {deleteDrugById} from "../store/reducers/drugsSlice";

interface DrugProps{
    drug: IDrug,
}

const Drug:FC<DrugProps> = ({drug}) => {
    const dispatch = useAppDispatch()
    const deleteHandler = (id: string) => {
        dispatch(deleteDrugById(id))
    }
    return (
        <View style={styles.drug}>
            <Text style={styles.text}>
                {drug.drugName}
            </Text>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.action}>
                    <PencilIcon size={20} color={"#434343"} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} onPress={() => deleteHandler(drug.id)}>
                    <XMarkIcon size={20} color={"red"}  style={styles.icon}/>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    drug:{
        backgroundColor: "",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "gray"
    },
    actions:{
        flexDirection: "row",
    },
    icon:{
        marginLeft: 10
    },
    action:{
        flexDirection:"row"
    },

    text:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#434343"
    }
})

export default Drug;