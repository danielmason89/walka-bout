<script>
  import messagesStore from '$lib/stores/messages.stores.js';
  function closeMessage() {
    messagesStore.hide();
  }
</script>

{#if $messagesStore.show}
<span class="row">
      <div class="col">
          <div class:alert-danger={$messagesStore.type === "error"} class:alert-success={$messagesStore.type === "success"} class="alert" role="alert">
              <strong>{$messagesStore.type === "error" ? "Error:" : "Success:"}</strong>
              {$messagesStore.message}
              <button type="button" on:click={closeMessage} class="close-btn" aria-label="Close">×</button>
          </div>
      </div>
</span>
{/if}

<style>

strong {
  padding-right: 0.25rem;
}

.row {
  display: flex;
  justify-content: center;
}

.col {
  flex: 1;
  width: 100%;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.alert {
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 0.25rem;
  color: #842029;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem;
  padding: 0.75rem 1.25rem;
  position: relative;
}

.alert-danger {
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #842029;
}

.alert-success {
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
}

.close-btn {
  background-color: transparent;
  border: none;
  color: #593235;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  padding: 0.5rem;
  margin-left: 1rem;
}

.close-btn:hover {
  opacity: 0.8;
  color: #62282d;
}

@media (max-width: 760px) {
    .row {
        flex-direction: column;
        margin-top: 0.5rem;
    }

    .col {
        padding-left: 0rem;
        padding-right: 0rem;
    }

    .alert {
        font-size: 0.6rem;
        font-weight: bold;
        padding: 0.25rem 0.5rem;
    }

    .close-btn {
        font-size: 0.85rem;
    }
}
</style>
