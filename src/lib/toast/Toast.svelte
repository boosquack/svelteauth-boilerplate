<script>
  import { fade } from "svelte/transition";
  import Success from "../Icon/Success.svelte";
	import Error from "../Icon/Error.svelte";
  import Info from "../Icon/Info.svelte";
  import Close from "../Icon/Close.svelte";
  import Warning from "../Icon/Warning.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
 export let type = 'error';
 export let dismissible = true; 
</script>
  <article class={type} role="alert" transition:fade>
    {#if type === "success"}
      <Success width="1.1em" />
    {:else if type === "error"}
      <Error width="1.1em" />
    {:else if type === 'info'}
      <Info width="1.1em" />
    {:else if type ==='warning'}
      <Warning width='1.1em'/>
    {/if}
    <div class="text">
    <slot />
  </div>

  {#if dismissible}
    <button class="close" on:click={() => dispatch('dismiss')}>
      <Close width="0.8em" />
    </button>
  {/if}
</article>




<style lang="postcss">
  article {
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    margin: 0 auto; 
    width: 20rem;
    margin-top: 5px;
  }
  .error {
    background: IndianRed;
  }
  .success {
    background: MediumSeaGreen;
  }
  .info {
    background: SkyBlue;
  }
  .warning {
    background: #FFFF66;
  }
  .text {
    margin-left: 1rem;
    flex:1;
  }



</style>
