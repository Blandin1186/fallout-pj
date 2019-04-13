


function clock() {
var d = new Date();
var month_num = d.getMonth()
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();

month=new Array("января", "февраля", "марта", "апреля", "мая", "июня","июля", "августа", "сентября", "октября", "ноября", "декабря");

if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;

date_time = "" + day + " " + month[month_num] + " " + d.getFullYear() + " г.&nbsp;&nbsp;&nbsp;"+ hours + ":" + minutes + ":" + seconds;
if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();
}else document.getElementById("doc_time").innerHTML = date_time;
 setTimeout(clock, 1000);
}

 $(document).ready(function(){
            $('#login-trigger').click(function(){
                $(this).next('#login-content').slideToggle();
                $(this).toggleClass('active');                    
                
                if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
                    else $(this).find('span').html('&#x25BC;')})
      });
   
jQuery(document).ready(function(){


	$('.slade').slick();
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });
    clock();
});


