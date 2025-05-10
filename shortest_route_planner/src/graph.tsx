import Graph from "graphology";


export function createSampleGraph() {
  const graph = new Graph();

  // Adicionando nós com posições fixas
  graph.addNode("garage", { x: 0, y: 0, label: "Garage", size: 10, color: "#1f77b4" });
  graph.addNode("pickup1", { x: 2, y: 1, label: "Pickup 1", size: 8, color: "#2ca02c" });
  graph.addNode("pickup2", { x: -2, y: 1, label: "Pickup 2", size: 8, color: "#2ca02c" });
  graph.addNode("delivery1", { x: 3, y: 3, label: "Delivery 1", size: 8, color: "#d62728" });
  graph.addNode("delivery2", { x: -3, y: 3, label: "Delivery 2", size: 8, color: "#d62728" });
  graph.addNode("hub", { x: 0, y: 2, label: "Hub", size: 9, color: "#ff7f0e" });

  // Conectando com arestas
  graph.addEdge("garage", "pickup1", { label: "R1", color: "#888" });
  graph.addEdge("garage", "pickup2", { label: "R2", color: "#888" });
  graph.addEdge("pickup1", "hub", { label: "R3", color: "#888" });
  graph.addEdge("pickup2", "hub", { label: "R4", color: "#888" });
  graph.addEdge("hub", "delivery1", { label: "R5", color: "#f00" });
  graph.addEdge("hub", "delivery2", { label: "R6", color: "#f00" });

  return graph;
}
