import { useFetchWpPosts } from "../../api/WP/fetchBlogPosts";
import { Card } from "react-bootstrap";

export default function Blog() {
  const { posts, loading } = useFetchWpPosts();
  console.log(posts);
  return (
    <div className="container">
      <h1>Blog</h1>
      {loading ? (
        <div>Loading posts...</div>
      ) : (
        <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3">
          {posts.map((post) => (
            <Card key={post.id} className="col border-0">
              <Card.Header className="bg-transparent ">
                <Card.Title className="fs-5 fw-bold">
                  <div
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  ></div>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <div
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
