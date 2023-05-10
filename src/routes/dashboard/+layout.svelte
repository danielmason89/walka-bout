<script lang="ts">
	import { page } from '$app/stores';
</script>

<main>
	<section class="mission">
    <h1>Events Dashboard</h1>
		<div class="content-wrapper">
			<div class="mission-content">
        <div class="nav-container">
          <ul class="nav-tabs">
            <li class="nav-item">
              <a class="nav-link" class:active={$page.url.pathname === '/dashboard'} aria-current={($page.url.pathname === '/dashboard') ? 'page' : null} href="/dashboard">My Events</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" class:active={$page.url.pathname === '/dashboard/favorites'} aria-current={($page.url.pathname === '/dashboard/favorites') ? 'page' : null} href="/dashboard/favorites">Favorites</a>
          </li>
          </ul>
      </div>
			</div>
      <slot/>
		</div>
		<!-- mission content wrapper ends -->
	</section>
	<!-- contact-info -->
	<section class="contact-section">
		<div class="content-wrapper">
			<h2>Contact us, because you all need this.</h2>
			<address class="contact-content">
				<div>
					<h4>General information</h4>
					<p>
						333 Main St.Lake, Geneva, WI,53147<br />
						555-555-5555<br />
						hello@walka-bout.com
					</p>
				</div>
				<div>
					<h4>Chat with a Facilitator</h4>
					<p>
						555-555-5555<br />
						facilitator@walka-bout.com
					</p>
				</div>
			</address>
			<!-- contact-content div ends -->
		</div>
		<!-- contact content wrapper ends -->
	</section>
</main>

<style>
	/* ==========================================================================
   About Page
   ========================================================================== */

   .nav-container {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        width: 90%;
        margin: 0 auto;
    }

    .nav-tabs {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nav-item {
        margin-right: 10px;
    }

    .nav-link {
        display: inline-block;
        padding: 8px 16px;
        text-decoration: none;
        color: #00ff598e;
        border: 1px solid transparent;
        border-radius: 4px;
        transition: all 0.3s ease;
    }

    .nav-link:hover {
        background-color: #0b192682;
        color: #13c3518e;
        border-color: #0b192682;
        text-decoration: none;
    }

    .nav-link.active {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
}

    .nav-link[aria-current="page"] {
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
    }

	.mission {
		background-color: #527158;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column wrap;
		height: 100vh;
	}

	.content-wrapper {
		width: 80%;
		margin: 50px 0;
	}

	.contact-section {
		background-color: #2a423a;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row wrap;
	}

	.contact-content p {
		margin: 0;
	}

	/* ==========================================================================
   About Page
   ========================================================================== */

	.mission-content {
    display: flex;
			align-items: center;
			padding: 2rem;
	}

	.contact-section .content-wrapper h2 {
		width: 80%;
	}

	.contact-content h4 {
		font-size: 1.5em;
	}

	/* ==========================================================================
About Page
========================================================================== */


	.contact-section .content-wrapper h2 {
		width: 100%;
		height: auto;
		font-size: 2.5rem;
		line-height: 1.25;
		padding-bottom: 1.5rem;
	}

	.contact-content h4 {
		font-size: 1.875em;
	}

	@media only screen and (min-width: 768px) {
		.content-wrapper {
			width: 80vw;
			margin: 4rem 2rem;
		}

		.contact-content h4 {
			font-size: 1.5em;
		}

		.contact-content {
			display: flex;
			justify-content: space-evenly;
			align-items: flex-start;
		}

		.mission-content {
			display: flex;
			align-items: center;
			padding: 2rem;
		}
	}

	@media only screen and (min-width: 1200px) {
		.contact-content h4 {
			font-size: 1.875em;
		}

		.mission h1,
		.contact-section .content-wrapper h2 {
			width: 95%;
			font-size: 3em;
		}
	}
</style>


<svelte:head>
  <title>Walka-bout | Dashboard</title>
</svelte:head>
