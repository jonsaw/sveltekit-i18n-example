export function getDocumentCookieObject(): { [key: string]: string | undefined } {
	return Object.fromEntries(
		document.cookie.split('; ').map((v) => v.split(/=(.*)/s).map(decodeURIComponent))
	);
}
