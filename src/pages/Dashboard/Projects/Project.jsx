import React from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../../api/fetch";
import { Button, Card } from "react-bootstrap";

export default function Project() {
  const projectId = useParams().id;
  console.log(projectId);

  // const { data } = useSWR(`projects/${projectId}`, newDataFetcher);
  // console.log(data);

  // // const { deteleProject } = useSWRConfig(`projects/${projectId}`, "DELETE");
  // // const { deleteProject } = useSWRMutation();
  // const { mutate } = useSWRConfig();
  // function handleDeleteProject() {
  //   mutate(`projects/${projectId}`, null, { method: "DELETE" });
  // }

  const { data } = fetchData(`projects/${projectId}`, "GET");

  return (
    <Card>
      <Card.Header className="bg-transparent d-flex justify-content-between align-items-center py-3">
        <Card.Title className="heading-04">{data?.data?.name}</Card.Title>
        <Button variant="danger" className="btn-delete-project">
          Delete project
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>{data?.data?.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
