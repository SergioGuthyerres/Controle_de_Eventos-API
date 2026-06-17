import { BaseTransformer } from '@adonisjs/core/transformers'
import type Participante from '#models/participante'

export default class ParticipanteTransformer extends BaseTransformer<Participante> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'nome',
      'email',
      'senha',
      'dataNasc',
      'createdAt',
      'updatedAt',
      'initials',
    ])
  }
}
