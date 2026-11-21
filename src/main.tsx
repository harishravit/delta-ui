import { createRoot } from "react-dom/client";
import "./index.css";
import TestComponent from "./test-component.tsx";

createRoot(document.getElementById("root")!).render(<TestComponent />);
