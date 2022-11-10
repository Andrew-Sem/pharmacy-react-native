import React, { FC, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IDrug } from "../models/IDrug";
import { fetchDrugs } from "../store/actions/drugsAction";

interface ProducersProps {
  drugs: IDrug[];
}

const Producers: FC<ProducersProps> = () => {
  const dispatch = useAppDispatch();
  const { loading, drugs } = useAppSelector((state) => state.drug);
  useEffect(() => {
    dispatch(fetchDrugs());
  }, []);
  return (
    <View>
      {drugs.map((drug) => (
        <View key={drug.id} style={styles.producer}>
          <Text style={styles.text}>{drug.producerName}</Text>
        </View>
      ))}
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
});

export default Producers;
