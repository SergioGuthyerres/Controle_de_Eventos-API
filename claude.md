# Projeto — API AdonisJS v7

## Stack

- AdonisJS v7 (não v5/v6)
- TypeScript
- PostgreSQL com Lucid ORM
- Autenticação via Access Tokens

## Convenções do projeto

### Tabelas (IMPORTANTE)

O Lucid pluraliza nomes com regras do inglês, o que quebra com palavras em português.
Todo model DEVE ter `static table` explícito:

```typescript
export default class Participante extends ParticipanteSchema {
  static table = 'participantes'
}
```

### Migrations

Colunas em snake_case, models em camelCase — o Lucid converte automaticamente via `@column`.
Exemplo: coluna `data_nasc` → `declare dataNasc: DateTime` no model.

### Models

Os models estendem schemas gerados em `#database/schema`, não `BaseModel` diretamente:

```typescript
import { ParticipanteSchema } from '#database/schema'

export default class Participante extends ParticipanteSchema {
  static table = 'participantes'
  // relações e métodos aqui
}
```

### Auth

- Auth via `auth.getUserOrFail()` — nunca `auth.getParticipanteOrFail()` (não existe)
- Middleware: `middleware.auth()`
- Tokens: `Participante.accessTokens`

### Rotas

Prefixo base: `/api/v1`
Rotas públicas: `GET /eventos`, `GET /eventos/:id`, `POST /participantes`, `POST /participantes/login`
Demais rotas exigem `middleware.auth()`

Rotas estáticas (ex: `/login`, `/profile`) devem vir ANTES de rotas dinâmicas (ex: `/:id`)
para evitar que o Adonis capture "login" como um ID.

## Estrutura de rotas atual que quero manter.

Login e registro são padronizados na rota `participantes` (não existe mais grupo `auth`).

| Método | Rota | Controller | Auth | Descrição |
|--------|------|------------|------|-----------|
| POST | `/api/v1/participantes` | `Participantes.store` | público | Registro (retorna token) |
| POST | `/api/v1/participantes/login` | `Participantes.login` | público | Login (retorna token) |
| GET | `/api/v1/participantes` | `Participantes.index` | auth | Lista participantes |
| GET | `/api/v1/participantes/:id` | `Participantes.show` | auth | Detalhe |
| PUT | `/api/v1/participantes/:id` | `Participantes.update` | auth | Atualiza |
| DELETE | `/api/v1/participantes/:id` | `Participantes.destroy` | auth | Remove |
| GET | `/api/v1/account/profile` | `Profile.show` | auth | Perfil do logado |
| POST | `/api/v1/account/logout` | `Participantes.logout` | auth | Logout (revoga token) |
| GET | `/api/v1/eventos` | `Eventos.index` | público | Lista eventos |
| GET | `/api/v1/eventos/:id` | `Eventos.show` | público | Detalhe do evento |
| POST | `/api/v1/eventos` | `Eventos.store` | auth | Cria evento |
| PUT | `/api/v1/eventos/:id` | `Eventos.update` | auth | Atualiza evento |
| DELETE | `/api/v1/eventos/:id` | `Eventos.destroy` | auth | Remove evento |
| POST | `/api/v1/eventos/:id/inscricoes` | `Inscricaos.store` | auth | Inscreve no evento |
| GET | `/api/v1/inscricoes` | `Inscricaos.index` | auth | Minhas inscrições |
| GET | `/api/v1/inscricoes/:id` | `Inscricaos.show` | auth | Detalhe da inscrição |
| DELETE | `/api/v1/inscricoes/:id` | `Inscricaos.destroy` | auth | Cancela inscrição |

POST /api/v1/participantes → cadastro (público)

POST /api/v1/participantes/login → login (público)

GET /api/v1/participantes → listar (auth)

GET /api/v1/participantes/profile → perfil (auth)

POST /api/v1/participantes/logout → logout (auth)

GET /api/v1/participantes/:id → buscar (auth)

PUT /api/v1/participantes/:id → editar (auth)

DELETE /api/v1/participantes/:id → deletar (auth)
GET /api/v1/eventos → listar (público)

GET /api/v1/eventos/:id → buscar (público)

POST /api/v1/eventos → criar (auth)

PUT /api/v1/eventos/:id → editar (auth)

DELETE /api/v1/eventos/:id → deletar (auth)

POST /api/v1/eventos/:id/inscricoes → inscrever (auth)
GET /api/v1/inscricoes → listar (auth)

GET /api/v1/inscricoes/:id → buscar (auth)

DELETE /api/v1/inscricoes/:id → deletar (auth)
