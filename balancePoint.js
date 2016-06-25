

function balancePoint(arr){
	var n = arr.length,
	leftsum = 0,
	rightsum = 0,
	i;

	// for(i=0; i<n;i++){
	// 	rightsum += arr[i];
	// }

	rightsum = arr.reduce(function(sum,el){return sum+el},0);

	for(i=0;i<n-1;i++){
		if(leftsum == rightsum){
			return i;
		}
		else{
			leftsum+=arr[i];
			rightsum-=arr[i];
		}		
	}
	return -1;
}