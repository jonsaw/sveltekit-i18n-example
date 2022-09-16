import { browser } from '$app/environment';
import { loadTranslations, locale } from '$lib/translations';
import * as cookie from 'cookie';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;

	let defaultLocale = 'en';
	if (browser && cookie.parse(document.cookie).language) {
		defaultLocale = cookie.parse(document.cookie).language;
	}

	const initLocale = locale.get() || defaultLocale;

	await loadTranslations(initLocale, pathname);

	return {};
};
