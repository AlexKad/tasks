public class BreadthFirstSearch{
	public int[] edgeTo;
	public int[] distTo;
	public int s;

	public BreadthFirstSearch(GraphList g, int s){
		int n = g.VertexCount;
		edgeTo = new int[n];
		distTo = new int[n];

		for(var i=0; i<n; i++ ){
			edge[i] = -1;
			distTo[i] = -1;
		}

		this.s = s;

		BFS(g,s);
	}

	public void BFS(GraphList g, int v){
		var queue = new Queue<int>();
		queue.Enqueue(s);
		distTo[v] = 0;

		while(queue.Count!=0){
			int w = queue.Dequeue();
			foreach(var i in w.GetAdj(w)){
				if(distTo[i] != -1){
					queue.Enqueue(i);
					distTo[i] = distTo[w]+1;
					edgeTo[i] = w;
				}
			}
		}
	}
}