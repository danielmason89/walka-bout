<script>
  import Event from "$lib/components/Events/Event.svelte";
  export let data;

  function filterUnlikeBooks(e) {
    const { id } = e.detail;
    data.events = data.events.filter(e => e.id !== id);
  }
</script>

{#each data.events as event (event.id)}
<Event {event} on:toggle_like={filterUnlikeBooks} />
{/each}
