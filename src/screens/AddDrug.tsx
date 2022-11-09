import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { i18n } from "../../assets/resourses/localization";

const AddDrug = () => {
  const [drugName, setDrugName] = useState("");
  const [producer, setProducer] = useState("");
  const [dosage, setDosage] = useState("");

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.labelText}>{i18n.t("DrugName")}</Text>
        <TextInput
          value={drugName}
          onChangeText={setDrugName}
          style={styles.input}
        />
        <Text style={styles.labelText}>{i18n.t("Producer")}</Text>
        <TextInput
          value={producer}
          onChangeText={setProducer}
          style={styles.input}
        />
        <Text style={styles.labelText}>{i18n.t("Dosage")}</Text>
        <TextInput
          value={dosage}
          onChangeText={setDosage}
          style={styles.input}
        />
      </View>
      <Button title="add drug" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  input: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 20,
    fontSize: 20,
  },
  labelText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#b594ff",
  },
});

export default AddDrug;
