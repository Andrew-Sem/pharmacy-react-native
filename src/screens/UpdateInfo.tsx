import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { i18n } from "../../assets/resourses/localization";
import { IDrug } from "../models/IDrug";

//@ts-ignore
const UpdateInfo = ({ route }) => {
  const drug: IDrug = route.params.drug;
  const [drugName, setDrugName] = useState(drug.drugName);
  const [producer, setProducer] = useState(drug.producerName);
  const [dosage, setDosage] = useState(drug.dosageFormName);
  const [price, setPrice] = useState(drug.price);
  const [composition, setComposition] = useState(drug.composition);
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
      <Button title={i18n.t("UpdateInfo")} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 20,
    // justifyContent: "center",
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

export default UpdateInfo;
