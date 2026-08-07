var searchInput = document.getElementById("searchInput");
var searchBtn = document.getElementById("searchBtn");

function searchCases() {

    var value = searchInput.value.trim().toLowerCase();

    var cards = document.querySelectorAll(".flip-card");

    cards.forEach(card => {

        var text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "";  

        } else {

            card.style.display = "none";

        }

    });

}

searchBtn.addEventListener("click", searchCases);
searchInput.addEventListener("keyup", searchCases);


function showToast(message) {

    document.getElementById("toastMessage").innerText = message;

    let toastElement = document.getElementById("successToast");

    let toast = new bootstrap.Toast(toastElement, {
        delay: 3000
    });

    toast.show();
}

document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    showToast(" تم تسجيل الدخول بنجاح");

    let modal = bootstrap.Modal.getInstance(
        document.getElementById("loginModal")
    );

    modal.hide();

});


document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    showToast(" تم إنشاء الحساب بنجاح");

    let modal = bootstrap.Modal.getInstance(
        document.getElementById("registerModal")
    );

    modal.hide();

});