"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import Footer from "@/components/Footer";

export default function BlogPost() {
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const slug = params?.slug;

  useEffect(() => {
    if (!slug) return;

    // Fetch all posts and find the current post
    const fetchPostData = async () => {
      try {
        const response = await fetch(`/api/posts`);
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const posts = await response.json();

        // Find the current post
        const matchedPost = posts.find((p: any) => p.slug === slug);
        if (!matchedPost) {
          throw new Error("Post not found");
        }
        setPost(matchedPost);

        // Find related posts
        const related = posts.filter(
          (p: any) =>
            p.slug !== slug &&
            p.tags.some((tag: any) =>
              matchedPost.tags.map((t: any) => t.slug).includes(tag.slug)
            )
        );
        setRelatedPosts(related);
      } catch (error) {
        console.error("Error fetching post data:", error);
        setError("Error fetching post data. Please try again later.");
      }
    };

    fetchPostData();
  }, [slug]);

  if (error) {
    return (
      <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
        <Header />
        <div className="text-center mt-20 text-red-500">{error}</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
        <Header />
        <div className="text-center mt-20">Loading...</div>
      </div>
    );
  }

  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      <div className="mt-10">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-gray-400 mt-2">
          Last updated: {new Date(post.updated_at).toLocaleDateString()}
        </p>
        <img
          src={post.feature_image}
          alt={post.feature_image_alt}
          className="my-6 w-full rounded-md"
        />
        <div className="mt-6">{post.content}</div>
        <div className="mt-10 text-gray-400 text-sm">
          Reading time: {post.reading_time} minutes
        </div>
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Bài viết cùng chủ đề</h2>
        {relatedPosts.length > 0 ? (
          <div className="flex flex-wrap justify-start gap-6">
            {relatedPosts.map((relatedPost: any, idx: number) => (
              <PostCard key={idx} data={relatedPost} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No related posts available.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
