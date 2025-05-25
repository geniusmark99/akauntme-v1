import { GetStaticPaths, GetStaticProps } from 'next';
import BlogPosts from './types/BlogPosts';
import { BlogPost } from './types/Blog';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface BlogPostProps {
    post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostProps> = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Head>
                <title>{post.title} | My Blog</title>
                <meta name="description" content={post.title} />
            </Head>

            <article className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <div className="text-gray-600 mb-6">
                    <span>By {post.author}</span> • <span>{post.date}</span>
                </div>
                <div className="prose lg:prose-xl">
                    <p>{post.content}</p>
                </div>
            </article>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = BlogPosts.map(post => ({
        params: { slug: post.slug }
    }));

    return {
        paths,
        fallback: false // or true if you want to enable fallback for new slugs
    };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
    const slug = params?.slug as string;
    const post = BlogPosts.find(post => post.slug === slug);

    if (!post) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            post
        }
    };
};

export default BlogPostPage;