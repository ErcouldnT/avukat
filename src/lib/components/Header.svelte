<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { t, locale, locales } from '$lib/i18n';
	import { Check, Mail, Phone } from 'lucide-svelte';
	import config from '$lib/config';
	import logo from '$lib/assets/logo.jpg';

	let color = $locale;

	function section(c: string): void {
		color = c;
		locale.set(c);
		document.cookie = `lang=${c} ;`;
	}

	// @ts-ignore
	// const handleChange = ({ currentTarget }) => {
	// 	const { value } = currentTarget;

	// 	document.cookie = `lang=${value} ;`;
	// };
</script>

<AppBar padding="p-4">
	<svelte:fragment slot="lead">
		<a href="/">
			<img class="h-28" src={logo} alt={config.title} />
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<!-- <LightSwitch /> -->
		<div class="text-sm flex flex-col items-end gap-5">
			<div class="flex gap-5 justify-center items-center">
				<div class="flex gap-1 justify-center items-center">
					<Phone size={20} />
					<p>{config.tel}</p>
				</div>
				<div class="flex gap-1 justify-center items-center">
					<Mail size={20} />
					<p>{config.email}</p>
				</div>
			</div>

			<div>
				{#each $locales as value}
					<button
						class="chip {color === value ? 'variant-filled' : 'variant-soft'}"
						on:click={() => {
							section(value);
						}}
						on:keypress
					>
						{#if color === value}<span><Check size={12} /></span>{/if}
						<span>{$t(`lang.${value}`)}</span>
					</button>
				{/each}
			</div>

			<!-- <select class="text-base-token rounded-full" bind:value={$locale} on:change={handleChange}>
				{#each $locales as value}
					<option {value} selected={$locale === value}>{$t(`lang.${value}`)}</option>
				{/each}
			</select> -->
		</div>
	</svelte:fragment>
</AppBar>
