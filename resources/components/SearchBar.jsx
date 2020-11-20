import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { TextButton } from './buttons';
import { variables } from '../utils';


function SearchBar ({style, inputProps={}}) {
	const {style: inputStyle, ...rest} = inputProps;
	return (
		<View style={[styles.container, style]}>
			<TextInput
				style={[styles.input, styles.child, inputStyle]}
				placeholder='Search Jacket'
				placeholderColor={colors.sea}
				{...rest}
			/>
			<TextButton
				text='Filter'
				textStyle={[styles.child, styles.filterText]}
			/>
		</View>
	)
};

const { dpi, colors } = variables;

const styles = StyleSheet.create({
	container: {
		borderRadius: dpi.s,
		backgroundColor: colors.white,
		flexDirection: 'row',
	},

	child: {
		padding: dpi.s,
	},

	input: {
		flexGrow: 1,
		color: colors.black,
	},

	filterText: {
		color: colors.primary,
		fontWeight: '500',
	}
});

export default SearchBar
