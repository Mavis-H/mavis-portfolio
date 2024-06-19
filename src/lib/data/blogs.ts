import Assets from './assets';
import type { Blog } from '../types';
import blog_0 from '../md/blog_0.md?raw';
import { getTopics } from './topics';

export const items: Array<Blog> = [
	{
		slug: 'container-with-most-water-intuitive-solution',
		color: 'lightblue',
		description:
			blog_0,
		shortDescription:
			'An intuitive solution to find the container with most water in a 1D array using <b>two pointers</b>.',
		id: 0,
		links: [{ to: 'https://leetcode.com/problems/container-with-most-water/', label: 'Leetcode' }],
		logo: Assets.Blog_0,
		name: 'Container with Most Water Intuitive Solution',
		date: new Date(),
        topics: getTopics('lc', '2pointers', 'ar', 'algo')
	},
];

export const title = 'Blogs';
