import Participante from '#models/participante'
import { signupValidator } from '#validators/participante'
import type { HttpContext } from '@adonisjs/core/http'
import ParticipanteTransformer from '#transformers/participante_transformer'

export default class NewAccountController {
  async store({ request, serialize }: HttpContext) {
    const { nome, email, senha, dataNasc } = await request.validateUsing(signupValidator)

    const participante = await Participante.create({ nome, email, senha, dataNasc })
    const token = await Participante.accessTokens.create(participante)

    return serialize({
      Participante: ParticipanteTransformer.transform(participante),
      token: token.value!.release(),
    })
  }
}
