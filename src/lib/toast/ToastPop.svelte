<script lang="ts">
    import Toast from "./Toast.svelte";
  
    import { dismissToast, toasts } from "$lib/store";
  </script>
  
  {#if $toasts}
    <section>
      {#each $toasts as toast (toast.id)}
        <Toast
          type={toast.type}
          dismissible={toast.dismissible}
          on:dismiss={() => dismissToast(toast.id)}>{toast.text}</Toast
        >
      {/each}
    </section>
  {/if}
  
  <style lang="postcss">
    section {
      position: fixed;
      top: 0;
      /* left: 0; */
      right: 0;
      width: 30%;
      display: flex;
      margin-top: 1rem;
      justify-content: center;
      flex-direction: column;
      z-index: 1000;
    }
  </style>
  