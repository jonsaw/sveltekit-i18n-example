<script lang="ts">
	import Languages from '$lib/components/Languages.svelte';
	import { t } from '$lib/translations';
</script>

<p>
	{$t('about.framework')}
</p>

<Languages />
