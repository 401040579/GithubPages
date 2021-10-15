function load_question() {
    var str = window.str;
    var question_arr = str.split("\n");

    for (var _ of question_arr) {
        var __ = _.split(';');
        var question = __.shift();
        var answer = __.pop();
        var options = __;
        $("#list").append(`<div>
        <p>`+ question + `</p>
        <div>
            <input type="radio" value="`+ options[0] + `" answer="` + answer + `">
            <label>`+ options[0] + `</label>
            <input type="radio" value="`+ options[1] + `" answer="` + answer + `">
            <label>`+ options[1] + `</label>
            <input type="radio" value="`+ options[2] + `" answer="` + answer + `">
            <label>`+ options[2] + `</label>
            <input type="radio" value="`+ options[3] + `" answer="` + answer + `">
            <label>`+ options[3] + `</label>
            <div class="alert"></div>
        </div>
        </div>`);
    }

    $("input").not("#inputfile").on("click", function () {
        $(this).parent().find("input").not(this).prop('checked', false);
        if ($(this).attr("value") == $(this).attr("answer")) {
            $(this).parent().find(".alert").text("You are right.");
        } else {
            $(this).parent().find(".alert").text("Answer: " + $(this).attr("answer"));
        }
    })
}