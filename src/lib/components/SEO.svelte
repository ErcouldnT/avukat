<script lang="ts">
	import { onMount } from 'svelte';
	import { seo } from '$lib/stores/seo';
	import config from '$lib/config';

	export let title: string = config.title;
	export let subtitle: string = config.slogan;
	export let description: string = config.description;

	const loadSeo = () => {
		seo.set({
			title,
			subtitle,
			description
		});
	};

	onMount(() => {
		loadSeo();
	});
</script>

<svelte:head>
	<title>{title + ' ' + subtitle}</title>
	<meta name="description" content={description} />

	<meta name="keywords" content={config.keywords.join(', ')} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={config.url} />

	<meta property="twitter:url" content={config.url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
</svelte:head>
