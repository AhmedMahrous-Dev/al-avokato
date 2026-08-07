// إنشاء قاعدة البيانات

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
}

// العناصر

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// Register

const registerName = document.getElementById("registerName");
const registerEmail = document.getElementById("registerEmail");
const registerPhone = document.getElementById("registerPhone");
const registerPassword = document.getElementById("registerPassword");
const confirmPassword = document.getElementById("confirmPassword");

// Lawyer

const barNumber = document.getElementById("barNumber");
const specialization = document.getElementById("specialization");
const experience = document.getElementById("experience");
const governorate = document.getElementById("governorate");

// Login

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

// إنشاء حساب

registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    if (registerPassword.value !== confirmPassword.value) {

        alert("كلمة المرور غير متطابقة");

        return;

    }

    let users = JSON.parse(localStorage.getItem("users"));

    const emailExist = users.find(user => user.email === registerEmail.value);

    if (emailExist) {

        alert("البريد الإلكتروني مستخدم بالفعل");

        return;

    }

    const user = {

        id: Date.now(),

        name: registerName.value,

        email: registerEmail.value,

        phone: registerPhone.value,

        password: registerPassword.value,

        type: accountType.value,

        barNumber: barNumber.value,

        specialization: specialization.value,

        experience: experience.value,

        governorate: governorate.value

    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("تم إنشاء الحساب بنجاح");

    registerBS.hide();

    loginBS.show();

    registerForm.reset();

});
// تسجيل الدخول

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u =>

        u.email === loginEmail.value &&
        u.password === loginPassword.value

    );

    if (!user) {

        alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");

        return;

    }

    // حفظ المستخدم الحالي

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("تم تسجيل الدخول بنجاح");

    loginBS.hide();

    // تحويل حسب نوع الحساب

    if (user.type === "lawyer") {

        window.location.href = "lawyer-dashboard.html";

    } else {

        window.location.href = "user-dashboard.html";

    }

});