function checkParenteses(str){
	var helper = [];
	for(var i=0; i< str.length; i++){
  	if(str[i] === '(') {
    	helper.push(str[i]);
    }else 
    if(str[i] === ')'){
    	if(helper.length > 0) helper.pop();
      else return false;
    }
  }
  if(helper.length == 0) return true; 
  else return false;
}

console.log(checkParenteses('((()))('));
console.log(checkParenteses('((()))()()'));