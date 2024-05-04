<script lang="ts">
	import { countMonths, getMonthName, getTimeDiff } from '$lib/utils/helpers';
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import type { Blog } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';

	export let blog: Blog;
	$: date = `${getMonthName(blog.date.getMonth())} ${blog.date.getDate()}, ${blog.date.getFullYear()}`;
</script>

<Card color={blog.color} href={`${base}/blogs/${blog.slug}`} bgImg={getAssetURL(blog.logo)}>
	<div class="m-t-5px row justify-between items-center">
		<CardTitle title={blog.name} />
		<div class="row">
			{#each blog.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<div class="col h-100%">
		<p
			class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1 line-clamp-2"
		>
			{@html blog.shortDescription}
		</p>
	</div>
	<div class="row justify-between text-0.8em font-400">
		<Chip>{date}</Chip>
	</div>
	<CardDivider />
	<div class="row flex-wrap">
		{#each blog.topics as tech}
			<Chip>{tech.name}</Chip>
		{/each}
	</div>
</Card>
