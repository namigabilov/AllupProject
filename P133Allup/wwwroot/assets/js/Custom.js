$(document).ready(function () {

    $('#searchImput').keyup(function myfunction()
    {
        let search = $(this).val();
        let category = $("#categorySelect").find(":selected").val();

        console.log(category + ' ' + search)

        if (search.length >= 3) {
            fetch('product/search?search=' + search + '&categoryId=' + category)
                .then(res => {
                    return res.text()
                })
                .then(data => {
                    $("#searchBody").html(data);
                })
        }
        else
        {
            $("#searchBody").html("");
        }

        

    })

    $(".link").click(function (e) {
        e.preventDefault();

        let url = $(this).attr('href');
        console.log(url);
        fetch(url).then(res => {

            return res.text();
        })
            .then(data => {
                $(".modal-content").html(data);
                $('.quick-view-image').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    fade: true,
                    asNavFor: '.quick-view-thumb',
                    speed: 400,
                });

                $('.quick-view-thumb').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    asNavFor: '.quick-view-image',
                    dots: false,
                    arrows: false,
                    focusOnSelect: true,
                    speed: 400,
                });
            })
    })
})