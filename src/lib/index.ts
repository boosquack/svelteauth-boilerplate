// place files you want to import through the `$lib` alias in this folder.

// User
export type GenericMessage = {
	status: boolean;
	message: string;
};

export type User = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: 'ADMIN' | 'USER' | 'GUEST';
};

export type userLogin = Pick<User, 'email' | 'password'>;

export type userRegister = Omit<User, 'role'>;

// Toast
// Keep track of the toast that will be executed
export type Toast = {
	id: number;
	text: string;
	dismissible: boolean;
	duration: number;
	type: 'success' | 'error' | 'warning' | 'info';
};

// Creating
export type ToastCreate = Omit<Toast, 'id'>;
