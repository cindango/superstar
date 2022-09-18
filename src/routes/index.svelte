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
      <a class="box" href="/{entry.sys.id}">
        <h4>{entry.fields.title}</h4>
      </a>
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
