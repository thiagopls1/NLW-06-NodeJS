# NLW-06-NodeJS

## Sobre:

Essa aplicação foi feita durante a Next Level Week de NodeJS da Rocketseat, trata-se de uma aplicação na qual o usuário pode elogiar outro usuário, atribuindo uma tag (que pode ser adicionada por um usuário admin) e uma descrição ao elogio. As ações dentro da aplicação podem ser feitas apenas com autenticação de token gerada no login.

## Recursos da aplicação:

- Usuário (Não admin):
  - Pode fazer seu próprio registro;
  - Pode fazer elogios para outros usuários;
  - Ver elogios recebidos e enviados;
  - Não pode criar tags;
  - Requer autenticação de token para fazer qualquer ação.

- Usuário (Admin):
  - Pode fazer as mesmas ações de um usuário não admin;
  - Possui a permissão de criar tags para os elogios;
  - Pode registrar outros usuários
