/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import transmit from '@adonisjs/transmit/services/main'
import router from '@adonisjs/core/services/router'

router.get('/', async () => 'It works!')

transmit.registerRoutes()

setInterval(() => transmit.broadcast('test', { data: 'test' }), 3000)
transmit.on('broadcast', () => console.log('on broadcast'))
