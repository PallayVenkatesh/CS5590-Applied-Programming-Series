//1.create an array of colors and assign it to a variable colors

var colors = ['red', 'green', 'blue', 'yellow','violet'];



// 2.set the preview color to the one entered in the input and display its color code using setPreviewColor function
function setPreviewColor(color) {
    console.log(color)
    $('.preview').css('background-color',color)

}

//adds color boxes to the favorite colors
function addBox(val) {
    $('#colors').append("<div class='item' style='background-color: " + val + ";'><div>");
}

//3.As the page loads add each color in the colors array to the div '#colors'
$(document).ready(function(){

    colors.forEach(function(color){
        console.log(color)
        addBox(color);

    });

//4.set the preview color to one of the colors in the colors array randomly

    var rand = colors[Math.floor(Math.random() * colors.length)];
    console.log(rand)
    setPreviewColor(rand);
    $('#color').keyup(function(){
        console.log($(this).val())
        setPreviewColor($(this).val())
    });
//5.Write an event handler for the key up event i.e. when the user types the color in the input and releases the key on the keyboard
//The event should set the preview color to the color typed in the input


//6.Write an event handler to handle the click the event on the add to favorite button so that the color gets added to the list of favorite colors,
// the content of the input gets cleared and the focus gets back on the input
    $('#add-to-favorite').click(function(){
        console.log($('#color').val())
        addBox($('#color').val())
        $('#color').val("");
        $('#color').focus();

    });


//7.Write events handlers such that whenever any item in the favorite colors is clicked or hovered, the color gets displayed in the preview div

    $('#colors').on('mouseover','.item',function(){
        setPreviewColor($(this).css('background-color'));
        var rgb=$(this).css('background-color');
        $('.color-code').text(rgb)

    });


});