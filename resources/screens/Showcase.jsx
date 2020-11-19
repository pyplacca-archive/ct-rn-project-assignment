import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Rating, Bar, ActionsBar } from '../components';
import { ProductSizes, AddToCartLabel } from '../components/showcase';
import * as icons from '../../assets/icons';
import * as utils from '../utils';


function ProductShowcase (props) {
	const [selectedSize, setSelectedSize] = useState('M');
	// const {image, name, description, material, price, review, sizes} = props;
	return (
		<View style={styles.container}>
			{/* back icon */}
			<ActionsBar onBack={() => console.log('back')}/>
			{/* product image */}
			<View style={styles.imgEnvelope}>
				<Image source={props.image} style={styles.prodImg}/>
			</View>
			{/* product name */}
			<Text style={styles.prodName}>{props.name}</Text>
			{/* review */}
			<View style={styles.review}>
				<Text>Review : </Text>
				<Rating total={5} value={props.review} />
			</View>
			<Bar style={styles.bar}/>
			{/* product description */}
			<Text style={styles.descr}>{props.description}</Text>
			{/* product materials */}
			<View style={[styles.label, styles.matLabel]}>
				<Text
					numberOfLines={1}
					style={styles.matText}
				>
					Material: {props.material}
				</Text>
			</View>
			{/* product sizes */}
			{
				props.sizes &&
				<ProductSizes
					list={props.sizes}
					onSizePress={setSelectedSize}
					selected={selectedSize}
					style={styles.prsz}
				/>
			}

			<AddToCartLabel amount={props.price} style={styles.addToCart} />
		</View>
	)
};

const { colors, dpi } = utils.variables;

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		padding: dpi.m,
		backgroundColor: colors.sea,
		minHeight: '100vh'
	},

	imgEnvelope: {
		position: 'relative',
		alignItems: 'center',
		backgroundColor: colors.white,
		width: '90%',
		maxWidth: 300,
		height: dpi.xl * 2,
		alignSelf: 'center',
		borderRadius: dpi.m,
		marginBottom: dpi.m,
	},

	prodImg: {
		position: 'absolute',
		top: -dpi.m
	},

	prodName: {
		fontSize: dpi.m - 5,
		fontWeight: '900',
		marginBottom: dpi.s,
	},

	review: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: dpi.s,
	},

	bar: {
		width: dpi.l - dpi.s,
		marginBottom: dpi.s,
	},

	descr: {
		marginBottom: dpi.s,
	},

	label: {
		padding: dpi.s,
	},

	labelRounded: {
		borderRadius: dpi.s,
	},

	matLabel: {
		position: 'relative',
		left: -dpi.m,
		marginVertical: dpi.s,
		paddingLeft: dpi.m,
		backgroundColor: colors.white
	},

	matText: {
		color: colors.primary,
		// fontWeight: 'bold',
	},

	prsz: {
		marginVertical: dpi.s
	},

	szBtn: {
		marginHorizontal: dpi.s,
	},

	addToCart: {
		marginTop: dpi.m
	},
});

export default ProductShowcase;
