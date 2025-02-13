/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function updateRisk() {
    let likelihood = document.getElementById("likelihood").value;
    let severity = document.getElementById("severity").value;

    // 更新滑块数值
    document.getElementById("likelihood-value").innerText = likelihood;
    document.getElementById("severity-value").innerText = severity;

    // 计算风险等级
    let riskLevel = likelihood * severity;

    let riskText = "";
    let riskClass = "";

    if (riskLevel <= 2) {
        riskText = "Low";
        riskClass = "low";
    } else if (riskLevel <= 6) {
        riskText = "Medium";
        riskClass = "medium";
    } else if (riskLevel <= 16) {
        riskText = "High";
        riskClass = "high";
    } else {
        riskText = "Extreme";
        riskClass = "extreme";
    }

    // 更新风险等级显示
    let riskElement = document.getElementById("risk-level");
    riskElement.innerText = riskText;
    riskElement.className = riskClass;
}


// function toggleRiskDetails(id) {
//     let element = document.getElementById(id);
//     let icon = element.previousElementSibling.querySelector('.toggle-icon');

//     if (element.style.display === "none" || element.style.display === "") {
//         element.style.display = "block";
//         icon.innerText = "Click to Collapse 🔼"; // 改变图标为 -
//     } else {
//         element.style.display = "none";
//         icon.innerText = "Click to Expand 🔽"; // 改变图标为 +
//     }
// }

function toggleRiskDetails(id) {
    var details = document.getElementById(id);
    var icon = document.getElementById("icon-" + id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        icon.innerHTML = "Click to Collapse 🔼";
    } else {
        details.style.display = "none";
        icon.innerHTML = "Click to Expand 🔽";
    }
}

function togglePDF() {
    var pdfDiv = document.getElementById("pdfContent");
    if (pdfDiv.style.display === "none" || pdfDiv.style.display === "") {
        pdfDiv.style.display = "block";
    } else {
        pdfDiv.style.display = "none";
    }
}

let comments = [
    { date: "2017-07-07", text: "Samsung redeemed themselves with the Note Fan Edition! Running great so far. 🙌" },
    { date: "2017-07-07", text: "Okay, Note 7 is back as the 'Fan Edition'… should I trust it this time?" },
    { date: "2017-01-23", text: "Glad they admitted the issue. Hoping they come back stronger with the next Note." },
    { date: "2017-01-23", text: "So it really was the battery design? At least we finally have answers." },
    { date: "2016-12-19", text: "I refused to return mine, but now it won’t even turn on. Samsung forced my hand. 😞" },
    { date: "2016-12-19", text: "Just got an update that disabled my Note 7. Now it’s a $900 brick. 😡" },
    { date: "2016-10-10", text: "I loved this phone… sad to see it go." },
    { date: "2016-10-10", text: "Welp, that’s the end of the Note 7. What a disaster." },
    { date: "2016-09-21", text: "This is a PR nightmare. How did they mess this up twice?" },
    { date: "2016-09-21", text: "I trusted Samsung and got a replacement… now I hear it can still explode???" },
    { date: "2016-09-08", text: "I still love my Note 7, but now I’m afraid to charge it at night. 😨" },
    { date: "2016-09-08", text: "The government is now involved? This is getting serious." },
    { date: "2016-09-02", text: "I was about to order the Note 7… guess I’ll wait now. 😬" },
    { date: "2016-09-02", text: "Samsung, what’s going on? Do I need to return my phone??" },
    { date: "2016-09-02", text: "Wait… is this real? A recall already? I just bought mine!" },
    { date: "2016-08-19", text: "Upgraded from my Note 5, and this thing is amazing. Hope it holds up!" },
    { date: "2016-08-19", text: "Just got my hands on the new Note 7! Loving the display and the S-Pen. 🔥🔥🔥" },
];

function displayComments() {
    const commentList = document.getElementById("commentList");
    commentList.innerHTML = "";

    comments.forEach((comment, index) => {
        setTimeout(() => {
            const li = document.createElement("li");
            li.classList.add("comment", "show");
            li.innerHTML = `<p>${comment.text}</p><span class="comment-date">${comment.date}</span>`;
            commentList.appendChild(li);
        }, index * 500); // 让评论按顺序淡入
    });

    autoScroll();
}

function addComment() {
    const input = document.getElementById("commentInput");
    const text = input.value.trim();
    if (text) {
        const now = new Date();
        const timestamp = now.toISOString().split("T")[0]; // 格式化日期 YYYY-MM-DD
        comments.unshift({ date: timestamp, text: text }); // 最新评论排最前
        input.value = "";
        displayComments();
    }
}

function autoScroll() {
    const commentBox = document.querySelector(".comment-box");
    let scrollPosition = 0;

    function scroll() {
        if (commentBox.scrollHeight - scrollPosition <= commentBox.clientHeight) {
            scrollPosition = 0;
            commentBox.scrollTop = 0;
        } else {
            scrollPosition += 1;
            commentBox.scrollTop = scrollPosition;
        }
        requestAnimationFrame(scroll);
    }
    requestAnimationFrame(scroll);
}

displayComments();

function increment(id) {
    let countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    countElement.textContent = count + 1;
}

