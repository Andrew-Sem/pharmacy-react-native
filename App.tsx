import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { i18n } from "./assets/resourses/localization";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import Drugs from "./src/screens/Drugs";
import Producers from "./src/screens/Producers";
import Dosage from "./src/screens/Dosage";
import AddDrug from "./src/screens/AddDrug";
import UpdateInfo from "./src/screens/UpdateInfo";
import AddProducer from "./src/screens/AddProducer";
import AddDosage from "./src/screens/AddDosage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: i18n.t("Home") }}
          />
          <Stack.Screen
            name="Drugs"
            component={Drugs}
            options={{ title: i18n.t("Drugs") }}
          />
          <Stack.Screen
            name="Producers"
            component={Producers}
            options={{ title: i18n.t("Producers") }}
          />
          <Stack.Screen
            name="Dosage"
            component={Dosage}
            options={{ title: i18n.t("Dosage") }}
          />
          <Stack.Screen
            name="AddDrug"
            component={AddDrug}
            options={{ title: i18n.t("AddDrug") }}
          />
          <Stack.Screen
            name="UpdateInfo"
            component={UpdateInfo}
            options={{ title: i18n.t("UpdateInfo") }}
          />
          <Stack.Screen
            name="AddProducer"
            component={AddProducer}
            options={{ title: i18n.t("AddProducer") }}
          />
          <Stack.Screen
            name="AddDosage"
            component={AddDosage}
            options={{ title: i18n.t("AddDosage") }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
