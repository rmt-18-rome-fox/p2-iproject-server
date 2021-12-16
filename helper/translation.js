
const translation = (translate) => {
    if(translate === 'english') {
        return 131
    }else if (translate === 'russian') {
        return 78
    }else if(translate === 'german'){
        return 141
    }else if(translate === 'spanish') {
        return 140
    }else if(translate === 'korean') {
        return 36
    }else if(translate === 'chinese') {
        return 56
    }else if(translate === 'japanese') {
        return 218
    }else if (translate === 'indonesian') {
        return 33
    }
}

module.exports = {translation}