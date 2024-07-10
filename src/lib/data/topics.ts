import type { Topic } from '../types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';


const defineTopic = <S extends string>(
	topic: Topic<S>
): Topic<S> => {
	const out: Topic<S> = topic;

	return out;
};

export const items = [
	defineTopic({
		slug: 'py',
		name: 'Python'
	}),
    defineTopic({
		slug: 'algo',
		name: 'Algorithm'
	}),
    defineTopic({
		slug: 'lc',
		name: 'Leetcode'
	}),
    defineTopic({
		slug: 'dp',
		name: 'Dynamic Programming'
	}),
    defineTopic({
		slug: '2pointers',
		name: 'Two Pointers'
	}),
    defineTopic({
		slug: 'ar',
		name: 'Array'
	}),
    defineTopic({
		slug: 'bt',
		name: 'Binary Tree'
	}),
    defineTopic({
		slug: 'dfs',
		name: 'Depth First Search'
	})
] as const;

export const title = 'Topics';

export const getTopics = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Topic> => items.filter((it) => slugs.includes(it.slug));