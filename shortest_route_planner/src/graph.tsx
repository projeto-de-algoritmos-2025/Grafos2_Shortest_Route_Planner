import Graph from "graphology";

export function createSampleGraph() {
  const graph = new Graph();

  // Adicionando nós para todas as letras do alfabeto
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const positions = [
    { x: 0, y: 0 }, { x: 2, y: 1 }, { x: 4, y: 0 }, { x: 6, y: 1 }, { x: 8, y: 0 },
    { x: 1, y: 3 }, { x: 3, y: 4 }, { x: 5, y: 3 }, { x: 7, y: 4 }, { x: 9, y: 2 },
    { x: 1, y: 5 }, { x: 3, y: 6 }, { x: 5, y: 5 }, { x: 7, y: 6 }, { x: 9, y: 4 },
    { x: 0, y: 6 }, { x: 2, y: 7 }, { x: 4, y: 6 }, { x: 6, y: 7 }, { x: 8, y: 6 },
    { x: 1, y: 8 }, { x: 3, y: 9 }, { x: 5, y: 8 }, { x: 7, y: 9 }, { x: 9, y: 8 },
    { x: 0, y: 9 }, { x: 2, y: 10 }, { x: 4, y: 9 }, { x: 6, y: 10 }, { x: 8, y: 9 },
    { x: 1, y: 11 }, { x: 3, y: 12 }, { x: 5, y: 11 }, { x: 7, y: 12 }, { x: 9, y: 11 },
    { x: 0, y: 12 }, { x: 2, y: 13 }, { x: 4, y: 12 }, { x: 6, y: 13 }, { x: 8, y: 12 },
  ];

  alphabet.forEach((id, index) => {
    const { x, y } = positions[index];
    graph.addNode(id, {
      label: id,
      x,
      y,
      size: 6,
      color: "#ccc"
    });
  });

  // Definindo as arestas entre os nós
  const edges = [
    ["A", "B", 5], ["A", "C", 10], ["B", "D", 15], ["C", "E", 10], ["D", "F", 15],
    ["E", "G", 10], ["F", "H", 20], ["G", "I", 5], ["H", "J", 15], ["I", "K", 10],
    ["J", "L", 10], ["K", "M", 15], ["L", "N", 5], ["M", "O", 15], ["N", "P", 10],
    ["O", "Q", 5], ["P", "R", 20], ["Q", "S", 15], ["R", "T", 10], ["S", "U", 5],
    ["T", "V", 15], ["U", "W", 10], ["V", "X", 5], ["W", "Y", 20], ["X", "Z", 10],
    ["A", "F", 5], ["B", "G", 15], ["C", "H", 10], ["D", "I", 5], ["E", "J", 10],
    ["F", "K", 15], ["G", "L", 10], ["H", "M", 20], ["I", "N", 10], ["J", "O", 5],
    ["K", "P", 15], ["L", "Q", 10], ["M", "R", 5], ["N", "S", 15], ["O", "T", 10]
  ];

  edges.forEach(([source, target, weight]) => {
    graph.addUndirectedEdge(source, target, {
      label: `${weight}`,
      weight,
      color: "#aaa"
    });
  });

  return graph;
}