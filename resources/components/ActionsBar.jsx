import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from './buttons'
import * as icons from '../../assets/icons'
import { variables } from '../utils';


function ActionsBar (props) {
	// onBackPress, onLike, onCart, showBack, showLike, showCart
	const {
		showBack=true,
		showCart=true,
		showLike=true
	} = props;

	return (
		// actions bar icons at the top right corner
		<View style={styles.actionsBar}>
			{
				showBack &&
				<IconButton
					icon={icons.left}
					outerStyle={styles.icon}
					onPress={props.onBack}
				/>
			}
			<View>
				{
					showCart &&
					<IconButton
						icon={icons.cart}
						outerStyle={styles.icon}
						onPress={props.onCart}
					/>
				}
				{
					showLike &&
					<IconButton
						icon={icons.heart}
						outerStyle={styles.icon}
						onPress={props.onLike}
					/>
				}
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	actionsBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		position: 'fixed',
		left: 0,
		top: 0,
		padding: variables.dpi.m - variables.dpi.xs,
		zIndex: 11,
	},

	icon: {
		marginBottom: variables.dpi.s,
	},
});

export default ActionsBar;
