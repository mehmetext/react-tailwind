import { useState } from "react";

export default function Header() {
	const [showResMenu, setShowResMenu] = useState(false);

	return (
		<div className="h-20 bg-white shadow-sm flex justify-between items-center px-6 mb-6 sticky top-0 z-10">
			<div className="container flex items-center justify-between mx-auto">
				<a href="/" className="text-2xl font-medium">
					Napoli
				</a>
				<button
					onClick={() => {
						setShowResMenu(!showResMenu);
					}}
					className="flex justify-center items-center font-bold visible sm:invisible px-4 py-3"
				>
					{showResMenu ? "CLOSE" : "OPEN"}
				</button>
				<div
					className={`navbarMenu ${
						showResMenu ? "visible" : "invisible sm:visible"
					}`}
				>
					<a
						href="#!"
						className="navbarMenuItem text-red-900 hover:bg-red-100"
					>
						Home
					</a>
					<a
						href="#!"
						className="navbarMenuItem hover:bg-slate-100 text-slate-900"
					>
						Blog
					</a>
					<a
						href="#!"
						className="navbarMenuItem hover:bg-emerald-100 text-emerald-900"
					>
						About
					</a>
				</div>
			</div>
		</div>
	);
}
