import React from "react";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "./src/redux/store";

import { App } from "../PhoneApp/PhoneApp/App";

export default function Base() {
    
    return(
        <Provider store={store.store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>
);
}
