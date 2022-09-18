<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import MobileNav from './MobileNav.svelte';
	import { browser } from '$app/env';
	import Logo from './Logo.svelte';

	let show_mobile_nav = false;

</script>

<header>
	<div class="inner">
		<nav>

			<ul>
				<li class="logo">
					<a sveltekit:prefetch href="/">
						<Logo />
					</a>
				</li>
			</ul>

			<ul class="links">
				<li>Classes</li>
			</ul>

		</nav>
	</div>
</header>

<MobileNav bind:show={show_mobile_nav} />

<style>
	.mobile-toggle {
		display: flex;
		height: 26px;
	}
	.mobile-toggle button {
		display: block;
		height: 100%;
	}
	.mobile-toggle button span {
		display: block;
		height: 1px;
		width: 30px;
		background: white;
		margin: .5rem 0;
		transition: transform .5s ease, margin .5s ease;
	}
	.mobile-toggle button span.close {
		margin: 0;
	}
	.mobile-toggle button span.close:nth-child(1) {
		transform: rotate(45deg);
	}
	.mobile-toggle button span.close:nth-child(2) {
		transform: rotate(-45deg);
		margin-top: -1px;
	}
	header {
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 99;
	}
	.logo {
		opacity: 1;
		transition: opacity .5s ease;
	}
	.inner {
		width: 100%;
		max-width: 1600px;
		padding: .85rem 1.25rem;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	ul.links {
		display: none;
    justify-content: flex-end;
    gap: 30px;
	}

	li {
		line-height: 100%;
	}

	li.logo {
		padding-top:4px;
		padding-bottom: 4px;
	}

	nav a {
		height: 100%;
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 0.04em;
		text-decoration: none;
		transition: color 0.25s linear, opacity .5s ease;
		text-transform: lowercase;
		cursor: pointer;
	}

	@media (min-width:820px) {
		.inner {
			padding: 1.2rem 2rem;
		}
		.mobile-toggle {
			display: none;
		}
		ul.links {
			display: flex;
		}
		li.sub-menu {
			padding-right: 18px;
		}
		li.sub-menu .top-level > span {
			position: absolute;
			top: 1px;
			right: -20px;
		}
	}
	@media (max-width:820px) {
		nav {
			align-items: center;
		}
		header.mobile-open {
			background-color: rgba(var(--background-color-rgb), .85);
	    transition-delay: 1s;
		}
		:global(body > div.no-scroll) {
			position: fixed;
			overflow: hidden;
		}
	}
</style>
