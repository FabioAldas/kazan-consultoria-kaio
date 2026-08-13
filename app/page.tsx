import Link from "next/link";
import Image from "next/image";
import { CtaButtons } from "./components/cta-buttons";
import { ProcessNotify } from "./components/process-notify";
import { ProcessRead } from "./components/process-read";
import { ProcessApply } from "./components/process-apply";
import { ProcessBuild } from "./components/process-build";
import { FoldIn } from "./components/fold-in";
import { ProcessLoop } from "./components/process-loop";
import { ProcessSend } from "./components/process-send";
import { SiteHeader } from "./components/site-header";
import { VideoPlaceholder } from "./components/video-placeholder";

const PARTNERS = [
  {
    src: "/images/parceiras/labstudio.webp",
    alt: "Lab Studio Digital",
    width: 200,
    height: 56,
    ink: true,
  },
  {
    src: "/images/parceiras/unimar.png",
    alt: "Unimar",
    width: 200,
    height: 56,
  },
  {
    src: "/images/parceiras/univem.png",
    alt: "Univem",
    width: 220,
    height: 56,
  },
  {
    src: "/images/parceiras/faip.png",
    alt: "FAIP",
    width: 180,
    height: 56,
  },
] as const;

function PartnersLogos({ labeled }: { labeled?: boolean }) {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <ul className="partners__list" aria-hidden={labeled ? undefined : true}>
      {items.map((partner, index) => (
        <li key={`${partner.src}-${index}`}>
          <Image
            className={
              "ink" in partner && partner.ink
                ? "partners__logo partners__logo--ink"
                : "partners__logo"
            }
            src={partner.src}
            alt={labeled ? partner.alt : ""}
            width={partner.width}
            height={partner.height}
          />
        </li>
      ))}
    </ul>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <div className="fold">
        <section className="hero">
          <p className="hero__badge">
            <span className="hero__badge-icon" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2.2 8.85 6.4 13.2 7.2 8.85 8.05 8 12.3 7.15 8.05 2.8 7.2 7.15 6.4 8 2.2Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Consultoria de marketing estratégica</span>
          </p>

          <h1 className="hero__title">
            Transforme seu negócio com estratégia, posicionamento e{" "}
            <em className="hero__serif">execução</em>.
          </h1>
          <p className="hero__lead">
            Algumas pessoas constroem carreiras. Outras constroem caminhos para
            que empresas e pessoas cresçam.
          </p>
          <CtaButtons />
        </section>
      </div>

      <section className="offer" id="o-que-fazemos">
        <div className="offer__inner">
          <div className="offer__intro">
            <h2>
              O que fazemos na <em className="hero__serif">prática</em>.
            </h2>
            <p>
              <span className="offer__mute">
                Aqui, marketing não é apenas divulgação.
              </span>{" "}
              É estrutura, direção e crescimento.
            </p>
          </div>

          <ul className="offer__grid">
            <li className="offer__card">
              <span className="offer__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M12 3.75v2.5M12 17.75v2.5M3.75 12h2.5M17.75 12h2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Posicionamento de marca</h3>
              <p>Onde a empresa se coloca no mercado.</p>
            </li>
            <li className="offer__card">
              <span className="offer__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4.5 16.5 9 12l3.5 3.5L19.5 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.5 8H19.5V13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3>Estratégia de marketing e vendas</h3>
              <p>Direção comercial, não só comunicação.</p>
            </li>
            <li className="offer__card">
              <span className="offer__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M7 4.75h10A1.25 1.25 0 0 1 18.25 6v14L12 16.25 5.75 20V6A1.25 1.25 0 0 1 7 4.75Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  <path d="M9 9h6M9 12.25h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Planejamento estruturado</h3>
              <p>Do diagnóstico à execução.</p>
            </li>
            <li className="offer__card">
              <span className="offer__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="9" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="16" cy="9.2" r="2.1" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M4.75 18.25c.4-2.6 2.45-4.1 4.25-4.1s3.85 1.5 4.25 4.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="M13.4 14.7c1.35-.55 3.15-.35 4.1 1.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Consultoria personalizada</h3>
              <p>Sob a realidade do negócio, não pacote genérico.</p>
            </li>
            <li className="offer__card">
              <span className="offer__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 19.25V12M12 12c1.8-2.2 4.6-3.2 7.25-3.5M12 12C10.2 9.8 7.4 8.8 4.75 8.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="M9.5 5.75 12 4.25l2.5 1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3>Desenvolvimento de negócios</h3>
              <p>Crescimento sustentável.</p>
            </li>
            <li className="offer__card">
              <span className="offer__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="6.5" cy="7" r="2.1" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="17.5" cy="7" r="2.1" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="17" r="2.1" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M8.3 8.4 10.4 15.1M15.7 8.4 13.6 15.1M8.6 7h6.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Conexão entre empresários e oportunidades</h3>
              <p>Rede e ecossistema.</p>
            </li>
          </ul>

          <p className="offer__close">
            Tudo isso com foco em{" "}
            <em className="hero__serif">gerar resultados</em> mensuráveis.
          </p>
        </div>
      </section>

      <section className="process" id="como-trabalhamos">
        <div className="process__inner">
          <div className="process__intro">
            <h2>
              Como <em className="hero__serif">trabalhamos</em>?
            </h2>
            <p>
              Cada projeto segue uma metodologia clara, validada na prática.
            </p>
          </div>

          <div className="process__phases">
            <article className="process__stage">
              <div className="process__stage-head">
                <div className="process__stage-head-row">
                  <span className="process__label">Fase 1</span>
                  <span className="process__badge">Sem custo</span>
                </div>
                <h3>
                  <em className="hero__serif">Diagnóstico e planejamento</em>
                </h3>
              </div>
              <div className="process__stage-split">
                <div className="process__pane process__pane--light">
                  <ProcessNotify />
                </div>
                <div className="process__pane process__pane--dark">
                  <ProcessRead />
                </div>
              </div>
            </article>

            <article className="process__impl">
              <div className="process__stage-head">
                <span className="process__label">Fase 2</span>
                <h3>
                  <em className="hero__serif">Implementação</em>
                </h3>
              </div>
              <ul className="process__impl-grid">
                <li>
                  <div className="process__impl-viz">
                    <ProcessSend />
                  </div>
                  <h4>Envio de materiais</h4>
                </li>
                <li>
                  <div className="process__impl-viz">
                    <ProcessBuild />
                  </div>
                  <h4>Início da execução</h4>
                </li>
                <li>
                  <div className="process__impl-viz">
                    <ProcessApply />
                  </div>
                  <h4>Aplicação das estratégias</h4>
                </li>
                <li>
                  <div className="process__impl-viz">
                    <ProcessLoop />
                  </div>
                  <h4>Monitoramento e ajustes contínuos</h4>
                </li>
              </ul>
            </article>
          </div>

          <p className="process__close">
            Nada aqui é genérico. Cada estratégia é construída com base na
            realidade do seu negócio.
          </p>
        </div>
      </section>

      <section className="why">
        <div className="why__inner">
          <div className="why__intro">
            <h2>
              Por que trabalhar <em className="hero__serif">conosco</em>?
            </h2>
            <p>
              <span className="why__mute">
                Porque aqui você não compra serviço.
              </span>{" "}
              Você constrói estratégia.
            </p>
          </div>
          <ul className="why__grid">
            <li className="why__card">
              <span className="why__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.6 12s3.4-6.25 8.4-6.25S20.4 12 20.4 12s-3.4 6.25-8.4 6.25S3.6 12 3.6 12Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="2.55" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </span>
              <h3>Visão estratégica de mercado</h3>
            </li>
            <li className="why__card">
              <span className="why__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 8.25 11.25 12 7 15.75M13 8.25 17.25 12 13 15.75"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3>Aplicação prática e direcionada</h3>
            </li>
            <li className="why__card">
              <span className="why__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 6.6c1.85-.85 3.8-.85 5.6 0v11.3c-1.8-.85-3.75-.85-5.6 0V6.6Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.4 6.6c1.85-.85 3.8-.85 5.6 0v11.3c-1.8-.85-3.75-.85-5.6 0V6.6Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3>Experiência acadêmica e de mercado</h3>
            </li>
            <li className="why__card">
              <span className="why__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.25 19.25V5.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.25 5.5h10.4l-2.35 3.35 2.35 3.4H6.25"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3>Foco total em resultado</h3>
            </li>
            <li className="why__card">
              <span className="why__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 19V11.25M10.5 19V7M16 19v-5.5M20.5 19H3.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <h3>Acompanhamento real do crescimento</h3>
            </li>
          </ul>
          <p className="why__close">
            Marketing não é custo. É{" "}
            <em className="hero__serif">investimento</em> bem direcionado.
          </p>
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about__inner">
          <div className="about__copy">
            <h2>
              Prof. Kaio <em className="hero__serif">Kazan</em>
            </h2>
            <p className="about__lead">
              Publicitário, Professor e profissional de Marketing.{" "}
              <span className="about__mute">
                Representante da Lab Studio Digital, empresa ganhadora do prêmio
                Profissional do Ano na Rede Globo em 2019. Atua no Centro-Oeste
                Paulista, em Marília e região, aplicando suas experiências como
                docente universitário e empresário de Marketing e seu networking
                estratégico para desenvolver empresas e pessoas e trazer
                maturidade empresarial, trabalhando com vários níveis de
                empresas, de pequeno e grande porte.
              </span>
            </p>
            <ul className="about__pillars">
              <li>
                <span className="about__pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8.5 18.5h7M10 21h4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 13.4A4.4 4.4 0 1 1 16 10.2c0 1.85-1.15 2.85-1.95 4.05-.45.7-.65 1.35-.65 2.15h-2.8c0-.8-.2-1.45-.65-2.15C9.15 13.05 8 12.05 8 10.2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Conhecimento
              </li>
              <li>
                <span className="about__pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.7" />
                    <path
                      d="m12 12 3.35-5.35M12 12 9.6 18.1"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Estratégia
              </li>
              <li>
                <span className="about__pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13.6 4.5 7.4 13.15h4.35L10.4 19.5 16.6 10.85h-4.35L13.6 4.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Execução
              </li>
            </ul>
            <ol className="about__timeline">
              <li>
                <span>Universidade</span>
                Fundou uma agência de marketing para startups em Marília (SP).
                A iniciativa virou referência acadêmica.
              </li>
              <li>
                <span>Formação</span>
                Publicitário e especialista em Gestão, Inovação e Negócios —
                teoria sempre acompanhada da prática.
              </li>
              <li>
                <span>Docência</span>
                Aos 23 anos, um dos mais jovens professores de Marketing no
                ensino superior.
              </li>
              <li>
                <span>Mercado</span>
                Lab Studio Digital e, hoje, fundador do Nexo360.
              </li>
            </ol>
            <div className="about__beliefs">
              <p>
                <strong>Missão.</strong> Capacitar empresas e profissionais por
                meio da estratégia, da inovação e do conhecimento.
              </p>
              <p>
                <strong>Propósito.</strong> Pessoas bem preparadas constroem
                empresas mais fortes; negócios bem estruturados transformam
                comunidades.
              </p>
              <blockquote>
                “Toda grande transformação começa com uma decisão.{" "}
                <em className="hero__serif">Estratégia</em> é o caminho que
                transforma potencial em resultado.”
              </blockquote>
              <p className="about__sign">Prof. Esp. Kaio Henrique Dias</p>
            </div>
          </div>
          <div className="about__photo">
            <Image
              className="about__photo-img"
              src="/images/foto-bio-kazan-v2.webp"
              alt="Prof. Kaio Kazan"
              fill
              sizes="(max-width: 860px) 100vw, 490px"
            />
          </div>
        </div>
      </section>

      <section className="nexo" id="nexo360">
        <div className="nexo__inner">
          <div className="nexo__deck nexo__deck--left" aria-hidden="true">
            <span className="nexo__deck-card">
              <Image
                className="nexo__deck-img"
                src="/images/nexo360/nexo-360-image-v1.webp"
                alt=""
                fill
                sizes="280px"
              />
            </span>
            <span className="nexo__deck-card">
              <Image
                className="nexo__deck-img"
                src="/images/nexo360/nexo-360-image-v2.webp"
                alt=""
                fill
                sizes="280px"
              />
            </span>
          </div>
          <div className="nexo__copy">
            <h2>
              Nexo360 — mais do que um projeto, um{" "}
              <em className="hero__serif">ecossistema</em>.
            </h2>
            <p>
              <span className="nexo__mute">
                O Nexo360 nasce com um propósito claro:
              </span>{" "}
              conectar empresários, profissionais e oportunidades para
              transformar conhecimento em crescimento real.
            </p>
            <p>
              Por meio de consultorias, eventos, mentorias e planejamento
              estratégico, criamos um ambiente onde ideias saem do papel e se
              tornam resultados.
            </p>
          </div>
          <div className="nexo__deck nexo__deck--right" aria-hidden="true">
            <span className="nexo__deck-card">
              <Image
                className="nexo__deck-img"
                src="/images/nexo360/nexo-360-image-v3.webp"
                alt=""
                fill
                sizes="280px"
              />
            </span>
            <span className="nexo__deck-card">
              <Image
                className="nexo__deck-img"
                src="/images/nexo360/nexo-360-image-v4.webp"
                alt=""
                fill
                sizes="280px"
              />
            </span>
          </div>
          <VideoPlaceholder featured />
        </div>
      </section>

      <section className="partners">
        <div className="partners__inner">
          <div className="partners__intro">
            <h2>
              Nossas <em className="hero__serif">parcerias</em>
            </h2>
            <p>
              <span className="partners__mute">
                Construímos resultados ao lado de quem também acredita em
              </span>{" "}
              crescimento e inovação.
            </p>
          </div>
        </div>
        <div className="partners__marquee">
          <div className="partners__track">
            <PartnersLogos labeled />
            <PartnersLogos />
          </div>
        </div>
        <p className="partners__close">
          Essas conexões fortalecem o ecossistema e ampliam o{" "}
          <em className="hero__serif">impacto</em> dos projetos.
        </p>
      </section>

      <section className="cta" id="contato">
        <div className="cta__inner">
          <h2>
            Comece <em className="cta__serif">agora</em>
          </h2>
          <p>
            Se você quer estruturar seu negócio, posicionar sua marca e crescer
            de forma estratégica, entre em contato e agende sua reunião de
            diagnóstico gratuita. Essa é a primeira etapa para transformar seu
            negócio.
          </p>
          <CtaButtons />
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__col">
            <p className="footer__heading">Marca</p>
            <Link className="footer__brand" href="/">
              Kazan
            </Link>
          </div>
          <div className="footer__col">
            <p className="footer__heading">Página</p>
            <nav className="footer__nav" aria-label="Rodapé">
              <a href="#o-que-fazemos">O que fazemos</a>
              <a href="#como-trabalhamos">Como trabalhamos</a>
            </nav>
          </div>
          <div className="footer__col">
            <p className="footer__heading">Projetos</p>
            <nav className="footer__nav" aria-label="Projetos">
              <a href="#sobre">Sobre</a>
              <a href="#nexo360">Nexo360</a>
            </nav>
          </div>
          <div className="footer__col">
            <p className="footer__heading">Contato</p>
            <p className="footer__credit">
              Kaio Henrique Dias — consultoria de marketing estratégica
            </p>
            <p className="footer__copy">© Kazan</p>
          </div>
        </div>
      </footer>
      <FoldIn />
    </>
  );
}
