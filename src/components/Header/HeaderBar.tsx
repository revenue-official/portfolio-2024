import HeaderList from "./HeaderList";

export default function HeaderBar() {
	return (
		<>
			<div className="flex h-full items-center justify-between px-40">
				{/*Header Icon */}
				<div className="px-2 py-1 bg-orange-500 rounded-sm">
					<h1 className="text-2xl font-medium text-orange-50">
						T
						<span className="text-orange-900 font-extrabold">
							guh
						</span>
					</h1>
				</div>
				{/*Header Lists*/}
				<ul className="inline-flex gap-10">
					<li className="text-gray-500 hover:text-gray-900">
						<HeaderList href="/">HOME</HeaderList>
					</li>
					<li className="text-gray-500 hover:text-gray-900">
						<HeaderList href="/about">ABOUT</HeaderList>
					</li>
					<li className="text-gray-500 hover:text-gray-900">
						<HeaderList href="/services">SERVICES</HeaderList>
					</li>
					<li className="text-gray-500 hover:text-gray-900">
						<HeaderList href="/contact">CONTACT</HeaderList>
					</li>
				</ul>
				{/*Header Side*/}
				<div className="bg-orange-500 rounded-sm">
					<button type="button" className="px-2 py-1">
						Search
					</button>
				</div>
			</div>
		</>
	);
}
