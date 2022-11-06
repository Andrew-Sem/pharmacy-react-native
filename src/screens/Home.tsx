import {StyleSheet, View, Text} from "react-native";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchDrugs} from "../store/actions/drugsAction";

const Home = () => {
    const dispatch = useAppDispatch()
    const {loading, drugs} = useAppSelector(state => state.drug)
    useEffect(() => {
        dispatch(fetchDrugs())
    }, [])

    useEffect(() =>{
        console.log("loading status: " + loading);
    },[loading])

    return (
        loading === "pending" ?
            <View><Text>Loading..</Text></View>
            :
            <View>
                <Text>
                    {JSON.stringify(drugs)}
                </Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Home;
