<script context="module">
	export const prerender = true;

	export async function load({ fetch, params }) {
		const { id } = params;
    const url = `${params.id}.json`;
    const res = await fetch(url);

    if (res.ok) {
        const { class_entry } = await res.json();

        return {
            props: {
                class_entry: class_entry.items[0]
            }
        };
    }

    return {
        status: res.status,
        error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script>
	export let class_entry;
	import Body from './../lib/content/Body.svelte';
</script>

<svelte:head>
<title>{class_entry.fields.title} | Superstar</title>
</svelte:head>

<section class="container insights-detail">
  <div class="lg:flex lg:flex-row gap-12 insights-frame">
		<div class="w-full lg:w-2/3 flex flex-col gap-8">
			<div class="heading flex flex-col gap-8 items-start">

				<h1>{class_entry.fields.title}</h1>

				<Body content={class_entry.fields.description} />

				<p>Age Group: {class_entry.fields.ageGroup}</p>

				<p>Dates: {class_entry.fields.startDate} - {class_entry.fields.endDate}</p>

			</div>

		</div>
	</div>
</section>

<style>
	.insights-frame {
		border: 1px solid rgba(255,255,255,.2);
		border-left: 3px solid rgba(255,255,255,.8);
		max-width: 1240px;
		margin: 0 auto;
		padding: 1rem;
	}
	.insights-detail .heading h1 {
		font-size: 2rem;
		padding-right: 1rem;
	}
	.heading .meow {
		color: #fff;
		text-transform: lowercase;
    border-bottom: .8px solid;
    padding-bottom: 0.25rem;
    display: inline-block;
	}
	.heading .date {
		font-weight: 400;
		opacity: 1;
		display: inline-block;
		margin-left: 2rem;
	}
	.contributors {
		padding: .9rem 0 1.1rem;
		border-top: 1px solid rgba(255,255,255,.2);
		border-bottom: 1px solid rgba(255,255,255,.2);
	}
	/*.contributors > div {
		border-left: .8px solid;
		padding-left: .75rem;
	}*/
	.contributors p {
		font-family: var(--font-condensed);
		line-height: 130%;
		font-size: 1rem;
	}
	p.c-title {
		opacity: .7;
	}
	h4 {
		font-family: var(--font-condensed);
    font-size: 1.1rem;
		font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .05rem;
		margin-top: .5rem;
		margin-bottom: 1rem;
	}
	:global(#request .submitted-message) {
		max-width: 500px;
		margin: 0 auto 2rem;
		background: rgba(255,255,255,.05);
		padding: 2rem;
	}
	:global(#request .submitted-message p strong) {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		display: block;
	}
	@media (min-width:720px) {
		.insights-frame {
			padding: 4rem;
		}
		.container {
			padding: 8rem 2rem;
		}
		.insights-detail .heading h1 {
			font-size: 3.25rem;
		}
		:global(.insights-detail .content) {
			padding-right: 5%;
		}
		:global(.insights-detail .content p) {
			font-size: 1.15rem;
		}
	}
</style>
