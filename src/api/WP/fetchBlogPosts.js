import { useEffect, useState } from "react";

export const useFetchWpPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      const response = await fetch(
        "https://thewebfield.com/wp-json/wp/v2/posts"
      );
      if (!response.ok) {
        // oups! something went wrong
        setLoading(false);
        return;
      }

      const posts = await response.json();
      setLoading(false);
      setPosts(posts);
    }

    loadPosts();
  }, []);
  return { posts, loading };
};

export const useFetchPost = (id) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadPost() {
      const response = await fetch(
        `https://thewebfield.com/wp-json/wp/v2/posts/${id}`
      );
      if (!response.ok) {
        // oups! something went wrong
        setLoading(false);
        return;
      }

      const post = await response.json();
      setLoading(false);
      setPost(post);
    }

    loadPost();
  }, []);
  return { post, loading };
};
