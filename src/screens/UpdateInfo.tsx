import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { i18n } from "../../assets/resourses/localization";
import { IDrug } from "../models/IDrug";
import Btn from "../components/Btn";
import { useAppDispatch } from "../hooks/redux";
import { fetchDrugs, updateDrugById } from "../store/actions/drugsAction";
import { useNavigation } from "@react-navigation/native";

//@ts-ignore
const UpdateInfo = ({ route }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const drug: IDrug = route.params.drug;
  const [drugName, setDrugName] = useState(drug.drugName);
  const [producerName, setProducerName] = useState(drug.producerName);
  const [dosageFormName, setDosageFormName] = useState(drug.dosageFormName);
  const [price, setPrice] = useState(drug.price);
  const [composition, setComposition] = useState(drug.composition);

  const updateHandler = async ({
    id,
    drugName,
    composition,
    producerName,
    dosageFormName,
    price,
  }: IDrug) => {
    await dispatch(
      updateDrugById({
        id,
        drugName,
        composition,
        producerName,
        dosageFormName,
        price,
      })
    );
    await dispatch(fetchDrugs());
    //@ts-ignore
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
        title={i18n.t("UpdateInfo")}
        onPress={() =>
          updateHandler({
            id: drug.id,
            drugName,
            composition,
            dosageFormName,
            producerName,
            price,
          })
        }
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
