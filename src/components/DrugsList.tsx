import React, {FC} from 'react';
import {IDrug} from "../models/IDrug";
import Drug from "./Drug";
import {StyleSheet, View} from "react-native";

interface DrugsListProps{
    drugs: IDrug[]
}

const DrugsList:FC<DrugsListProps> = ({drugs}) => {
    return (
        <View style={styles.list}>
            {drugs.map((drug) => (
                <Drug drug={drug} key={drug.id}/>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    list:{
        marginTop: 15
    }
})

export default DrugsList;