// Import the writable function from Svelte's store module
import { writable } from 'svelte/store';

// Create and export a writable store named 'isQuizMode'
// Initialize it with a default value of true
export const isQuizMode = writable(true);
