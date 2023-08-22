<script>
import { get, writable } from "svelte/store";
import { loggedUser, addToast } from "$lib/store";
import { goto } from "$app/navigation";


const logoutHandler = () => {
    loggedUser.set(undefined);
    goto('/login', {replaceState:true});
    addToast({
      text: 'Logged out successfully',
      dismissible: true,
      duration: 3000,
      type: "info"
    })

};


</script>



<h1>Dashboard</h1>

<h1>Welcome {$loggedUser?.firstName} {$loggedUser?.lastName}!</h1>
<button on:click={logoutHandler}>Logout</button>