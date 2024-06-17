"use server";

import { auth } from "@/utils/firebase";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { FirebaseError } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	setPersistence,
	browserSessionPersistence,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export async function signup(formData: FormData) {
	const userData = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
		repassword: formData.get("repassword") as string,
	};

	if (userData?.password !== userData?.repassword) {
		return "Passwords don't match";
	}

	try {
		const { user } = await createUserWithEmailAndPassword(
			auth,
			userData?.email,
			userData?.password,
		);
		console.log("User: ", user);
	} catch (error) {
		// console.log(error);
		if (error instanceof FirebaseError) {
			console.log(error.message);
			return error.code;
		} else {
			console.error(error);
		}
	}
}

export async function login(formData: FormData) {
	const userData = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	try {
		await setPersistence(auth, browserSessionPersistence);
		const { user } = await signInWithEmailAndPassword(
			auth,
			userData?.email,
			userData?.password,
		);

		// console.log("User: ", user);
	} catch (error) {
		// console.log(error);
		if (error instanceof FirebaseError) {
			console.log(error.message);
			return error.code;
		} else {
			console.error(error);
		}
	}

	revalidatePath("/");
	redirect("/");
}

export async function checkSession() {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/auth.user
			console.log("User is signed in", auth.currentUser);
			const uid = user.uid;
			return uid;
		} else {
			console.log("User is signed out");
		}
	});
}
