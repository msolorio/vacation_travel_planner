/*
$('.vacation-wrap').on('keyup', '.quantity', function() {
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

$('.vacation-wrap').on('click', '.view-comments', function() {

    //find the active comment
    var activeComments = $('.comments.active');

    //find clicked comments section
    var thisComments = $(this).closest('.vacation-container').find('.comments');

    function showNextComments() {
        thisComments.slideDown(200, function() {
            thisComments.addClass('active');
        });
    }

    if (activeComments.length) {

        //grab the location of comment clicked
        var activeComLoc = activeComments.data('location');
        var nextComLoc = thisComments.data('location');
        activeComments.slideUp(200, function() {
            activeComments.removeClass('active');

            //check if same comment is clicked twice
            //only show if it is a difference comment section
            if (activeComLoc !== nextComLoc) {
                showNextComments();
            }
        });
    } else {
        showNextComments();
        thisComments.addClass('active');
    }
});
*/

var vacations = {
    init: function() {
    	$('.quantity').keyup(this.updateTotal);
    	$('.view-comments').click(this.toggleComments);
    },
    updateTotal: function() {
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
    },
    toggleComments: function() {
        //find the active comment
        var activeComments = $('.comments.active');

        //find clicked comments section
        var thisComments = $(this).closest('.vacation-container').find('.comments');

        function showNextComments() {
            thisComments.slideDown(200, function() {
                thisComments.addClass('active');
            });
        }

        if (activeComments.length) {

            //grab the location of comment clicked
            var activeComLoc = activeComments.data('location');
            var nextComLoc = thisComments.data('location');
            activeComments.slideUp(200, function() {
                activeComments.removeClass('active');

                //check if same comment is clicked twice
                //only show if it is a difference comment section
                if (activeComLoc !== nextComLoc) {
                    showNextComments();
                }
            });
        } else {
            showNextComments();
        }
    }
};
$(function(){
	vacations.init();
});