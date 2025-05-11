import Graph from "graphology";

export function createSampleGraph() {
  const graph = new Graph();

  // Adicionando nós para todas as letras do alfabeto
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const positions = [
    { x: 0, y: 0 }, { x: 2, y: 1 }, { x: 4, y: 0 }, { x: 6, y: 1 }, { x: 8, y: 0 },
    { x: 1, y: 3 }, { x: 3, y: 4 }, { x: 5, y: 3 }, { x: 7, y: 4 }, { x: 9, y: 2 },
    { x: 1, y: 5 }, { x: 3, y: 6 }, { x: 5, y: 5 }, { x: 7, y: 4 }, { x: 9, y: 4 },
    { x: 0, y: 7 }, { x: 2, y: 7 }, { x: 4, y: 6 }, { x: 6, y: 7 }, { x: 8, y: 7 },
    { x: 1, y: 8 }, { x: 3, y: 9 }, { x: 5, y: 8 }, { x: 7, y: 9 }, { x: 10, y: 9 },
    { x: 0, y: 11 }, { x: 2, y: 10 }, { x: 4, y: 9 }, { x: 6, y: 10 }, { x: 8, y: 9 },
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
    ["A", "B", 5], ["A", "C", 13], ["B", "D", 15], ["C", "E", 18], ["D", "F", 15],
    ["E", "G", 19], ["F", "H", 20], ["G", "I", 7], ["H", "J", 14], ["I", "K", 10],
    ["J", "L", 13], ["K", "M", 16], ["L", "N", 6], ["M", "O", 15], ["N", "P", 10],
    ["O", "Q", 22], ["P", "R", 21], ["Q", "S", 15], ["R", "T", 12], ["S", "U", 5],
    ["T", "V", 17], ["U", "W", 10], ["V", "X", 5], ["W", "Y", 22], ["X", "Z", 10],
    ["A", "F", 5], ["B", "G", 15], ["C", "H", 10], ["D", "I", 5], ["E", "J", 10],
    ["F", "K", 19], ["G", "L", 8], ["H", "M", 20], ["I", "N", 10], ["J", "O", 5],
    ["K", "P", 14], ["L", "Q", 5], ["M", "R", 5], ["N", "S", 15], ["O", "T", 10],
    ["Z", "U", 15]
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