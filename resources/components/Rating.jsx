import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { variables } from '../utils';
import * as icons from '../../assets/icons'


function Rating (props) {
	const [rating, setRating] = useState(0)

	useEffect(() => setRating(props.value), [])

	const changeRating = n => {
		setRating(n)
		props.onRatingChange && props.onRatingChange(n)
	}

	const {
		total,
		ratedImg=icons.starred, // default image
		nonRatedImg=icons.star, // default image
		imgStyle,
		orientation='horizontal',
	} = props;

	return (
		<View
			style={[
				styles.container,
				{flexDirection: directions[orientation]},
			]}
		>
			{
				Array(total).fill().map((_, i) => (
					<TouchableOpacity
						key={i}
						onPress={() => changeRating(i+1)}
					>
						<Image
							source={i < rating ? ratedImg : nonRatedImg}
							style={[
								styles.img,
								imgStyle,
								!i ? styles.first : {},
								i === total-1 ? styles.last : {},
							]}
						/>

					</TouchableOpacity>
				))
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
		width: dpi.s - 2,
		height: dpi.s - 2,
	},

	first: {
		marginLeft: 0,
	},

	last: {
		marginRight: 0,
	}
});

export default Rating;
