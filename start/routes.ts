/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    // Auth
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')

    // Account
    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())

    // Participantes
    router
      .group(() => {
        router.get('/', [controllers.Participantes, 'index'])
        router.post('/', [controllers.Participantes, 'store'])
        router.get('/:id', [controllers.Participantes, 'show'])
        router.put('/:id', [controllers.Participantes, 'update'])
        router.delete('/:id', [controllers.Participantes, 'destroy'])
      })
      .prefix('participantes')
      .as('participantes')

    // Eventos
    router
      .group(() => {
        router.get('/', [controllers.Eventos, 'index'])
        router.get('/:id', [controllers.Eventos, 'show'])
        router.post('/', [controllers.Eventos, 'store']).use(middleware.auth())
        router.put('/:id', [controllers.Eventos, 'update']).use(middleware.auth())
        router.delete('/:id', [controllers.Eventos, 'destroy']).use(middleware.auth())
        router.post('/:id/inscricoes', [controllers.Inscricaos, 'store']).use(middleware.auth())
      })
      .prefix('eventos')
      .as('eventos')

    // Inscricoes
    router
      .group(() => {
        router.get('/', [controllers.Inscricaos, 'index'])
        router.get('/:id', [controllers.Inscricaos, 'show'])
        router.delete('/:id', [controllers.Inscricaos, 'destroy'])
      })
      .prefix('inscricoes')
      .as('inscricoes')
      .use(middleware.auth())
  })
  .prefix('/api/v1')
