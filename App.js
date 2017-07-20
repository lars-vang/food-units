import React, {Component}from 'react';
import {AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView} from 'react-native';
import styles from './style/style'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import foodUnitApp from './reducers';
import FoodUnitContainer from './containers/FoodUnitContainer';

const store = createStore(foodUnitApp);



class App extends Component {

  render() {
        return (
            <Provider store={store}>
                <FoodUnitContainer />
            </Provider>
        );
    }
};

export default App;


