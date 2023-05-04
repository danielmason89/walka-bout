<script>
	let hoverColor = '#333836';
  import authStore from "$lib/stores/auth.store.js"
  import { logout } from "$lib/firebase/auth.client"
  import { goto } from "$app/navigation";
  import messagesStores from "$lib/stores/messages.stores";
  import Alert from './Alert.svelte';

  async function onLogout() {
    try {
      await logout();
      goto("/");
    } catch (e) {
      console.log(e);
      messagesStores.showError();
  }
}
</script>

<header>
	<div class="content-wrapper">
		<figure>
			<a data-sveltekit-preload-data href="/" title="Home">
				<img src="/img/logo_transparent.png" alt="walka-bout logo" />
			</a>
		</figure>
		<div class="header-divider" />
		<nav>
			<ul>
        {#if $authStore.isLoggedIn}
          <li><a data-sveltekit-preload-data href="/" aria-current="page" title="Home">Home</a></li>
          <li><a data-sveltekit-preload-data href="/dashboard" title="Dashboard">Dashboard</a></li>
          <li><a data-sveltekit-preload-data="tap" on:click={onLogout} href="/" title="Logout">Logout</a></li>
				  <li><a data-sveltekit-preload-data href="/faq" title="FAQ">Faq</a></li>
				  <li><a data-sveltekit-preload-data href="/about" title="About">About</a></li>
        {:else}
        <!-- Not Logged In -->
				<li><a data-sveltekit-preload-data href="/" aria-current="page" title="Home">Home</a></li>
				<li><a data-sveltekit-preload-data="tap" href="/signup" title="Signup">Signup</a></li>
        <li><a data-sveltekit-preload-data="tap" href="/login" title="Login">Login</a></li>
        <li><a data-sveltekit-preload-data href="/faq" title="FAQ">Faq</a></li>
				<li><a data-sveltekit-preload-data href="/about" title="About">About</a></li>
        {/if}
			</ul>
		</nav>
	</div>
  <Alert />
</header>

<style>
	/*  Header styles */
	header figure {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row wrap;
	}

  nav li a {
    text-decoration: none;
  }

	.content-wrapper {
		width: 80vw;
	}

	ul a:hover {
		color: #333836;
	}

	img {
		object-fit: cover;
		height: 7rem;
		transition: 0.15s;
		border-radius: 10%;
		margin: 0.5rem 0rem;
	}

	img:hover {
		background-color: #333836;
		transition: 0.5s ease-in-out;
		border-radius: 10%;
		opacity: 1;
	}

	@media screen and (max-width: 720px) {
		header .content-wrapper {
			flex-flow: row wrap;
		}
		.header-divider {
			background: #333836;
			width: 100%;
			height: 0.015rem;
		}

		a {
			text-align: center;
			font-size: 1rem;
      text-decoration: none;
		}

		img {
			object-fit: cover;
			height: 6rem;
			transition: 0.15s;
		}

		img:hover {
			background-color: #333836;
			margin: 0.5rem;
			transition: 0.5s ease-in-out;
			border-radius: 10%;
			opacity: 1;
		}
	}

	header {
		position: fixed;
		width: 100%;
	}

	header .content-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
	}

	header nav {
		font-size: 1.125em;
		font-weight: 700;
		display: flex;
		text-transform: uppercase;
		justify-content: space-around;
		align-items: center;
		flex-flow: row wrap;
		width: 60%;
	}

	header nav ul {
		display: flex;
		justify-content: space-around;
		width: 100%;
		list-style: none;
	}

	header nav ul li {
		font-size: 1.125em;
	}

	a,
	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
		color: inherit;
	}

	@media only screen and (min-width: 1200px) {
		/*Desktop styles here */

		header {
			padding: 2.5px 0;
			padding-bottom: 0px;
		}

		.content-wrapper {
			width: 90vw;
		}

		a {
			display: flex;
			align-items: flex-start;
			padding: 0 1rem;
		}
	}
</style>
