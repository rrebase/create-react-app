import { configureStore } from "redux-starter-kit";
import { loadState } from "./localStorage";
import preloadedState from "./preloadedState";
import rootReducer from "./rootReducer";

const persistedState = loadState();

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: persistedState || preloadedState,
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export default store;
