import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import { ActionsBar, SearchBar } from '../components';
import { Product } from '../components/store';
import { variables } from '../utils';


function ProductsStore ({category, products}) {
	return (
		<View style={styles.container}>
			<ActionsBar showLike={false} />
			<Text style={styles.title}>{category}</Text>
			<SearchBar style={styles.searchbar}/>
			<FlatList
				data={products}
				renderItem={
					({item}) => <Product {...item} style={styles.product} />
				}
				keyExtractor={item => item.id}
				showsVerticalScrollIndicator ={false}
				style={styles.listing}
			/>
		</View>
	)
};

const { dpi, colors } = variables;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.sea,
		height: '100%',
		padding: dpi.m
	},

	title: {
		fontSize: dpi.m - dpi.xs - 2,
		fontWeight: '700',
		marginTop: dpi.l + dpi.s - dpi.xs,
		marginBottom: dpi.m - dpi.xs,
	},

	searchbar: {
		marginBottom: dpi.s,
	},

	listing: {
		paddingVertical: dpi.s,
	},

	product: {
		marginTop: dpi.m - dpi.xs,
		marginBottom: dpi.s + dpi.xs,
	}
});

export default ProductsStore;
