import i18n, { type Config, type Parser } from 'sveltekit-i18n';
import lang from './lang.json';

export const config: Config = {
	fallbackLocale: 'en',
	translations: {
		en: { lang },
		ms: { lang }
	},
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: 'ms',
			key: 'common',
			loader: async () => (await import('./ms/common.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'ms',
			key: 'home',
			loader: async () => (await import('./ms/home.json')).default
		},
		{
			locale: 'en',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./en/about.json')).default
		},
		{
			locale: 'ms',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./ms/about.json')).default
		}
	]
};

export const { t, loading, locales, locale, loadTranslations, setLocale } = new i18n<
	Parser.Params<{ item?: string }>
>(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
