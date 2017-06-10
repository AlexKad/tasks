//Given a list of integers and a single sum value, 
//return the first two values (parse from the left please) 
//in order of appearance that add up to form the sum.

//sum_pairs([11, 3, 7, 5],  10)      == [3, 7]
//sum_pairs([4, 3, 2, 3, 4], 6)      == [4, 2]
//sum_pairs([10, 5, 2, 3, 7, 5], 10) == [3, 7]

var sum_pairs = function(ints, s){
  let el, i,
      hash = {};

  for (i = 0; i < ints.length; i++) {
    el = ints[i];
    if (hash[s - el]) {
      return [s - el, el];
    }
    if (!hash[el]) {
      hash[el] = true;
    }
  }
}