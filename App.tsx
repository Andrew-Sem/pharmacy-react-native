import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { i18n } from "./assets/resourses/localization";
import {Provider} from "react-redux";
import {store} from "./src/store/store";
import Table1 from "./src/screens/Table1";
import Table2 from "./src/screens/Table2";
import Table3 from "./src/screens/Table3";

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
                      name="table1"
                      component={Table1}
                      options={{ title: i18n.t("Table1") }}
                  />
                  <Stack.Screen
                      name="table2"
                      component={Table2}
                      options={{ title: i18n.t("Table2") }}
                  />
                  <Stack.Screen
                      name="table3"
                      component={Table3}
                      options={{ title: i18n.t("Table3") }}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>

  );
}
