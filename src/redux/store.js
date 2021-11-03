import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./counter/counter-reducer";
import todosReducer from "./todos/todos-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import phonebookReducer from "./phonebook/phonebook-reducer";

// Записываем данные из store (из указанного далее редьюсера), в локальное хранилище.
const counterPersistConfig = {
  key: "Counter",
  storage,
  blacklist: ["step"],
};

const middlewareSettings = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

export const store = configureStore({
  reducer: {
    counter: persistReducer(counterPersistConfig, counterReducer),
    todos: todosReducer,
    phonebook: phonebookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(middlewareSettings).concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
