$('.vacation-wrap').on('keyup', '.quantity', function(){
	//fetch price per ticket
	var price = +$(this).closest('.vacation').data('price');

	//fetch quantity entered
	var quantity = +$(this).val();

	//calculate total
	var total = price * quantity;
	total = total.toFixed(2);

	//update total
	$(this).closest('.vacation').find('.total').html(total);
});