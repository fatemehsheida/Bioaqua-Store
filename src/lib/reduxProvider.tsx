"use client";
import React from "react";
import { Provider } from "react-redux";
<<<<<<< Updated upstream
import { store } from "./store";

function ReduxProvider({ children }: { children: React.ReactNode }) {
<<<<<<< Updated upstream:src/lib/reduxProvider.tsx
  return <Provider store={store}>{children}</Provider>;
=======
<<<<<<< Updated upstream:src/lib/reduxProvider.ts
  return (<Provider store={store}>
  {children}
  </Provider>;)
=======
  return <Provider store={store}>{children}</Provider>;
=======
// import { store,persistor } from "./store";
import { store } from "./store";
// import { PersistGate } from "redux-persist/integration/react"

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    {children}
    {/* </PersistGate> */}

    </Provider>;
>>>>>>> Stashed changes
>>>>>>> Stashed changes:src/lib/reduxProvider.tsx
>>>>>>> Stashed changes:src/lib/reduxProvider.ts
}

export default ReduxProvider