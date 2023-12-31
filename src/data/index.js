import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";
import authReducer from "./slices/authSlice";
import { reducer as modalsReducer } from "./slices/modals";
import settingsReducer from "./slices/settingsSlice";
import propertyReducer from "./slices/propertySlice";

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
    modals: modalsReducer,
    settings: settingsReducer,
    property: propertyReducer,
  },
});
