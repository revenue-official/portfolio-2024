import { supabase } from "@/utils/supabase/server";

export async function getUsersData() {
	const { data: users, error } = await supabase.from("users").select("*");
	console.log("Users: ", users);
	if (error) {
		console.log(error);
	}

	return users;
}

export async function addUser(formData: any) {
	const { data, error } = await supabase
		.from("users")
		.insert([
			{
				id: formData.id,
				username: formData.username,
				email: formData.email,
				role: formData.role,
			},
		])
		.select();
}

export async function updateUser(formData: any) {
	const { data, error } = await supabase
		.from("users")
		.update({ other_column: "otherValue" })
		.eq("some_column", "someValue")
		.select();
}

export async function removeUser(formData: any) {
	const { error } = await supabase
		.from("users")
		.delete()
		.eq("some_column", "someValue");
}
