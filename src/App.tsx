import { useToast } from "./use-better-toast";
import { toast as sonnerToast } from "sonner";
import "./App.css";

function App() {
  const toast = useToast();

  return (
    <div>
      <h3>Try it out in both mobile and desktop screen size.</h3>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => sonnerToast.success("This is a default toast.")}>
          Default Sonner Toast
        </button>
        <button onClick={() => toast.success("This is a better toast.")}>
          Better Sonner Toast
        </button>
      </div>
    </div>
  );
}

export default App;
