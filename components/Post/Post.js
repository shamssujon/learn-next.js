import Link from "next/link";

const Post = ({ post }) => {
	// console.log(post);
	const { id, title, body } = post;

	return (
		<div className="p-6 bg-white rounded border">
			<h2 className="text-2xl capitalize mb-2">{title}</h2>
			<p>{body}</p>
			<div className="mt-8">
				<Link
					href={`/posts/${id}`}
					className="px-4 py-2 font-medium text-white capitalize transition bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
					Read more
				</Link>
			</div>
		</div>
	);
};

export default Post;
