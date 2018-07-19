import podcasts from './podcasts.json'

const fetchPromisePodcasts = function () {
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve(podcasts) 
        }, 2000);
    })
}

export { fetchPromisePodcasts }