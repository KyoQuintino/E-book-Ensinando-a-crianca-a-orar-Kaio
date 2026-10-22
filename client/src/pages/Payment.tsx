import { ArrowLeft, ArrowRight, Check, LockKeyhole, ShieldCheck, Smartphone } from "lucide-react";
import { HOTMART_CHECKOUT_URL } from "@/lib/checkout";

const LOGO = "/manus-storage/logo-maos-oracao_18dfb9a7.png";
const COVER = "/manus-storage/original-ebook-cover_eb692155.png";

const highlights = [
  "Guia prático para ensinar seu filho a orar",
  "Acesso digital imediato após a confirmação",
  "Conteúdo leve, amoroso e fácil de aplicar",
  "Garantia de 7 dias",
];

export default function Payment() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071127] px-5 py-8 text-[#f7f0df] sm:py-12">
      <div className="hero-glow -right-40 -top-40" aria-hidden="true" />
      <div className="hero-glow -bottom-64 -left-48 opacity-60" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <a href="/" className="flex items-center gap-3 text-sm font-extrabold tracking-tight text-[#f7f0df]">
            <img src={LOGO} alt="" className="h-8 w-8 object-contain" />
            <span>Ensinando a Criança a Orar</span>
          </a>
          <span className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9aa8c0] sm:flex">
            <LockKeyhole size={13} className="text-[#f0c86a]" aria-hidden="true" /> Compra segura
          </span>
        </header>

        <section className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="reveal-copy">
            <a href="/" className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#9aa8c0] transition-colors hover:text-[#f0c86a]">
              <ArrowLeft size={14} aria-hidden="true" /> Voltar para a página inicial
            </a>
            <p className="eyebrow">Seu próximo passo</p>
            <h1 className="font-display mt-5 max-w-xl text-5xl leading-[0.96] tracking-[-0.04em] text-[#f7f0df] sm:text-7xl">
              Plante uma <span className="gold-text">semente de fé</span> para toda a vida.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#aebbd0] sm:text-lg">
              Você está a um passo de começar uma rotina de oração mais simples, acolhedora e significativa com seu filho.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-[#b6b18f]">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={15} className="text-[#f0c86a]" /> Compra protegida</span>
              <span className="inline-flex items-center gap-2"><Smartphone size={15} className="text-[#f0c86a]" /> 100% digital</span>
            </div>
          </div>

          <div className="soft-card rounded-[2rem] p-5 shadow-2xl sm:p-8">
            <div className="grid gap-7 sm:grid-cols-[150px_1fr] sm:items-center">
              <div className="mx-auto w-36 overflow-hidden rounded-xl border border-white/15 bg-[#10192c] shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:mx-0">
                <img src={COVER} alt="Capa do ebook Ensinando a Criança a Orar" className="aspect-[3/4] w-full object-cover" />
              </div>
              <div>
                <p className="section-label">Oferta especial</p>
                <h2 className="font-display mt-3 text-3xl leading-tight text-[#f7f0df] sm:text-4xl">Ensinando a Criança a Orar</h2>
                <p className="mt-3 text-sm leading-6 text-[#9aa8c0]">Guia prático para pais que desejam construir momentos de fé e conexão em família.</p>
                <div className="mt-5 flex items-end gap-3">
                  <span className="font-display text-4xl text-[#f0c86a]">R$ 29,90</span>
                  <span className="pb-1 text-xs font-bold text-[#7e8ba4]">compra única</span>
                </div>
              </div>
            </div>

            <div className="my-7 h-px bg-white/10" />
            <ul className="grid gap-3 text-sm leading-6 text-[#c0c8d8] sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2.5"><Check size={17} className="mt-1 shrink-0 text-[#f0c86a]" aria-hidden="true" /> <span>{item}</span></li>
              ))}
            </ul>

            <a href={HOTMART_CHECKOUT_URL} target="_blank" rel="noreferrer" className="gold-button mt-8 w-full sm:text-sm">
              Ir para o pagamento <ArrowRight size={17} aria-hidden="true" />
            </a>
            <p className="mt-4 text-center text-[11px] leading-5 text-[#7e8ba4]">
              Você será direcionado ao checkout seguro da Hotmart para concluir a compra.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl border-t border-white/10 py-10 text-center">
          <p className="text-sm leading-7 text-[#9aa8c0]">
            Depois da confirmação, o acesso ao material será enviado para o e-mail informado no checkout. Se precisar de ajuda, fale conosco pelo canal de suporte indicado na confirmação da compra.
          </p>
        </section>

        <footer className="border-t border-white/10 pt-6 text-center text-xs text-[#6f7c95]">
          <a href="/" className="transition-colors hover:text-[#f0c86a]">Voltar para a página inicial</a>
        </footer>
      </div>
    </main>
  );
}
