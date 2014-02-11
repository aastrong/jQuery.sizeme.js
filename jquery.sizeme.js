(function($) {
	$.fn.sizeme = function() {
		    $(this).each(function() {
			    var $item = $(this);
			    var $w = $item.width();
				var $sizeme = $item.find('.sizeme');
				if($sizeme.length){
					$sizeme.text($w);
				}
				else{
					$sizeme = $('<div class="sizeme"></div>').appendTo($item);
					$sizeme.text($w);
				}
				$sizeme.css({ display: 'block', float: 'left', bottom: 0, padding:'5px', right:0, background:'rgba(0,0,0,0.7)', color:'#fff', position: 'absolute' });
			});
	};
}(jQuery));
