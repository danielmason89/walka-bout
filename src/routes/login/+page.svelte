<script>
  import LoginWithGoogle from "$lib/components/Auth/LoginWithGoogle.svelte";
  import AuthForm from "$lib/components/Auth/AuthForm.svelte";
  import { loginWithEmailAndPassword } from "$lib/firebase/auth.client";
  import messagesStores from "$lib/stores/messages.stores";
  import { afterLogin } from "$lib/helpers/route.helper";
  import { page } from "$app/stores";
 async function onLogin(e) {
  try {
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const user = await loginWithEmailAndPassword(email, password);
    await afterLogin($page.url, user.uid);
  } catch (error) {
    if (['auth/invalid-email', 'auth/user-not-found', 'auth/wrong-password'].includes(error.code)) {
      messagesStores.showError("Invalid email or password")
    return;
    }
    messagesStores.showError();
  }
 }
</script>

<div class="login-container">
<div class="login-row">
	<div class="login-col">
		<h1>Login Here</h1>
	</div>
</div>
<span class="divider"/>
<AuthForm btnName="Login" on:submit={onLogin} />
<span class="divider"/>
<LoginWithGoogle/>
<span class="divider"/>
<div class="login-row">
	<div class="login-col">
<a href="/reset-password" class="reset-btn">Reset Password</a>
</div>
</div>
</div>

<style>


.login-container {
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #527158;
  }

.login-row {
  display: flex;
  justify-content: center;
  margin-right: -15px;
  margin-left: -15px;
}

.login-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  width: 100%;
}

h1 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
}

.divider {
  margin: 1rem 0;
  border: 0.0005rem solid #747b77;
  background-color: #747b77;
  opacity: 0.5;
  width: 50%;
}

.reset-btn {
    padding: 0.5rem;
    font-size: 16px;
    line-height: 1.5;
    background-color: #ba3b00;
    border: none;
    border-radius: 0.25rem;
    color: #fff;
    cursor: pointer;
    text-align: center;
  }

@media screen and (max-width: 576px) {
    .login-container {
      padding: 0.5rem;
    }
  }

</style>

<svelte:head>
  <title>Walka-bout | Login</title>
</svelte:head>
