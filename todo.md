# Integração Stripe — tarefas

- [x] Confirmar se o fluxo principal será pagamento único, assinatura recorrente ou ambos.
- [x] Configurar o recurso Stripe no projeto usando a infraestrutura oficial do WebDev.
- [x] Definir produto(s), preço(s), moeda e comportamento de checkout.
- [x] Integrar os CTAs atuais ao checkout Stripe sem quebrar o fallback Hotmart.
- [x] Adicionar estados de sucesso, cancelamento e erro.
- [x] Validar o fluxo em modo de teste e documentar as variáveis/configurações necessárias.
- [x] Salvar checkpoint final após a validação.

- [x] Implementar compra única do ebook por R$ 29,90 via Stripe.
- [x] Manter os links Hotmart como fallback durante o período de testes.
- [x] Criar estados de redirecionamento Stripe, sucesso e cancelamento para compra única.

- [x] Exibir uma mensagem de erro visível antes de acionar o fallback Hotmart.
- [x] Testar o endpoint Stripe em sandbox, incluindo o webhook de teste.
- [x] Criar documentação de configuração, fallback e cartão de teste.
- [x] Salvar novo checkpoint final após corrigir os gaps da integração Stripe.

- [x] Criar rota dedicada `/sucesso` para o retorno do pagamento Stripe.
- [x] Exibir confirmação da compra e instruções claras para acessar o material.
- [x] Incluir orientação sobre e-mail, spam, prazo de recebimento e suporte.
- [x] Atualizar a URL de sucesso do Checkout Stripe para `/sucesso`.
- [x] Validar a página em desktop, mobile, TypeScript, testes e build.
- [x] Salvar checkpoint da página de sucesso concluída.

- [ ] Verificar o estado Git e confirmar que segredos e artefatos gerados estão ignorados.
- [ ] Criar repositório GitHub privado com o título solicitado.
- [ ] Criar commit de publicação e enviar a branch principal para o GitHub.
- [ ] Verificar o repositório remoto e entregar o link.
