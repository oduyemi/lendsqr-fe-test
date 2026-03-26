import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { OrganizationProvider } from "../src/context/organization.context.tsx"

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <OrganizationProvider>
          <App />
        </OrganizationProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);