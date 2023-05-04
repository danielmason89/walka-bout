<script>
  // import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  // import '@skeletonlabs/skeleton/styles/all.css';
  import '../app.postcss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
  import "$lib/firebase/firebase.client";
</script>

<Navbar />

<slot />
<Footer />
