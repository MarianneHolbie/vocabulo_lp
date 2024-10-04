import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const isQuizMode = writable(browser ? localStorage.getItem('isQuizMode') === 'true' : false);

if (browser) {
  isQuizMode.subscribe(value => localStorage.setItem('isQuizMode', value));
}
