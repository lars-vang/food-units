import React, { Component, PropTypes } from 'react';
import { View, ListView } from 'react-native';
import FoodUnit from './FoodUnit';

const ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1.id !== row2.id,
});

class FoodUnits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(props.foodUnits)
    };
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(foodUnit) {
    const {onFoodUnitSelect} = this.props;
    return <FoodUnit foodUnit={foodUnit} onFoodUnitSelect={onFoodUnitSelect}/>;
  }

  updateDataSource(foodUnits) {
    this.setState({
      dataSource: ds.cloneWithRows(foodUnits)
    });
  }

  componentWillReceiveProps(newProps) {
    this.updateDataSource(newProps.foodUnits);
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections={true}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    );
  }
}

FoodUnits.propTypes = {
  foodUnits: PropTypes.array.isRequired,
  onFoodUnitSelect: PropTypes.func.isRequired
};

export default FoodUnits;