// Svelte stores.
//
// Documentation: https://svelte.dev/docs/svelte/stores
//
// A store is an object that allows reactive access to a value via a simple
// store contract. The svelte/store module contains minimal store
// implementations which fulfil this contract.
//
// Any time you have a reference to a store, you can access its value inside a
// component by prefixing it with the $ character. This causes Svelte to declare
// the prefixed variable, subscribe to the store at component initialisation and
// unsubscribe when appropriate.
//
// Assignments to $-prefixed variables require that the variable be a writable
// store, and will result in a call to the store’s .set method.
//
// ## Refactor this file as you like
//
// Prior to Svelte 5, stores were the go-to solution for creating
// cross-component reactive states or extracting logic. With Svelte 5 runes,
// these use cases have greatly diminished.
//
//   * when extracting logic, it’s better to take advantage of runes’ universal
//     reactivity: You can use runes outside the top level of components and
//     even place them into JavaScript or TypeScript files (using a .svelte.js
//     or .svelte.ts file ending)
//
//   * when creating shared state, you can create a $state object containing the
//     values you need and then manipulate said state

// Theme switch store based on this tutorial:
// https://nicobachner.com/sveltekit-theme-switch
//
// Create a Svelte Store called theme and assigning it the default value of
// 'system' because so that we respect the user's preferences.
//
// Complementary files:
// 
// * src/global.d.ts
// * src/lib/stores.ts
// * src/lib/components/ThemeSwitch.svelte
// * static/theme/{system,light,dark}.css			

import { writable } from 'svelte/store'
const theme = writable('system')
export { theme }
