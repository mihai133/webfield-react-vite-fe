import { useFetchPost } from "../../../api/WP/fetchBlogPosts";
import { useParams } from "react-router-dom";
import BlurText from "../../../components/Text/BlurText";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

export default function BlogArticle() {
  const { id } = useParams();
  const { post, loading } = useFetchPost(id);
  console.log(id);
  console.log(loading);
  console.log(post);

  if (loading) return <LoadingSpinner />;

  if (post)
    return loading && !post ? (
      <div>Loading post...</div>
    ) : (
      <div>
        <div className="text-center">
          <BlurText
            text={post?.title?.rendered}
            classname="heading-01 text-center"
            delay="80"
          />
        </div>

        <div
          className="col-12 col-lg-10 col-xl-8 mx-auto mt-4 text-justify"
          dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
        />
      </div>
    );

  return <></>;
}
