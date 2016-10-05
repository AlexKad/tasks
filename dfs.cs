
public class DepthFirstSearch{

	private bool[] marked;
	private int[] edgeTo;
	private int s;


	public DepthFirstSearch(GraphList g, int s){
		marked = new bool[g.VertexCount];
		edgeTo = new int[g.VertexCount];
		this.s = s;
	}


	public void DFS(GraphList g, int v){
		marked[s] = true;

		foreach(var i in G.GetAdj(v)){
			if(!marked[i]){
				DFS(g, i);
				edgeTo[i] = v;
			}
		}
	}

	public bool HasPathTo(int v){
		return marked[v];
	}

	public IEnumerable<int> GetPathTo(int v){
		if(!HasPathTo(v)){
			return null;
		}
		var stack = new Stack<int>();

		for(var i=v; i!=s; i=edgeTo[i]){
			stack.push(i);
		}
		return stack;
	}

}