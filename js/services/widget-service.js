'use strict'

const APP_TYPE = 'desktop'
const API_KEY = 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4'
const SOURCE_ID = '214321562187'
const SOURCE_TYPE = 'video'
const SOURCE_URL = 'http://www.site.com/videos/214321562187.html'

function getWidgets(cb, count = 4) {
    //Construct params object
    const params = {
        count,
        'app.type': APP_TYPE,
        'app.apikey': API_KEY,
        'source.type': SOURCE_TYPE,
        'source.id': SOURCE_ID,
        'source.url': SOURCE_URL
    }

    httpService.get('recommendations.get', params, cb)
}
