import { Outlet } from "react-router-dom";

export default function ParentComponent() {
  return (
    <div className="container">
      <h2>
        Protocol nr <span>XN-N-XXX-NNN-XX-XX-XN</span>
      </h2>
      <h3>Ampoule Control</h3>
      <Outlet />
    </div>
  );
}
