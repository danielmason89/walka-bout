<script>
	import { page } from '$app/stores';
  import { goto } from "$app/navigation";
  import AuthForm from "$lib/components/Auth/AuthForm.svelte";
  import LoginWithGoogle from "$lib/components/Auth/LoginWithGoogle.svelte";
  import { registarWithEmailAndPassword } from "$lib/firebase/auth.client";
  import { afterLogin } from "$lib/helpers/route.helper";
  import messagesStores from "$lib/stores/messages.stores";
  async function registar(e) {
    try {
      const formData = new FormData(e.target);
      const email = formData.get("email");
      const password = formData.get("password");
      if (!email || !password) {
        messagesStores.showError("Please enter a valid email and password.");
        return;
      }
      if (password.length < 6) {
        messagesStores.showError("Password must be at least 6 characters or more.");
        return;
      }
      const user = await registarWithEmailAndPassword(email, password);
      await afterLogin($page.url, user.uid);
    } catch (e) {
      if ( e.code === 'auth/email-already-in-use') {
        messagesStores.showError("You've already signed up with this email. Please login.")
        await goto("/login");
        return;
      }
      console.log(e.code);
      messagesStores.showError();
    }
  }
</script>

<div class="sign-container">
  <div class="title">
    <h1>Sign-Up Here</h1>
  </div>
<span class="divider"/>
<AuthForm on:submit={registar} btnName="Sign-up"/>
<span class="divider"/>
<LoginWithGoogle/>
</div>

<style>

h1 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
}

  .sign-container {
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #527158;
  }

  .title {
    font-size: 2rem;
    padding-right: 15px;
    padding-left: 15px;
  }

  .divider {
  margin: 1rem 0;
  border: 0.0005rem solid #747b77;
  background-color: #747b77;
  opacity: 0.5;
  width: 50%;
  }
  @media screen and (max-width: 576px) {
    .sign-container {
      padding: 0.5rem;
    }
  }
</style>


<svelte:head>
  <title>Walka-bout | Sign Up</title>
</svelte:head>
