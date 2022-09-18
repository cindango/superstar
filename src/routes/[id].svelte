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
				<div class="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
	  				<path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
					</svg>
					<strong>{class_entry.fields.city}</strong>
				</div>

				<Body content={class_entry.fields.description} />

				<p>Ages {class_entry.fields.minimumAge}-{class_entry.fields.maximumAge}</p>

				<p>Dates: {class_entry.fields.startDate} - {class_entry.fields.endDate}</p>

			</div>
		</div>

		<div class="w-full lg:w-1/3 flex flex-col gap-8">
			<div class="card w-100 bg-base-100 shadow-xl">
				<div class="card-body">
					<h3>Enroll</h3>
					<p>Enroll in this class.</p>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Enroll</button>
					</div>
				</div>
		</div>
		</div>

	</div>
</section>

<style>

</style>
