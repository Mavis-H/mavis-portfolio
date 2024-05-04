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
		slug: 'python',
		name: 'Python'
	}),
    defineTopic({
		slug: 'algorithm',
		name: 'Algorithm'
	}),
    defineTopic({
		slug: 'leetcode',
		name: 'Leetcode'
	}),
    defineTopic({
		slug: 'dp',
		name: 'Dynamic Programming'
	})
] as const;

export const title = 'Topics';

export const getTopics = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Topic> => items.filter((it) => slugs.includes(it.slug));