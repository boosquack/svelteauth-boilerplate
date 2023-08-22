<script lang='ts'>
    import type { userLogin, User } from '$lib/index';
    import { get } from 'svelte/store';
    import { loggedUser, userStore, addToast, dismissToast} from '$lib/store'
	import { goto } from '$app/navigation';
    
    let currentUser = get(loggedUser);
    const handleLogin = (event : Event) => {
    const data = new FormData(event.target as HTMLFormElement);
        const email = data.get("email") as string;
        const password = data.get("password") as string;

        const users = get(userStore);
        const inputLogin : userLogin = {
            email,
            password
        };  
        console.log(inputLogin);
        // check if email is existing
        const emails = users.map((user) => user.email)
        const checkEmail = emails.find((email) => email === inputLogin.email);

        if(checkEmail === undefined ) {
            console.log('Mali 1', checkEmail);
            addToast({
              text: 'Invalid Credentials',
              dismissible: true,
              duration: 3000,
              type: 'error'
            });
            return;
        }

        const foundUser = users.find((user) => user.email === inputLogin.email);

        if(foundUser === undefined){
            addToast({
              text: 'Invalid Credentials',
              dismissible: true,
              duration: 3000,
              type: 'error'
            });
            return;
        } else {    
            if(foundUser.password === inputLogin.password){
               console.log('Success');
               loggedUser.set(foundUser); 
               addToast({
                 text: 'Login Successful!',
                 dismissible: true,
                 duration: 3000,
                 type: 'success'
                });
               goto('/dashboard', {replaceState: true});
            } else {
                loggedUser.set(undefined);
                addToast({
                    text: 'Invalid Credentials',
                    dismissible: true,
                    duration: 3000,
                    type: 'error'
                });
                console.log('Mali 3');
                return;
            }
        }

    };
</script>

<h1>Login</h1>

<div>
    <form on:submit|preventDefault={handleLogin} class="">
        <input
            type="email"
            id="email"
            name='email'     
            placeholder="Email"   
        />
        <input type="password" name='password' id="password" placeholder="Password" />
        <button>Login</button>
    </form>
    
</div>
