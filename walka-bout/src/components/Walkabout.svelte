<script>
  import { onDestroy } from "svelte";
  import store from "../stores/walkabout.store";
  const unsub = store.subscribe((state) => {
    console.log("state changed", state);
  });

  // setTimeout(() => {
  //   store.set(2000);
  // }, 2000);

  setTimeout(() => {
    store.update((state) => {
      // state.counter++;
      return state;
    });
  }, 2000);
  onDestroy(() => {
    unsub();
    console.log("unsubscribed");
  });
</script>
