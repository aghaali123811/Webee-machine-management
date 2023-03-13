import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Local Import
import 'react-native-gesture-handler';
import { store, persistor } from './src/store/Store';
import Navigation from './src/navigation/Navigation';

export interface NavigationProps {
 
}

const App = (props:NavigationProps) => {
  return (
    <>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navigation />
          </PersistGate>
      </Provider>
    </>
  )
}



export default App