var achvHeadings = [
    `4 star rated on Codechef.`
    ``,
    ``,
    ``
];

(function () {
    var achvTitle = document.getElementsByClassName('achv-title');
    var achvContent = [];
    // document.getElementsByClassName('accordion-content');
    // Set title
    for (let i = 0; i < achvTitle.length; i++) {
        achvTitle[i].innerText = achvHeadings[i]
        achvContent.push(achvTitle[i].nextElementSibling)
    }
    // Set content

    var currAchv = 0;
    achvTitle[0].classList.toggle("active")

    animateAccordion(currAchv);

    for (let i = 0; i < achvTitle.length; i++) { // add click listener for each panel heading
        achvTitle[i].addEventListener("click", function () {
            console.log('hey')
            var newAccordion = -1;
            for (let j = 0; j < 3; j++)  // set newAccordion to the one which is clicked
                if (achvTitle[j] == this)
                    newAccordion = j;
            // toggle currently clicked
            achvTitle[newAccordion].classList.toggle("active")
            // toggle previous if its not the same 
            if (newAccordion != currAchv)
                achvTitle[currAchv].classList.toggle("active")
            currAchv = newAccordion
            animateAccordion(currAchv)
        });
    }

    function animateAccordion(curr) {
        var show = 1;
        if (achvContent[curr].style.maxHeight) // show if height is 0 otherwise just hide
            show = 0
        for (let j = 0; j < 3; j++) {// hide all content
            achvContent[j].style.maxHeight = null;
            achvContent[j].style.border = "0px solid #E6E6E6";
            achvContent[j].style.marginBottom = "0px";
        }
        if (show == 1) {
            achvContent[curr].style.maxHeight = achvContent[curr].scrollHeight + "px";
            achvContent[curr].style.border = "1px solid #E6E6E6";
            achvContent[curr].style.marginBottom = "5px";
        }
    }
}
)()