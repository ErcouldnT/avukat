<script lang="ts">
	// import { page } from '$app/stores';

	export let title: string;
</script>

<!-- <h1 class="capitalize">{decodeURI($page.url.pathname).split('/')[1]}</h1> -->
<main class="bg-blue-600 py-10">
	<div class="container mx-auto flex justify-between items-center">
		<h1 class="text-xl">{title}</h1>
		<div class="flex text-sm gap-2">
			<a href="/">Anasayfa</a>
			<p>{' / '}</p>
			<strong>{title}</strong>
		</div>
	</div>
</main>
