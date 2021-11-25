import heroes from '../data/heroes';

// import { heroes } from './data/heroes';

// console.log(heroes);

export const getHeroeById = (id) => {
	return heroes.find((val) => val.id === id);
};

// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => {
	return heroes.filter((val) => val.owner === owner);
};

// console.log(getHeroesByOwner('DC'));

// console.log(owners);
