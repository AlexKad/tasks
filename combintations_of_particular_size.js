// Input - array of elements and size of combination.
// Output - arrays consist of element form input array, with length = size of combination
 
function solution(arr, size) {
    var combinations = [];     
    getCombinations(arr, size, 0, [], combinations);
    
    console.log(combinations);   
}

function getCombinations(arr, size, startInd, currArray, output){
    if(currArray.length == size){
        output.push(currArray);
    }
    else{
        var i;
        for(i = startInd; i < arr.length; ++i){	
	            getCombinations(arr, size, i + 1, currArray.concat(arr[i]), output);
        };
    }
}

solution([1, 2, 3, 4, 5] , 3);