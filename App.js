import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import ProductShowcase from './resources/screens/Showcase';
import ProductsStore from './resources/screens/Store';
import { variables } from './resources/utils';
import storehouse from './resources/storehouse';

// There currently 4 jackets in the store.
// Change the index to view a different jacket
const jacket = storehouse.jackets[3];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor={variables.colors.primary}
      />
        <ProductShowcase {...jacket} />
      {/*
        <ProductsStore
          products={storehouse.jackets}
          category='Woman Jacket'
        />
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
