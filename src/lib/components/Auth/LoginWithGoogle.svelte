<script>
  import { loginWithGoogle } from "$lib/firebase/auth.client";
  import messagesStores from "$lib/stores/messages.stores";
  import { afterLogin } from "$lib/helpers/route.helper";
  import { page } from "$app/stores";
  async function loginGoogle() {
    try {
      const user = await loginWithGoogle();
      await afterLogin($page.url, user.uid);
    }
    catch(e) {
      // @ts-ignore
      if(e.code === "auth/popup-closed-by-user") {
        console.log("User closed the popup");
        return;
      }
      console.log(e);
      messagesStores.showError();
    }
  }
</script>


<div class="row">
	<div class="col">
		<button on:click={loginGoogle} class="google-login-btn" aria-label="Login with Google">Login With Google</button>
	</div>
</div>

<style> 
.row {
  display: flex;
  justify-content: center;
  margin-right: -15px;
  margin-left: -15px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  width: 100%;
}

.google-login-btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background-color: #007bff;
  border: 1px solid #007bff;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  width: 100%;
}

.google-login-btn:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.google-login-btn:focus {
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.google-login-btn:active {
  background-color: #0062cc;
  border-color: #0056b3;
}
</style>