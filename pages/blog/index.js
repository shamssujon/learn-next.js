import Head from "next/head";
import Link from "next/link";

const blog = () => {
    return (
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            <h1>This is blog page</h1>
            <nav>
                <Link href="/blog/articles/article-1">Article 1</Link>
                <Link href="/blog/articles/article-2">Article 2</Link>
            </nav>
        </div>
    );
};

export default blog;