var currentPage = 0;
var questions = document.getElementsByClassName("question-link");
var perPage = 10;

function showPage(page) {
    var startIndex = page * perPage;
    var endIndex = (page + 1) * perPage;

    for (var i = 0; i < questions.length; i++) {
        if (i >= startIndex && i < endIndex) {
            questions[i].parentNode.style.display = "";
        } else {
            questions[i].parentNode.style.display = "none";
        }
    }
}
 
function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if ((currentPage + 1) * perPage < questions.length) {
        currentPage++;
        showPage(currentPage);
    }
}

document.getElementById("searchInput").addEventListener("input", function() {
    var searchValue = this.value.toLowerCase();
    for (var i = 0; i < questions.length; i++) {
        var question = questions[i].innerText.toLowerCase();
        if (question.indexOf(searchValue) > -1) {
            questions[i].parentNode.style.display = "";
        } else {
            questions[i].parentNode.style.display = "none";
        }
    }
});

showPage(currentPage);