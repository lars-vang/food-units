import React, { Component } from 'react';
import {
  Alert,
  Button,
  View,
  ScrollView,
} from 'react-native';
import { changeValue, resetAll } from '../actions';
import { connect } from 'react-redux';
import FoodUnits from '../components/foodUnits';
import {Labels} from '../constants'
import style from '../style/style'

class FoodUnitContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      foodUnits,
      onFoodUnitSelect,
      onResetPress,
    } = this.props;

    resetAllAlert = () => {
      Alert.alert(
        Labels.ResetMsgTitle,
        Labels.ResetMsgText,
        [
          {text: Labels.ResetMsgDecline, style: 'cancel'},
          {text: Labels.ResetMsgAccept, onPress: () => onResetPress()},
        ],
        { cancelable: true }
      )
    }

    return (
         <ScrollView style={style.container}>
            <FoodUnits foodUnits={foodUnits} onFoodUnitSelect={onFoodUnitSelect}/>
            <View style={style.resetBotton}>
            <Button title={Labels.ResetButton} 
                    onPress={resetAllAlert}
                    color="#F44336"/>
                    </View>
        </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foodUnits: state.foodUnits
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFoodUnitSelect: (id, value) => {
      dispatch(changeValue(id, value));
    },
    onResetPress: () => {
      dispatch(resetAll());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodUnitContainer)