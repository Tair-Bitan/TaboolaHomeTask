'use strict'

function onInit() {
    getWidgets(renderWidgets, 10)
}

function renderWidgets(res) {
    const err = res.err
    if (err) {
        console.log('err', err)
        const elContainer = document.querySelector('.error-container')
        elContainer.innerText = '[ERROR] - Had error while fetching data:\n' + err
    } else {
        const list = res.data.list
        const strHTMLs = list.map(renderWidget)

        const elContainer = document.querySelector('.widget-container')
        elContainer.innerHTML = strHTMLs.join('')
    }
}

function renderWidget(widget) {
    return `
            <article class="widget" data-id=${widget.id} onclick="window.open('${widget.url}','_blank')">
                <img 
                    src="${widget.thumbnail[0].url}" 
                    onerror="this.src = './imgs/favicon.ico'" 
                    width=100% 
                    height=50%
                    />
                <p>${widget.name}</p>
                <small>${widget.branding}</small>
            </article>
            `
}

//for testing purposes
module.exports = {
    renderWidgets
}