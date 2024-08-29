import { useFetchWpPosts } from "../../api/WP/fetchBlogPosts";
import BlurText from "../../components/Text/BlurText";
import BlogCardExcerpt from "./components/BlogCardExcerpt";
import LoadingSpinner from "../../components/common/LoadingSpinner";

export default function Blog() {
  const { posts, loading } = useFetchWpPosts();
  // console.log(posts);
  return (
    <div className="container">
      <BlurText text="Blog articles" classname="heading-01" delay="80" />

      {loading && <LoadingSpinner />}
      <div className="row gap-4 mt-4">
        {posts.map((post) => (
          <BlogCardExcerpt key={post.id} post={post} loading={loading} />
        ))}
      </div>
    </div>
  );
}
