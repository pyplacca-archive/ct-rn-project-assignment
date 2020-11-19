import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Rating } from '../components'
import { ProductSizes, AddToCartLabel } from '../components/showcase';
import * as icons from '../../assets/icons';
import * as utils from '../utils';


function ProductShowcase (props) {
	const [selectedSize, setSelectedSize] = useState('M');
	console.log(props)
	// const {image, name, description, material, price, review, sizes} = props;
	return (
		<View style={styles.container}>
			{/* back icon */}
			<Icon
				icon={icons.left}
				outerStyle={styles.back}
			/>
			{/* actions bar icons */}
			<View style={styles.actionsBar}>
				{
					[icons.cart, icons.heart].map((item, i) => (
						<Icon icon={item} outerStyle={styles.actionsIcon} key={i} />
					))
				}
				{/* <Icon icon={icons.heart} outerStyle={styles.actionIcon}/> */}
			</View>
			{/* product image */}
			<View style={styles.imgEnvelope}>
				<Image source={props.image} style={styles.prodImg}/>
			</View>
			{/* product name */}
			<Text style={styles.prodName}>{props.name}</Text>
			{/* review */}
			<View style={styles.review}>
				<Text>Review : </Text>
				<Rating
					value={props.review}
					total={5}
					ratedImg={icons.starred}
					nonRatedImg={icons.star}
				/>
			</View>
			{/* product description */}
			<Text style={styles.descr}>{props.description}</Text>
			{/* product materials */}
			<View style={[styles.label, styles.matLabel]}>
				<Text style={styles.matText}>Material: {props.material}</Text>
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

			<AddToCartLabel amount={props.price} currency='$' style={styles.addToCart}/>
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

	back: {
		position: 'fixed',
		top: dpi.m,
		left: dpi.m,
		zIndex: 10,
	},

	actionsBar: {
		position: 'fixed',
		right: dpi.m,
		top: dpi.m,
		zIndex: 11,
	},

	actionsIcon: {
		marginBottom: dpi.s,
	},

	imgEnvelope: {
		position: 'relative',
		alignItems: 'center',
		backgroundColor: colors.white,
		width: '90%',
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
		fontWeight: 'bold',
		marginBottom: dpi.s,
	},

	review: {
		flexDirection: 'row',
		alignItems: 'center',
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
	}
});

export default ProductShowcase;
