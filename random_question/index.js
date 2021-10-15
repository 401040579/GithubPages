function load_question(mode) {
    $("#list").html('');
    if (window.question_arr && window.question_arr.length > 0) {

    } else {
        window.question_arr = window.str.split("\n");
    }

    for (var _ of window.question_arr) {
        var __ = _.split(';');
        var question = __.shift();
        var answer = __.pop();
        var options = __;
        if (mode == "shuffle_option") {
            options = shuffle(options);
        }
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
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
function random_questions() {
    window.question_arr = shuffle(window.question_arr);
    load_question("shuffle_option");
}