import { useRouter } from "next/router";

export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await res.json();

	const paths = posts.map((post) => {
		return {
			params: {
				postId: `${post.id}`,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const { params } = context;

	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
	const post = await res.json();

	return {
		props: {
			post: post,
		},
	};
};

const Article = ({ post }) => {
	const router = useRouter();

	const { id, title, body } = post;

	const handleBack = () => {
		router.push("/posts");
	};

	return (
		<section className="py-10">
			<div className="container max-w-3xl">
				<div className="mb-8">
					<button
						onClick={handleBack}
						class="flex items-center px-4 py-2 font-medium tracking-wide text-blue-600 hover:text-white capitalize transition-colors duration-300 transform bg-blue-50 rounded-md border border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
							/>
						</svg>

						<span class="mx-1">Back to posts</span>
					</button>
				</div>
				<div className="">
					<p className="text-black/60 mb-2">postId: {id}</p>
					<h2 className="text-4xl capitalize mb-6">{title}</h2>
					<p className="text-lg">{body}</p>
				</div>
			</div>
		</section>
	);
};

export default Article;
