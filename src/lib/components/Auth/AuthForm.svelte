<script>
	/**
   * @type {string}
   */
	 export let btnName;
  export let resetPassword = false;
  import Button from "../Button.svelte";
</script>

<form on:submit|preventDefault class="form-container">
	<div>
		<label for="email" class="form-label">Email</label>
		<input type="email" name="email" class="form-input" id="email" placeholder="Email" required />
	</div>
  {#if !resetPassword}
	<div>
		<label for="password" class="form-label">Password</label>
		<input
			type="password"
			name="password"
			class="form-input"
			id="password"
			placeholder="*********"
		/>
	</div>
  {/if}
	<button type="submit" class="submit-button" >{btnName}</button>
</form>

<style>
  .form-container {
    max-width: 480px;
    margin: 0 auto;
    padding: 1rem;
  }
  .form-label {
    display: block;
    font-size: 16px;
    margin-bottom: 0.5rem;
  }
  .form-input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    font-size: 16px;
    line-height: 1.5;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
  }
  .submit-button {
    display: block;
    width: 100%;
    padding: 0.5rem;
    font-size: 16px;
    line-height: 1.5;
    background-color: #28a745;
    border: none;
    border-radius: 0.25rem;
    color: #fff;
    cursor: pointer;
    text-align: center;
  }
  @media screen and (max-width: 576px) {
    .form-container {
      padding: 0.5rem;
    }
  }
</style>