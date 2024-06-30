<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	const imageUrls = [
		'https://atlaslegal.com.tr/img/slider/01.jpg',
		'https://atlaslegal.com.tr/img/slider/02.jpg',
		'https://atlaslegal.com.tr/img/slider/03.jpg',
		'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg'
	];
</script>

<main class="">
	<img class="" src={imageUrls[0]} alt="Hero" loading="lazy" />
</main>
