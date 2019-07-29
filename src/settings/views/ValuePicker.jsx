import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default ({title, displayBottomLine = true, displayTopLine = true, items}) => {

  const [value, setValue] = useState('...');

  return (
    <View>
      {displayTopLine && <View style={styles.containerStyle}>
        <View style={styles.dividerStyle} />
      </View>}
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
      {displayBottomLine && <View style={styles.containerStyle}>
        <View style={styles.dividerStyle} />
      </View>}
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

  },
  containerStyle: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  dividerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(220,220,223)',
  },
});