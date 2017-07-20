import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from '../style/style';
import {Labels} from '../constants';

const units = [];
for (i = 0; i < 50; i++) { 
    if(i != 0) {
        units.push(i);
    }
    units.push(i + 0.25);
    units.push(i + 0.5)
    units.push(i + 0.75)
}

class FoodUnit extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

   componentDidUpdate() {
    if(this.props.foodUnit.value == 0) {
      this.foodUnitDropDown.select(-1);
    }
  }

   onSelect(idx, value) {
    const {foodUnit, onFoodUnitSelect} = this.props;
    onFoodUnitSelect(foodUnit.id, value);
  }

  render() {
    const {foodUnit} = this.props;
    const {title, value, unitsLeft, text} = foodUnit;
    return (
         <View style={[styles.foodLine]}>
                    <View style={styles.foodDesc}>
                        <Text style={styles.foodHeadline}>{title}</Text>
                        <Text style={styles.foodText}>{text}</Text>
                        <Text style={styles.foodText}>{Labels.UnitsLeft}: {unitsLeft}</Text>
                    </View>
                    <View style={styles.foodSelect}>
                        <ModalDropdown 
                                    ref={(ModalDropdown) => { this.foodUnitDropDown = ModalDropdown; }}
                                    style={styles.dropdown_4}
                                    dropdownStyle={styles.dropdown_4_dropdown}
                                    textStyle={styles.dropdown_4_text}
                                    options={units}
                                    defaultValue="0"
                                    onSelect={this.onSelect.bind(this)}
                        />
                        
                        </View>
                </View>
    );
  }
}

export default FoodUnit;