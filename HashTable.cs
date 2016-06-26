public class bucket{
	private int key;
	private int value;

	public bucket(key,value){
		this.key = key;
		this.value = value;
	}

	public int getKey(){
		return key;
	}

	public int getValue(){
		return value;
	}
}



public class HashTable{
	
	private int[] arr = new int[100];

	

	public void Add(key, value){
		int hashCode = GetHashCode(key);

		if(arr[hashCode]){
			arr[hashCode].Add(value);
		}else{
			arr[hashCode] = new LinkedList();
			arr[hashCode].Add(value);
		}
	}

	public void Remove(){

	}

	private int GetHashCode(key){
		return key%arr.Length;
	}
}