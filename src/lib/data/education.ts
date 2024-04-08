import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Master degree of Computer Science',
		description: '',
		location: 'St. Louis, MO',
		logo: Assets.WashU,
		name: '',
		organization: 'Washington University in St. Louis',
		period: { from: new Date(2021, 8, 0), to: new Date(2023, 5, 0) },
		shortDescription: '',
		slug: 'washu',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'Bachelors degree of Computer Science',
		description: '',
		location: 'Ningbo, China',
		logo: Assets.UNNC,
		name: '',
		organization: 'University of Nottingham Ningbo China',
		period: { from: new Date(2016, 9, 0), to: new Date(2020, 7, 0) },
		shortDescription: '',
		slug: 'unnc',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

export const title = 'Education';
