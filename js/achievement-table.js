(function () {
    var data = [
        {
            event: 'TCS Codevita 2020 Round 1',
            org: 'TCS Global',
            indRank:'2000/200000',
            globalRank:'2000/200000',
            Date:'Sep 2020 ',
        },
        {
            event: 'June Long Challenge',
            org: 'Codechef',
            indRank: '-',
            globalRank:'392',
            Date:'Jun 2020 ',
        },
        {
            event: 'August Long Challenge',
            org: 'Codechef',
            indRank: '--',
            globalRank:'540',
            Date:'Aug 2019 ',
        }
    ]

    var tbody = document.getElementById('achv-main-table').getElementsByTagName('tbody')
    for (let i = 0; i < data.length; i++) {
        $(tbody).append(`
        <tr>
        <td>${data[i].event}</td>
        <td>${data[i].org}</td>
        <td>${data[i].indRank}</td>
        <td>${data[i].globalRank}</td>
        <td>${data[i].Date}</td>
        </tr>
    `)
    }
})();