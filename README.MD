# Hot Translate

Hot Translate is a very small script that translates the clipboard text using Yandex Translate API and returns the translated text as an OS notification.

## Installation (Only For Linux)

### Node.js libnotify-bin xsel

This script requires [Node.js](https://nodejs.org/) and some other dependencies to run. To install them:

```sh
$ sudo apt-get update
$ sudo apt-get install nodejs libnotify-bin xsel
```

### Get the script and install it
```sh
$ git clone git@github.com:onuraylan/hot-translate.git
$ cd hot-translate
$ npm install
```

###  Google Translate API

Since Yandex Translate API is free and more practical than Google Translate API, I switched to Yandex Translate API.

~~To access the Google's Translate API, you have to create a GCP Console project from Google Cloud. Then enable the Cloud Translation API for that project.~~
~~https://cloud.google.com/translate/docs/quickstart-client-libraries~~
~~After you get your private key as JSON. Rename that JSON file as "credentials.json" and simply copy and paste it into the config folder of the script.~~
~~Also, you need to provide your GCP Console project id to the script. Copy your project id from [Google Cloud Console](https://console.cloud.google.com/) and paste it into the project-id.js file in config folder. ~~

### Yandex Translate API
Get your API key from [here](https://tech.yandex.com/translate/) and put it in config.json file.

### Set Keyboard Shortcut

To make it practical to run, we should set a keyboard shortcut for the script. Simply go to the system settings and define a shortcut(mine is CTRL + SPACE) for this specific command:

```sh
$ node <your-path-to-script/hot-translate/index.js>
```

### Changing the destination language

Destination language is Turkish by default. You can change it in 'config/config.json' by editing the variable named 'targetLang' as you wish.
For example, make it 'en' for the English.
