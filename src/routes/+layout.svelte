<script>
  // import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  // import '@skeletonlabs/skeleton/styles/all.css';
  import '../app.postcss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
  import "$lib/firebase/firebase.client";
  import { onMount } from "svelte";
  import messagesStores from '$lib/stores/messages.stores';
  import { sendJWTToken } from '$lib/firebase/auth.client';
  import authStore from '$lib/stores/auth.store';
  import eventNotifyStore from '$lib/stores/event-notify.store';
  import { onDestroy } from 'svelte';
  let notifyEvent;

const unsub = eventNotifyStore.subscribe((event) => {
  if (!$authStore.isLoggedIn) {
    notifyEvent = event;
    return;
  }

    notifyEvent = event;
    console.log('notifyEvent', notifyEvent);

});

onDestroy(() => {
  unsub();
});

function closeAlert() {
  notifyEvent = null;
}

  export let data;
  let isLoggedIn = data.isLoggedIn;
  $: isLoggedIn = $authStore.isActive ? $authStore.isLoggedIn: data.isLoggedIn;

  let timerId;
  async function sendSeverToken() {
    try {
      await sendJWTToken();
    } catch(error) {
      clearInterval(timerId);
      messagesStores.showError();
      console.log(error);
    }

  }

  onMount(async () => {
    try {
      await sendSeverToken();
     timerId = setInterval(async() => {
        await sendSeverToken();
      }, 1000 * 10 * 60)
    } catch(e) {
      console.log(e);
      messagesStores.showError();
    }

    return () => {
      clearInterval(timerId);
    }
  });

  // function closeMessage() {
	// 	messagesStores.hide();
	// }
</script>

<Navbar {isLoggedIn} />
<slot />
{#if notifyEvent}
<div
			class="toast show position-fixed top-0 end-0 m-3"
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
		>
			<div class="toast-header">
				<strong class="me-auto">Congrats {notifyEvent.organizer} - your event was successfully created</strong>
				<button
					on:click={closeAlert}
					type="button"
					class="btn-close"
					data-bs-dismiss="toast"
					aria-label="Close"
				>
        ❌
        </button>
			</div>
			<div class="toast-body">
				Click here to view 😄 <button class="toast-btn"><a data-sveltekit-preload-data="hover" href="/event/{notifyEvent.id}"> {notifyEvent.title}</a></button>
			</div>
		</div>
    {/if}
<Footer />

<style>
  /* Toast */
.toast {
    max-width: 100%;
    font-size: 0.875rem;
    background-color: #747b77;
    border: 1px solid;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    overflow: hidden;
}

.toast.show {
    display: block;
    opacity: 1;
}

.toast-header {
    display: flex;
    align-items: center;
    padding: 0.25rem 0.25rem;
    color: #a2a6ab;
    background-color: #213547;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.me-auto {
    text-align: center;
    font-size: 0.7rem;
    padding-right: 0.35rem;
}

.toast-body {
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: column wrap ;
}

/* Button */
.btn-close {
    border: 0;
    cursor: pointer;
    padding: 0.15rem;
    margin: 0 0 0 0.25rem;
    font-size: 1rem;
    line-height: 1;
    opacity: 0.5;
    transition: opacity 0.15s ease;
}

.btn-close:hover {
    opacity: 0.75;
}

.toast-btn {
  margin-top: 0.4rem;
  border: 5px solid #fff;
}

.toast-btn:hover {
  border: 5px solid #747bff;
  transition: 0.5s ease;
}

a {
  color: #a2a6ab;
}

a:hover {
  color: #747bff;
  border: 1px #747bff;
}

/* Positioning */
.position-fixed {
    position: fixed;
}

.top-0 {
    top: 0;
}

.end-0 {
    right: 0;
}

.m-3 {
  margin: 10rem;
  margin-left: 1rem;
  margin-right: 4rem;
}
</style>
