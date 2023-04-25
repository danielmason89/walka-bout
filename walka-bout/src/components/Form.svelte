<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
  let name = "";
  let emailAddress = "";
  let errors = { name: "", emailAddress: "" };
  let valid = false;

  const handleSubmit = () => {
    // validate name
    valid = true;
    if (name.trim().length < 3) {
      valid = false;
      errors.name = "Please enter a full name.";
    } else {
      errors.name = "";
    }
    // validate email address
    if (
      !emailAddress.trim().includes("@") ||
      !emailAddress.trim().includes(".") ||
      (emailAddress.trim().length >= 3 && emailAddress.trim().length <= 15)
    ) {
      valid = false;
      errors.emailAddress = "Please enter a valid email address.";
    } else {
      errors.emailAddress = "";
    }
    // validate form
    if (valid) {
      const user = {
        name,
        emailAddress,
      };
      console.log("form is valid", user);
      dispatch("submitForm", user);
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="name" />
  <input
    type="text"
    name="name"
    id="name"
    aria-label="Full Name"
    placeholder="Full Name"
    required
    bind:value={name}
  />
  <div class="error">{errors.name}</div>
  <label for="email" />
  <input
    type="email"
    id="email"
    aria-label="Email Address"
    name="emailAddress"
    placeholder="Email Address"
    bind:value={emailAddress}
    required
  />
  <div class="error">{errors.emailAddress}</div>
  <button> Download Itinerary </button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form label {
    text-align: left;
  }

  form {
    padding-top: 0.25rem;
  }

  input[type="text"],
  input[type="email"] {
    box-sizing: border-box;
    width: 100%;
    color: #2a423a;
    font-style: italic;
    padding: 1em;
    margin: 1em 0em;
  }

  button {
    width: 75%;
    text-align: center;
    padding: 1rem 1.5rem;
    margin-top: 20px;
    background-color: #2da37c;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 1.125em;
    color: #e2e3ed;
    border: none;
    text-align: center;
    border-radius: 1rem;
  }

  .error {
    color: #6ad286;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
</style>
