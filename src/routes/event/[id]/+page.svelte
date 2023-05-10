<script>
  import Like from '$lib/components/Events/Like.svelte';
  export let data;
  let event = data.event;
</script>

<div class="container">
  <div class="header">
    <h1>Title: {event.title}</h1>
    <span class="like"><Like {event} /></span>
  </div>
  <div class="sub-header">
    <h2>Organizer/s: {event.organizer}</h2>
  </div>
  <div class="info">
    <div class="date-time">
      <span>{event.date}</span>
      <span>{event.time}</span>
    </div>
    <div class="description">
      <pre>{event.description}</pre>
    </div>
  </div>
</div>

<svelte:head>
	<title>Walka-bout - {event.title}</title>
</svelte:head>

<style>
  .container {
    height: 55vh;
    margin: 0 auto;
    padding: 1rem;
    padding-top: 14rem;
  }
  .like {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0.15;
  }
  .header,
  .sub-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .date-time {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .description {
    text-align: center;
  }
  @media (max-width: 768px) {
    .header h1,
    .sub-header h2 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 576px) {
    .header h1,
    .sub-header h2 {
      font-size: 1rem;
    }
  }
</style>