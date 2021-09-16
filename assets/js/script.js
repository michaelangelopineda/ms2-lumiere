//Gets the navbar to collapse back after clicking a navlink
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

//Changes image when hovered over and changes back when mouse out
$(function () {
  $("#noir-img").on({
    mouseenter: function () {
      $(this).attr('src', 'assets/images/scents/noir-l.JPG');
    },
    mouseleave: function () {
      $(this).attr('src', 'assets/images/scents/noir-s.JPG');
    }
  });
});

//Changes image when hovered over and changes back when mouse out
$(function () {
  $("#desir-img").on({
    mouseenter: function () {
      $(this).attr('src', 'assets/images/scents/desir-l.JPG');
    },
    mouseleave: function () {
      $(this).attr('src', 'assets/images/scents/desir-s.JPG');
    }
  });
});

//Changes image when hovered over and changes back when mouse out
$(function () {
  $("#sedetendre-img").on({
    mouseenter: function () {
      $(this).attr('src', 'assets/images/scents/sedetendre-l.JPG');
    },
    mouseleave: function () {
      $(this).attr('src', 'assets/images/scents/sedetendre-s.JPG');
    }
  });
});

//Changes image when hovered over and changes back when mouse out
$(function () {
  $("#concentrer-img").on({
    mouseenter: function () {
      $(this).attr('src', 'assets/images/scents/concentrer-l.JPG');
    },
    mouseleave: function () {
      $(this).attr('src', 'assets/images/scents/concentrer-s.JPG');
    }
  });
});