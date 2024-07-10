import Assets from './assets';
import type { Blog } from '../types';
import blog_0 from '../md/blog_0.md?raw';
import blog_1 from '../md/blog_1.md?raw';
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
		date: new Date('June 18, 2024'),
        topics: getTopics('lc', '2pointers', 'ar', 'algo')
	},
	{
		slug: 'path-sum-3-of-binary-tree',
		color: 'lightcoral',
		description:
			blog_1,
		shortDescription:
			'3 solutions with different level of optimization, using <b>DFS</b>.',
		id: 0,
		links: [{ to: 'https://leetcode.com/problems/path-sum-iii/', label: 'Leetcode' }],
		logo: Assets.Blog_1,
		name: 'Find All Path with Target Sum in Binary Tree',
		date: new Date('July 9, 2024'),
        topics: getTopics('lc', 'bt', 'algo', 'dfs')
	},
];

export const title = 'Blogs';
