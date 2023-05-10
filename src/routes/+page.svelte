<script lang="ts">
	import messagesStore from '$lib/stores/messages.stores';
	import LandingPage from '$lib/components/LandingPage.svelte';
  import { goto } from '$app/navigation';
  import Event from '$lib/components/Events/Event.svelte';
  export let data;

  async function previous() {
    try {
      await goto(`/?page=${+data.page - 1}`);
    } catch (e) {
      messagesStore.showError();
    }
  }

  async function next() {
    try {
      await goto(`/?page=${+data.page + 1}`);
    } catch (e) {
      messagesStore.showError();
    }
  }
</script>

<LandingPage />

<div>
  <div>
    <h1>Events - Page: {data.page}</h1>
    {#each data.events as event (event.id)}
    <Event {event}/>
    {/each}
  </div>
</div>

<div class="row">
	<div class="col">
		<button on:click={previous} disabled={!data.previous} class="btn btn-info w-100">Previous</button>
	</div>
	<div class="col">
		<button on:click={next} disabled={!data.next} class="btn btn-info w-100">Next</button>
	</div>
</div>

<svelte:head>
  <title>Walka-bout | Home</title>
</svelte:head>
