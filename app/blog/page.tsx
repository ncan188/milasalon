"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import Footer from "@/components/Footer";

interface Tag {
  id: string;
  name: string;
  slug: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    // Fetching posts and tags
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data); // Default: show all posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    const fetchTags = async () => {
      try {
        const response = await fetch("/api/tags");
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchPosts();
    fetchTags();
  }, []);

  const handleTagClick = (tagSlug: string) => {
    setActiveTag(tagSlug);
    if (tagSlug === null) {
      setFilteredPosts(posts); // Show all posts if no tag is selected
    } else {
      const filtered = posts.filter((post) =>
        post.tags.some((tag: Tag) => tag.slug === tagSlug)
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      {/* Render tags */}
      <div>
        {tags.length > 0 ? (
          <div className="flex flex-wrap space-x-4 mt-10">
            <button
              onClick={() => handleTagClick(null)}
              className={`px-3 py-1 font-semibold text-xl border rounded-lg ${
                activeTag === null ? "bg-gray-600 text-white" : "bg-gray-800"
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleTagClick(tag.slug)}
                className={`px-3 py-1 font-semibold text-xl border rounded-lg ${
                  activeTag === tag.slug ? "bg-gray-600 text-white" : "bg-gray-800"
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        ) : (
          <div>No tags available</div>
        )}
      </div>

      {/* Render list of posts */}
      <div className="mt-12 pb-12 w-full flex flex-col sm:flex-row flex-wrap space-x-4 space-y-5 justify-center">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, idx) => <PostCard key={idx} data={post} />)
        ) : (
          <div>No posts available for this tag</div>
        )}
      </div>
      <Footer/>
    </div>
  );
}
