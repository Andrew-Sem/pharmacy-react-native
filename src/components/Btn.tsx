import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronRightIcon } from "react-native-heroicons/mini";
import { i18n } from "../../assets/resourses/localization";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Btn: FC<ButtonProps> = ({ title, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      //@ts-ignore
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.text}>
        {title} <ChevronRightIcon size={20} color={"white"} />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#b594ff",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default Btn;
