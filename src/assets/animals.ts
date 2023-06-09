import { Animal } from '../types'
export const mockAnimals: Animal[] = [
	{
		name: 'Clownfish',
		animalGroup: 'Fish',
		colorScheme: { color: ['orange', 'black', 'white'], pattern: ['striped'] },
		location: ['water'],
		attribute: ['scale', 'fins', 'gills'],
	},
	{
		name: 'Electric Eel',
		animalGroup: 'Fish',
		colorScheme: { color: ['mixed', 'black', 'gold'], pattern: ['striped', 'solid'] },
		location: ['water'],
		attribute: ['singular fin', 'gills'],
	},
	{
		name: 'Catfish',
		animalGroup: 'Fish',
		colorScheme: { color: ['gray', 'brown', 'white'], pattern: ['split', 'spotted'] },
		location: ['water'],
		attribute: ['fins', 'gills', 'moustache', 'scales'],
	},
	{
		name: 'Great White Shark',
		animalGroup: 'Fish',
		colorScheme: { color: ['split', 'black', 'white', 'gray'], pattern: ['striped'] },
		location: ['water'],
		attribute: ['fins', 'gills', 'big teeth', 'blood thirsty'],
	},
	{
		name: 'Lion Fish',
		animalGroup: 'Fish',
		colorScheme: { color: ['orange', 'black', 'gray', 'maroon'], pattern: ['striped'] },
		location: ['water'],
		attribute: ['fins', 'gills', 'poisonous', 'fan-like fins'],
	},
	{
		name: 'Crocodile',
		colorScheme: { color: ['brown', 'black'], pattern: ['solid'] },
		animalGroup: 'Reptile',
		location: ['water', 'land'],
		attribute: ['legs', 'scale', 'armor', 'tail'],
	},
	{
		name: 'Chameleon',
		colorScheme: { color: ['mixed', 'green', 'black'], pattern: ['transparent', 'solid', 'striped', 'dotted', 'camouflage', 'split'] },
		animalGroup: 'Reptile',
		location: ['land'],
		attribute: ['tail', 'long tongue', 'big eyes', 'scale', 'camouflage'],
	},
	{
		name: 'Komodo Dragon',
		colorScheme: { color: ['brown', 'black'], pattern: ['solid'] },
		animalGroup: 'Reptile',
		location: ['water', 'land'],
		attribute: ['legs', 'poison', 'huge mouth', 'tail'],
	},
	{
		name: 'King Cobra',
		colorScheme: { color: ['black', 'brown'], pattern: ['striped', 'solid'] },
		animalGroup: 'Reptile',
		location: ['land'],
		attribute: ['scale', 'face shield', 'poison', 'fangs'],
	},
	{
		name: 'Wheelchair',
		colorScheme: { color: ['black', 'red', 'silver', 'flames'], pattern: ['split', 'solid'] },
		animalGroup: 'Reptile',
		location: ['land'],
		attribute: ['wheels', 'slow', 'wings', 'huge mouth', 'fangs', 'tail', 'shapeshifter'],
	},
	{
		name: 'Cardinal',
		colorScheme: { color: ['red'], pattern: ['solid'] },
		animalGroup: 'Bird',
		location: ['land', 'air'],
		attribute: ['crested head', 'vibrant plumage', 'feathers'],
	},
	{
		name: 'Blue Jay',
		colorScheme: { color: ['blue', 'white', 'black'], pattern: ['solid', 'split'] },
		animalGroup: 'Bird',
		location: ['land', 'air'],
		attribute: ['distinctive crest', 'bold colors', 'feathers'],
	},
	{
		name: 'Bald Eagle',
		colorScheme: { color: ['brown', 'white'], pattern: ['solid', 'split'] },
		animalGroup: 'Bird',
		location: ['land', 'air'],
		attribute: ['white head', 'impressive wingspan', 'beak', 'feathers', 'talons'],
	},
	{
		name: 'Peacock',
		colorScheme: { color: ['blue', 'green', 'brown'], pattern: ['split', 'solid'] },
		animalGroup: 'Bird',
		location: ['land'],
		attribute: ['vibrant tail feathers', 'elaborate courtship display', 'feathers', 'tail fan', 'mohawk'],
	},
	{
		name: 'Duck',
		colorScheme: { color: ['white'], pattern: ['solid'] },
		animalGroup: 'Bird',
		location: ['land', 'air', 'water'],
		attribute: ['swim', 'webbed feet', 'wings', 'feathers']
	},
	{
		name: 'Lion',
		colorScheme: { color: ['golden', 'brown'], pattern: ['solid'] },
		animalGroup: 'Mammal',
		location: ['land'],
		attribute: ['mane', 'roar', 'sharp claws'],
	},
	{
		name: 'Dolphin',
		colorScheme: { color: ['gray', 'blue'], pattern: ['solid', 'split'] },
		animalGroup: 'Mammal',
		location: ['water'],
		attribute: ['streamlined body', 'intelligence', 'sonar communication', 'fins'],
	},
	{
		name: 'Polar Bear',
		colorScheme: { color: ['white'], pattern: ['solid'] },
		animalGroup: 'Mammal',
		location: ['land', 'water'],
		attribute: ['thick fur', 'large paws', 'excellent swimmers'],
	},
	{
		name: 'Chimpanzee',
		colorScheme: { color: ['black', 'brown'], pattern: ['solid'] },
		animalGroup: 'Mammal',
		location: ['land'],
		attribute: ['highly intelligent', 'tool usage', 'complex social behavior'],
	},
	{
		name: 'Kangaroo',
		colorScheme: { color: ['brown', 'gray'], pattern: ['solid'] },
		animalGroup: 'Mammal',
		location: ['land'],
		attribute: ['powerful hind legs', 'pouch for carrying young', 'boxing'],
	},
	{
		name: 'Red-eyed Tree Frog',
		colorScheme: { color: ['green', 'blue', 'red'], pattern: ['spotted'] },
		animalGroup: 'Amphibian',
		location: ['land'],
		attribute: ['large red eyes', 'sticky toe pads', 'nocturnal'],
	},
	{
		name: 'Axolotl',
		colorScheme: { color: ['pink', 'white', 'gray'], pattern: ['spotted'] },
		animalGroup: 'Amphibian',
		location: ['water'],
		attribute: ['external gills', 'regenerative abilities'],
	},
	{
		name: 'Poison Dart Frog',
		colorScheme: { color: ['brightly colored'], pattern: ['spotted'] },
		animalGroup: 'Amphibian',
		location: ['land'],
		attribute: ['toxic skin secretions', 'small size'],
	},
	{
		name: 'Salamander',
		colorScheme: { color: ['black', 'red', 'orange'], pattern: ['spotted', 'dotted', 'split'] },
		animalGroup: 'Amphibian',
		location: ['land', 'water'],
		attribute: ['fast', 'cute'],
	},
	{
		name: 'American Bullfrog',
		colorScheme: { color: ['green', 'brown'], pattern: ['solid'] },
		animalGroup: 'Amphibian',
		location: ['water', 'land'],
		attribute: ['powerful hind legs', 'loud croaking'],
	},
];
