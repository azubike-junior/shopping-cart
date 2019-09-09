const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://urbanweb:ggguuu@urbanweb-n0ifq.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
.then(() => myData())
.catch((err) => console.log(err))
exit();

const products = [
	new Product({
		imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHFSd9rJzJ3aZAIbxo2ZgehwL8b0PrXFdNVRJ_HS1pql9bfe6',
		title: 'superman',
		description: 'batman had more features, which was impressive',
		price: 100
	}),
	new Product({
		imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwoOsrwSD0NG-kZqdVM4qglaR6nZRbY_AveTptV7ImlB2Do10',
		title: 'Arcania',
		description: 'more and more adventures, little action, more storylines',
		price: 120
	}),
	new Product({
		imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSFzMvRyUuFgJep8XQLn89gf6Cc4Yi8TQ53Sq414d7MzafuY-cQ',
		title: 'Dark Gotham Video Game 2',
		description: 'its insane',
		price: 200
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
		title: 'Gothic',
		description: 'i love the dark part of this game',
		price: 50
	}),
	new Product({
		imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrq6f3Z_Th7AQbcvsz2I_v_NlWLePOGrz6aho_0GDg7B8FQeU07w',
		title: 'Outwar',
		description: 'change in environment, but its awesome',
		price: 30
	})
];

done = 0;
function myData () {
	for (var i = 0; i < products.length; i++) {
		products[i].save((err, result) => {
			console.log(result);
			done++;
			if (done === products.length) {
				exit();
			}
		});
	}
}

function exit () {
	mongoose.disconnect();
}

module.exports = myData;