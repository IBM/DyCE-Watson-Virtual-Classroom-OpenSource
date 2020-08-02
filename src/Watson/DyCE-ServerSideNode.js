let rp = require('request-promise')
 
function main(params) {
    
    const options = {
        uri: "https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(params.object_of_interest)+ "?redirect=true",
        json: true
    }
    
    return rp(options)
        .then(res => {
            return { extract : res }
        })
}