import {StyleSheet, View, Text} from "react-native";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchDrugs} from "../store/reducers/drugsSlice";
// import {fetchDrugs} from "../store/actions/drugsAction";

const Home = () => {
    const dispatch = useAppDispatch()
    const {loading, drugs} = useAppSelector(state => state.drug)
    useEffect(() => {
        dispatch(fetchDrugs())
    }, [])

    return (
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
