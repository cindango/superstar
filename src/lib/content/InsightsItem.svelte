<script context="module">
  import TextButton from './../../lib/buttons/TextButton.svelte';
</script>
<script>
  export let post;
  export let category;
  export let type;
  export let slug;
  import { onMount } from 'svelte';

	import TypeMate from 'typemate';

	let insight;

	onMount(() => {
		const typeMateInstance = new TypeMate(insight, { selector: 'h4' });
		typeMateInstance.apply();
	});
</script>

<a bind:this={insight} class="box" href="/{type}/{type === 'insights' ? category + '/' : ''}{post.fields.slug}">
  <span class="meow">
    {#if post.fields.category}
      {post.fields.category.replace(/-/g, ' ')}
    {:else}
      Insights
    {/if}
  </span>
  <h4>{post.fields.title}</h4>
  <TextButton label={'Read More'} />
</a>

<style>

</style>
