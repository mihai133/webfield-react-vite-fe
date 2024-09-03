import { Badge, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../../api/fetch";

export default function ProjectsIndex() {
  const navigate = useNavigate();

  const projects = {
    data: [
      {
        id: 1,
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "in_progress",
      },
      {
        id: 2,
        name: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "in_progress",
      },
      {
        id: 3,
        name: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "in_progress",
      },
    ],
  };

  // if (!data) return <></>;

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
      <div className="projects-list d-flex flex-column justify-content-between gap-3 mt-4">
        {projects?.data?.map((project) => (
          <Card
            className="card-project cursor-pointer"
            key={project.id}
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
              <Card.Text>{project.description}</Card.Text>
              {/* <Badge bg="warning" className="rounded rounded-pill text-black">
              </Badge> */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
