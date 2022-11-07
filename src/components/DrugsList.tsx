import React, {FC} from 'react';
import {IDrug} from "../models/IDrug";
import Drug from "./Drug";
import {StyleSheet, View} from "react-native";

interface DrugsListProps{
    drugs: IDrug[]
}

const DrugsList:FC<DrugsListProps> = ({drugs}) => {
    return (
        <View>
            {drugs.map((drug) => (
                <Drug drug={drug} key={drug.id}/>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
})

export default DrugsList;