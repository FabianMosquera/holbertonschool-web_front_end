let createElement = function(data) {
    let paragraph = document.createElement('p')
    paragraph.append(data)
    document.body.appendChild(paragraph)
}

let queryWikipedia = function(callback) {
    let info = new XMLHttpRequest();
    info.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*')

    info.responseType = 'json'

    info.onload = _ => callback(info.response.query.pages['21721040'].extract)

    info.send()
}

queryWikipedia(createElement)