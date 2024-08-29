import OverlayCard from "../../../components/common/OverlayCard";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function BlogCardExcerpt({ post }) {
  return (
    <OverlayCard
      key={post.id}
      className="col-12 col-md-5 "
      spotlightColor="rgba(12, 148, 136, 0.2)"
    >
      <div className="">
        <h3
          className="heading-04 z-3"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </div>
      <Link to={`/blog/${post.id}`}>
        <Button
          variant="link"
          className="text-decoration-none text-reset fw-bold"
        >
          Read more
        </Button>
      </Link>
    </OverlayCard>
  );
}
