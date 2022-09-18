<script context="module">

  export async function load({ fetch }) {
      const [{ content }] = await Promise.all([fetch('/data.json').then((r) => r.json())]);
      return {
          props: {
              content
          }
      };
  }
</script>

<script>
export let content;
</script>

<section class="container">

  <div class="header flex flex-row justify-between">

    <h1 class="w-auto lg:w-1/3">Classes</h1>

  </div>

  <div class="grid lg:grid-cols-3 gap-8 w-full">
    {#each content.items as entry}
      <div>
      <a href="/{entry.sys.id}">
        <h4>{entry.fields.title}</h4>
      </a>
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg>
        <strong>{entry.fields.city}</strong>
      </div>

      <p>Ages {entry.fields.minimumAge}-{entry.fields.maximumAge}</p>

      <p>Dates: {entry.fields.startDate} - {entry.fields.endDate}</p>
      </div>
    {/each}
  </div>

</section>

<style>
  .header {
    align-items: center;
    padding-bottom: 3.5rem;
  }
  .categories {
    display: flex;
    gap: 25px;
    justify-content: end;
  }
  .categories input, .categories label {
    display: none;
    cursor: pointer;
  }
  .categories label p {
    text-transform: lowercase;
    font-weight: 400;
    opacity: .7;
    transition: opacity .2s ease;
    padding-top: .25rem;
  }
  .categories label:hover p {
    opacity: 1;
  }
  .categories input[type="radio"]:checked + label p {
    opacity: 1;
    border-bottom: 1px solid;
    padding-bottom: .25rem;
  }
  select {
    color: #fff;
    min-width: 175px;
  }
  @media (min-width:1024px) {
    h1 {
      font-size: 3.5rem;
    }
    .categories label {
      display: block;
    }
    .categories label p {
      font-size: 1.25rem;
    }
    select {
      display: none;
    }
  }
</style>
