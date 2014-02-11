sizeme.js
=======

This is a small .js plugin that will take your desired region, and tell you the width of it as you resize your page. 


This is a very simple & lightweight jQuery plugin which allows you to select any element, and have the width of the elemnt be printed on the element itself. The value changes as you resize your browser width so you always know the elements width. 

This will help with development of responsive website

Simply add the sizeme.js file to the bottom of your file, and intialize the plugin on what ever divs or elements you desire. ( look at example below )

	<script src="min/jquery.sizeme.min.js"></script>
	<script>
	$(window).resize(function() { 
		$('.div').sizeme();
	}).resize();
	</script>

I have included an index.html as page as an example if need be. 

Any feedback is greatly apprciated. 
```
               _                     
  __ _ __ _ __| |_ _ _ ___ _ _  __ _ 
 / _` / _` (_-|  _| '_/ _ | ' \/ _` |
 \__,_\__,_/__/\__|_| \___|_||_\__, |
                               |___/ 
```