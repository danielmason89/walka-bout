<script>
  import EventForm from "$lib/components/Events/EventForm.svelte";
  export let form;
</script>

<div class="add-event-container">
  <div class="add-event-row">
    <div class="add-event-col">
      <h1>Add/Create New Event</h1>
    </div>
    <span class="divider"/>
  {#if form && form.success}
    <h2>Success Submit</h2>
  {:else}
  <EventForm {form} />
  {/if}
  </div>

</div>

<style>

  .add-event-container{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-flow: row wrap;
   background-color: #527158;
   height: 85vh;
  }

  .add-event-row{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

  .add-event-col{
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  }

  h1 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
}

.divider {
  border: 0.0005rem solid #747b77;
  background-color: #747b77;
  opacity: 0.5;
  width: 45%;
  margin: 0.5rem 0;
}
/* Media Queries for Responsive Design */
@media screen and (min-width: 276px) {
    h1 {
        font-size: 1.5rem;
    }

    .divider {
        width: 89%;
    }
}

@media screen and (min-width: 768px) {
    h1 {
        font-size: 2rem;
    }
}

@media screen and (min-width: 992px) {
    h1 {
        font-size: 3.5rem;
    }

    .divider {
        width: 100%;
    }
}

@media screen and (min-width: 1200px) {
    h1 {
        font-size: 3.75rem;
    }
}
</style>

<svelte:head>
  <title>Walka-bout | Add Event</title>
</svelte:head>
