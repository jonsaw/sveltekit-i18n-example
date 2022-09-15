<script lang="ts">
	import Languages from '$lib/components/Languages.svelte';
	import { t } from '$lib/translations';
</script>

<h1>{$t('home.welcomeTo', { item: 'SvelteKit' })}</h1>
<p>{@html $t('home.visit')}</p>

<Languages />
