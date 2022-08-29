export default function Post({ post }) {
	return (
		<div className="rounded shadow bg-white p-3">
			<div className="flex sm:items-start items-center sm:flex-row flex-col">
				<img
					className="sm:w-1/3 sm:mr-3 mb-3 sm:mb-0 rounded-lg"
					src={post.image}
					alt="post"
				/>
				<div className="w-full">
					<h1 className="font-medium text-xl leading-6 mb-3">
						<a href="#!">{post.title}</a>
					</h1>
					<div className="text-xs text-gray-400 mb-3">
						<span className="pr-1 mr-1 border-r">
							JUNE 25, 2020
						</span>
						<span>
							<a href="#!">MUSIC</a>
						</span>
					</div>
					<p className="text-sm leading-5 text-gray-400">
						{post.desc}
						<a className="mx-2" href="#!">
							Read More...
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
