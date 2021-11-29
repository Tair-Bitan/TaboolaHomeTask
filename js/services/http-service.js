'use strict'

const BASE_URL = 'http://api.taboola.com/1.0/json/taboola-templates'

const httpService = {
    get(endpoint, params, cb) {
        return XHR(endpoint, 'GET', params, cb)
    },
    post(endpoint, params, cb) {
        return XHR(endpoint, 'POST', params, cb)
    }
}

function XHR(endpoint, method = 'GET', params, cb) {
    const xhr = new XMLHttpRequest()
    const searchParams = new URLSearchParams(params).toString();
    const cbRes = { err: null }

    //Set the url
    const url = `${BASE_URL}/${endpoint}?${searchParams}`

    //Set event handler on state change
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                cbRes.data = JSON.parse(xhr.responseText)
            } else {
                //handle errors
                console.log(`[ERROR] - Had issues ${method}ing to the server, \n url: ${url}`);
                console.log('xhr.error', xhr.err)
                cbRes.err = 'xhr.error'
            }
            //calling cb
            cb(cbRes)
        }
    }

    //Initialize the request
    xhr.open(method, url)
    xhr.send()
}