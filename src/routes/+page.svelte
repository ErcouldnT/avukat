<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { t } from '$lib/i18n';
</script>

<!-- <h1>{$t('home.title')}</h1> -->

<main>
	<div class="">
		<Hero />
	</div>

	<div class="">
		<p>{$t('home.text1')}</p>
		<p>{$t('home.text2')}</p>
	</div>
</main>
