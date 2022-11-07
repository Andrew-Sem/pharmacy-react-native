import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { i18n } from "./assets/resourses/localization";
import {Provider} from "react-redux";
import {store} from "./src/store/store";
import Drugs from "./src/screens/Drugs";
import Producers from "./src/screens/Producers";
import Dosage from "./src/screens/Dosage";

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
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>

  );
}
