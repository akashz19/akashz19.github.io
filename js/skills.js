(function () {
    var skillsData = {
        web: [
            {
                k: 'React',
                v: '85'
            },
            {
                k: 'Node js',
                v: '70'
            },
            {
                k: 'Javascript',
                v: '80'
            },
            {
                k: 'HTML5/CSS3',
                v: '90'
            },
            {
                k: 'Bootstrap',
                v: '90'
            }    
        ],
        cp: [
            {
                k: 'C/C++',
                v: '90'
            }
        ]
    }

    for (let i = 0; i < 5; i++)
        addProgressBar('#web', skillsData.web[i].k, skillsData.web[i].v)

    for (let i = 0; i < 2; i++)
        addProgressBar('#cp', skillsData.cp[i].k, skillsData.cp[i].v)
    // function to add a progress bar of random color with given name(key) and %(value) to the given id 
    function addProgressBar(id, key, value) {
        $(id).append(`
        <div class="row animate-box" data-animate-effect="fadeInLeft">
        <div class="progress-wrap">
            <h3>${key}</h3>
            <div class="progress">
                <div class="progress-bar color-${Math.floor((Math.random() * 6) + 1)}" role="progressbar" aria-valuenow="${value}" aria-valuemin="0"
                    aria-valuemax="100" style="width:${value}%">
                    <span>${value}%</span>
                </div>
            </div>
        </div>
        </div>
        `);
    }

})();