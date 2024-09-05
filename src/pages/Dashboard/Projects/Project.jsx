import { useNavigate, useParams } from "react-router-dom";
import { useFMutation, useFQuery } from "../../../api/fetch";
import { Button, Card } from "react-bootstrap";
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

  const fileUrl = "rails/active_storage/blobs/w9s24q2cj8uo7xcziglfc3zmtamr";

  if (isPending) return <div>Loading...</div>;

  return (
    <Card>
      <Card.Header className="bg-transparent d-flex justify-content-between align-items-center py-3">
        <Card.Title className="heading-04">{data?.name}</Card.Title>
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
      <Card.Body>
        <Card.Text>{data?.description}</Card.Text>
        <Card.Img src={"http://localhost:3003" + fileUrl} />
      </Card.Body>
    </Card>
  );
}
