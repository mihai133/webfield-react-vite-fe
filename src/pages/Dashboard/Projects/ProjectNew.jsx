import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFMutation } from "../../../api/fetch";

export default function ProjectNew() {
  const navigate = useNavigate();

  const [addProject] = useFMutation("projects", "POST", {
    onSuccess: () => {
      navigate("/projects");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      description: event.target.description.value,
      status: event.target.status.value,
    };

    addProject({ ...formData });
  };

  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mx-auto">
      <h1>Create a new project</h1>
      <Card className="card-project">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="name"
                // onChange={(e) =>
                //   setFormData({ ...formData, name: e.target.value })
                // }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter description"
                rows="5"
                name="description"
                // onChange={(e) =>
                //   setFormData({ ...formData, description: e.target.value })
                // }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                // defaultValue={formData.status}
                // onChange={(e) =>
                //   setFormData({ ...formData, status: e.target.value })
                // }
              >
                <option value="in_progress">In progress</option>
                <option value="completed">Completed</option>
                <option value="on_hold">On hold</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Project
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
