const notifier = require('node-notifier')
const { Translate } = require('@google-cloud/translate')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const projectId = require('../config/project-id')

module.exports = async () => {
    const translate = new Translate({ projectId })
    const target = 'tr'

    const { stdout, stderr } = await exec('xsel -o')

    const [translation] = await translate.translate(stdout, target)

    notifier.notify({
        title: stderr ? 'Error:' : `Text: ${stdout}`,
        message: stderr ? 'Could not get the selected text' : `Translation: ${translation}`,
        wait: true
    })
}