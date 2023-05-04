<script>
  import AuthForm from "$lib/components/Auth/AuthForm.svelte";
  import { resetPasswordEmail } from "$lib/firebase/auth.client";
  import messagesStores from "$lib/stores/messages.stores";
  import { goto } from "$app/navigation";
  let hideForm = false;
  async function onResetPassword(e) {
    try {
    const formData = new FormData(e.target);
    const email = formData.get("email");
    await resetPasswordEmail(email);
    hideForm = true;
    messagesStores.showSuccess("Reset Password Email Sent Successfully! :)");
    await goto("/login");
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        messagesStores.showError("Email not found, please try again")
        return;
      }
      messagesStores.showError();
    }
  }
</script>

<div class="reset-container">
  {#if !hideForm}
  <div class="reset-row">
    <div class="reset-col">
      <h1>Reset Password Here</h1>
    </div>
  </div>
  <span class="divider"/>
  <AuthForm on:submit={onResetPassword} resetPassword={true} btnName="Reset Password" />
  {/if}  
</div>
  

  <style>
  
  
  .reset-container {
      padding-top: 2rem;
      padding-bottom: 2rem; 
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #527158;
    }
  
  .reset-row {
    display: flex;
    justify-content: center;
    margin-right: -15px;
    margin-left: -15px;
  }
  
  .reset-col {
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
    margin-bottom: 0.5rem;
  }
  
  .divider {
    margin: 1rem 0;
    border: 0.0005rem solid #747b77;
    background-color: #747b77;
    opacity: 0.5;
    width: 50%;
  }
  
  @media screen and (max-width: 576px) {
      .reset-container {
        padding: 0.5rem;
      }
    }
  
  </style>

<svelte:head>
  <title>Walka-bout | Reset Password</title>
</svelte:head>