interface Graph{
    [key: string]: string[];
}

function breadthFirstSearch(graph: Graph, startNode: string): void {
    let visited: {[key: string]: boolean} = {};  
    let queue: string[] = [startNode];  

    visited[startNode] = true;  

    while (queue.length > 0) {
        const node = queue.shift();  
        if (node) {  
            console.log(node);  

            const neighbors = graph[node];  
            for (const neighbor of neighbors) {
                if (!visited[neighbor]) {  
                    visited[neighbor] = true;  
                    queue.push(neighbor);  
                }
            }
        }
    }
}


const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

breadthFirstSearch(graph, 'A');
