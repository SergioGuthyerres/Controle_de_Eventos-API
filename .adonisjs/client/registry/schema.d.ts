/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'auth.new_account.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/signup'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/participante').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/participante').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'auth.access_tokens.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/participante').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/participante').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'profile.profile.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/account/profile'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
    }
  }
  'profile.access_tokens.destroy': {
    methods: ["POST"]
    pattern: '/api/v1/account/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
    }
  }
  'participantes.participantes.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/participantes'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['index']>>>
    }
  }
  'participantes.participantes.store': {
    methods: ["POST"]
    pattern: '/api/v1/participantes'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/participante').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/participante').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'participantes.participantes.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/participantes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['show']>>>
    }
  }
  'participantes.participantes.update': {
    methods: ["PUT"]
    pattern: '/api/v1/participantes/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/participante').signupValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/participante').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'participantes.participantes.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/participantes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['destroy']>>>
    }
  }
  'eventos.eventos.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/eventos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['index']>>>
    }
  }
  'eventos.eventos.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/eventos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['show']>>>
    }
  }
  'eventos.eventos.store': {
    methods: ["POST"]
    pattern: '/api/v1/eventos'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/evento').createEventValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/evento').createEventValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'eventos.eventos.update': {
    methods: ["PUT"]
    pattern: '/api/v1/eventos/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/evento').updateEventValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/evento').updateEventValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'eventos.eventos.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/eventos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['destroy']>>>
    }
  }
  'eventos.inscricaos.store': {
    methods: ["POST"]
    pattern: '/api/v1/eventos/:id/inscricoes'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['store']>>>
    }
  }
  'inscricoes.inscricaos.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/inscricoes'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['index']>>>
    }
  }
  'inscricoes.inscricaos.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/inscricoes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['show']>>>
    }
  }
  'inscricoes.inscricaos.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/inscricoes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['destroy']>>>
    }
  }
}
