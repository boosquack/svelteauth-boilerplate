
<script>
    	import { addToast } from '$lib/store';

export const toastSuccess = () => {
addToast({
  text: 'Successful',
  dismissible: true,
  duration: 3000,
  type: "success"
});
};

export const toastInfo = () => {
addToast({
  text: 'Info',
  dismissible : true,
  duration: 3000,
  type: 'info'
})
};

export const toastError = () => {
addToast({
  text: 'Error',
  dismissible: true,
  duration: 3000,
  type: 'error'
})
}

const toastWarning = () => {
addToast({
  text: 'Warning',
  dismissible: true,
  duration: 3000,
  type: "warning"
})
};

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<nav>
	<a href="/login">Login</a>
	<a href="/register">Register</a>
	<a href='/dashboard'>Dashboard</a>
</nav>
<button on:click={toastSuccess}>
	Successful
   </button>
   
   <button on:click={toastWarning}>
	 Warning
   </button>
   
   <button on:click={toastInfo}>
	info
   </button>
   
   <button on:click={toastError}>
	 Error
   </button>
   
   