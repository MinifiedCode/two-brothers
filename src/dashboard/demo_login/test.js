const identity = require('netlify-identity-widget')

identity.init()

identity.open()

identity.on('init', () => console.log('init'))