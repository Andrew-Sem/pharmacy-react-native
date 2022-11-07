import {StyleSheet, View, Text} from "react-native";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchDrugs} from "../store/actions/drugsAction";
import DrugsList from "../components/DrugsList";

const Drugs = () => {
    const dispatch = useAppDispatch()
    const {loading, drugs} = useAppSelector(state => state.drug)
    useEffect(() => {
        dispatch(fetchDrugs())
    }, [])

    useEffect(() => {
        console.log("loading status: " + loading);
    }, [loading])

    if(loading === "failed"){
        return (
            <View style={styles.error}>
                <Text style={styles.errorText}>Loading failed. Have a nice day</Text>
            </View>
        )
    }

    return (
        loading === "pending" ?
            <View><Text>Loading..</Text></View>
            :
            <View style={styles.app}>
                <DrugsList drugs={drugs}/>
            </View>
    );
};

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 15
    },
    error:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    errorText:{
        fontSize: 24
    }
});

export default Drugs;
