"use client";

import Breakline from "@/components/Elements/Breakline";
import DefaultLoader from "@/components/Elements/Loading";
import BackButton from "@/components/Elements/Button/BackButton";
import { useLoading } from "@/stores/useLoading";
import { Lock, Mail } from "@/components/Icon/DefaultIcons";
import { handlereset, resetpassword } from "./actions";
import { useEffect } from "react";

export default function ResetPassword() {
	const { onLoading, setOnLoading } = useLoading();

	useEffect(() => {
		async function reset() {
			await resetpassword();
		}
		reset();
		return () => {
			setOnLoading(false);
		};
	}, [setOnLoading]);
	return (
		<>
			{onLoading && <DefaultLoader variantColor="indigo" />}
			<div className="h-fit w-fit">
				<BackButton />
			</div>
			<div className="flex h-screen w-full items-center">
				{/*Login Header */}
				<form className="mx-auto w-full max-w-sm">
					<div className="mb-10 flex w-full items-end justify-center gap-4 duration-300">
						<div className="text-center text-3xl font-bold duration-300 ease-in-out">
							RESET PASSWORD
						</div>
					</div>
					<Breakline className="my-6" />
					<div className="mb-5">
						<label
							htmlFor="email"
							className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-400"
						>
							Email
						</label>
						<div className="flex items-center">
							<input
								name="email"
								type="email"
								id="email"
								className="block w-full rounded-lg border border-zinc-400 bg-light-50 p-2.5 pl-10 text-sm text-zinc-700 outline-none focus:border-indigo-600  dark:border-zinc-800 dark:bg-dark-100 dark:text-white dark:placeholder-zinc-600 dark:focus:border-indigo-600"
								placeholder="example@gmail.com"
								required
							/>
							<Mail className="absolute ml-2 text-zinc-600" />
						</div>
					</div>
					{/*<div className="mb-5">
						<label
							htmlFor="password"
							className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-400"
						>
							Password
						</label>
						<div className="flex items-center">
							<input
								name="password"
								type="password"
								id="password"
								className="block w-full rounded-lg border border-zinc-400 bg-light-50 p-2.5 pl-10 text-sm text-zinc-700 outline-none focus:border-indigo-600  dark:border-zinc-800 dark:bg-dark-100 dark:text-white dark:placeholder-zinc-600 dark:focus:border-indigo-600"
								placeholder="Minimum of 8 characters"
								required
							/>
							<Lock className="absolute ml-2 text-zinc-600" />
						</div>
					</div>*/}
					<Breakline className="my-6" />
					<div className="flex w-full">
						<button
							type="submit"
							className="w-full rounded-lg border border-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-zinc-800 duration-200 hover:bg-indigo-600 focus:outline-none focus:ring-4 dark:text-white"
							formAction={handlereset}
						>
							Reset Password
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
