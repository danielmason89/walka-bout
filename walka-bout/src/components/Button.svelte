<script>
  export let type = "primary";
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
    background-color: #ff3e00;
    color: white;
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
    background-color: white;
    color: #ff3e00;
    border: 2px solid white;
  }

  .secondary.inverse {
    background-color: #333;
    color: antiquewhite;
    border: 2px solid #333;
  }
</style>
