
function swap(arr, ind1,ind2){
	var temp = arr[ind1];
	arr[ind1] = arr[ind2];
	arr[ind2] = temp;
}

function reorderArr(arr){
	var n = arr.length-1,
	middle = Math.floor(n/2);

	for(var i=0; i<middle; i++){
		swap(arr, i, n-i-1);
	}
	return arr;
}
