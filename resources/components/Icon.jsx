import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { variables } from '../utils';


function Icon ({icon, outerStyle, iconStyle}) {
	return (
		<View
			style={[styles.container, outerStyle]}
		>
			<Image
				source={icon}
				style={[styles.icon, iconStyle]}
			/>
		</View>
	)
};

const outer = variables.dpi.m + 10,
inner = Math.floor(outer * .5);

const styles = StyleSheet.create({
	container: {
		width: outer,
		height: outer,
		borderRadius: outer,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: variables.colors.white,
	},

	icon: {
		width: inner,
		height: inner,
	}
});

export default Icon;
