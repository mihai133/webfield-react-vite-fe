import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData, newDataFetcher } from "../../../api/fetch";
import { Button, Card } from "react-bootstrap";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Pencil, X } from "react-bootstrap-icons";

export default function Project() {
  const projectId = useParams().id;
  const navigate = useNavigate();
  console.log(projectId);

  const { data, isLoading } = useQuery({
    queryFn: () => newDataFetcher(`projects/${projectId}`),
    queryKey: ["projects", projectId],
  });

  const mutation = useMutation({
    mutationFn: () => newDataFetcher(`projects/${projectId}`, "DELETE"),
    onSuccess: () => {
      navigate("/projects");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function handleDeleteProject() {
    mutation.mutate();
  }

  console.log(data);

  return (
    <Card>
      <Card.Header className="bg-transparent d-flex justify-content-between align-items-center py-3">
        <Card.Title className="heading-04">{data?.data?.name}</Card.Title>
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
        <Card.Text>{data?.data?.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
