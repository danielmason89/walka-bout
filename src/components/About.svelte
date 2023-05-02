<script lang="ts">
</script>

<main>
	<section class="mission">
		<div class="content-wrapper">
			<h2>Our Mission - we want to make you the team you always wanted to be.</h2>
			<div class="mission-content">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint accusamus consequuntur
					ducimus fugiat beatae eaque cum ad minima architecto, porro voluptatem! Id odit excepturi
					optio doloremque voluptates in impedit accusamus.
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint accusamus consequuntur
					ducimus fugiat beatae eaque cum ad minima architecto, porro voluptatem! Id odit excepturi
					optio doloremque voluptates in impedit accusamus.
				</p>
			</div>
		</div>
		<!-- mission content wrapper ends -->
	</section>
	<!-- contact-info -->
	<section class="map">
		<figure>
			<iframe
				title="walkabout's address"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.901740132207!2d-88.42244978433465!3d42.599828227918074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88058beaba2a015f%3A0x4b28e3671bb3e0e9!2s333%20Main%20St%2C%20Lake%20Geneva%2C%20WI%2053147%2C%20USA!5e0!3m2!1sen!2sca!4v1642567748055!5m2!1sen!2sca"
				width="600"
				height="450"
				style="border:0;"
				loading="lazy"
			/>
		</figure>
	</section>

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

	.map figure {
		height: 0;
		padding-bottom: 45%;
		overflow: hidden;
		position: relative;
	}

	.map iframe {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	/* ==========================================================================
   About Page
   ========================================================================== */

	.mission-content {
		padding-top: 0.5rem;
	}

	.mission-content p {
		margin: 0rem 3rem;
		margin-bottom: 1em;
	}

	.map figure {
		padding-bottom: 45.5%;
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

	.map figure {
		padding-bottom: 37.5%;
	}

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
