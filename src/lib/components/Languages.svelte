<script lang="ts">
	import { browser } from '$app/environment';
	import { locale } from '$lib/translations';

	const languages = [
		{ code: 'en', name: 'English' },
		{ code: 'ms', name: 'Bahasa Malaysia' }
	];

	$: selected = locale.get();

	const handleOnChange = () => {
		if (browser) {
			document.cookie = `language=${selected};path=/`;
		}
		locale.set(selected);
	};
</script>

<select bind:value={selected} on:change={handleOnChange}>
	{#each languages as l (l.code)}
		<option value={l.code}>{l.name}</option>
	{/each}
</select>
