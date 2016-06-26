public class LinkedListNode{
	public int Value{get;set;}
	public Node Next{get;set;}

	public LinkedListNode(value){
		Value = value;
	}
}

public class LinkedList{
	private LinkedListNode _head;
	private LinkedListNode _tail;
	private int _count = 0;

	public int Count{
		get{ return _count;};
		private set;
	}

	public void AddItem(value){
		LinkedListNode node = new LinkedListNode(value);

		if(_head == null){
			_head = node;
			_tail = node;
		}else{
			_tail.Next = node;
			_tail = node;
		}
		_count++;
	}

	public bool DeleteItem(value){
		LinkedList prev = null;
		LinkedListNode current = _head;

		while(current != null){

			if(current.Value == value){

				if(prev!=null){
					prev.Next = current.Next;
				}
				else{
					_head = current.Next;					
				}

				_count--;
				return true;
			}

			prev = current;
			current = current.Next;
		}		
		return false;
	}

	public LinkedListNode Search(value){
		LinkedListNode current = _head;

		while(current != _tail){
			if(current.value == value){
			 return current;
			}
			else{
				current = current.Next;
			}
		}return null;

	}
}