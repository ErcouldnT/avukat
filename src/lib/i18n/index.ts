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
		tr: { lang },
		en: { lang }
	},
	loaders: [
		{
			locale: 'tr',
			key: 'navbar',
			loader: async () => (await import('./tr/navbar.json')).default
		},
		{
			locale: 'tr',
			key: 'contact',
			loader: async () => (await import('./tr/contact.json')).default
		},
		{
			locale: 'tr',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./tr/home.json')).default
		},
		{
			locale: 'en',
			key: 'navbar',
			loader: async () => (await import('./en/navbar.json')).default
		},
		{
			locale: 'en',
			key: 'contact',
			loader: async () => (await import('./en/contact.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./en/home.json')).default
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
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-expect-error
} = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
