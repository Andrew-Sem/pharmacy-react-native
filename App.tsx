import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { i18n } from "./assets/resourses/localization";
import {Provider} from "react-redux";
import {store} from "./src/store/store";

const Stack = createStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen
                      name="activity1"
                      component={Home}
                      options={{ title: i18n.t("Home") }}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>

  );
}
