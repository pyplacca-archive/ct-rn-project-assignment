import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Rating, Bar, ActionsBar } from '../components';
import { ProductSizes, AddToCartLabel } from '../components/showcase';
import * as icons from '../../assets/icons';
import bg1 from '../../assets/bg1.png';
import bgRect from '../../assets/bg-rect.png';
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
				{/* that gradient background */}
				<Image source={bg1} style={styles.bgImg}/>
				<Image source={props.image} style={styles.prodImg}/>
			</View>
			{/* product name */}
			<Text style={styles.prodName}>{props.name}</Text>
			{/* review */}
			<View style={styles.review}>
				<Text>Review : </Text>
				<Rating total={5} value={props.rating} />
			</View>
			<Bar style={styles.bar}/>
			{/* product description */}
			<Text style={styles.descr}>{props.description}</Text>
			{/* product materials */}
			<View style={[styles.label, styles.matLabel]}>
				{/* that gradient background */}
				<Image
					source={bgRect}
					style={[
						styles.bgImg,
						{resizeMode: 'stretch', left: 0, top: 0}
					]}
				/>
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

const { colors, dpi } = utils.variables,
{ styles: glob } = utils;

const imgAbs = {
	position: 'absolute',
	resizeMode: 'contain',
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		padding: dpi.m,
		backgroundColor: colors.sea,
		minHeight: '100vh'
	},

	imgEnvelope: {
		position: 'relative',
		...glob.centered,
		// backgroundColor: colors.white,
		width: '90%',
		maxWidth: 320,
		height: dpi.xl * 2,
		alignSelf: 'center',
		borderRadius: dpi.m,
		marginBottom: dpi.m - dpi.xs - 3,
		marginTop: dpi.m,
	},

	prodImg: {
		top: -dpi.s,
		width: '80%',
		height: '90%',
		...imgAbs
	},

	bgImg: {
		width: '100%',
		height: '100%',
		...imgAbs,
	},

	prodName: {
		fontSize: dpi.m - 5 - 2,
		fontWeight: '900',
		marginBottom: dpi.s,
	},

	review: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	bar: {
		width: dpi.l - dpi.s,
		marginVertical: dpi.m - dpi.xs,
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
	},

	matText: {
		color: colors.primary,
		zIndex: 2,
		alignSelf: 'flex-start'
	},

	prsz: {
		marginTop: dpi.s,
		marginBottom: dpi.s + dpi.xs * 2
	},

	szBtn: {
		marginHorizontal: dpi.s,
	},

	addToCart: {
		marginTop: dpi.m
	},
});

export default ProductShowcase;
