//Given a list of integers and a single sum value, 
//return the first two values (parse from the left please) 
//in order of appearance that add up to form the sum.

//sum_pairs([11, 3, 7, 5],  10)      == [3, 7]
//sum_pairs([4, 3, 2, 3, 4], 6)      == [4, 2]
//sum_pairs([10, 5, 2, 3, 7, 5], 10) == [3, 7]

var sum_pairs = function(ints, s){
  var max = ints.length;
  var left = -1;
  var tried = [];

  while(0 < max){
      var number = ints[0];
      if(tried.indexOf(number) == -1){
        tried.push(number);
        var complement_ind = ints.indexOf(s-number,1);
        if(complement_ind != -1){
          left = number;
          max = complement_ind;
          ints = ints.slice(0,complement_ind);
        }
      }
      max--;
      ints.splice(0,1);
    }
    return (left == -1) ? undefined: [left, s-left]; 
}