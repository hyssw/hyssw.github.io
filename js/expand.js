$(document).ready(function(){
$(".headerN").click(function () {
    $header = $(this);
    var text = $header.text()
    var char = text.charAt(0)
    var real_text = text
    if (char == '+'){
                    real_text = text.substring(1);
                    /*var parts = real_text.split("|")
                    var chi = parts[0]
                    var eng = parts[1]
                    real_text = chi + '<eng>' + eng + '</eng>'*/
    }else if (char == '-'){
                    real_text = text.substring(1);
    }else {
                    alert("haha");
    }
    //var subs = text.split("+-")
    //var real_text = subs[subs.length-1]
    //alert(real_text)
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
    //execute this after slideToggle is done
    //change text of header based on visibility of content div
    $header.text(function () {
         //change text based on condition
         return $content.is(":visible") ? "-"+real_text : "+"+real_text;
       });
    });
                   
});
                  });