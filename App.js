import React, {Component}from 'react';
import {AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
AsyncStorage } from 'react-native';
import styles from './style/style'
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist'
import foodUnitApp from './reducers';
import FoodUnitContainer from './containers/FoodUnitContainer';
import defaultFoodUnits from './constants/';

const store = compose(autoRehydrate())(createStore)(foodUnitApp)

class AppProvider extends Component {
  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount(){
    persistStore(store, {storage: AsyncStorage}, () => {
      this.setState({ rehydrated: true })
    })
  }

render() {
    if(!this.state.rehydrated){
      return <Text>Loading...</Text>
    }
    return (
      <Provider store={store}>
         <FoodUnitContainer /> 
      </Provider>
    )
  }
};

export default AppProvider;


