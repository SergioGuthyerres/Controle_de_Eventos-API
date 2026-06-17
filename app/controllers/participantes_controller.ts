import Participante from '#models/participante'
import { signupValidator } from '#validators/participante'
import type { HttpContext } from '@adonisjs/core/http'

export default class ParticipantesController {
  async index({}: HttpContext) {
    return await Participante.all()
  }

  async store({ request }: HttpContext) {
    const { nome, email, senha, dataNasc } = await request.validateUsing(signupValidator)

    const participante = await Participante.create({ nome, email, senha, dataNasc })
    return participante
  }

  async show({ params, response }: HttpContext) {
    try {
      const participante = await Participante.findByOrFail('id', params.id)
      return participante
    } catch {
      return response.status(404).json({ error: 'Participante not found' })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const participante = await Participante.findByOrFail('id', params.id)
      const { nome, email, senha, dataNasc } = await request.validateUsing(signupValidator)
      participante.merge({ nome, email, senha, dataNasc })
      await participante.save()
      return participante
    } catch {
      return response.status(404).json({ error: 'Participante not found' })
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const participante = await Participante.findByOrFail('id', params.id)
      await participante.delete()
      return response.status(204)
    } catch {
      return response.status(404).json({ error: 'Participante not found' })
    }
  }
}
