import { useEffect, useRef } from "react";
import Sigma from "sigma";
import { createSampleGraph } from "./graph";
import Graph from "graphology";

export function GraphView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sigmaInstance = useRef<Sigma | null>(null);

  useEffect(() => {
    const graph: Graph = createSampleGraph();

    if (containerRef.current) {
      sigmaInstance.current = new Sigma(graph, containerRef.current);
    }

    
    return () => {
      sigmaInstance.current?.kill();
    };
  }, []);

  return (
    <div>
      <h1>Truck Route Optimizer</h1>
      <div ref={containerRef} style={{ height: "600px" }} />
    </div>
  );
}