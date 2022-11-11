import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { i18n } from "../../assets/resourses/localization";
import Btn from "../components/Btn";
import { useAppDispatch } from "../hooks/redux";
import { addDrug, fetchDrugs } from "../store/actions/drugsAction";
import { IDrug } from "../models/IDrug";

//@ts-ignore
const AddDrug = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [drugName, setDrugName] = useState("");
  const [producerName, setProducerName] = useState("");
  const [dosageFormName, setDosageFormName] = useState("");
  const [price, setPrice] = useState(0);
  const [composition, setComposition] = useState("");

  const addDrugHandler = async ({
    producerName,
    composition,
    drugName,
    dosageFormName,
    price,
  }: IDrug) => {
    await dispatch(
      addDrug({ producerName, composition, drugName, dosageFormName, price })
    );
    await dispatch(fetchDrugs());
    navigation.navigate("Drugs");
  };

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
          value={producerName}
          onChangeText={setProducerName}
          style={styles.input}
        />
        <Text style={styles.labelText}>{i18n.t("Dosage")}</Text>
        <TextInput
          value={dosageFormName}
          onChangeText={setDosageFormName}
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
      <Btn
        title="Add drug"
        onPress={() => {
          addDrugHandler({
            producerName,
            composition,
            drugName,
            dosageFormName,
            price,
          });
        }}
      />
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
