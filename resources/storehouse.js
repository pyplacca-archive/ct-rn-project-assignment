import black from '../assets/images/products/jackets/black.png'
import bng from '../assets/images/products/jackets/black-n-gold.png'
import red from '../assets/images/products/jackets/red.png'
import turtleBrown from '../assets/images/products/jackets/turtle-brown.png'


const jackets = [
	{
		name: 'Bike Jacket Softshell Warm',
		rating: 4,
		price: 99,
		image: black,
		id: 'e2979a2e-eb53-4a19-80f1-7cc7aa07bee7',
	},
	{
		name: 'Brown Hood-ish Merino',
		rating: 3,
		price: 80,
		image: turtleBrown,
		id: '50f9c4ec-8e44-49d2-8fd1-d8750c2f34ff',
	},
	{
		name: 'Gold Accent Classic Jacket',
		rating: 5,
		price: 140,
		image: bng,
		id: '64721447-4968-4239-bf18-3773a17bfaca',
	},
	{
		name: 'Red Woman Jacket',
		rating: 4,
		price: 115,
		image: red,
		id:'f3caaa26-ba91-44b5-a9e2-a50544543daa',
	},
];

const jacketPhotos = {
	black, red, bng, turtleBrown
}

export default {
	jackets,
	jacketPhotos
}
