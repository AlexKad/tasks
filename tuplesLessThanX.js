function findTuples(arr, x){
	var n = arr.length,
		tuplesCount = 0,
		left = 0, right = n-1;

	for(var i=0; i< n-1; i++){
		left = i;
		right = n-1;

		if(arr[left]>x ) continue; //|| arr[right]>x if arr is sorted

		while(left!=right){
			if(arr[right] > x  || arr[left] + arr[right] >= x){
				right--;
			}
			else{
				console.log(left +' '+right);
				right--;
				tuplesCount++;
			}
		}
	}	
	
	return tuplesCount;
}




[1 2 3 4 5 6]  

7

1 2
1 3
1 4
1 5
2 3
2 4

