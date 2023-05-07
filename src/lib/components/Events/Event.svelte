<script>
  import Like from './Like.svelte';
  export let event;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="container">
  <div class="text-container">
      <h2>Title: {event.title}</h2>
      <h2>Organizer: {event.organizer}</h2>
      <h2>Location: {event.location}</h2>
      <p>
          {event.description}
          {event.date} - {event.time}
      </p>
     <Like {event} />
  </div>
</div>

<style>
  .container {
      display: flex;
      flex-wrap: wrap;
      margin-top: 2rem;
      border: solid 1px gray;
      cursor: pointer;
  }

  .text-container {
      flex: 1 1 100%;
      max-width: 100%;
  }

  @media (min-width: 576px) {

      .text-container {
          flex: 0 0 50%;
          max-width: 50%;
      }
  }

  @media (min-width: 768px) {

      .text-container {
          flex: 0 0 66.6666%;
          max-width: 66.6666%;
      }
  }
</style>