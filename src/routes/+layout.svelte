<script lang="ts">
	import { t } from '$lib/translations';
</script>

<slot />

<nav>
	<a href="/">{$t('common.home')}</a>
	<a href="/about">{$t('common.about')}</a>
</nav>
