function test() {
    $(".album").each(function(index) {
        $(this).hide();
        $(this).delay(1000 * index).fadeIn(1000).fadeOut();
    });
}
test();
