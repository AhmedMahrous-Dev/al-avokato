// معرفة المحامي المختار

const params = new URLSearchParams(window.location.search);

const lawyer = params.get("lawyer");

// الفورم

const consultForm = document.getElementById("consultForm");

consultForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const consultation = {

        lawyer: lawyer,

        party: document.getElementById("party").value,

        date: document.getElementById("date").value,

        friendly: document.getElementById("friendly").value,

        previous: document.getElementById("previous").value,

        details: document.getElementById("details").value,

        createdAt: new Date().toLocaleString("ar-EG")

    };

    // حفظ البيانات

    localStorage.setItem(
        "consultationData",
        JSON.stringify(consultation)
    );

    // الانتقال للشات

    window.location.href =
        "consultation.html?lawyer=" + lawyer;

});