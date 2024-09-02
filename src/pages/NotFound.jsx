import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center m-auto pt-5">
      <h1 className="heading-01">404 Not Found</h1>

      <p>The page you are looking for does not exist.</p>
      <Button variant="primary" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
}
