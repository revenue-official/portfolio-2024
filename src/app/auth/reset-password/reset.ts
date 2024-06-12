import { supabase } from "@/utils/supabase/server";

export async function reset(formData: FormData) {
	const userData = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};
	/**
	 * Step 1: Send the user an email to get a password reset token.
	 * This email contains a link which sends the user back to your application.
	 */
	const { data, error } = await supabase.auth.resetPasswordForEmail(
		userData.email,
	);

	/**
	 * Step 2: Once the user is redirected back to your application,
	 * ask the user to reset their password.
	 */

	supabase.auth.onAuthStateChange(async (event, session) => {
		if (event == "PASSWORD_RECOVERY") {
			const newPassword: any = prompt(
				"What would you like your new password to be?",
			);
			const { data, error } = await supabase.auth.updateUser({
				password: newPassword,
			});

			if (data) alert("Password updated successfully!");
			if (error) alert("There was an error updating your password.");
		}
	});
}
