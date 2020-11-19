import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { variables } from '../../utils';


function IconButton (props) {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={[styles.container, props.outerStyle]}
		>
			<Image
				source={props.icon}
				style={[styles.icon, props.iconStyle]}
			/>
		</TouchableOpacity>
	)
};

const { dpi } = variables,
outer = dpi.m + dpi.s,
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

export default IconButton;
