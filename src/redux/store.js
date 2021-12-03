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
import { newsReducer } from "./news/news-reducers";
import { imageGalleryReducer } from "./image-gallery/imageGallery-reducers";
import { nasaReducer } from "./nasa/nasa-reducers";
import auth from "./auth/auth-reducers";
import { contactsReducer } from "./personalContacts/personalContacts-reducers";
import createSagaMiddleware from "@redux-saga/core";
import { fetchNewsWatcher } from "./news/sagas";

const sagaMiddleWare = createSagaMiddleware();

// Записываем данные из store (из указанного далее редьюсера), в локальное хранилище.
const authPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const middlewareSettings = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    phonebook: phonebookReducer,
    news: newsReducer,
    imageGallery: imageGalleryReducer,
    nasa: nasaReducer,
    auth: persistReducer(authPersistConfig, auth),
    personalContacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(middlewareSettings).concat(sagaMiddleWare, logger),
  devTools: process.env.NODE_ENV === "development",
});

sagaMiddleWare.run(fetchNewsWatcher);

export const persistor = persistStore(store);
