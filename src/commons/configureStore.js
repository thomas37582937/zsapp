import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from '../reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

// 在控制台上打log
const logger = createLogger()

// redux 中间件
const middleware = [thunk, logger]

// 创建store
const store = createStore(persistedReducer, applyMiddleware(...middleware))
const persistor = persistStore(store)

export { store, persistor }
