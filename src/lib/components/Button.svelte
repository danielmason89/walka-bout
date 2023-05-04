<script>
	export let type = 'primary';
	export let flat = false;
	export let inverse = false;
</script>

<button class={type} class:flat class:inverse>
	<slot />
</button>

<style>
	button {
		border: 0;
		cursor: pointer;
		border-radius: 6px;
		padding: 8px 12px;
		font-weight: bold;
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
	}

	.primary {
		width: 70%;
		text-align: center;
		padding: 0.75rem 1rem;
		margin-top: 20px;
		background-color: #2da37c;
		font-family: 'Raleway', sans-serif;
		font-weight: 500;
		font-size: 1.125em;
		color: #e2e3ed;
		border: none;
		text-align: center;
		border-radius: 1rem;
	}

	.secondary {
		background-color: antiquewhite;
		color: #333;
	}

	.flat {
		background-color: transparent;
		box-shadow: none;
	}

	.primary.inverse {
		background-color: #e2e3ed;
		color: #2da37c;
		border: 2px solid #e2e3ed;
	}

	.secondary.inverse {
		background-color: #2da37c;
		color: #e2e3ed;
		border: 2px solid #2da37c;
	}
</style>
