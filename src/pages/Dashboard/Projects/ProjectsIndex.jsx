import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFQuery } from "../../../api/fetch";

export default function ProjectsIndex() {
  const navigate = useNavigate();

  const [projects, isPending] = useFQuery("projects", ["projects"]);

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="container-fluid row m-0 p-0">
      <div>
        <Button
          variant="primary"
          className="btn-add-project"
          onClick={() => navigate("/projects/new")}
        >
          Add new Project
        </Button>
      </div>
      <Row as={"div"} className="projects-list g-3 mt-4">
        {projects?.map((project) => (
          <Col key={project.id} xs={12} sm={6} lg={4}>
            <Card
              className="card-project cursor-pointer"
              onClick={() => navigate("/projects/" + project.id)}
            >
              <Card.Header className="bg-transparent d-flex justify-content-between align-items-center py-3">
                <Card.Title className="heading-04 d-flex flex-column gap-2">
                  <span className="fs-5 fw-normal">#{project.id}</span>
                  {project.name}
                </Card.Title>
                <Badge bg="primary" className="text-white">
                  {project.status}
                </Badge>
              </Card.Header>
              <Card.Body>
                <Card.Text className="text-truncate">
                  {project.description}
                </Card.Text>
                {/* <Badge bg="warning" className="rounded rounded-pill text-black">
              </Badge> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
