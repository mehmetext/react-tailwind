import Content from "./Content";
import Sidebar from "./Sidebar";

export default function Main() {
	return (
		<div className="container mx-auto flex gap-6 md:flex-row flex-col">
			<div className="md:w-1/4 w-full">
				<Sidebar />
			</div>
			<div className="md:w-3/4 w-full">
				<Content />
			</div>
		</div>
	);
}
