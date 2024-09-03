import { Link } from "react-router-dom";

export function NavItem({
  text = "nav",
  link = "/",
  icon,
  className = "dropdown-item d-flex align-items-center gap-2",
}) {
  return (
    <Link to={link} className={className}>
      {icon} {text}
    </Link>
  );
}
