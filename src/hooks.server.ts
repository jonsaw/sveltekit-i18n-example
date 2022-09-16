import { locale } from '$lib/translations';
import type { Handle } from '@sveltejs/kit';
import * as cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	if (cookies.language) {
		locale.set(cookies.language);

		// Attach user setting into local env (this is optional)
		event.locals.language = cookies.language;
	}

	const response = await resolve(event);

	return response;
};
