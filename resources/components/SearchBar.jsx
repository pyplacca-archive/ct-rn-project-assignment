import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
import { variables } from '../utils';


function SearchBar ({style, inputProps}) {
	return (
		<View style={styles.container}>
			<TextInput
				style={[styles.input, styles.child, style]}
				placeholder='Search Jacket'
				{...inputProps}
			/>
			<Text
				style={[styles.child, styles.filterText]}
			>
				Filter
			</Text>
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
		paddingVertical: dpi.xs + dpi.s,
		paddingHorizontal: dpi.s,
	},

	input: {
		flexGrow: 1,
		color: colors.grey,
	},

	filterText: {
		color: colors.primary,
		fontWeight: 'bold',
	}
});

export default SearchBar
