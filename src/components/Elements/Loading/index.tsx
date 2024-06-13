import "./styles.css";
import { useState } from "react";

type VariantColorProps = {
	default: string;
	indigo: string;
	red: string;
	green: string;
	yellow: string;
	blue: string;
	pink: string;
	purple: string;
	orange: string;
	teal: string;
	gray: string;
	brown: string;
	olive: string;
	navy: string;
	maroon: string;
	turquoise: string;
	lavender: string;
	mustard: string;
	mint: string;
	plum: string;
};

interface DefaultLoaderProps {
	variantColor?: keyof VariantColorProps;
}

export default function DefaultLoader({
	variantColor = "default",
}: DefaultLoaderProps) {
	const [variant, setVariant] = useState<VariantColorProps>({
		default: "#6366f1", // Tailwind indigo-600
		indigo: "#4f46e5",
		red: "#ef4444", // Tailwind red-600
		green: "#16a34a", // Tailwind green-600
		yellow: "#d97706", // Tailwind yellow-600
		blue: "#2563eb", // Tailwind blue-600
		pink: "#db2777", // Tailwind pink-600
		purple: "#9333ea", // Tailwind purple-600
		orange: "#f97316", // Tailwind orange-600
		teal: "#0d9488", // Tailwind teal-600
		gray: "#6b7280", // Tailwind gray-600
		brown: "#78350f", // Tailwind amber-800
		olive: "#3f6212", // Tailwind green-800
		navy: "#0c4a6e", // Tailwind sky-800
		maroon: "#7e2219", // Tailwind red-800
		turquoise: "#115e59", // Tailwind teal-800
		lavender: "#6d28d9", // Tailwind purple-600
		mustard: "#b45309", // Tailwind orange-700
		mint: "#047857", // Tailwind emerald-600
		plum: "#4c1d95", // Tailwind violet-700
	});

	const backgroundStyle = {
		background: `conic-gradient(
      from 120deg at 50% 64%,
      #0000,
      ${variant[variantColor]} 1deg 120deg,
      #0000 121deg
    )`,
	};

	return (
		<>
			<div className="fixed inset-0 z-50 flex items-center justify-center">
				<div className="absolute inset-0 bg-light-50 opacity-70 dark:bg-dark-50"></div>
				<div
					className="default-loader relative z-10 h-10 w-10"
					style={backgroundStyle}
				></div>
			</div>
		</>
	);
}
