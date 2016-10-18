

$("#btn").on("click", function () {
    console.log(flag)
    if (!flag) {
        return;
    }
    $(this).html("可以点击了");
});

function isVal (num) {
    var cardRex = /^\d+$/;
    return cardRex.test(num);
}

var errBox = $("#odivs");
//--
var flag = false;
//--

$("#oput").on("keyup", function () {
    var newNum = $(this).val();
    if (isVal(newNum)) {
        errBox.html("");
        flag = true;
        $("#btn").removeClass("disabled");
    }else {
        errBox.html("false");
        flag = false;
        $("#btn").addClass("disabled");
    }
});