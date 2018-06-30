
// Select color input
// Select size input


var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();

  makeGrid(height, width);
})

//makeGrid function to creating grid

function makeGrid(x, y) {
  // Your code goes here!
  $('tr').remove();
  for(var i = 1; i <= x; i++){
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
  for(var j = 1; j <= y; j++){
      $('#table' + i).append('<td></td>');
    }
  }

  //adding color to the cells
  $('td').click(function clickColor(){
    color = $('#colorPicker').val();

    if($(this).attr('style')){
       $(this).removeAttr('style')
    }else {
        $(this).attr('style', 'background-color:' + color);
    }
  })
}