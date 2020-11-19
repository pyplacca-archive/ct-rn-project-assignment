import React from 'react';
import { View, StyleSheet } from 'react-native';
import { variables } from '../../utils';
import { Button } from '../'


function ProductSizes ({list, onSizePress, selected, style}) {
	return (
		<View style={[styles.container, style]}>
			{
				list.map((size, i) => {
					const {white, black} = colors,
					[bg, fg] = size === selected ? [primary, white] : [white, black]

					return (
						<Button
							key={i}
							onPress={() => onSizePress(size)}
							text={size}
							btnStyle={[
								styles.btn,
								!i ? styles.first : {},
								i === list.length-1 ? styles.last : {},
								{ backgroundColor: bg }
							]}
							textStyle={[ { color: fg }, styles.text ]}
						/>
					)
				})
			}
		</View>
	)
};

const { colors, dpi } = variables,
btnSize = dpi.m + dpi.xs

const styles = {
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	btn: {
		borderRadius: dpi.xs,
		marginHorizontal: dpi.xs + 5,
		width: btnSize,
		height: btnSize,
		alignItems: 'center',
		justifyContent: 'center'
	},

	first: {
		marginLeft: 0
	},

	last: {
		marginRight: 0
	},

	text: {
		textTransform: 'uppercase',
		fontSize: dpi.s - 3
	},
};

export default ProductSizes;
