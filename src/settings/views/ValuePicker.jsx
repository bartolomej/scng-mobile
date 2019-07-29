import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Line from '../../views/HorizontalLine';


export default ({title, displayBottomLine = true, displayTopLine = true, items}) => {

  const [value, setValue] = useState('...');

  return (
    <View>
      {displayTopLine && <Line/>}
      <TouchableOpacity style={styles.container}>
        {/*<PickerModal
          closeModal={this.closeModal}
          pickerOpen={pickerOpen}
          pickerValue={pickerValue}
          title={title}
          options={options}
          dialogDescription={dialogDescription}
          modalStyle={modalStyle}
          multi={multi}
          onSelectItem={this.onSelectItem}
          renderCloseBtn={renderCloseBtn}
          renderListItem={renderListItem}
        />*/}
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
    flex: 1,
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 14
  },
  value: {

  }
});