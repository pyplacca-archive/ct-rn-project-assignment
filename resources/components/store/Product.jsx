import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Rating } from '../';
import { variables } from '../../utils';


function Product (props) {
	const {name, rating, price, currency='$', image} = props;

	return (
		<View style={[styles.container, props.style || {}]}>
			<View style={styles.imgContainer}>
				<Image source={image} style={styles.img}/>
			</View>
			<View style={styles.info}>
				<Text
					style={styles.name}
					numberOfLines={1}
				>
					{name}
				</Text>
				<Rating value={rating} total={5} />
				<Text style={styles.price}>{currency}{price}</Text>
			</View>
		</View>
	)
};

const { colors, dpi } = variables;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		// width: '100%',
	},

	imgContainer: {
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white,
		borderRadius: dpi.s,
		width: dpi.l + dpi.m,
		// flex: .4,
		height: dpi.l + dpi.m,
		// transform: [
		// 	{skewX: '-5deg'}
		// ]
	},

	img: {
		position: 'absolute',
		width: '80%',
		height: '100%',
		resizeMode: 'contain',
		top: -(dpi.m),
	},

	info: {
		// flex: .52,
		flex: 1,
		marginLeft: dpi.m - dpi.xs,
		paddingVertical: dpi.s,
		// flexGrow: 1
	},

	name: {
		fontWeight: '700',
		// fontSize: dpi.s + dpi.xs,
		color: colors.black,
		marginBottom: 3,
		flex: 1
	},

	price: {
		color: colors.primary,
		marginTop: dpi.xs * 2,
		fontWeight: 'bold',
		fontSize: dpi.s
	}
});

export default Product;
