import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import RootReducer from './reducers'

const persistConfig = {
    timeout: 10000,
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const persist = persistReducer(persistConfig, RootReducer)

export const store = createStore(persist, applyMiddleware(thunk))
export const persistor = persistStore(store)