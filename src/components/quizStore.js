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
    toggle: () => {
      if (browser) {
        update(n => {
          localStorage.setItem('isQuizMode', !n);
          return !n;
        });
      } else {
        update(n => !n);
      }
    }
  };
};

export const isQuizMode = createIsQuizMode();
