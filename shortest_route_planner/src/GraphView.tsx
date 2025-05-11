import { useEffect, useRef, useState } from "react";
import Sigma from "sigma";
import { createSampleGraph } from "./graph";
import Graph from "graphology";

export function GraphView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sigmaInstance = useRef<Sigma | null>(null);
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
  const graphRef = useRef<Graph | null>(null);

  useEffect(() => {
    const graph: Graph = createSampleGraph();
    graphRef.current = graph;

    if (containerRef.current) {
      const renderer = new Sigma(graph, containerRef.current,{
        renderEdgeLabels: true
      });
      sigmaInstance.current = renderer;

      renderer.on("clickNode", async ({ node }) => {
        setSelectedNodes((prev) => {
          if (prev.includes(node) || prev.length >= 3) return prev;
          const updated = [...prev, node];

          graph.setNodeAttribute(node, "color", "#ffa500");

          if (updated.length === 3) {
            const [start, mid, end] = updated;
            const path1 = dijkstra(graph, start, mid);
            const path2 = dijkstra(graph, mid, end);
            const fullPath = [...path1, ...path2.slice(1)];

            // Reset edge and node colors
            graph.forEachEdge((edge) => {
              graph.setEdgeAttribute(edge, "color", "#ccc");
            });

            // Destaque caminho de start -> mid que é o ponto de coleta do caminhao
            animatePath(graph, path1, "#00f").then(() => {
              // Destaque caminho de mid -> end (coleta - entrega )após percorrer o caimho 1()
              animatePath(graph, path2, "#f00");
            });
          }

          return updated;
        });
      });
    }

    return () => {
      sigmaInstance.current?.kill();
    };
  }, []);

  function dijkstra(graph: Graph, start: string, target: string): string[] {
    const distances: Record<string, number> = {};
    const previous: Record<string, string | null> = {};
    const visited: Set<string> = new Set();
    const nodes = graph.nodes();

    nodes.forEach((node) => {
      distances[node] = Infinity;
      previous[node] = null;
    });
    distances[start] = 0;

    while (visited.size < nodes.length) {
      let closestNode: string | null = null;
      let minDistance = Infinity;

      for (const node of nodes) {
        if (!visited.has(node) && distances[node] < minDistance) {
          closestNode = node;
          minDistance = distances[node];
        }
      }

      if (closestNode === null) break;
      visited.add(closestNode);

      const neighbors = graph.neighbors(closestNode);
      for (const neighbor of neighbors) {
        if (visited.has(neighbor)) continue;
        const edge = graph.edge(closestNode, neighbor) || graph.edge(neighbor, closestNode);
        const weight = graph.getEdgeAttribute(edge, "weight") || 1;
        const alt = distances[closestNode] + weight;
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = closestNode;
        }
      }
    }

    const path: string[] = [];
    let current: string | null = target;
    while (current) {
      path.unshift(current);
      current = previous[current];
    }
    return path;
  }

  async function animatePath(graph: Graph, path: string[], color: string) {
    for (let i = 0; i < path.length - 1; i++) {
      const from = path[i];
      const to = path[i + 1];
      const edge = graph.edge(from, to) || graph.edge(to, from);
      if (edge) {
        graph.setEdgeAttribute(edge, "color", color);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
  }

  const handleReset = () => {
    setSelectedNodes([]);
    const graph = graphRef.current;
    if (graph) {
      graph.forEachEdge((edge) => {
        graph.setEdgeAttribute(edge, "color", "#ccc");
      });
      graph.forEachNode((node) => {
        const baseColor = graph.getNodeAttribute(node, "baseColor") || "#999";
        graph.setNodeAttribute(node, "color", baseColor);
      });
    }
  };

  return (
    <div>
      <h1>Shortest Route Planner</h1>
      <p>
        Clique em 3 nós: <strong>Garage</strong> (início), <strong>Coleta</strong> e <strong>Entrega</strong>
      </p>
      <button onClick={handleReset}>Limpar Seleção</button>
      <div ref={containerRef} style={{ height: "70vh" }} />
    </div>
  );
}
