import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Btn from "../components/Btn";
import { useAppDispatch } from "../hooks/redux";
import { addProducer, fetchProducers } from "../store/actions/producersAction";

//@ts-ignore
const AddProducer = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [producerName, setProducerName] = useState("");
  const [country, setCountry] = useState("");

  const addProducerHandler = async (producerName: string, country: string) => {
    await dispatch(addProducer({ producerName, country }));
    await dispatch(fetchProducers());
    navigation.navigate("Producers");
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.label}>Enter producer name</Text>
      <TextInput
        value={producerName}
        onChangeText={setProducerName}
        style={styles.input}
      />
      <Text style={styles.label}>Enter country</Text>
      <TextInput
        value={country}
        onChangeText={setCountry}
        style={styles.input}
      />
      <Btn
        title="Add producer"
        onPress={() => {
          addProducerHandler(producerName, country);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#b594ff",
  },
  input: {
    fontSize: 16,
    borderBottomColor: "#434343",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default AddProducer;
