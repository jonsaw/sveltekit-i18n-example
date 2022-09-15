import { browser } from '$app/environment';
import { loadTranslations, locale } from '$lib/translations';
import { getDocumentCookieObject } from '$lib/utils/cookies';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;

	let defaultLocale = (browser ? getDocumentCookieObject()['language'] : '') || 'en';

	const initLocale = locale.get() || defaultLocale;

	await loadTranslations(initLocale, pathname);

	return {};
};
