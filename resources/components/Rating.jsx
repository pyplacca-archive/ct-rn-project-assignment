import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { variables } from '../utils';


function Rating (props) {
	const [rating, setRating] = useState(0)

	useEffect(() => setRating(props.value), [])

	const {
		value, total, ratedImg, nonRatedImg, imgStyle, orientation='horizontal'
	} = props;

	return (
		<View
			style={[
				styles.container,
				{flexDirection: directions[orientation]},
			]}
		>
			{
				Array(total).fill().map((n, i) => {
					return (
						<TouchableOpacity
							key={i}
							onPress={() => setRating(i+1)}
						>
							<Image
								source={i < rating ? ratedImg : nonRatedImg}
								style={[ styles.img ]}
							/>

						</TouchableOpacity>
					)
				})
			}
		</View>
	)
};

const directions = {
	vertical: 'column',
	horizontal: 'row'
},
{ dpi } = variables;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},

	img: {
		margin: dpi.xs - 2,
		width: dpi.s,
		height: dpi.s,
	}
});

export default Rating;
