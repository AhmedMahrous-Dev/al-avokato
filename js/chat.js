// أسماء المحامين

const lawyers = {
    ismail: {
        name: "أ. إسماعيل فكري إسماعيل",
        image: "IMG/images (9).jfif"
    },

    sara: {
        name: "أ. سارة علي السيد",
        image: "IMG/sara.png"
    },

    ahmed: {
        name: "أ. أحمد محمود حسن",
        image: "IMG/ahmed.png"
    }
};


// قراءة الرابط

const params = new URLSearchParams(window.location.search);

const lawyerId = params.get("lawyer") || "ismail";

const currentLawyer = lawyers[lawyerId];

document.getElementById("lawyerName").innerHTML =
currentLawyer.name;

document.getElementById("lawyerImage").src =
currentLawyer.image;



const chatBody = document.getElementById("chatBody");



// تحميل الرسائل

let messages =
JSON.parse(localStorage.getItem("chat_"+lawyerId)) || [];

// ===============================
// إضافة بيانات الاستشارة لأول مرة
// ===============================

const consultationData = JSON.parse(
    localStorage.getItem("consultationData")
);

if (consultationData && consultationData.lawyer === lawyerId) {

    messages.push({

        sender: "user",

        text: `📋 بيانات الاستشارة

👤 طرف النزاع: ${consultationData.party}

📅 تاريخ النزاع: ${consultationData.date}

🤝 محاولة الحل الودي: ${consultationData.friendly}

⚖️ استشارة سابقة: ${consultationData.previous}

📝 تفاصيل المشكلة:

${consultationData.details}`,

        time: getTime()

    });

    localStorage.removeItem("consultationData");

    save();

}

render();




// إرسال رسالة

function sendMessage(){

let input=document.getElementById("message");

let text=input.value.trim();

if(text=="") return;

messages.push({

    sender: "user",

    text: text,

    time: getTime()

});

save();



// رد تلقائي للمحامي

setTimeout(()=>{

messages.push({

sender:"lawyer",

text:autoReply(),

time:getTime()

});

save();

render();

},1000);

save();

render();

input.value="";

}



function save(){

localStorage.setItem(

"chat_"+lawyerId,

JSON.stringify(messages)

);

}



function render(){

chatBody.innerHTML="";



if(messages.length==0){

chatBody.innerHTML=`

<div class="message lawyer">

أهلاً بك 👋

<span>${getTime()}</span>

</div>

<div class="message lawyer">

كيف أستطيع مساعدتك؟

<span>${getTime()}</span>

</div>

`;

return;

}



messages.forEach(msg => {

    if (msg.type === "consultation") {

        chatBody.innerHTML += `

        <div class="consultation-card">

            <div class="consultation-header">

                <i class="fa-solid fa-scale-balanced"></i>

                <span>بيانات الاستشارة</span>

            </div>

            <div class="consultation-body">

                <div><strong>👤 طرف النزاع:</strong> ${msg.party}</div>

                <div><strong>📅 تاريخ النزاع:</strong> ${msg.date}</div>

                <div><strong>🤝 محاولة الحل الودي:</strong> ${msg.friendly}</div>

                <div><strong>⚖️ استشارة سابقة:</strong> ${msg.previous}</div>

                <hr>

                <div class="details-title">📝 تفاصيل المشكلة</div>

                <p>${msg.details}</p>

            </div>

            <div class="consultation-time">

                ${msg.time}

            </div>

        </div>

        `;

    } else {

        chatBody.innerHTML += `

        <div class="message ${msg.sender}">

            ${msg.text}

            <span>${msg.time}</span>

        </div>

        `;

    }

});

chatBody.scrollTop = chatBody.scrollHeight;



chatBody.scrollTop=chatBody.scrollHeight;

}



function getTime(){

let now=new Date();

return now.toLocaleTimeString("ar-EG",{

hour:"2-digit",

minute:"2-digit"

});

}



// ردود تلقائية

function autoReply(){

let replies=[

"مرحباً بك، كيف يمكنني مساعدتك؟",

"يرجى توضيح تفاصيل الاستشارة.",

"سأراجع ما كتبته وأرد عليك.",

"هل لديك أي مستندات خاصة بالقضية؟",

"يمكنك شرح المشكلة بالكامل.",

"شكراً لتواصلك معنا."

];



return replies[

Math.floor(Math.random()*replies.length)

];

}



// Enter للإرسال

document
.getElementById("message")
.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});
