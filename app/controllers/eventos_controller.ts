import type { HttpContext } from '@adonisjs/core/http'
import Evento from '#models/evento'
import { createEventValidator } from '#validators/evento'
export default class EventosController {
  async index({auth}: HttpContext) {
    const evento = await auth.user?.related('eventos').query()
    return await Evento.all()
  }

  async store({ request, auth }: HttpContext) {
    const participante = auth.user!
    const { nome, descricao, dataInicio, dataFim, local } = await request.validateUsing(createEventValidator)
    const evento = await participante.related('eventos').create({
      nome, descricao, dataInicio, dataFim, local}
    )

    return
  }

  async show({ params, response }: HttpContext) {
    try{
      const evento = Evento.findByOrFail('id', params.id)
      return evento
    }
  }

  async update({ params, request }: HttpContext) {}

  async destroy({ params }: HttpContext) {}
}
