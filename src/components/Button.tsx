import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronRightIcon } from "react-native-heroicons/mini";
import { i18n } from "../../assets/resourses/localization";

interface ButtonProps {
  title: string;
}

const Button: FC<ButtonProps> = ({ title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      //@ts-ignore
      onPress={() => navigation.navigate("Dosage")}
      style={styles.button}
    >
      <Text style={styles.text}>
        {i18n.t("Dosage")} <ChevronRightIcon size={20} color={"white"} />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {},
  text: {},
});

export default Button;
