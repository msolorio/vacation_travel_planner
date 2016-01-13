$('.vacation-wrap').on('keyup', '.quantity', function(){
	var thisVacation = $(this).closest('.vacation');

	//fetch price per ticket
	var price = +thisVacation.data('price');

	//fetch quantity entered
	var quantity = +$(this).val();

	//calculate total
	var total = price * quantity;
	total = total.toFixed(2);

	//update total
	thisVacation.find('.total').html(total);
});