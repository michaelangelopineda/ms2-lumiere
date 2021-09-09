//code taken from codepen https://codepen.io/iacus/pen/zzPzvp
$(function(){
    $("#noir-img").on({
     mouseenter: function(){
      $(this).attr('src','assets/images/scents/noir-l.JPG');
    },
    mouseleave: function(){
      $(this).attr('src','assets/images/scents/noir-s.JPG');
    }
    });
  });

  $(function(){
    $("#desir-img").on({
     mouseenter: function(){
      $(this).attr('src','assets/images/scents/desir-l.JPG');
    },
    mouseleave: function(){
      $(this).attr('src','assets/images/scents/desir-s.JPG');
    }
    });
  });

  $(function(){
    $("#sedetendre-img").on({
     mouseenter: function(){
      $(this).attr('src','assets/images/scents/sedetendre-l.JPG');
    },
    mouseleave: function(){
      $(this).attr('src','assets/images/scents/sedetendre-s.JPG');
    }
    });
  });

  $(function(){
    $("#concentrer-img").on({
     mouseenter: function(){
      $(this).attr('src','assets/images/scents/concentrer-l.JPG');
    },
    mouseleave: function(){
      $(this).attr('src','assets/images/scents/concentrer-s.JPG');
    }
    });
  });