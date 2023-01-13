import { useRouter } from "next/router";

const articleId = () => {
	const router = useRouter();
	const id = router.query.articleId;
    console.log(router);

	return (
		<div>
			<h1>Dynamic article page {id}</h1>
		</div>
	);
};

export default articleId;
