import React from "react";
import { Outlet } from "react-router-dom";

function MovieWrapper() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MovieWrapper;
