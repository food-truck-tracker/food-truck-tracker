import React from "react";
import { AppRegistry, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import configureStore from "./src/config/store";
import App from "./src/App";
import { name as appName } from "./app.json";

const { store, persistor } = configureStore();

// connect app with redux store and persistor
const ConnectedApp = () => (
  <Provider store={store}>
    <PersistGate
      loading={<ActivityIndicator size="large" />}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ConnectedApp);
