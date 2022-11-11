import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Btn from "../components/Btn";
import { useAppDispatch } from "../hooks/redux";
import { addDosage, fetchDosages } from "../store/actions/dosagesAction";

//@ts-ignore
const AddDosage = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [dosageFormName, setDosageFormName] = useState("");

  const addDosageHandler = async (dosageFormName: string) => {
    await dispatch(addDosage({ dosageFormName }));
    await dispatch(fetchDosages());
    navigation.navigate("Dosage");
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.label}>Enter dosage form name</Text>
      <TextInput
        value={dosageFormName}
        onChangeText={setDosageFormName}
        style={styles.input}
      />
      <Btn
        title="Add dosage"
        onPress={() => {
          addDosageHandler(dosageFormName);
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

export default AddDosage;
