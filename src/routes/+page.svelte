<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { t } from '$lib/i18n';
</script>

<!-- <h1>{$t('home.title')}</h1> -->

<main>
	<div class="bg-red-600">
		<Hero />
	</div>

	<div class="bg-cyan-600">
		<p>Some text</p>
	</div>
</main>
