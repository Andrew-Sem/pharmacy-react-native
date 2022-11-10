import React, { FC, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/mini";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IDrug } from "../models/IDrug";
import { fetchDrugs } from "../store/actions/drugsAction";
import { fetchProducers } from "../store/actions/producersAction";
//@ts-ignore
const Producers = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { loading, producers } = useAppSelector((state) => state.producer);
  useEffect(() => {
    dispatch(fetchProducers());
  }, []);
  return (
    <View style={styles.app}>
      {producers.map((producer) => (
        <View key={producer.id} style={styles.producer}>
          <Text style={styles.text}>{producer.producerName}</Text>
        </View>
      ))}
      <View style={styles.addBtn}>
        <TouchableOpacity onPress={() => navigation.navigate("AddProducer")}>
          <PlusCircleIcon size={72} color={"#b594ff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  producer: {
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

export default Producers;
