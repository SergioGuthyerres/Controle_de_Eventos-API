import { EventoSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Inscricao from './inscricao.ts'
import Participante from './participante.ts'

export default class Evento extends EventoSchema {
  @belongsTo(() => Participante)
  declare participante: BelongsTo<typeof Participante>
  @hasMany(() => Inscricao)
  declare inscricoes: HasMany<typeof Inscricao>
}
