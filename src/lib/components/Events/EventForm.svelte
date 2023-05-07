<script>
	import { enhance } from '$app/forms';
  export let form;
  let submitting = false;

  $: if (form && form.success === false) {
    submitting = false;
  }

  function submitForm(e) {
    submitting = true;
  }
</script>


<section>
<form on:submit={submitForm} use:enhance enctype="multipart/form-data" method="POST">
  <div class="event-form-container">
      <label for="title" class="form-label">Event</label>
      <input
          type="text"
          name="title"
          class="form-control"
          id="title"
          value={form?.title || ''}
          class:is-invalid={form?.error_title}
          placeholder="Enter Event Title"
      />
      {#if form?.error_title}
        <div class="invalid-feedback is-invalid">{form.error_title}</div>
      {/if}
  </div>
  <div class="event-form-container">
      <label for="short-description" class="form-label">Short Description</label>
      <input
          type="text"
          value={form?.description || ''}
          class:is-invalid={form?.error_description}
          name="description"
          class="form-control"
          id="description"
          placeholder="Enter Short Description"
      />
      {#if form?.error_description}
        <div class="invalid-feedback is-invalid">{form.error_description}</div>
      {/if}
  </div>
  <div class="event-form-container">
      <label for="location" class="form-label">Location</label>
      <input
          type="text"
          name="location"
          class:is-invalid={form?.error_location}
          value={form?.location || ''}
          class="form-control"
          id="location"
          placeholder="Enter Location"
      />
      {#if form?.error_location}
        <div class="invalid-feedback is-invalid">{form.error_location}</div>
      {/if}
  </div>
  <div class="event-form-container">
      <label class="form-label" for="date">Date</label>
      <input
          class="form-control"
          placeholder="Enter date"
          class:is-invalid={form?.error_date}
          value={form?.date || ''}
          id="date"
          name="date"
          type="date"
      />
      {#if form?.error_date}
        <div class="invalid-feedback is-invalid">{form.error_date}</div>
      {/if}
  </div>
  <div class="event-form-container">
      <label class="form-label" for="time">Time</label>
      <input
          class="form-control"
          placeholder="Enter time"
          class:is-invalid={form?.error_time}
          id="time"
          value={form?.time || ''}
          name="time"
          type="time"
      />
      {#if form?.error_time}
        <div class="invalid-feedback is-invalid">{form.error_time}</div>
      {/if}
  </div>
  <div class="event-form-container">
      <label class="form-label" for="organizer">Event Organizer/s</label>
      <input
          class="form-control"
          placeholder="Enter event organizer/s"
          id="organizer"
          value={form?.organizer || ''}
          class:is-invalid={form?.error_organizer}
          name="organizer"
      />
      {#if form?.error_organizer}
        <div class="invalid-feedback is-invalid">{form.error_organizer}</div>
      {/if}
  </div>
  <button disabled={submitting}  type="submit" class="submit-button">
    {#if submitting}
    Submitting...
    {:else}
      Submit
    {/if}
  </button>
</form>
</section>

<style>

section {
    padding: 1rem 0.75rem;
    padding-top: 0.5rem;
    background-color: #f8f9fa;
    color: #212529;
    border-radius: 5%;
    height: auto;
    width: 45vw;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border: 0.125rem solid #2da37c;
}

  .event-form-container {
    font-family: Arial, sans-serif;
    padding: 0.45rem;
}

.form-label {
  display: flex;
}

.form-control {
    width: 35vw;
    padding: 0.25rem 0.5rem;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    margin-bottom: 0.65rem;
    text-align: start;
}

.form-control:focus {
    border-color: #2da37c;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 233, 198, 0.6);
}

.invalid-feedback {
    color: #a94442;
    margin-top: -10px;
    padding-bottom: 0.15rem;
}

.submit-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-color: #2da37c;
    border: 1px solid #2da37c;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
}

.submit-button:hover,
.submit-button:focus {
    background-color: #33705e;
    border-color: #33705e;
}

.submit-button:active {
    background-color: #33705e;
    border-color: #003b79;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}

/* Media Queries for Responsive Design */

@media (min-width: 576px) {
    form {
        max-width: 540px;
        margin: 0 auto;
    }
}

@media (min-width: 768px) {
    form {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    form {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    form {
        max-width: 1140px;
    }
  }
</style>