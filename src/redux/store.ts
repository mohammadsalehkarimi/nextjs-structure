import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import thunk from "redux-thunk"
import reducers from "./reducers/root-reducers"

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk))
  // for production mood comment this subscribe line
  store.subscribe(() => console.log(store.getState()))
  let persistor = persistStore(store)
  return { store, persistor }
}
