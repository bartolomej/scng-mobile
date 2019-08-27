import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

const style = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  indicatorWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 12,
    width: 12,
    borderWidth: 2,
    borderRadius: 6,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelWrapper: {
    paddingRight: 16,
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#e5e5e9',
  },
});

class PickerModalItem extends Component {

  static defaultProps = {
    isLast: false,
  };

  render() {
    const {
      onSelect, selected, label, isLast,
      selectedColor, textColor
    } = this.props;
    return (
      <React.Fragment>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onSelect}
        >
          <View style={style.itemWrapper}>
            <View style={style.indicatorWrapper}>
              <View style={[style.indicator, {borderColor: selectedColor, backgroundColor: selected ? selectedColor : null }]} />
            </View>
            <View style={style.labelWrapper}>
              <Text style={[style.label, {color: textColor}]}>
                {label}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {!isLast ? (
          <View style={style.separator} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default PickerModalItem;
