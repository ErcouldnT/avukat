<script lang="ts">
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	const drawerSettings: DrawerSettings = {
		id: 'hamburger',
		// Provide your property overrides:
		// bgDrawer: 'bg-purple-900 text-white',
		// bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
		// width: 'w-[280px] md:w-[480px]',
		height: 'flex flex-col',
		padding: 'p-4',
		rounded: 'rounded-xl',
		position: 'top'
	};

	import { t } from '$lib/i18n';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { BriefcaseBusiness, ChevronDown, Handshake, Menu, Users } from 'lucide-svelte';

	// import Skull from 'lucide-svelte/icons/skull';

	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};

	const openMenu = () => {
		drawerStore.open(drawerSettings);
	};
</script>

<main class="hidden md:block">
	<nav class="py-4 flex gap-5 justify-center items-center">
		<a class="btn variant-filled" href="/">{$t('navbar.title')}</a>
		<a class="btn variant-filled" href="/biz">{$t('navbar.about')}</a>
		<button class="btn variant-filled" use:popup={popupFeatured}
			>{$t('navbar.crew.title')}<ChevronDown strokeWidth={1} /></button
		>
		<!-- <a href="/ortaklar">Ortaklar</a>
		<a class="btn variant-filled" href="/danışmanlar">Danışmanlar</a>
		<a class="btn variant-filled" href="/avukatlar">Avukatlar</a> -->
		<a class="btn variant-filled" href="/uygulamalar">{$t('navbar.areas')}</a>
		<!-- <a class="btn variant-filled" href="/lokasyonlar">{$t('navbar.points')}</a> -->
		<!-- <a class="btn variant-filled" href="/kariyer">{$t('navbar.career')}</a> -->
		<a class="btn variant-filled" href="/iletişim">{$t('navbar.contact')}</a>
	</nav>
</main>

<main class="block md:hidden">
	<div class="py-4 flex justify-center items-center">
		<button on:click={openMenu} class="btn variant-filled"><Menu />Menü</button>
	</div>
</main>

<div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
	<nav class="list-nav">
		<!-- (optionally you can provide a label here) -->
		<ul>
			<li>
				<a href="/ortaklar">
					<span class="badge bg-primary-500"><Handshake /></span>
					<span class="flex-auto">{$t('navbar.crew.partners')}</span>
				</a>
			</li>
			<li>
				<a href="/danışmanlar">
					<span class="badge bg-primary-500"><Users /></span>
					<span class="flex-auto">{$t('navbar.crew.consultants')}</span>
				</a>
			</li>
			<li>
				<a href="/avukatlar">
					<span class="badge bg-primary-500"><BriefcaseBusiness /></span>
					<span class="flex-auto">{$t('navbar.crew.lawyers')}</span>
				</a>
			</li>
		</ul>
	</nav>
	<div class="arrow bg-surface-100-800-token" />
</div>
