<script>
  import Event from "$lib/components/Events/Event.svelte";
  export let data;
</script>

{#each data.events as event (event.id)}
<Event {event} />
{/each}
