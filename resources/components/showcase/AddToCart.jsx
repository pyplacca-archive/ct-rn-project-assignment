import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextButton } from '../buttons';
import { variables } from '../../utils';


function AddToCartLabel ({amount, currency='$', style}) {
	return (
		<View style={[styles.container, style]}>
			<View>
				<Text style={[styles.sup, styles.text]}>
					Total Amount
				</Text>
				<Text style={[styles.amount, styles.text]}>
					{currency}{amount}
				</Text>
			</View>
			<TextButton
				text='Add To Cart'
				btnStyle={styles.addBtn}
				textStyle={[styles.text, {fontWeight: 'bold'}]}
			/>
		</View>
	)
};

const { dpi, colors } = variables;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: dpi.s,
		borderRadius: dpi.s,
		width: '100%',
		backgroundColor: colors.primary
	},

	sup: {
		fontSize: dpi.s - 4
	},

	amount: {
		fontSize: dpi.s + 7,
		fontWeight: 'bold',
	},

	text: {
		color: colors.white,
	},

	addBtn: {
		backgroundColor: colors.primaryDark,
		paddingHorizontal: dpi.s + dpi.xs,
		paddingVertical: dpi.s,
		borderRadius: dpi.xs * 2,
	},

});

export default AddToCartLabel
