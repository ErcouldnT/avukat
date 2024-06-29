import { dev } from '$app/environment';
import i18n from 'sveltekit-i18n';
import lang from './lang.json';

export const defaultLocale = 'tr';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
	log: {
		level: dev ? 'warn' : 'error'
	},
	translations: {
		en: { lang },
		tr: { lang }
	},
	loaders: [
		{
			locale: 'en',
			key: 'menu',
			loader: async () => (await import('./en/menu.json')).default
		},
		{
			locale: 'en',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./en/about.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'tr',
			key: 'menu',
			loader: async () => (await import('./tr/menu.json')).default
		},
		{
			locale: 'tr',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./tr/about.json')).default
		},
		{
			locale: 'tr',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./tr/home.json')).default
		}
	]
};

export const {
	t,
	loading,
	locales,
	locale,
	translations,
	loadTranslations,
	addTranslations,
	setLocale,
	setRoute
} = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
