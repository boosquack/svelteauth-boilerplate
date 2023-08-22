import { get, writable } from 'svelte/store';
import type { User, userLogin, userRegister, Toast, ToastCreate } from '$lib/index';

export const userStore = writable<User[]>([
	{
		email: 'lapo@gmail.com',
		password: '1234',
		firstName: 'Jan',
		lastName: 'Paul',
		role: 'USER'
	},
	{
		email: 'lapa@gmail.com',
		password: '1234',
		firstName: 'Jim',
		lastName: 'Pinto',
		role: 'USER'
	}
]);

export const loggedUser = writable<User | undefined>(undefined);
// export let value = '';

export const toasts = writable<Toast[]>([]);

export const addToast = (toast: ToastCreate) => {
	// Create a unique ID para easy to find and remove
	const id = Math.floor(Math.random() * 10000);

	// push the toast
	toasts.update((all) => [{ ...toast, id }, ...all]);

	//
	if (toast.duration) setTimeout(() => dismissToast(id), toast.duration);
};

export const dismissToast = (id: number) => {
	toasts.update((all) => all.filter((toast) => toast.id !== id));
};

//
