import type { Handle } from '@sveltejs/kit';
import * as cookie from 'cookie';
import { locale } from './lib/translations';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	if (cookies.language) {
		locale.set(cookies.language || 'en');
	}

	const response = await resolve(event);

	return response;
};
