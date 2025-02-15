// Global file such as for constants, global functions, etc. 
//
// Currently, this is just a placeholder for future use.
// If you're reading this, consider refactoring this to a UMD.

// Theme switch
//
// The theme switch code is from this tutorial:
// https://nicobachner.com/sveltekit-theme-switch
//
// The 'system' value is because we want the theme to default to the user's
// current operating system color scheme, such as  light or dark or otherwise.
// Apart from 'system', you can choose your theme values freely. You're also not
// limited to only two, so experiment away!
//
// Complementary files:
// 
// * src/global.d.ts
// * src/lib/stores.ts
// * src/lib/components/ThemeSwitch.svelte
// * static/theme/{system,light,dark}.css			

type Theme = 'system' | 'light' | 'dark'
