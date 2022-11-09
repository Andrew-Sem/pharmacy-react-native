import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/mini";
import { i18n } from "../../assets/resourses/localization";
import Btn from "../components/Btn";

//@ts-ignore
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Btn
        title={i18n.t("Drugs")}
        onPress={() => navigation.navigate("Drugs")}
      />
      <Btn
        title={i18n.t("Producers")}
        onPress={() => navigation.navigate("Producers")}
      />
      <Btn
        title={i18n.t("Dosage")}
        onPress={() => navigation.navigate("Dosage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#b594ff",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default Home;
