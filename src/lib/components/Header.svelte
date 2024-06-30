<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { t, locale, locales } from '$lib/i18n';
	import { Mail, Phone } from 'lucide-svelte';

	// @ts-ignore
	const handleChange = ({ currentTarget }) => {
		const { value } = currentTarget;

		document.cookie = `lang=${value} ;`;
	};
</script>

<AppBar padding="p-4">
	<svelte:fragment slot="lead">
		<a href="/" class="text-xl uppercase">LOGO</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<!-- <LightSwitch /> -->
		<div class="text-sm flex flex-col items-end">
			<div class="flex gap-5 justify-center items-center">
				<div class="flex gap-1 justify-center items-center">
					<Phone size={20} />
					<p>+90 216 305 91 91</p>
				</div>
				<div class="flex gap-1 justify-center items-center">
					<Mail size={20} />
					<p>info@atlaslegal.com.tr</p>
				</div>
			</div>
		</div>
		<select class="text-base-token rounded-full" bind:value={$locale} on:change={handleChange}>
			{#each $locales as value}
				<option {value} selected={$locale === value}>{$t(`lang.${value}`)}</option>
			{/each}
		</select>
	</svelte:fragment>
</AppBar>
