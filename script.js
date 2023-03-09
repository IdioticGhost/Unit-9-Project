var pictureArray = [];
var captionArray = [];

$(".add").click(function() {
    var pictureInput = $('.picture-url').val();
    var textInput = $('.add-caption').val();
    $(".input").val("");

    pictureArray.push(pictureInput);
    captionArray.push(textInput);

    $(".captions").empty();
    $(".gallery").empty();

    for (let picture of pictureArray) {
        $(".gallery").append("<img src =" + picture + ">");
        $(".picture-url").empty();
    }

    for (let caption of captionArray) {
        $(".captions").append("<p>" + caption + "</p>");
        $(".picture-url").empty();
    }

    console.log(pictureInput);
    console.log(textInput);
});