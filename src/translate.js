const notifier = require('node-notifier')
const axios = require("axios")
const util = require("util")
const exec = util.promisify(require('child_process').exec)
const config = require("../config/config.json")

module.exports = async () => {
    const baseUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate"

    const { stdout, stderr } = await exec('xsel -o')

    if (stderr) {
        console.error(stderr)
        return
    }

    const params = {
        key: config.keys.yandexTranslate,
        text: stdout,
        lang: config.targetLang
    }

    try {
        let { data } = await axios.get(baseUrl, { params })

        if (data.code === 200) {
            notifier.notify({
                title: `Text: ${stdout}`,
                message: `Translation: ${data.text[0]}`,
                wait: true
            })
        } else {
            throw new Error(`An error is occured while getting the translation from API: ${data.code}`)
        }
    } catch (error) {
        console.error(error)
        return
    }    
}