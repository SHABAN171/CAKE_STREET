// src/App.jsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* AppRoutes inachukua navigation, pages, footer */}
      <AppRoutes />
    </div>
  );
}
