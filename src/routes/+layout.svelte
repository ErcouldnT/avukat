<script lang="ts">
	import '../app.postcss';
	import { AppShell, getDrawerStore } from '@skeletonlabs/skeleton';

	import { t } from '$lib/i18n';
	import SEO from '$lib/components/SEO.svelte';
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { initializeStores, Drawer } from '@skeletonlabs/skeleton';
	import { X } from 'lucide-svelte';
	import config from '$lib/config';
	initializeStores();
	const drawerStore = getDrawerStore();

	const closeMenu = () => {
		drawerStore.close();
	};
</script>

<SEO />
<Drawer>
	<div class="p-4 flex justify-between items-center">
		<h2>{config.title + ' ' + config.slogan}</h2>
		<button on:click={closeMenu}><X /></button>
	</div>
	<hr />

	<nav class="p-4 list-nav">
		<ul>
			<li><a on:click={closeMenu} href="/">{$t('navbar.title')}</a></li>
			<li><a on:click={closeMenu} href="/biz">{$t('navbar.about')}</a></li>
			<li><a on:click={closeMenu} href="/ortaklar">Ortaklar</a></li>
			<li><a on:click={closeMenu} href="/danışmanlar">Danışmanlar</a></li>
			<li><a on:click={closeMenu} href="/avukatlar">Avukatlar</a></li>
			<li><a on:click={closeMenu} href="/uygulamalar">{$t('navbar.areas')}</a></li>
			<li><a on:click={closeMenu} href="/iletişim">{$t('navbar.contact')}</a></li>
		</ul>
	</nav>
</Drawer>

<AppShell>
	<!-- <div class="py-4 container mx-auto"> -->
	<Header />
	<!-- </div> -->
	<div class="sticky top-0 z-10 bg-surface-50-900-token">
		<Navbar />
	</div>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
