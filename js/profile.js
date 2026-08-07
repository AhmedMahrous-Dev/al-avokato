// بيانات المحامين

const lawyers = {
    ismail: {
        name: "أ. إسماعيل فكري إسماعيل",
        title: "محامٍ بالنقض",

        image: "IMG/images (9).jfif",

        about:
        "يتمتع بخبرة كبيرة في القضايا المدنية والجنائية والأحوال الشخصية، وقدم مئات الاستشارات القانونية للأفراد والشركات.",

        exp: "10 سنوات",

        city: "القاهرة",

        number: "24518",

        price: "250 جنيه",

        clients: "650+",

        cases: "980+",

        success: "94%",

        skills: [
            "القضايا الجنائية",
            "الأحوال الشخصية",
            "القضايا المدنية",
            "صياغة العقود",
            "تأسيس الشركات"
        ]
    },

    sara: {

        name: "أ. سارة علي السيد",

        title: "محامية بالاستئناف العالي",

        image: "IMG/sara.png",

        about:
        "متخصصة في قضايا الأسرة والأحوال الشخصية وتمتلك خبرة طويلة في تقديم الاستشارات القانونية.",

        exp: "7 سنوات",

        city: "الجيزة",

        number: "31852",

        price: "200 جنيه",

        clients: "420+",

        cases: "640+",

        success: "92%",

        skills: [
            "الأحوال الشخصية",
            "قضايا الأسرة",
            "النفقة",
            "الطلاق",
            "الخلع"
        ]

    },

    ahmed: {

        name: "أ. أحمد محمود حسن",

        title: "محامٍ بالاستئناف ومستشار قانوني",

        image: "IMG/ahmed.png",

        about:
        "مستشار قانوني متخصص في القضايا التجارية وصياغة العقود والتحكيم.",

        exp: "8 سنوات",

        city: "الإسكندرية",

        number: "40112",

        price: "300 جنيه",

        clients: "710+",

        cases: "1100+",

        success: "96%",

        skills: [
            "الشركات",
            "العقود",
            "التحكيم",
            "القضايا التجارية",
            "الضرائب"
        ]

    }

};



// قراءة الرابط

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const lawyer = lawyers[id];

if(!lawyer){

location.href="index.html";

}



// تعبئة البيانات

document.getElementById("lawyerImage").src = lawyer.image;

document.getElementById("lawyerName").innerHTML = lawyer.name;

document.getElementById("lawyerTitle").innerHTML = lawyer.title;

document.getElementById("lawyerAbout").innerHTML = lawyer.about;

document.getElementById("lawyerExp").innerHTML = lawyer.exp;

document.getElementById("lawyerCity").innerHTML = lawyer.city;

document.getElementById("lawyerNumber").innerHTML = lawyer.number;

document.getElementById("lawyerPrice").innerHTML = lawyer.price;

document.getElementById("clients").innerHTML = lawyer.clients;

document.getElementById("cases").innerHTML = lawyer.cases;

document.getElementById("success").innerHTML = lawyer.success;



// التخصصات

let skills = "";

lawyer.skills.forEach(skill=>{

skills += `<span class="skill">${skill}</span>`;

});

document.getElementById("skills").innerHTML = skills;



// زر الاستشارة

document.getElementById("consultBtn").href =
`consultation.html?lawyer=${id}`;