import React, { FC } from "react";
import { IDrug } from "../models/IDrug";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PencilIcon, XMarkIcon } from "react-native-heroicons/mini";
import { useAppDispatch } from "../hooks/redux";
import { deleteDrugById, fetchDrugs } from "../store/actions/drugsAction";
import { useNavigation } from "@react-navigation/native";
import { i18n } from "../../assets/resourses/localization";

interface DrugProps {
  drug: IDrug;
}

const Drug: FC<DrugProps> = ({ drug }) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const deleteHandler = async (id: string) => {
    await dispatch(deleteDrugById(id));
    await dispatch(fetchDrugs());
  };
  return (
    <View style={styles.drug}>
      <View>
        <Text style={styles.title}>{drug.drugName}</Text>
        <View style={styles.desciptionBlock}>
          <Text style={styles.descriptionTitle}>{i18n.t("Price")}: </Text>
          <Text>{drug.price} $</Text>
        </View>
        <View style={styles.desciptionBlock}>
          <Text style={styles.descriptionTitle}>{i18n.t("Producer")}: </Text>
          <Text>{drug.producerName}</Text>
        </View>
        <View style={styles.desciptionBlock}>
          <Text style={styles.descriptionTitle}>{i18n.t("Dosage")}: </Text>
          <Text>{drug.dosageFormName}</Text>
        </View>
        <View style={styles.desciptionBlock}>
          <Text style={styles.descriptionTitle}>{i18n.t("Composition")}: </Text>
          <Text>{drug.composition}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.action}
          onPress={() => deleteHandler(drug.id)}
        >
          <XMarkIcon size={20} color={"red"} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.action}
          //@ts-ignore
          onPress={() => navigation.navigate("UpdateInfo", { drug })}
        >
          <PencilIcon size={20} color={"#434343"} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drug: {
    backgroundColor: "",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
  },
  actions: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: 10,
  },
  action: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#434343",
  },
  descriptionTitle: {
    fontWeight: "bold",
  },
  desciptionBlock: {
    flexDirection: "row",
  },
});

export default Drug;
