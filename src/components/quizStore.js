import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const createIsQuizMode = () => {
  const { subscribe, set, update } = writable(false);

  if (browser) {
    const storedValue = localStorage.getItem('isQuizMode') === 'true';
    set(storedValue);
  }

  return {
    subscribe,
    set: (value) => {
      if (browser) {
        localStorage.setItem('isQuizMode', value);
      }
      set(value);
    },
    toggle: () => update(n => !n)
  };
};

export const isQuizMode = createIsQuizMode();
