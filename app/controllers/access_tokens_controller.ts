import Participante from '#models/participante'
import { loginValidator } from '#validators/participante'
import type { HttpContext } from '@adonisjs/core/http'
import ParticipanteTransformer from '#transformers/participante_transformer'

export default class AccessTokensController {
  async store({ request, serialize }: HttpContext) {
    const { email, senha } = await request.validateUsing(loginValidator)

    const participante = await Participante.verifyCredentials(email, senha)
    const token = await Participante.accessTokens.create(participante)

    return serialize({
      Participante: ParticipanteTransformer.transform(participante),
      token: token.value!.release(),
    })
  }

  async destroy({ auth }: HttpContext) {
    const participante = auth.getParticipanteOrFail()
    if (participante.currentAccessToken) {
      await Participante.accessTokens.delete(
        participante,
        participante.currentAccessToken.identifier
      )
    }

    return {
      message: 'Logged out successfully',
    }
  }
}
