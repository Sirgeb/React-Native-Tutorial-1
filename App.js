import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, ScrollView } from 'react-native';
import Header from 'components/Header';
// import HeaderStyle from './HeaderStyle';

const restaurants = [
  {name: 'React Cafe', address: '123 Anywhere St'},
  {name: 'Fancy Restaurant', address: '799 Main St'},
  {name: 'Taco Place', address: '550 Maple Rd'}
];

export default class App extends Component {
  state = {
    search: null
  }

  render() {
    // Platform.select({
    //   ios: HeaderStyle.iOSHeader,
    //   android: HeaderStyle.header,
    // });

    return(
      <View style={{
        flex: 1
      }}>
        {/* <Text style={[
          HeaderStyle.header, 
          Platform.OS === 'ios' ? {padding: 20, paddingTop: 30} : {}
        ]}>Restaurant Review</Text> */}
        <Header />
        <TextInput 
          style={styles.input} 
          placeholder="Live Search" 
          onChangeText={text => {
            this.setState({ search: text })
          }}
          value={this.state.search}
        />
        <ScrollView>
        {
          restaurants.filter(place => {
            return !this.state.search || place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 
          }).map((place, index) => {
            return (
              <View key={place.name} style={[
                styles.row,
                { backgroundColor: index % 2 === 0 ? 'white' : '#f3f3f7'}
                ]}>
                <View style={styles.edges}>
                  <Text>{index + 1}</Text>
                </View>
                <View style={styles.nameAddress}>
                  <Text>{place.name}</Text>
                  <Text style={styles.addressText}>{place.address}</Text>
                </View>
                <View style={styles.edges}>
                  <Text>info</Text>
                </View>
              </View>
            )
          })
        }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  edges: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 5
  },
  nameAddress: {
    flexDirection: 'column', 
    flex: 8
  },
  addressText: {
    color: 'grey'
  },
  input: {
    marginBottom: 30,
    padding: 10, 
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5',
  }
});
