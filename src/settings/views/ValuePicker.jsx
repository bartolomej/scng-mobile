import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Line from '../../views/HorizontalLine';
import PickerModal from '../views/PickerModal';


export default ({value = '...', title, closeButton, displayBottomLine = true, displayTopLine = true, items,
                  dialogDescription, onValueChange, multi = false,
                  titleColor = 'white', backgroundColor = 'black', selectionColor = 'black', listTextColor = 'black'}) => {

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const onSelect = (value, label) => {
    if (multi) {
      // if value already in array delete it
      for (let i = 0; i < selected.length; i++) {
        if (selected[i].value === value) {
          setSelected(selected.slice(0,i).concat(selected.slice(i+1)));
          return onValueChange(selected.slice(0,i).concat(selected.slice(i+1)));
        }
      }
      setSelected([...selected, {value, label}]);
      onValueChange([...selected, {value, label}]);
    } else {
      setSelected([{value, label}]);
      onValueChange(value, label);
      setTimeout(() => {
        setOpen(!isOpen);
      }, 100);
    }
  };

  return (
    <View>
      {displayTopLine && <Line/>}
      <TouchableOpacity onPress={() => setOpen(!isOpen)} style={styles.container}>
        <PickerModal
          itemTextColor={listTextColor}
          itemSelectedColor={selectionColor}
          closeModal={() => setOpen(!isOpen)}
          pickerOpen={isOpen}
          pickerValue={selected}
          title={title}
          options={items}
          renderCloseBtn={closeButton}
          dialogDescription={dialogDescription}
          modalStyle={{
            innerWrapper: {},
            header: {
              wrapper: {
                backgroundColor: backgroundColor,
              },
            },
            list: {
              wrapper: {
                backgroundColor: selectionColor
              },
              innerWrapper: {
                backgroundColor: selectionColor
              },
            },
          }}
          onSelectItem={onSelect}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{value}</Text>
        </View>
      </TouchableOpacity>
      {displayBottomLine && <Line/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16
  },
  titleContainer: {
    flex: 1,
  },
  valueContainer: {
    flex: 3,
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 14,
  },
  value: {

  }
});