<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { BriefcaseBusiness, ChevronDown, Handshake, Users } from 'lucide-svelte';

	// import Skull from 'lucide-svelte/icons/skull';

	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};
</script>

<nav class="p-5 flex gap-5">
	<a class="btn variant-filled" href="/">Anasayfa</a>
	<a class="btn variant-filled" href="/biz">Hakkımızda</a>
	<button class="btn variant-filled" use:popup={popupFeatured}
		>Ekibimiz<ChevronDown strokeWidth={1} /></button
	>
	<!-- <a href="/ortaklar">Ortaklar</a>
	<a class="btn variant-filled" href="/danışmanlar">Danışmanlar</a>
	<a class="btn variant-filled" href="/avukatlar">Avukatlar</a> -->
	<a class="btn variant-filled" href="/uygulamalar">Ana Uygulama Alanları</a>
	<a class="btn variant-filled" href="/lokasyonlar">Hizmet Noktalarımız</a>
	<a class="btn variant-filled" href="/kariyer">Kariyer</a>
	<a class="btn variant-filled" href="/iletişim">Bize Ulaşın</a>
</nav>

<div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
	<nav class="list-nav">
		<!-- (optionally you can provide a label here) -->
		<ul>
			<li>
				<a href="/ortaklar">
					<span class="badge bg-primary-500"><Handshake /></span>
					<span class="flex-auto">Ortaklar</span>
				</a>
			</li>
			<li>
				<a href="/danışmanlar">
					<span class="badge bg-primary-500"><Users /></span>
					<span class="flex-auto">Danışmanlar</span>
				</a>
			</li>
			<li>
				<a href="/avukatlar">
					<span class="badge bg-primary-500"><BriefcaseBusiness /></span>
					<span class="flex-auto">Avukatlar</span>
				</a>
			</li>
			<!-- ... -->
		</ul>
	</nav>
	<div class="arrow bg-surface-100-800-token" />
</div>
