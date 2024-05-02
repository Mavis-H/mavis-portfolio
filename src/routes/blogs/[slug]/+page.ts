import { items } from '@data/blogs';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const blog = items.find((item) => {
			return item.slug === params.slug;
		});

		return { blog };
	}
}
