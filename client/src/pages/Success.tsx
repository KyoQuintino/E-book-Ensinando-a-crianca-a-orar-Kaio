import { ArrowRight, Check, Clock3, Mail, ShieldCheck } from "lucide-react";

const LOGO = "/manus-storage/logo-maos-oracao_18dfb9a7.png";

const steps = [
  {
    number: "01",
    title: "Confira seu e-mail",
    text: "O acesso ao material será enviado para o endereço informado no checkout Stripe.",
    icon: Mail,
  },
  {
    number: "02",
    title: "Procure também no spam",
    text: "Se a mensagem não aparecer na caixa de entrada, verifique as pastas Promoções, Spam ou Lixo eletrônico.",
    icon: Clock3,
  },
  {
    number: "03",
    title: "Abra o link e comece",
    text: "Use o botão de acesso enviado no e-mail para abrir o ebook e começar a jornada em família.",
    icon: ArrowRight,
  },
];

export default function Success() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071127] px-5 py-8 text-[#f7f0df] sm:py-12">
      <div className="hero-glow -right-40 -top-40" aria-hidden="true" />
      <div className="hero-glow -bottom-64 -left-48 opacity-60" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <a href="/" className="flex items-center gap-3 text-sm font-extrabold tracking-tight text-[#f7f0df]">
            <img src={LOGO} alt="" className="h-8 w-8 object-contain" />
            <span>Ensinando a Criança a Orar</span>
          </a>
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-[#9aa8c0] sm:block">Compra segura</span>
        </header>

        <section className="mx-auto max-w-3xl py-16 text-center sm:py-20">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#f0c86a]/45 bg-[#f0c86a]/12 text-[#f0c86a] shadow-[0_0_0_10px_rgba(240,200,106,0.05)]">
            <Check size={30} strokeWidth={2.5} aria-hidden="true" />
          </div>
          <p className="eyebrow mb-5">Pagamento recebido</p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] text-[#f7f0df] sm:text-7xl">
            Sua jornada começa <span className="gold-text">agora.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#aebbd0] sm:text-lg">
            Obrigado por escolher ensinar a fé com presença e carinho. Preparamos um caminho simples para você acessar o seu material.
          </p>
        </section>

        <section className="soft-card rounded-[2rem] p-6 sm:p-10" aria-labelledby="access-title">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label mb-3">Próximos passos</p>
              <h2 id="access-title" className="font-display text-3xl text-[#f7f0df] sm:text-4xl">Como acessar seu ebook</h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#aebbd0]"><ShieldCheck size={16} className="text-[#f0c86a]" aria-hidden="true" /> Compra processada com segurança</div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(({ number, title, text, icon: Icon }) => (
              <article key={number} className="rounded-2xl border border-white/10 bg-[#091632]/80 p-5 transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-display text-3xl text-[#f0c86a]">{number}</span>
                  <Icon size={21} className="text-[#f0c86a]" aria-hidden="true" />
                </div>
                <h3 className="text-base font-extrabold text-[#f7f0df]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#9aa8c0]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-2xl py-12 text-center sm:py-16">
          <div className="rounded-2xl border border-[#f0c86a]/18 bg-[#f0c86a]/[0.06] px-6 py-7">
            <h2 className="font-display text-2xl text-[#f7f0df]">Não encontrou o e-mail?</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#aebbd0]">
              Aguarde alguns minutos, confira todas as pastas da sua caixa de entrada e confirme se o endereço digitado na compra está correto. Se ainda precisar de ajuda, responda ao e-mail de confirmação do pagamento.
            </p>
          </div>
          <a href="/" className="outline-button mt-8">Voltar para a página inicial <ArrowRight size={15} aria-hidden="true" /></a>
        </section>

        <footer className="border-t border-white/10 pt-6 text-center text-xs text-[#6f7c95]">
          Seu acesso é digital e fica disponível no link enviado após a confirmação do pagamento.
        </footer>
      </div>
    </main>
  );
}
