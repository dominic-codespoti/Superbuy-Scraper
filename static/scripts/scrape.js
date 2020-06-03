function scrapeAndLoad(search_terms) {
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/test')
    var items_received = new Array("Name, Price, Link, Picture")
    var previouslyFound = false
    socket.on('connect', function(msg) {
        if (msg != null) {
            items_received.push(JSON.stringify(msg))
            var iteration = 0;
            var split = items_received[items_received.length - 1].split(",")
            var name = split[0]
            var price = split[1]
            var link = split[2]
            var image = split[3]

            for (var i = 0; i < iteration; i++) {
                if (items_received[i].includes(name) === true) {
                    previouslyFound = true
                }
            }

            var item_string = '<tr>'
            + '<td>' + name + '</td>'
            + '<td>' + price + '</td>'
            + '<td>' + link + '</td>'
            + '<td>' + '<img src="' + image + '" alt="" border=3 height=100 width=300></img>' + '</td>'
            + '</tr>'

            if (search_terms.some(term => name.toLowerCase().includes(term)) && previouslyFound === false) {
                $('section.main').append(item_string)
            }

            previouslyFound = false
            iteration += 1;
        }
    })
}