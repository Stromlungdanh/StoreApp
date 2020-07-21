import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import { render } from 'react-dom';


export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      categories: [
        { id: 1, name: 'Dụng cụ trượt tuyết' },
        { id: 2, name: 'Quần áo trượt tuyết' },
        { id: 3, name: 'Kính mũ' },
        { id: 4, name: '5TheWay' },
        { id: 5, name: 'Regods' },
        { id: 6, name: 'Tsun' },
        { id: 7, name: 'ColKids' },
      ]
    };
  }
  render() {
    const { categories } = this.state
    return (

      <FlatList data={categories}
        renderItem={({ item }) => <CategoryListItem category={item} />}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
      />


    )
  }
}

