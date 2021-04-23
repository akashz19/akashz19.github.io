(function () {
    var projects = [
        {
            k: 'Sorting Visualizer',
            desc: `An application which lets you control your
            android device from MI Band (Including feature like music control, reply on call,
            timer, SOS etc)`,
            github: ''
        },
    ];

    var navProjects = document.getElementById('nav-projects');
    console.log(navProjects);

    for (let i = 0; i < projects.length; i +=2) {
        var row = $(`<div class="row"></div>`);
        add(row, i);
        if (i + 1 < projects.length)
            add(row, i + 1);
        $('#nav-projects').append(row);
    }

    function add(row, n) {
        row.append($(`<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
        <div class="proj-card">
            <img src=${projects[n].src}>
            <div class="title">
                <h4>${projects[n].k}</h4>
                <p>${projects[n].desc}</p>
            </div>
            <div class="overlay">
                <div class="row">
                    <div class="col-md-3"></div>
                    <a href=${projects[n].github} target="_blank">
                    <div class="col-md-3 btt">
                        <i class="icon-eye"></i>
                        <p>Checkout</p>
                    </div>
                    </a>
                    <a href=${projects[n].github} target="_blank">
                    <div class="col-md-3 btt">
                        <i class="icon-github"></i>
                        <p>View Source</p>
                    </div>
                    </a>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    </div>`));
    }
})();