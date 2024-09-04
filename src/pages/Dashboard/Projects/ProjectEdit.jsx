import { Button, Card, Form } from "react-bootstrap";
import { newDataFetcher, useFMutation, useFQuery } from "../../../api/fetch";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function ProjectEdit() {
  const projectId = useParams().id;
  const navigate = useNavigate();

  const [data] = useFQuery(`projects/${projectId}`, [projectId]);
  const [updateProject] = useFMutation(`projects/${projectId}`, "PUT", {
    onSuccess: (data) => {
      navigate("/projects");
    },
  });

  const project = data;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target);
    const formData = {
      id: projectId,
      name: event.target.name.value,
      description: event.target.description.value,
      status: event.target.status.value,
    };

    updateProject(formData);
  };

  if (!project) return <></>;

  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mx-auto">
      <h1>Edit the project</h1>
      <Card className="card-project">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="name"
                defaultValue={project?.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter description"
                aria-rowspan="3"
                name="description"
                defaultValue={project?.description}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                defaultValue={project?.status}
                name="status"
              >
                <option value="in_progress">In progress</option>
                <option value="completed">Completed</option>
                <option value="on_hold">On hold</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Edit Project
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
