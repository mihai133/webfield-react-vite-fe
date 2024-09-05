import { Link, useNavigate, useParams } from "react-router-dom";
import { useFMutation, useFQuery } from "../../../api/fetch";
import { Button, Card, Col, Figure, Image, NavLink } from "react-bootstrap";
import { Pencil, X } from "react-bootstrap-icons";

export default function Project() {
  const projectId = useParams().id;
  const navigate = useNavigate();

  const [data, isPending] = useFQuery(`projects/${projectId}`, [projectId]);
  const [deleteProject] = useFMutation(`projects/${projectId}`, "DELETE", {
    onSuccess: () => {
      navigate("/projects");
    },
  });

  function handleDeleteProject() {
    deleteProject();
  }

  if (isPending) return <div>Loading...</div>;

  return (
    <>
      <Button
        onClick={() => navigate("/projects")}
        variant="link"
        className="text-decoration-none text-muted"
      >
        {"< Go back"}
      </Button>
      <Card>
        <Card.Header className="bg-transparent d-flex justify-content-between align-items-center py-3">
          <Card.Title className="heading-04">
            {data?.name}
            <Card.Text className="text-muted heading-05">
              Status: {data?.status}
            </Card.Text>
            <Card.Text className="text-muted heading-05">
              Created: {new Date(data?.created_at).toLocaleString()}
            </Card.Text>
          </Card.Title>
          <div className="d-flex gap-2">
            <Button
              variant="outline-primary"
              onClick={() => navigate(`/projects/${projectId}/edit`)}
            >
              <Pencil size={20} />
            </Button>
            <Button
              variant="danger"
              className="btn-delete-project"
              onClick={() => handleDeleteProject()}
            >
              <X size={20} />
            </Button>
          </div>
        </Card.Header>
        <Card.Body className="row">
          {data?.image ? (
            <Col md={2}>
              <Figure>
                <Figure.Image
                  src={data?.image}
                  alt="project-image"
                  width={171}
                  height={180}
                />
              </Figure>
            </Col>
          ) : (
            <></>
          )}
          <Col>
            <Card.Text>Description: {data?.description}</Card.Text>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
}
