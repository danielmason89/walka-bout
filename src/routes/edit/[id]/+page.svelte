<script>
	import EventForm from '$lib/components/Events/EventForm.svelte';
  export let data;
  export let form;
</script>

<div class="edit-container">
<EventForm form={{...data.event, ...form }}/>
</div>

<style>
  .edit-container{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-flow: row wrap;
   background-color: #527158;
   height: 95vh;
   padding-top: 5rem;
  }
</style>