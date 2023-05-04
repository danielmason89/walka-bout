<script lang="ts">
</script>

<main>
	<section class="mission">
		<div class="content-wrapper">
			<h2>Dashboard - Coming soon.</h2>
			<div class="mission-content">
			</div>
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

	.mission {
		background-color: #527158;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row wrap;
		height: 100vh;
		padding-top: 5.5rem;
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
		padding-top: 0.5rem;
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


	.mission h2,
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
			justify-content: space-evenly;
			align-items: center;
			padding: 2rem;
		}
	}

	@media only screen and (min-width: 1200px) {
		.contact-content h4 {
			font-size: 1.875em;
		}

		.mission h2,
		.contact-section .content-wrapper h2 {
			width: 95%;
			font-size: 3em;
		}
	}
</style>
