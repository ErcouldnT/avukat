<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { t, locale, locales } from '$lib/i18n';

	const handleChange = ({ currentTarget }) => {
		const { value } = currentTarget;

		document.cookie = `lang=${value} ;`;
	};
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/" class="text-xl uppercase">LOGO</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<select bind:value={$locale} on:change={handleChange}>
			{#each $locales as value}
				<option {value} selected={$locale === value}>{$t(`lang.${value}`)}</option>
			{/each}
		</select>
	</svelte:fragment>
</AppBar>
