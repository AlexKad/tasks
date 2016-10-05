function test(){
	var startDate = new Date(),
	dif;
	console.log('start');
	setTimeout(function(){
		dif = new Date() - startDate;
		console.log('from timeout '  + dif + " ms");
	},5);


	
	var endDate = +new Date() + 10;

	dif = new Date() - startDate;
	console.log('inside main fn ' + dif + " ms");
	
	while(+new Date()<endDate){
		//do smth		
	}
	dif = new Date() - startDate;
	console.log('end ' + dif + " ms");
}