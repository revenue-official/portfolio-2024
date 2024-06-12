"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { supabase } from "@/utils/supabase/server";

// host
const baseurl = process.env.BASE_URL || "http://localhost:3000";

export async function userdata() {
	const {
		data: { user },
	} = await supabase.auth.getUser();
	return user;
}

export async function signup(formData: FormData) {
	const userData = {
		username: formData.get("username") as string,
		email: formData.get("email") as string,
		password: formData.get("password") as string,
		repassword: formData.get("repassword") as string,
	};

	if (userData.password !== userData.repassword) {
		revalidatePath("/auth", "page");
		redirect("/error");
	}

	const { error } = await supabase.auth.signUp({
		email: userData.email,
		password: userData.password,
		options: {
			data: {
				username: userData.username,
				image: "",
			},
		},
	});

	if (error) {
		console.log(error);
		redirect("/error");
	}

	// console.log(data);
	revalidatePath("/", "page");
	redirect("/auth");
}

export async function signin(formData: FormData) {
	const userData = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const { error } = await supabase.auth.signInWithPassword({
		email: userData.email,
		password: userData.password,
	});

	if (error) {
		console.log(error);
		redirect("/error");
	}

	// console.log(data);
	revalidatePath("/", "page");
	redirect("/");
}

export async function signout() {
	const { error } = await supabase.auth.signOut();

	if (error) {
		console.log(error);
		redirect("/error");
	}

	revalidatePath("/", "page");
	redirect("/auth");
}

export async function redirectreset() {
	revalidatePath("/auth/reset-password", "page");
	redirect("/auth/reset-password");
}
