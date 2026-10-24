/* Design direction: faithful preserve/extension of the reference page — devotional editorial mood, asymmetric storytelling, navy surfaces, warm-gold CTAs, serif display headlines, and calm device reveals. */
import { useState } from "react";
import { HOTMART_CHECKOUT_URL } from "@/lib/checkout";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  HeartHandshake,
  Infinity,
  LockKeyhole,
  Menu,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  UsersRound,
  X,
} from "lucide-react";

const ASSETS = {
  logo: "/manus-storage/logo-maos-oracao_18dfb9a7.png",
  generatedHero: "/manus-storage/original-hero_8736ef80.jpg",
  originalHero: "/manus-storage/original-hero_8736ef80.jpg",
  generatedFather: "/manus-storage/original-pai-filho_29f92b8f.jpg",
  originalFather: "/manus-storage/original-pai-filho_29f92b8f.jpg",
  generatedFamily: "/manus-storage/original-familia_b97c754b.jpg",
  originalFamily: "/manus-storage/original-familia_b97c754b.jpg",
  generatedPages: "/manus-storage/ebook-paginas-interiores_f74223f1.png",
  cover: "/manus-storage/original-ebook-cover_eb692155.png",
  adBanner: "/manus-storage/original-ad-banner_5312f0cd.jpg",
};

const benefits = [
  { icon: BookOpen, title: "Guia Prático Completo", text: "Passo a passo simples e objetivo para ensinar seu filho a orar em qualquer momento do dia." },
  { icon: HeartHandshake, title: "Vínculo Familiar Fortalecido", text: "Atividades e sugestões que aproximam pais e filhos através da espiritualidade compartilhada." },
  { icon: Sparkles, title: "Atividades para o Dia a Dia", text: "Dinâmicas lúdicas e orações adaptadas para cada faixa etária, tornando a fé parte da rotina." },
  { icon: UsersRound, title: "Linguagem Acessível", text: "Conteúdo escrito de forma clara e amorosa, sem jargões religiosos difíceis de entender." },
  { icon: Smartphone, title: "Acesso Imediato", text: "Formato digital: acesse no celular, tablet ou computador a qualquer hora e em qualquer lugar." },
  { icon: ShieldCheck, title: "Garantia de 7 Dias", text: "Se não ficar satisfeito, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia." },
];

const previewPages = [
  { chapter: "Capítulo 1", title: "Os Primeiros Passos", subtitle: "Como apresentar a oração ao seu filho de forma leve, sem cobranças e sem palavras difíceis.", accent: "começar" },
  { chapter: "Capítulo 2", title: "Criando um Ritual", subtitle: "Pequenos hábitos que transformam a hora de dormir em um encontro cheio de presença.", accent: "ritual" },
  { chapter: "Capítulo 3", title: "Orações para Crianças", subtitle: "Palavras simples para agradecer, pedir ajuda e conversar com Deus todos os dias.", accent: "oração" },
  { chapter: "Capítulo 4", title: "Perguntas e Descobertas", subtitle: "Como acolher a curiosidade dos pequenos com amor, calma e sabedoria.", accent: "descobrir" },
];

const faqItems = [
  ["Para qual faixa etária o guia é indicado?", "O guia foi pensado para pais de crianças de 3 a 10 anos, com sugestões adaptáveis para cada fase da infância."],
  ["Preciso ter conhecimento religioso para usar o guia?", "Não. A linguagem é acessível e acolhedora, para que qualquer família consiga começar com naturalidade."],
  ["Como vou receber o ebook após a compra?", "O acesso é enviado imediatamente para o e-mail informado no checkout, em formato digital."],
  ["E se eu não gostar? Posso pedir reembolso?", "Sim. Você conta com uma garantia de 7 dias para conhecer o material com tranquilidade."],
  ["O guia é compatível com qualquer religião cristã?", "O conteúdo valoriza a oração e os vínculos familiares de forma ampla, respeitando diferentes vivências cristãs."],
];

function ImageWithFallback({ src, fallback, alt, className }: { src: string; fallback: string; alt: string; className?: string }) {
  return <img src={src} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = fallback; }} alt={alt} className={className} />;
}

function ButtonLink({ children, className = "gold-button" }: { children: React.ReactNode; className?: string }) {
  return <a className={className} href={HOTMART_CHECKOUT_URL} target="_blank" rel="noreferrer">{children}</a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071127]/90 backdrop-blur-xl">
      <div className="container flex min-h-[66px] items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-2.5 text-sm font-extrabold text-[#f7f0df]">
          <img src={ASSETS.logo} alt="Símbolo de mãos em oração" className="h-7 w-7 object-contain" />
          <span>Ensinando a Criança a Orar</span>
        </a>
        <nav className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.16em] text-[#9aa8c0] lg:flex">
          <a href="#solucao" className="transition-colors hover:text-[#f0c86a]">A solução</a>
          <a href="#conteudo" className="transition-colors hover:text-[#f0c86a]">Conteúdo</a>
          <a href="#oferta" className="transition-colors hover:text-[#f0c86a]">Oferta</a>
          <a href="#duvidas" className="transition-colors hover:text-[#f0c86a]">Dúvidas</a>
        </nav>
        <div className="hidden sm:block"><ButtonLink className="gold-button px-5 py-2.5 text-[10px]">Garantir acesso</ButtonLink></div>
        <button aria-label={open ? "Fechar menu" : "Abrir menu"} className="rounded-full border border-white/10 p-2 text-[#f7f0df] sm:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {open && <div className="border-t border-white/10 bg-[#0b1734] px-5 py-4 sm:hidden"><div className="container flex flex-col gap-4 text-xs font-bold uppercase tracking-[0.14em] text-[#f7f0df]"><a href="#solucao" onClick={() => setOpen(false)}>A solução</a><a href="#conteudo" onClick={() => setOpen(false)}>Conteúdo</a><a href="#oferta" onClick={() => setOpen(false)}>Oferta</a><a href="#duvidas" onClick={() => setOpen(false)}>Dúvidas</a></div></div>}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-white/[0.08] bg-[#071127]">
      <div className="grain" />
      <div className="hero-glow -right-48 top-8" />
      <div className="container relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 lg:py-24">
        <div className="reveal-copy max-w-[600px]">
          <span className="eyebrow inline-flex rounded-full border border-[#f0c86a]/25 px-3 py-2">Guia prático para pais</span>
          <h1 className="font-display mt-7 text-[3.2rem] leading-[0.98] tracking-[-0.04em] text-[#f7f0df] sm:text-[4.5rem] lg:text-[5rem]">Você sonha em ver seu filho <em className="not-italic gold-text">conectado com a fé?</em></h1>
          <p className="mt-7 max-w-[540px] text-base leading-8 text-[#9aa8c0] sm:text-lg">Muitos pais se perguntam como ensinar seus pequenos a conversar com Deus de forma <strong className="font-bold text-[#f7f0df]">simples e amorosa.</strong> Agora existe um guia feito especialmente para isso.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4"><ButtonLink>Quero garantir meu acesso <ArrowRight size={17} /></ButtonLink></div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold text-[#b6b18f]"><span>✓ Acesso imediato</span><span>✓ Garantia de 7 dias</span><span>✓ 100% digital</span></div>
        </div>
        <div className="reveal-device relative mx-auto w-full max-w-[540px] lg:mr-0">
          <div className="absolute -inset-5 rounded-[2rem] bg-[#f0c86a]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#10192c] shadow-[0_35px_100px_rgba(0,0,0,0.35)]">
            <ImageWithFallback src={ASSETS.generatedHero} fallback={ASSETS.originalHero} alt="Criança ajoelhada ao lado da cama em oração" className="aspect-[4/5] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071127]/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#f7f0df]"><span className="font-display text-2xl">Uma semente de fé<br /><span className="text-[#f0c86a]">para toda a vida.</span></span><span className="rounded-full border border-white/20 bg-[#071127]/50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md">ebook digital</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  const items = [
    ["🤔", "Não sabe por onde começar a ensinar seu filho a orar"],
    ["💭", "Quer que a fé faça parte da rotina da família, mas não sabe como"],
    ["❤️", "Deseja fortalecer o vínculo espiritual com seu filho"],
  ];
  return (
    <section className="bg-[#0a1630] py-20 md:py-28"><div className="container grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20"><div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 shadow-2xl"><ImageWithFallback src={ASSETS.generatedFather} fallback={ASSETS.originalFather} alt="Pai e filho orando juntos" className="aspect-[4/3] w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-tr from-[#071127]/60 to-transparent" /></div><div><span className="section-label">Você já se sentiu assim?</span><h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-[-0.03em] text-[#f7f0df] sm:text-5xl">A vontade existe.<br /><span className="gold-text">Só faltava um caminho.</span></h2><div className="mt-9 space-y-5">{items.map(([emoji, text]) => <div key={text} className="flex gap-4 border-b border-white/10 pb-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#182544] text-xl">{emoji}</span><p className="pt-2 text-[15px] leading-7 text-[#c0c8d8]">{text}</p></div>)}</div><p className="mt-8 max-w-[600px] text-[15px] leading-7 text-[#9aa8c0]">Se você respondeu sim para alguma dessas perguntas, o ebook <strong className="text-[#f7f0df]">“Ensinando a Criança a Orar”</strong> foi criado especialmente para você.</p></div></div></section>
  );
}

function SolutionSection() {
  return <section id="solucao" className="bg-[#071127] py-20 md:py-28"><div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><span className="section-label">A solução</span><h2 className="font-display mt-6 max-w-[520px] text-4xl leading-[1.03] tracking-[-0.03em] text-[#f7f0df] sm:text-5xl">Um guia prático e amoroso para <span className="gold-text">transformar a fé</span> do seu filho</h2></div><div className="max-w-[620px] lg:pb-2"><p className="text-base leading-8 text-[#9aa8c0]">O ebook <strong className="text-[#f7f0df]">“Ensinando a Criança a Orar”</strong> é um guia completo que ensina pais a criar momentos sagrados e significativos com seus filhos — de forma simples, natural e cheia de amor.</p><p className="mt-5 text-base leading-8 text-[#9aa8c0]">Não é sobre palavras perfeitas. É sobre um coração aberto e uma conexão que vai durar para a vida toda.</p><div className="mt-8"><ButtonLink>Quero o guia agora <ArrowRight size={17} /></ButtonLink></div></div></div></section>;
}

function ScreenPage({ page, compact = false }: { page: typeof previewPages[number]; compact?: boolean }) {
  return <div className={`screen-page ${compact ? "screen-page-compact" : ""}`}><div className="screen-page-top"><span className="screen-mark">✦</span><span>Ensinando a Criança a Orar</span><span className="screen-page-num">0{previewPages.indexOf(page) + 1}</span></div><div className="screen-page-inner"><span className="screen-kicker">{page.chapter}</span><h3>{page.title}</h3><p>{page.subtitle}</p><div className="page-illustration"><div className="page-sun" /><div className="page-house" /><div className="page-child" /><div className="page-heart">♥</div></div><div className="page-lines"><span /><span /><span /></div><div className="page-quote">“Deus, obrigado por este momento.”</div></div><div className="screen-page-footer"><span>guia prático para pais</span><span>1</span></div></div>;
}

function MockupPreview() {
  const [active, setActive] = useState(0);
  const page = previewPages[active];
  const next = () => setActive((value) => (value + 1) % previewPages.length);
  const previous = () => setActive((value) => (value - 1 + previewPages.length) % previewPages.length);
  return <section id="conteudo" className="relative overflow-hidden border-y border-white/[0.08] bg-[#0a1630] py-20 md:py-28"><div className="grain" /><div className="container relative"><div className="mx-auto max-w-[760px] text-center"><span className="section-label justify-center">Veja uma prévia</span><h2 className="font-display mt-6 text-4xl leading-[1.04] tracking-[-0.03em] text-[#f7f0df] sm:text-5xl">Conheça o conteúdo do <span className="gold-text">ebook</span></h2><p className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-[#9aa8c0]">Veja uma amostra das páginas internas do guia. Cada capítulo foi cuidadosamente desenvolvido para ser prático, amoroso e fácil de aplicar no dia a dia.</p></div><div className="preview-visual-wrap mx-auto mt-14 max-w-[1000px]"><div className="preview-visual relative min-h-[420px] md:min-h-[550px]"><div className="mockup-shadow" /><div className="tablet-device reveal-device"><div className="tablet-camera" /><div className="device-screen"><div className="screen-image-layer"><ImageWithFallback src={ASSETS.generatedPages} fallback={ASSETS.cover} alt="Páginas internas do ebook em um tablet" className="absolute inset-0 h-full w-full object-cover opacity-20" /></div><ScreenPage page={page} /></div></div><div className="phone-device reveal-device delay"><div className="phone-camera" /><div className="device-screen"><ScreenPage page={page} compact /></div></div><div className="preview-note"><span className="gold-text">Capítulo {active + 1}</span><strong>{page.title}</strong><span>{page.subtitle}</span></div></div><div className="mt-4 flex flex-col items-center gap-5 text-center"><div className="flex items-center gap-4"><button aria-label="Página anterior" onClick={previous} className="rounded-full border border-white/15 p-3 text-[#f7f0df] transition hover:border-[#f0c86a] hover:text-[#f0c86a]"><ChevronLeft size={18} /></button><span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9aa8c0]">Página {active + 1} de {previewPages.length}</span><button aria-label="Próxima página" onClick={next} className="rounded-full border border-white/15 p-3 text-[#f7f0df] transition hover:border-[#f0c86a] hover:text-[#f0c86a]"><ChevronRight size={18} /></button></div><ButtonLink>Quero garantir meu acesso <ArrowRight size={17} /></ButtonLink></div></div></div></section>;
}

function BenefitsSection() {
  return <section className="bg-[#071127] py-20 md:py-28"><div className="container"><div className="max-w-[660px]"><span className="section-label">O que você vai receber</span><h2 className="font-display mt-6 text-4xl leading-[1.03] tracking-[-0.03em] text-[#f7f0df] sm:text-5xl">Tudo que você precisa para <span className="gold-text">começar hoje</span></h2></div><div className="mt-12 grid gap-px overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(({ icon: Icon, title, text }) => <div key={title} className="bg-[#0d1934] p-7 transition-colors hover:bg-[#122044]"><Icon size={25} strokeWidth={1.5} className="text-[#f0c86a]" /><h3 className="mt-6 text-lg font-extrabold text-[#f7f0df]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#9aa8c0]">{text}</p></div>)}</div></div></section>;
}

function FamilySection() {
  return <section className="bg-[#0a1630] py-20 md:py-28"><div className="container grid gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-20"><div><span className="section-label">Para toda a família</span><h2 className="font-display mt-6 text-4xl leading-[1.03] tracking-[-0.03em] text-[#f7f0df] sm:text-5xl">Momentos que ficam <span className="gold-text">para a vida toda</span></h2><p className="mt-7 max-w-[600px] text-base leading-8 text-[#9aa8c0]">Imagine seu filho, anos depois, ensinando os próprios filhos a orar — porque você plantou essa semente hoje. Esse é o legado que este guia pode ajudar você a construir.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{["Orações simples e bonitas para crianças de todas as idades", "Como criar rituais espirituais na hora de dormir", "Como responder perguntas sobre Deus com amor e sabedoria", "Jogos e atividades que ensinam sobre fé de forma divertida"].map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#d2d7e1]"><span className="mt-1 text-[#f0c86a]">✦</span><span>{item}</span></div>)}</div></div><div className="relative overflow-hidden rounded-[1.3rem] border border-white/10 shadow-2xl"><ImageWithFallback src={ASSETS.generatedFamily} fallback={ASSETS.originalFamily} alt="Família feliz lendo um livro no sofá" className="aspect-[4/3] w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#071127]/60 to-transparent" /></div></div></section>;
}

function Testimonials() {
  const testimonials = [
    ["Minha filha de 5 anos agora pede para orar antes de dormir todos os dias. Esse guia mudou nossa rotina de uma forma linda e inesperada.", "Ana Paula S.", "Mãe de 2 filhos"],
    ["Eu não sabia como falar sobre Deus com meu filho pequeno. O guia me deu as palavras certas e a confiança que eu precisava.", "Carlos M.", "Pai de primeira viagem"],
    ["As atividades são incríveis! Meu filho de 7 anos adora a ‘hora da oração’ que criamos juntos. O vínculo ficou muito mais forte.", "Fernanda R.", "Mãe e professora"],
  ];
  return <section className="bg-[#071127] py-20 md:py-28"><div className="container"><div className="text-center"><span className="section-label justify-center">O que dizem os pais</span><h2 className="font-display mt-6 text-4xl leading-[1.03] tracking-[-0.03em] text-[#f7f0df] sm:text-5xl">Famílias que já transformaram <span className="gold-text">sua fé</span></h2></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{testimonials.map(([quote, name, role]) => <figure key={name} className="soft-card flex min-h-[260px] flex-col justify-between rounded-[1.15rem] p-7"><div><div className="flex gap-1 text-[#f0c86a]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={15} fill="currentColor" />)}</div><blockquote className="mt-6 text-[15px] leading-7 text-[#d7dbe3]">“{quote}”</blockquote></div><figcaption className="mt-7 border-t border-white/10 pt-4"><strong className="block text-sm font-extrabold text-[#f7f0df]">{name}</strong><span className="mt-1 block text-xs text-[#9aa8c0]">{role}</span></figcaption></figure>)}</div></div></section>;
}

function OfferSection() {
  return <section id="oferta" className="bg-[#0a1630] py-20 md:py-28"><div className="container"><div className="mx-auto max-w-[700px] text-center"><span className="section-label justify-center">Oferta especial por tempo limitado</span><h2 className="font-display mt-6 text-4xl leading-[1.03] tracking-[-0.03em] text-[#f7f0df] sm:text-5xl">Transforme a fé do seu filho <span className="gold-text">para a vida toda</span></h2></div><div className="mx-auto mt-14 grid max-w-[1000px] gap-10 rounded-[1.5rem] border border-[#f0c86a]/20 bg-[#101d3a] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.25)] md:grid-cols-[0.85fr_1.15fr] md:p-10"><div className="flex items-center justify-center"><img src={ASSETS.cover} alt="Capa do ebook Ensinando a Criança a Orar" className="max-h-[360px] w-full max-w-[290px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.38)]" /></div><div className="flex flex-col justify-center"><span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f0c86a]">Ensinando a Criança a Orar</span><h3 className="font-display mt-4 text-3xl text-[#f7f0df]">Guia Prático para Pais</h3><p className="mt-3 text-sm leading-6 text-[#9aa8c0]">Ebook digital para ajudar você a tornar a oração simples, natural e cheia de significado.</p><div className="mt-7 space-y-3 text-sm text-[#d7dbe3]">{["Guia prático completo em formato digital", "Atividades para o dia a dia com seus filhos", "Fortalecimento do vínculo familiar", "Acesso imediato após a compra", "Garantia de 7 dias ou seu dinheiro de volta"].map((item) => <div key={item} className="flex items-start gap-3"><Check size={17} className="mt-0.5 shrink-0 text-[#f0c86a]" />{item}</div>)}</div><div className="mt-8"><ButtonLink>Quero garantir meu acesso! <ArrowRight size={17} /></ButtonLink></div><div className="mt-5 flex flex-wrap gap-4 text-[11px] text-[#9aa8c0]"><span>🔒 Compra segura</span><span>🔒 Garantia 7 dias</span><span>🔒 Acesso imediato</span></div></div></div><p className="mt-7 text-center text-xs font-semibold text-[#b6b18f]">Atenção: esta oferta é por tempo limitado. Garanta seu acesso enquanto a oferta estiver disponível.</p></div></section>;
}

function CampaignSection() {
  return <section className="bg-[#071127] py-20 md:py-28"><div className="container"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><span className="section-label">Campanha publicitária premium</span><h2 className="font-display mt-6 text-4xl leading-[1.03] tracking-[-0.03em] text-[#f7f0df] sm:text-5xl">Pronto para usar em <span className="gold-text">suas redes sociais</span></h2><p className="mt-6 text-base leading-8 text-[#9aa8c0]">Materiais com design premium e copywriting persuasivo para você divulgar o guia imediatamente no Instagram, Facebook e nas suas páginas de venda.</p><div className="mt-7 flex items-center gap-3 text-sm text-[#d7dbe3]"><Infinity size={18} className="text-[#f0c86a]" /> Conteúdo digital pronto para compartilhar</div></div><div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#101d3a] p-2 shadow-2xl"><img src={ASSETS.adBanner} alt="Anúncio premium do ebook em formato horizontal" className="w-full rounded-[0.8rem]" /><div className="px-4 py-4 text-xs text-[#9aa8c0]">Dimensão: 16:9 · Ideal para banners e páginas de vendas</div></div></div></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return <section id="duvidas" className="bg-[#0a1630] py-20 md:py-28"><div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><div><span className="section-label">Tire suas dúvidas</span><h2 className="font-display mt-6 text-4xl leading-[1.03] tracking-[-0.03em] text-[#f7f0df] sm:text-5xl">Tudo para você comprar com <span className="gold-text">tranquilidade</span></h2><p className="mt-6 max-w-[460px] text-base leading-8 text-[#9aa8c0]">Se ainda ficou alguma pergunta, encontre aqui as respostas mais importantes sobre o material e o acesso.</p></div><div className="space-y-3">{faqItems.map(([question, answer], index) => <div key={question} className="rounded-[0.9rem] border border-white/10 bg-[#101d3a]/55"><button className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-sm font-extrabold text-[#f7f0df]" onClick={() => setOpen(open === index ? null : index)}>{question}<ChevronDown size={18} className={`shrink-0 text-[#f0c86a] transition-transform ${open === index ? "rotate-180" : ""}`} /></button>{open === index && <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-[#9aa8c0]">{answer}</div>}</div>)}</div></div></section>;
}

function FinalCTA() {
  return <section className="relative overflow-hidden border-t border-white/10 bg-[#071127] py-24 text-center md:py-32"><div className="hero-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" /><div className="grain" /><div className="container relative"><span className="section-label justify-center">Comece hoje</span><h2 className="font-display mx-auto mt-6 max-w-[780px] text-5xl leading-[0.98] tracking-[-0.04em] text-[#f7f0df] sm:text-6xl">Plante uma semente de fé <span className="gold-text">na infância.</span></h2><p className="mx-auto mt-6 max-w-[560px] text-base leading-8 text-[#9aa8c0]">Leve a oração para a rotina da sua família com um guia feito para acolher, ensinar e aproximar.</p><div className="mt-9"><ButtonLink>Quero garantir meu acesso <ArrowRight size={17} /></ButtonLink></div></div></section>;
}

function Footer() {
  return <footer className="border-t border-white/10 bg-[#050d20] py-9"><div className="container flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"><div className="flex items-center gap-2.5 text-sm font-extrabold text-[#f7f0df]"><img src={ASSETS.logo} alt="Símbolo de mãos em oração" className="h-7 w-7 object-contain" /><span>Ensinando a Criança a Orar</span></div><p className="text-xs text-[#6f7c95]">© 2024 · Um guia para famílias que querem viver a fé juntos.</p></div></footer>;
}

export default function Home() {
  return <div className="min-h-screen overflow-hidden bg-[#071127]"><Header /><main><Hero /><PainSection /><SolutionSection /><MockupPreview /><BenefitsSection /><FamilySection /><Testimonials /><OfferSection /><CampaignSection /><FAQ /><FinalCTA /></main><Footer /></div>;
}
