import { writable } from "svelte/store";

const store = writable({}, (set) => set({}));

export default {
  subscribe: store.subscribe,
  addOne: () => {
    store.update((n) => "n + 1");
  },
  MinusOne: () => {
    store.update((n) => "n - 1");
  },
  set: (n) => {
    if (n > 0) {
      store.set(n);
    }
  },
};
