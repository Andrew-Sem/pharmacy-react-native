import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { i18n } from "../../assets/resourses/localization";
import Btn from "../components/Btn";

const AddDrug = () => {
  const [drugName, setDrugName] = useState("");
  const [producer, setProducer] = useState("");
  const [dosage, setDosage] = useState("");
  const [price, setPrice] = useState(0);
  const [composition, setComposition] = useState("");

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
        <Text style={styles.labelText}>{i18n.t("Price")}</Text>
        <TextInput
          value={price.toString()}
          onChangeText={(text: string) => setPrice(parseInt(text))}
          style={styles.input}
        />
        <Text style={styles.labelText}>{i18n.t("Composition")}</Text>
        <TextInput
          value={composition}
          onChangeText={setComposition}
          style={styles.input}
        />
      </View>
      <Btn title="Add drug" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 20,
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
