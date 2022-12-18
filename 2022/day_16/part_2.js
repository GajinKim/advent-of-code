const { PriorityQueue } = require('collections');

let graph = {
  A: ["B", "C"],
  B: ["C", "A"],
  C: ["B", "D"],
  D: ["A"],
};

// basically the idea is that we start from A
// we find every single path to every other possible node
// we calculate the "time cost" to "value cost" for traversing to each of those nodes

// that highest time to value is the one we visit
// we keep a track of opened and closed valves mand we close that given valve

function dijkstra(graph, start, goal) {
  // create a priority queue for Dijkstra's algorithm and enqueue the starting vertex
  let queue = new PriorityQueue({ comparator: (a, b) => a.cost - b.cost });
  queue.enqueue(start);

  // create an object to store the cost of each vertex
  let cost = {};
  cost[start.id] = 0;

  // create an object to store the predecessor of each vertex (for reconstructing the path)
  let predecessor = {};
  predecessor[start.id] = null;

  // while the queue is not empty
  while (queue.length > 0) {
    // dequeue the next vertex from the queue
    let v = queue.dequeue();

    // if the vertex is the goal, return the predecessor array (for reconstructing the path)
    if (v.id === goal.id) {
      return predecessor;
    }

    // get the neighbors of the vertex
    let neighbors = graph[v.id];

    // for each neighbor of the vertex
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];

      // if the neighbor has not been visited
      if (!cost.hasOwnProperty(w.id)) {
        // compute the cost of the neighbor
        let newCost = cost[v.id] + w.cost;

        // update the cost of the neighbor if it is lower than the previous cost
        if (!cost.hasOwnProperty(w.id) || newCost < cost[w.id]) {
          cost[w.id] = newCost;

          // set the predecessor of the neighbor
          predecessor[w.id] = v;

          // enqueue the neighbor
          queue.enqueue(w);
        }
      }
    }
  }

  // if the goal was not reached, return null
  return null;
}


console.log(dijkstra(graph, "A", "D"));