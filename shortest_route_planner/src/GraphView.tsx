import { useEffect, useRef } from "react";
import Sigma from "sigma";
import { createSampleGraph } from "./graph"; // ajuste o caminho se necessário

export function GraphView() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const graph = createSampleGraph();

    if (containerRef.current) {
      new Sigma(graph, containerRef.current);
    }
  }, []);

  return (
    <div>
      <h1>Truck Route Optimizer</h1>
      <div ref={containerRef} style={{ height: "500px" }} />
    </div>
  );
}
