const detectLangAPI = process.env.DETECTLANGAPI
const DetectLanguage = require('detectlanguage');
const detectlanguage = new DetectLanguage(detectLangAPI);

let langList = []
detectlanguage.languages()
.then(function(result) {
    langList = result
})
.catch(err =>{
    console.log(err);
})

const detectLang = async (req, res, next) => {
    try{
        const {text} = req.body

        const textLang = await detectlanguage.detect(text)
        
        const findLang = await langList.filter(el => el.code == textLang[0].language)

        res.status(200).json({lang: findLang, reliable: textLang})
    }catch(err){
        res.status(500).json({msg: "Something went down"})
    }
}

module.exports = { detectLang }