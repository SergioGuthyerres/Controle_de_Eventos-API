/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
  participantes: {
    participantes: {
      index: typeof routes['participantes.participantes.index']
      store: typeof routes['participantes.participantes.store']
      show: typeof routes['participantes.participantes.show']
      update: typeof routes['participantes.participantes.update']
      destroy: typeof routes['participantes.participantes.destroy']
    }
  }
  eventos: {
    eventos: {
      index: typeof routes['eventos.eventos.index']
      show: typeof routes['eventos.eventos.show']
      store: typeof routes['eventos.eventos.store']
      update: typeof routes['eventos.eventos.update']
      destroy: typeof routes['eventos.eventos.destroy']
    }
    inscricaos: {
      store: typeof routes['eventos.inscricaos.store']
    }
  }
  inscricoes: {
    inscricaos: {
      index: typeof routes['inscricoes.inscricaos.index']
      show: typeof routes['inscricoes.inscricaos.show']
      destroy: typeof routes['inscricoes.inscricaos.destroy']
    }
  }
}
