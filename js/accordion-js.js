var accordionItems=2;
var educationTitle = ["BACHELOR DEGREE OF COMPUTER SCIENCE", "HIGH SCHOOL SECONDARY EDUCATION", ""];

(function () {
    var accordionTitle = document.getElementsByClassName('accordion-title');
    var accordionContent = [];
    // document.getElementsByClassName('accordion-content');
    // Set title
    for (let i = 0; i < accordionTitle.length; i++) {
        accordionTitle[i].innerText = educationTitle[i]
        accordionContent.push(accordionTitle[i].nextElementSibling)
    }
    // Set content

    var currentAccordion = 0;
    accordionTitle[0].classList.toggle("active")

    animateAccordion(currentAccordion);

    for (let i = 0; i < accordionTitle.length; i++) { // add click listener for each panel heading
        accordionTitle[i].addEventListener("click", function () {
            console.log('hey')
            var newAccordion = -1;
            for (let j = 0; j < accordionItems; j++)  // set newAccordion to the one which is clicked
                if (accordionTitle[j] == this)
                    newAccordion = j;
            // toggle currently clicked
            accordionTitle[newAccordion].classList.toggle("active")
            // toggle previous if its not the same 
            if (newAccordion != currentAccordion)
                accordionTitle[currentAccordion].classList.toggle("active")
            currentAccordion = newAccordion
            animateAccordion(currentAccordion)
        });
    }

    function animateAccordion(curr) {
        var show = 1;
        if (accordionContent[curr].style.maxHeight) // show if height is 0 otherwise just hide
            show = 0
        for (let j = 0; j < accordionItems; j++) {// hide all content
            accordionContent[j].style.maxHeight = null;
            accordionContent[j].style.border = "0px solid #E6E6E6";
            accordionContent[j].style.marginBottom = "0px";
        }
        if (show == 1) {
            accordionContent[curr].style.maxHeight = accordionContent[curr].scrollHeight + "px";
            accordionContent[curr].style.border = "1px solid #E6E6E6";
            accordionContent[curr].style.marginBottom = "5px";
        }
    }
})()
