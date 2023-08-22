<script lang='ts'>
    import { writable, get } from "svelte/store";
	import type { userRegister, User } from "$lib/index";
    import {userStore, loggedUser, addToast, dismissToast, toasts} from '$lib/store'
  
    let userData : User[] = []
    let registerPassword = '';
    let confirmPassword = '';
    //invoked Function to the Form,
    const handleRegister = (event : Event) => { 
        const registerData = new FormData(event.target as HTMLFormElement);
        const email = registerData.get("email") as string;
        const password = registerData.get("password") as string;
        const firstName = registerData.get("firstName") as string;
        const lastName = registerData.get("lastName") as string;
        const users = get(userStore) // NOTE
        // Email
         if (users.find((users) => users.email === email)){
            addToast({
              text: 'Email already exists',
              dismissible: true,
              duration: 3000,
              type: 'error'
            });
            return;
        };

        //

        if (registerPassword !== confirmPassword){
            addToast({
              text: 'Password does not match!',
              dismissible: true,
              duration: 3000,
              type: 'error'
            });
            return;
        }
        //1
        // userStore.update((users) => [...users, {...newUser, role:'GUEST'}]);
        //2
        
        userStore.update((users) => [...users, {email, password, firstName, lastName, role: "GUEST"}]);
        const data = $userStore;

       
       

        console.log(userStore, data);
        
    };
// test out types HERE
        
</script>

<h1>Register</h1>
<!-- Default action of a form is to refresh so we need preventDefault event modifier to combat that action -->
<div>
    <form on:submit|preventDefault={handleRegister} class="">
        <input
            type="text"
            id="firstName"
            name = 'firstName'
            placeholder="First Name"
        />

        <input 
            type="text"
            id="lastName"
            name = 'lasttName'
            placeholder="Last Name"
        />

        <input
            type="email"
            id="email"
            name='email'     
            placeholder="Email"      
        />
        
        <input 
            type="password" 
            id="password" 
            name='password'
            placeholder="Password"
            bind:value={registerPassword}
        />

        <input 
            type="password" 
            id="confirm-password" 
            name='confirm-password'
            placeholder="Confirm Password"
            bind:value={confirmPassword}

        />
        <button>Submit</button>
    </form>
    
</div>
