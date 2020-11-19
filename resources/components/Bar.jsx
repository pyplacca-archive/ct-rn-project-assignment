import React from 'react';
import { View } from 'react-native';
import { variables } from '../utils'


function Bar ({style}) {
	const h = 5;
	return (
		<View
			style={[
				{
					backgroundColor: variables.colors.primary,
					height: h,
					borderRadius: h,
				},
				style
			]}
		></View>
	)
};

export default Bar;
