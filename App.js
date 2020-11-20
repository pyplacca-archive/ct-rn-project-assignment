import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import ProductShowcase from './resources/screens/Showcase';
import ProductsStore from './resources/screens/Store';
import { variables } from './resources/utils';
import storehouse from './resources/storehouse';

// const {image, name, description, material, price, review, sizes} = props;
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={variables.colors.primary} />
      {/*
        <ProductShowcase
          name='Red Woman Jacket'
          description='It is a long established fact that a reader will be distracted by the readable content of a page'
          material='91% polyester, 9% elastane'
          review={3}
          sizes={['xs', 'S', 'M', 'L', 'XL']}
          price={110}
          image={storehouse.jacketPhotos.red}
        />
      */}
        <ProductsStore
          products={storehouse.jackets}
          category='Woman Jacket'
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
