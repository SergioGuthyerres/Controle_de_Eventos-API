import { InscricaoSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Participante from './participante.ts'
import Evento from './evento.ts'

export default class Inscricao extends InscricaoSchema {
  static table = 'inscricoes'
  @belongsTo(() => Participante)
  declare participante: BelongsTo<typeof Participante>
  @belongsTo(() => Evento)
  declare eventos: BelongsTo<typeof Evento>
}
