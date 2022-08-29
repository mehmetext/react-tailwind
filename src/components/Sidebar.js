export default function Sidebar() {
	return (
		<div className="bg-white w-full rounded shadow-sm flex flex-col items-center p-3 md:sticky top-[6.5rem] md:mb-6">
			<div className="flex flex-col sm:flex-row md:flex-col items-center">
				<img
					className="md:w-[70%] w-32 rounded-full mb-3 mr-0 md:mr-0 sm:mr-3"
					src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed65841ff2a5_photo-1443180236447-432ea00e6ead.jpg"
					alt="profile"
				/>
				<p className="text-sm">
					Denali is a simple responsive blog template. Easily add new
					posts using the Editor or change layout and design using the
					Designer.
				</p>
			</div>
			<div className="w-full m-3">
				<div className="w-1/3 bg-gray-300 h-px ml-0"></div>
			</div>
			<div className="w-full">
				<p className="text-sm">Featured Posts:</p>
				<div>
					<div className="text-sm leading-4 py-2">
						<a
							href="#!"
							className="text-gray-400 hover:text-gray-500"
						>
							According a funnily until pre-set or arrogant well
							cheerful
						</a>
					</div>
					<div className="text-sm leading-4 py-2">
						<a
							href="#!"
							className="text-gray-400 hover:text-gray-500"
						>
							Overlaid the jeepers uselessly much excluding
						</a>
					</div>
				</div>
			</div>
			<div className="w-full m-3">
				<div className="w-1/3 bg-gray-300 h-px ml-0"></div>
			</div>
			<div className="flex w-full gap-x-2 mb-2">
				<a
					href="#!"
					className="opacity-30 hover:opacity-100 transition-opacity"
				>
					<img
						src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed39811ff2c6_social-03.svg"
						width="25"
						alt="facebook"
					/>
				</a>
				<a
					href="#!"
					className="opacity-30 hover:opacity-100 transition-opacity"
				>
					<img
						src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed1ad11ff2da_social-07.svg"
						width="25"
						alt="instagram"
					/>
				</a>
				<a
					href="#!"
					className="opacity-30 hover:opacity-100 transition-opacity"
				>
					<img
						src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed1f5b1ff2bf_social-18.svg"
						width="25"
						alt="twitter"
					/>
				</a>
				<a
					href="#!"
					className="opacity-30 hover:opacity-100 transition-opacity"
				>
					<img
						src="https://assets.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed7e751ff288_social-09.svg"
						width="25"
						alt="linkedin"
					/>
				</a>
			</div>
			<div className=" w-full text-xs tracking-wider text-gray-400">
				BUILT WITH{" "}
				<a target="_blank" rel="noreferrer" href="https://webflow.com">
					WEBFLOW
				</a>
			</div>
		</div>
	);
}
