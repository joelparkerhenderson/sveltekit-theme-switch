<!-- 

ThemeSwitch.svelte

Theme switch component based on this tutorial:
https://nicobachner.com/sveltekit-theme-switch

Complementary files:

* src/global.d.ts
* src/lib/stores.ts
* src/lib/components/ThemeSwitch.svelte
* static/theme/{system,light,dark}.css			

We first import theme from '$lib/stores'. $lib/stores is a path alias for
src/lib/stores.svelte, the file in which we created our theme Svelte Store.

We now want to modify the value of theme. We could do this by calling
theme.set() (more info in the writable stores documentation). However, there is
an easier way: using auto-subscriptions.

Since $theme is mutable, we use the Svelte binding bind:value to get theme to
track the changes to the value of the selected option. The browser does most of
the heavy lifting in this case, since all we need to do is read the value
attribute.

-->

<script lang="ts">
  import { theme } from '$lib/stores'
</script>

<select bind:value="{$theme}">
  <option value="system">System</option>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>
