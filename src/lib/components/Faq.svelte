<script lang="ts">
</script>

<main class="faq">
	<div class="content-wrapper">
		<h1>Frequently Asked Questions</h1>
		<div class="faq-content">
			<h4>How do I get to the Unplugged retreat?</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
			</p>
		</div>
		<div class="faq-content">
			<h4>What kind of team is right for the Unplugged retreat?</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
			</p>
		</div>
		<div class="faq-content">
			<h4>What size teams can you accommodate?</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</div>
		<div class="faq-content">
			<h4>Is there really no wifi available?</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
			</p>
		</div>
	</div>
</main>

<style>
	/* ==========================================================================
   FAQ Page
   ========================================================================== */

	h1 {
		font-size: 2.45rem;
		text-align: center;
	}

	.content-wrapper {
		width: 90%;
	}

	.faq {
		background-color: #527158;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row wrap;
		height: 85vh;
		height: 85svh;
	}

	.faq .content-wrapper {
		padding-bottom: 0px;
		display: flex;
		align-items: center;
		flex-flow: column wrap;
	}

	.faq .content-wrapper {
		justify-content: space-between;
	}

	.faq h1 {
		padding-bottom: 3.5rem;
		line-height: 1.12;
		width: 100%;
	}

	.faq-content {
		padding-bottom: 1rem;
	}

	.faq-content {
		flex-basis: 45%;
	}

	.faq h4,
	.faq p {
		line-height: 1.125;
	}

	.faq h4 {
		font-weight: 900;
    margin-top: 0rem;
	}

	@media print,
		(-webkit-min-device-pixel-ratio: 1.25),
		(min-resolution: 1.25dppx),
		(min-resolution: 120dpi) {
		/* Style adjustments for high resolution devices */
	}

	@media only screen and (min-width: 768px) {
		h1 {
			font-size: 3rem;
			text-align: center;
		}

		.faq-content {
			flex-basis: 45%;
			margin-top: 2rem;
		}

		.faq .content-wrapper {
			padding: 2rem 0 0 0;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			flex-flow: row wrap;
		}
	}

	@media only screen and (min-width: 1200px) {
		.content-wrapper {
			width: 90vw;
			margin: 3rem 0;
			margin-bottom: 0rem;
		}

		h1 {
			font-size: 2.25em;
			text-align: left;
		}

		h4 {
			font-size: 1.875em;
		}

		p {
			line-height: 1.333;
		}

		.faq h1 {
			width: 100%;
			font-size: 2.5rem;
		}

		.faq h4,
		.faq p {
			line-height: 1;
		}
	}
</style>
