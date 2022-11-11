import React, { useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/mini";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchDosages } from "../store/actions/dosagesAction";

//@ts-ignore
const Dosage = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { dosages, loading } = useAppSelector((state) => state.dosage);
  useEffect(() => {
    dispatch(fetchDosages());
  }, []);

  return (
    <View style={styles.app}>
      {dosages.map((dosage) => (
        <View key={dosage.id} style={styles.dosage}>
          <Text style={styles.text}>{dosage.dosageFormName}</Text>
        </View>
      ))}
      <View style={styles.addBtn}>
        <TouchableOpacity onPress={() => navigation.navigate("AddDosage")}>
          <PlusCircleIcon size={72} color={"#b594ff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dosage: {
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
  addBtn: {
    position: "absolute",
    bottom: 35,
    right: 15,
  },
  app: {
    flex: 1,
  },
});

export default Dosage;
