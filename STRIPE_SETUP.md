# Configuração do Stripe

## Modelo comercial

O site usa uma **compra única** do ebook “Ensinando a Criança a Orar — Guia Prático para Pais”, com preço de **R$ 29,90** (`BRL 2.990` em centavos). O Checkout é criado no servidor com `mode: payment`, e o produto é definido em `server/products.ts`.

Os CTAs principais tentam abrir o Checkout Stripe em uma nova aba. Se a sessão não puder ser criada, o site exibe uma mensagem acessível e abre a Hotmart como fallback. O link direto “Ou comprar pela Hotmart” permanece disponível em todos os CTAs.

## Variáveis e configuração

As variáveis `STRIPE_SECRET_KEY`, `VITE_STRIPE_PUBLISHABLE_KEY` e `STRIPE_WEBHOOK_SECRET` são gerenciadas pelo ambiente do projeto. Quando for necessário alterar ou corrigir chaves, use **Settings → Payment**; não coloque chaves em código, fixtures ou arquivos `.env` versionados.

O webhook usa a rota `/api/stripe/webhook`, recebe o corpo bruto antes do parser JSON e valida a assinatura pelo cabeçalho `Stripe-Signature`. O evento `checkout.session.completed` registra somente os identificadores essenciais no log: evento, sessão, Payment Intent, customer e `user_id` presente nos metadados. Nenhum dado de cartão é salvo no banco local.

## URLs de retorno

| Situação | URL | Comportamento |
| --- | --- | --- |
| Sucesso | `/?checkout=success` | Exibe uma confirmação no topo da landing page. |
| Cancelamento | `/?checkout=cancelled` | Informa que o checkout foi cancelado e oferece nova tentativa ou Hotmart. |
| Falha de criação | URL atual | Mostra o erro de fallback e abre a Hotmart. |

## Teste em sandbox

Use o cartão de teste `4242 4242 4242 4242`, qualquer data futura e qualquer CVC de três dígitos. O fluxo deve ser validado no ambiente de teste do Stripe antes de trocar para chaves live. O projeto também trata eventos de teste com IDs iniciados por `evt_test_` e responde `{ "verified": true }`, conforme exigido pelo registro automatizado de webhook.

> Nunca use dados reais de cartão no modo de teste e nunca armazene número completo, CVC ou validade no projeto.

## Referências

[1]: https://docs.stripe.com/payments/checkout Stripe Checkout — documentação oficial.
[2]: https://docs.stripe.com/webhooks Stripe Webhooks — documentação oficial.
