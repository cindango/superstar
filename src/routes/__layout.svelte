<script context="module">
import Time from "svelte-time";
</script>
<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '@fontsource/barlow/300.css';
	import '@fontsource/barlow/400.css';
	import '@fontsource/barlow/500.css';
	import '@fontsource/barlow-semi-condensed/300.css';
	import '@fontsource/barlow-semi-condensed/400.css';
	import '@fontsource/barlow-semi-condensed/500.css';
	import { onMount } from 'svelte';
	import Logo from './../lib/header/Logo.svelte';
	import { navigating, page } from '$app/stores';

</script>

<Header />

<main>
	<slot />
</main>

<footer>

</footer>
