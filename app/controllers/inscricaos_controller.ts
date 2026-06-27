import Inscricao from '#models/inscricao'
import type { HttpContext } from '@adonisjs/core/http'

export default class InscricaosController {
  async index({ auth }: HttpContext) {
    const inscricaos = await auth.user!.related('inscricoes').query()
    return inscricaos
  }

  async store({ params, auth }: HttpContext) {
    const participante = auth.user!
    const idEvento = await params.id!
    const inscricao = await participante.related('inscricoes').create({ idEvento })
    return inscricao
  }

  async show({ params, auth, response }: HttpContext) {
    try {
      const inscricao = await Inscricao.findByOrFail('id', params.id)
      if (inscricao.idParticipante !== auth.user!.id) {
        throw new Error('Evento not found')
      }
      return inscricao
    } catch {
      return response.status(404).json('evento not found')
    }
  }

  async destroy({ params, auth, response }: HttpContext) {
    try {
      const inscricao = await Inscricao.findByOrFail('id', params.id)
      if (inscricao.idParticipante !== auth.user!.id) {
        throw new Error('Evento not found')
      }
      await inscricao.delete()
      return response.status(203)
    } catch {
      return response.status(404).json('evento not found')
    }
  }
}
