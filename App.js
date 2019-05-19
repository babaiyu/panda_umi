import React from 'react'

//redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './src/redux/store'
import Route from './src/config/routes'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Route />
        </PersistGate>
      </Provider>
    )
  }
}

export default App