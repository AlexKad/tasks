//find a max sum of subArray of array a

function maxSubArraySum(a){
  var now = a[0],
  	  prev = a[0];
      
  for(var i = 1;i < a.length;i++){  
    prev = Math.max(a[i], prev + a[i]);
    now = Math.max(prev, now);
  }
  return now;
}

console.log(maxSubArraySum([-1,-2,-3,-4,-6,-7]));




function maxSubArray(a){
	var now = a[0],
  		prev = a[0],
      start_i = 0,
      end_i = 0;
      
      for(var i = 0; i < a.length; i++){
      	if(a[i] > prev + a[i]){
        		start_i = i;
            prev = a[i];
        } else{
        	prev = prev + a[i];
        }
        
        if(prev > now){
        	end_i = i;
          now = prev;
        }        
      }      
      return a.slice(start_i, end_i+1);
}

console.log(maxSubArray([-1,-2,-3, 4, 6, 7, -9]));
