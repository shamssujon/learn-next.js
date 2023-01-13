import Post from "../../components/Post/Post";

const Posts = ({ posts }) => {
	// console.log(posts);

	return (
		<section className="py-10">
			<div className="container max-w-3xl">
                <h1 className="text-4xl mb-10 text-center">Posts</h1>
				<div className="space-y-4">
					{posts.map((post) => (
						<Post key={post.id} post={post}></Post>
					))}
				</div>
			</div>
		</section>
	);
};

export default Posts;

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
	const data = await res.json();

	// console.log(data);

	return {
		props: {
			posts: data,
		},
	};
};
