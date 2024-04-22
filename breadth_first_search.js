function breadthFirstSearch(graph, startNode){
    let visited = new Set();
    let queue = [startNode];

    visited.add(startNode);

    while(queue.length > 0){
        const node = queue.shift();
        console.log(node);

        const neighbors = graph[node];
        for(const neighbor of neighbors){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }

    }
}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

breadthFirstSearch(graph, 'A');
