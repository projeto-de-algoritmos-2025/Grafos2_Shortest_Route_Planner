import Graph from "graphology";

export function createSampleGraph() {
  const graph = new Graph();

  // Garagem principal
  graph.addNode("garage", {
    x: 0,
    y: 0,
    label: "Garage",
    size: 10,
    color: "#1f77b4"
  });

  for (let i = 1; i <= 10; i++) {
    graph.addNode(`C1_Node${i}`, {
      x: i * 2,
      y: Math.sin(i),
      label: `C1_Node${i}`,
      size: 6,
      color: "#2ca02c"
    });

    if (i === 1) {
      graph.addEdge("garage", `C1_Node${i}`, {
        label: `G-C1_${i}`,
        color: "#aaa",
        weight: 1 + Math.random() * 5
      });
    } else {
      graph.addEdge(`C1_Node${i - 1}`, `C1_Node${i}`, {
        label: `C1_${i}`,
        color: "#888",
        weight: 1 + Math.random() * 5
      });
    }
  }

  for (let i = 1; i <= 10; i++) {
    graph.addNode(`C2_Node${i}`, {
      x: -i * 2,
      y: Math.cos(i),
      label: `C2_Node${i}`,
      size: 6,
      color: "#d62728"
    });

    if (i > 1) {
      graph.addEdge(`C2_Node${i - 1}`, `C2_Node${i}`, {
        label: `C2_${i}`,
        color: "#f00",
        weight: 1 + Math.random() * 5
      });
    }
  }

  for (let i = 1; i <= 10; i++) {
    graph.addNode(`C3_Node${i}`, {
      x: Math.cos(i) * 5,
      y: Math.sin(i) * 5,
      label: `C3_Node${i}`,
      size: 6,
      color: "#ff7f0e"
    });

    if (i > 1) {
      graph.addEdge(`C3_Node${i - 1}`, `C3_Node${i}`, {
        label: `C3_${i}`,
        color: "#0ff",
        weight: 1 + Math.random() * 5
      });
    }
  }

  graph.addEdge("C3_Node1", "C1_Node10", {
    label: "C3-C1",
    color: "#000",
    weight: 2
  });

  return graph;
}