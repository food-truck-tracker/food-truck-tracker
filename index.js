import React from "react";
import { AppRegistry, Text } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import configureStore from "./src/config/store";
import App from "./src/App";
import { name as appName } from "./app.json";

const { store, persistor } = configureStore();

const ConnectedApp = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ConnectedApp);
