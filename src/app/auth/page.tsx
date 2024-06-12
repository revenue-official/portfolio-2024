"use client";

import BackButton from "@/components/Elements/Button/BackButton";
import Breakline from "@/components/Elements/Breakline";
import { UserRound, Mail, Lock } from "@/components/Icon/DefaultIcons";
import { useState, useEffect } from "react";
import { signup, signin, userdata } from "./actions";
import { useRouter } from "next/navigation";

export default function AuthPage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [onLogin, setOnLogin] = useState(true);
	const [isRemembered, setIsRemembered] = useState(false);

	useEffect(() => {
		async function checkUser() {
			const user = await userdata();

			if (user) {
				router.push("/");
			} else {
				setIsLoading(false);
			}
		}
		checkUser();
	}, [router]);

	return (
		<>
			{/*loader */}
			{isLoading && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<div className="absolute inset-0 bg-light-50 opacity-30 dark:bg-dark-50"></div>
					<div className="default-loader relative z-10 h-10 w-10"></div>
				</div>
			)}
			<div className="h-fit w-fit">
				<BackButton to="/" />
			</div>
			<div className="flex h-screen w-full items-center">
				{/*Login Header */}
				<form className="mx-auto w-full max-w-sm">
					<div
						className={
							"mb-10 flex w-full items-end justify-center gap-4 duration-300 " +
							(onLogin ? "translate-x-8" : "-translate-x-8")
						}
					>
						<button
							type="button"
							className={
								"text-center font-bold duration-300 ease-in-out " +
								(onLogin ? "text-3xl font-bold" : "pb-1 text-xs text-zinc-700")
							}
							onClick={() => setOnLogin(true)}
							disabled={onLogin}
						>
							SIGN IN
						</button>
						<button
							type="button"
							className={
								"text-center font-bold duration-300 ease-in-out " +
								(!onLogin ? "text-3xl font-bold" : "pb-1 text-xs text-zinc-700")
							}
							onClick={() => setOnLogin(false)}
							disabled={!onLogin}
						>
							SIGN UP
						</button>
					</div>
					<Breakline className="my-6" />
					{!onLogin && (
						<div className="mb-5">
							<label
								htmlFor="username"
								className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-400"
							>
								Name
							</label>
							<div className="flex items-center">
								<input
									name="username"
									type="username"
									id="username"
									className="block w-full rounded-lg border border-zinc-400 bg-light-50 p-2.5 pl-10 text-sm text-zinc-700 outline-none focus:border-indigo-600  dark:border-zinc-800 dark:bg-dark-100 dark:text-white dark:placeholder-zinc-600 dark:focus:border-indigo-600"
									placeholder="Enter your name"
									required
								/>
								<UserRound className="absolute ml-2 text-zinc-600" />
							</div>
						</div>
					)}
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
					<div className="mb-5">
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
					</div>
					{!onLogin && (
						<div className="mb-5">
							<label
								htmlFor="repassword"
								className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-400"
							>
								Re-password
							</label>
							<div className="flex items-center">
								<input
									name="repassword"
									type="password"
									id="repassword"
									className="block w-full rounded-lg border border-zinc-400 bg-light-50 p-2.5 pl-10 text-sm text-zinc-700 outline-none focus:border-indigo-600  dark:border-zinc-800 dark:bg-dark-100 dark:text-white dark:placeholder-zinc-600 dark:focus:border-indigo-600"
									placeholder="Re-enter your password"
									required
								/>
								<Lock className="absolute ml-2 translate-x-0.5 translate-y-0.5 text-zinc-800" />
								<Lock className="absolute ml-2 -translate-x-0.5 -translate-y-0.5 text-zinc-600" />
							</div>
						</div>
					)}
					<div className="mb-5 flex items-start justify-between">
						<div className="relative flex h-5 items-center">
							<input
								id="remember"
								type="checkbox"
								value=""
								className="z-10 h-4 w-4  opacity-0"
								checked={isRemembered}
								onChange={() => setIsRemembered(!isRemembered)}
							/>
							<div className="absolute flex h-4 w-4 items-center justify-center rounded-full border border-indigo-600">
								<div
									className={`h-3 w-3 rounded-full bg-indigo-600 duration-200 ${
										isRemembered ? "scale-100" : "scale-0"
									}`}
								></div>
							</div>
							<label
								htmlFor="remember"
								className="ms-2 text-xs text-zinc-900 dark:text-zinc-300"
							>
								Remember me
							</label>
						</div>
						<div className="flex h-5 items-center">
							<a
								href="/auth/reset-password"
								className="text-xs text-indigo-600 hover:underline dark:text-indigo-600"
							>
								Forgot password?
							</a>
						</div>
					</div>
					<Breakline className="my-6" />
					<div className="flex w-full">
						<button
							type="submit"
							className="w-full rounded-lg border border-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-zinc-800 duration-200 hover:bg-indigo-600 focus:outline-none focus:ring-4 dark:text-white"
							formAction={onLogin ? signin : signup}
						>
							{onLogin ? "SIGN IN" : "SIGN UP"}
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
