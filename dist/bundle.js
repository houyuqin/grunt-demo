$(function(){
    /*calc button click event*/
    //get dom elem
    var $width = $("#width"),
        $height = $("#height"),
        $btnCal = $("#calculate"),
        $perimeter = $("#perimeter"),
        $area = $("#area")

    $btnCal.click(function(){
      //get value
      var w = Number($width.val()),
          h = Number($height.val());

      //calculate
      var r = new Rectangle(w,h);

      //output
      $perimeter.val(p.toFixed(2));
      $area.val(a.toFixed(2));
    }); 
})
