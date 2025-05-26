import { Suspense } from 'react';
import BlogPosts from "../types/BlogPosts";

type Params = {
    slug: string;
};

export async function generateStaticParams(): Promise<Params[]> {
    return BlogPosts.map((post) => ({
        slug: post.slug,
    }));
}


export default async function BlogContent({
    params,
}: {
    params: Promise<Params>
}) {
    const { slug } = await params;
    const post = BlogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="p-10 text-center text-red-500">
                Blog post not found
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <article className="max-w-3xl mx-auto">
                {/* Post Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                            {post.category}
                        </span>
                    </div>
                </div>

                {/* Featured Image */}
                {post.image && (
                    <div className="mb-8 rounded-lg overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}

                {/* Post Content */}
                <div
                    className="prose lg:prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Back Link */}
                <div className="mt-12">
                    <a
                        href="/blog"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        ← Back to all posts
                    </a>
                </div>
            </article>
        </div>
    );
}

// export default function Page({ params }: { params: Params }) {
//     return (
//         <Suspense fallback={
//             <div className="p-10 text-center text-gray-500">
//                 Loading blog post...
//             </div>
//         }>
//             <BlogContent slug={params.slug} />
//         </Suspense>
//     );
// }