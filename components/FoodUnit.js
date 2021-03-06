import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from '../style/style';
import { Labels, dropDownUnits } from '../constants';

class FoodUnit extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidUpdate() {
    if (this.props.foodUnit.value == 0) {
      this.foodUnitDropDown.select(-1);
    }
  }

  onSelect(idx, value) {
    const { foodUnit, onFoodUnitSelect } = this.props;
    onFoodUnitSelect(foodUnit.id, value);
  }

  warningLevel(value, warning, maxValue) {
    if (value >= warning && value < maxValue) {
      return 1;
    }

    if (value >= maxValue) {
      return 2;
    }

    return 0;
  }

  render() {
    const { foodUnit } = this.props;
    const { id, title, maxUnits, value, unitsLeft, text, foodIcon, warning } = foodUnit;
    let imageStyle = styles.foodImage;

    switch (this.warningLevel(value, warning, maxUnits)) {
      case 2:
        imageStyle = styles.foodImageLimit;
        break;
      case 1:
        imageStyle = styles.foodImageWarning;
        break;
      default:
        imageStyle = styles.foodImage;
        break;
    }

    return (
      <View style={[styles.foodLine]}>
        <View style={styles.foodImageContainer}>
          <Image
            style={imageStyle}
            source={foodIcon}
          />
        </View>
        <View style={styles.foodDesc}>

          <Text style={styles.foodHeadline}>{title}</Text>
          {/*<Text style={styles.foodText}>{text}</Text>*/}
          <Text style={styles.foodText}>{Labels.UnitsLeft}: {unitsLeft}</Text>
        </View>
        <View style={styles.foodSelect}>
          <ModalDropdown
            ref={(ModalDropdown) => { this.foodUnitDropDown = ModalDropdown; }}
            style={styles.dropdown_4}
            dropdownStyle={styles.dropdown_4_dropdown}
            textStyle={styles.dropdown_4_text}
            options={dropDownUnits}
            defaultValue={String(value)}
            onSelect={this.onSelect.bind(this)}
          />

        </View>
      </View>
    );
  }
}

export default FoodUnit;