import { Link } from "react-router-dom";

export function CustomLink({ href, children }) {
  return (
    <Link to={href} className="text-lg font-medium text-[#16161B]">
      {children}
    </Link>
  );
}
