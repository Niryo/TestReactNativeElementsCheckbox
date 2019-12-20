import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {CheckBox} from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
          <CheckBox checked={true} />
          <Text>wow</Text>
        </View>
        <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
          <CheckBox checked={true} />
          <Text>wow</Text>
        </View>
        <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
          <CheckBox checked={true} />
          <Text>wow</Text>
        </View>
        <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
          <CheckBox checked={true} />
          <Text>wow</Text>
        </View>
        <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
          <CheckBox checked={true} />
          <Text>wow</Text>
        </View>
        <View style={{display: 'flex',flexDirection: 'row'}}>
          <CheckBox checked={true} />
          <Text>wow</Text>
        </View>
        <View style={{display: 'flex',flexDirection: 'row'}}>
          <CheckBox checked={true} />
          <Text>wow</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
