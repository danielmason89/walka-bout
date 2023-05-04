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
  /**
   * @type {string | number | NodeJS.Timeout | undefined}
   */
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
</script>

<Navbar />

<slot />
<Footer />
