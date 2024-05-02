<script lang="ts">
	import { countMonths, getMonthName, getTimeDiff } from '$lib/utils/helpers';
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { Blog } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';

	export let blog: Blog;
	$: date = `${getMonthName(blog.date.getMonth())} ${blog.date.getDate()}, ${blog.date.getFullYear()}`;
</script>

<Card color={blog.color} href={`${base}/blogs/${blog.slug}`}>
	<CardLogo alt={blog.name} src={getAssetURL(blog.logo)} size={60} radius={'0'} />
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={blog.name} />
		<div class="row">
			{#each blog.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<div class="col sm:h-100px md:h-160px">
		<p
			class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1 line-clamp-4"
		>
			{@html blog.shortDescription}
		</p>
	</div>
	<div class="row justify-between text-0.8em font-400">
		<Chip>{date}</Chip>
	</div>
	<CardDivider />
</Card>
