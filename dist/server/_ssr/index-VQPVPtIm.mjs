import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { C as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
const heroCouple = "/assets/hero-casal-album-DEzqKqtA.jpg";
const showcase1 = "/assets/showcase-1-B3v39w_e.jpg";
const showcase2 = "/assets/showcase-2-Cb6ZlmMc.jpg";
const showcase3 = "/assets/showcase-3-DIN0XLBe.jpg";
const sentadaComAlbum = "/assets/sentada-com-album-DJSRNH6N.png";
const penelopePhoto = "/assets/penelope-CT8HYgfN.jpg";
const penelopeCopa = "/assets/penelope-copa-B6x9j9CI.png";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const phases = [{
  stage: "FASE DE GRUPOS",
  icon: "👫",
  color: "#b05070",
  bg: "rgba(176,80,112,0.07)",
  title: "Como vocês se conheceram",
  desc: "O começo de tudo. O olhar que mudou a rotina."
}, {
  stage: "OITAVAS DE FINAL",
  icon: "❤️",
  color: "#C9900A",
  bg: "rgba(201,144,10,0.07)",
  title: "O primeiro encontro",
  desc: "A noite que decidiu o resto."
}, {
  stage: "QUARTAS DE FINAL",
  icon: "✈️",
  color: "#b05070",
  bg: "rgba(176,80,112,0.07)",
  title: "A primeira viagem",
  desc: "Quando o mundo virou cenário de vocês."
}, {
  stage: "SEMIFINAL",
  icon: "💍",
  color: "#C9900A",
  bg: "rgba(201,144,10,0.07)",
  title: "Os grandes momentos",
  desc: "Promessas, conquistas, recomeços."
}, {
  stage: "FINAL",
  icon: "🏆",
  color: "#b05070",
  bg: "rgba(176,80,112,0.07)",
  title: "O amor que construíram",
  desc: "Tudo que vocês são hoje, juntos."
}, {
  stage: "CAMPEÕES DO MUNDO",
  icon: "✨",
  color: "#C9900A",
  bg: "rgba(201,144,10,0.07)",
  title: "Os sonhos que ainda viverão",
  desc: "O futuro como troféu mais bonito."
}];
const testimonials = [{
  photo: "https://i.pravatar.cc/80?img=12",
  name: "Rafael M.",
  city: "São Paulo, SP",
  text: "Dei pro aniversário de 3 anos da minha namorada. Quando ela abriu e viu a primeira página com a foto do dia que a gente se conheceu, ela foi ao choro na hora. Continuou chorando até o final. Eu achei que ia ser um presentinho simples... virou o momento mais lindo que a gente viveu juntos."
}, {
  photo: "https://i.pravatar.cc/80?img=47",
  name: "Juliana P.",
  city: "Curitiba, PR",
  text: "Meu marido fez de surpresa no nosso 5º aniversário de casamento. Quando eu abri e vi a foto da nossa primeira viagem virada em figurinha, comecei a chorar na frente da família toda. Minhas cunhadas queriam saber onde ele tinha comprado, não acreditaram no preço. Parecia ter custado muito mais."
}, {
  photo: "https://i.pravatar.cc/80?img=18",
  name: "Lucas A.",
  city: "Belo Horizonte, MG",
  text: "Confesso que fiz sem grandes expectativas. Mas quando chegou... a qualidade, o acabamento, as fotos... parecia um produto de 10x o preço. Minha namorada mostrou pra mãe, pras amigas, postou nos stories. Virou a história do mês. Melhor investimento que fiz esse ano, sem dúvida."
}, {
  photo: "https://i.pravatar.cc/80?img=32",
  name: "Camila R.",
  city: "Rio de Janeiro, RJ",
  text: "7 anos juntos e nunca tínhamos parado pra olhar a nossa história assim, com tudo organizado. O Diego e eu choramos juntos folheando cada página. Cada fase representava um momento real. Foi como assistir um filme da nossa vida. Recomendo de olhos fechados."
}];
const steps = [{
  n: "01",
  color: "#b05070",
  icon: "🛒",
  title: "Escolha e compre",
  desc: "Escolha entre o plano Basic (R$ 19,90) ou Premium (R$ 39,90) e finalize com pagamento seguro."
}, {
  n: "02",
  color: "#C9900A",
  icon: "📄",
  title: "Receba o PDF do álbum",
  desc: "Em instantes, você recebe o arquivo PDF do álbum estilo Copa 2026 pronto — e-mail ou WhatsApp."
}, {
  n: "03",
  color: "#b05070",
  icon: "🖼️",
  title: "Coloque suas fotos",
  desc: "Abra o PDF e encaixe as fotos do casal nos espaços do álbum. Funciona no celular ou no PC."
}, {
  n: "04",
  color: "#C9900A",
  icon: "🖨️",
  title: "Imprima e surpreenda",
  desc: "Leve a uma gráfica, Kalunga, ou imprima em casa. Instruções completas chegam junto com o PDF."
}];
const faqs = [{
  q: "O que exatamente eu recebo?",
  a: "Você recebe um arquivo PDF em alta resolução com o álbum de figurinhas estilo Copa, organizado em fases do relacionamento. No plano Basic são até 20 figurinhas e no Premium até 40. Junto vem o guia completo de como imprimir."
}, {
  q: "Preciso saber mexer em algum programa?",
  a: "Não. Você só precisa adicionar suas fotos nos espaços do PDF. É simples, sem precisar de nenhum programa especial. Funciona no celular ou no computador."
}, {
  q: "Onde posso imprimir?",
  a: "Em qualquer gráfica, papelaria ou loja de impressão (ex: Kalunga, Office Total, gráficas locais). O arquivo já vem no formato correto. Também dá pra imprimir em casa se tiver uma boa impressora colorida."
}, {
  q: "Em quanto tempo recebo o PDF?",
  a: "O Basic é entregue em até 48 horas após o pagamento. O Premium em até 24 horas. Tudo chega direto no seu e-mail ou WhatsApp."
}, {
  q: "Posso usar como presente?",
  a: "Sim, é o uso mais comum! Muita gente imprime, monta e entrega embrulhado. É uma surpresa que ninguém espera. No plano Premium você ainda tem dedicatória personalizada dentro do álbum."
}, {
  q: "Posso pedir revisão?",
  a: "Sim. Se algo não ficou como esperado, fazemos um ajuste sem custo extra. Queremos que fique perfeito para vocês."
}, {
  q: "Como envio as fotos?",
  a: "Após o pagamento, você recebe um link seguro para upload ou pode enviar direto pelo WhatsApp. Instruções claras chegam no seu e-mail."
}];
function Reveal({
  children,
  delay = 0,
  className = "",
  from = "bottom"
}) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, {
      threshold: 0.12
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const translate = from === "left" ? "translateX(-28px)" : from === "right" ? "translateX(28px)" : "translateY(28px)";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className, style: {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : translate,
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`
  }, children });
}
function LandingPage() {
  const [countdown, setCountdown] = reactExports.useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });
  const [videoMuted, setVideoMuted] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const target = (/* @__PURE__ */ new Date("2026-06-11T00:00:00-03:00")).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setCountdown({
        days: Math.floor(diff / 864e5),
        hours: Math.floor(diff % 864e5 / 36e5),
        mins: Math.floor(diff % 36e5 / 6e4),
        secs: Math.floor(diff % 6e4 / 1e3)
      });
    };
    tick();
    const id = setInterval(tick, 1e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed top-0 inset-x-0 z-[60] h-[3px] flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", style: {
        background: "#b05070"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", style: {
        background: "#C9900A"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", style: {
        background: "#b05070"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", style: {
        background: "#C9900A"
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-1.5 inset-x-0 z-50 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full px-6 py-3 sm:px-8", style: {
      borderColor: "rgba(201,144,10,0.2)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", style: {
        color: "#9a8a70"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          color: "#C9900A",
          fontWeight: 600
        }, children: "Pedidos limitados" }),
        " — a Copa começa em:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: [{
        v: countdown.days,
        l: "dias"
      }, {
        v: countdown.hours,
        l: "hrs"
      }, {
        v: countdown.mins,
        l: "min"
      }, {
        v: countdown.secs,
        l: "seg"
      }].map(({
        v,
        l
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          color: "rgba(154,138,112,0.4)",
          fontSize: 13
        }, children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tabular-nums", style: {
            color: "#3d2e1e",
            fontSize: 15,
            letterSpacing: "-0.02em"
          }, children: String(v).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "#c4b49a",
            fontSize: 10,
            marginLeft: 2
          }, children: l })
        ] })
      ] }, l)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#comprar", className: "hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white transition-transform hover:scale-105", style: {
        background: "#b05070"
      }, children: "❤ Criar nosso álbum" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex items-center overflow-hidden", style: {
      background: "#ffffff",
      minHeight: "100vh"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-0 h-full hidden md:block", style: {
        width: "56%"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroCouple, alt: "Casal com álbum personalizado", className: "h-full w-full object-cover object-center", style: {
          opacity: 0.15
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: "linear-gradient(to right, #ffffff 0%, #ffffff 4%, rgba(255,255,255,0.82) 22%, rgba(255,255,255,0.3) 50%, transparent 75%)"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute hidden md:flex items-center justify-center", style: {
        right: 0,
        top: 0,
        width: "48%",
        height: "100%"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: penelopeCopa, alt: "Penélope com o álbum da Copa", style: {
        width: 380,
        borderRadius: 24,
        transform: "rotate(2deg)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.08)",
        objectFit: "cover"
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute pointer-events-none hidden md:block", style: {
        left: "41%",
        top: "18%",
        width: 220,
        height: 200,
        opacity: 0.5
      }, viewBox: "0 0 220 200", fill: "none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 188 C 55 130, 120 75, 205 18", stroke: "#C9900A", strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M28 196 C 75 140, 140 85, 215 32", stroke: "#C9900A", strokeWidth: "1", strokeLinecap: "round", opacity: "0.45" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute pointer-events-none hidden md:block", style: {
        left: "38%",
        bottom: "15%",
        width: 160,
        height: 120,
        opacity: 0.35
      }, viewBox: "0 0 160 120", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 100 C 40 70, 90 40, 155 10", stroke: "#C9900A", strokeWidth: "1.2", strokeLinecap: "round" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute pointer-events-none hidden md:block", style: {
        left: "43%",
        top: "28%",
        width: 68,
        height: 76,
        opacity: 0.28
      }, viewBox: "0 0 68 76", fill: "none", stroke: "#C9900A", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "16", y: "3", width: "36", height: "3", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 6v20c0 11 8 19 18 21v4h-7v4h18v-4h-7v-4c10-2 18-10 18-21V6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 9h13v11c-4 0-10-4-13-9V9z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M65 9H52v11c4 0 10-4 13-9V9z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "72", x2: "50", y2: "72" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "76", x2: "56", y2: "76" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute pointer-events-none hidden md:block", style: {
        left: "50%",
        top: "21%",
        fontSize: 20,
        color: "#C9900A",
        opacity: 0.5,
        lineHeight: 1
      }, children: "♡" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute pointer-events-none hidden md:block", style: {
        left: "46.5%",
        top: "30%",
        fontSize: 15,
        color: "#b05070",
        opacity: 0.7,
        lineHeight: 1
      }, children: "♥" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute pointer-events-none hidden md:block", style: {
        left: "52%",
        top: "37%",
        fontSize: 9,
        color: "#C9900A",
        opacity: 0.45
      }, children: "✦" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute pointer-events-none hidden md:block", style: {
        left: "44.5%",
        top: "16%",
        fontSize: 7,
        color: "#C9900A",
        opacity: 0.38
      }, children: "✦" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-6xl w-full px-6", style: {
        paddingTop: "7rem",
        paddingBottom: "4rem"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        maxWidth: 510
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 mb-7", style: {
          border: "1px solid rgba(201,144,10,0.4)",
          background: "rgba(255,255,255,0.75)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "#C9900A",
            fontSize: 9
          }, children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "#7a6040",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase"
          }, children: "Edição Limitada · 2026" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold", style: {
          fontSize: "clamp(2.1rem, 4.2vw, 3.6rem)",
          lineHeight: 1.06,
          color: "#1a1410"
        }, children: [
          "Em 2026, o mundo",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "vai viver uma Copa.",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block mt-2 italic font-normal", style: {
            color: "#C9900A",
            fontSize: "clamp(1.8rem, 3.8vw, 3.1rem)"
          }, children: [
            "Vocês vão reviver",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "uma história."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 leading-relaxed", style: {
          fontSize: 15,
          color: "#6b5a48",
          maxWidth: 420
        }, children: "Transformamos as fotos mais especiais do seu relacionamento em um álbum de figurinhas personalizado, que conta a trajetória de vocês como uma verdadeira Copa do Mundo." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#comprar", className: "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-[1.02]", style: {
            background: "linear-gradient(135deg, #C9900A 0%, #C89A08 100%)",
            color: "#1a0e00",
            boxShadow: "0 8px 24px rgba(201,144,10,0.25)"
          }, children: "🏆 QUERO CRIAR NOSSO ÁLBUM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#como-funciona", className: "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]", style: {
            border: "1.5px solid #b05070",
            color: "#b05070",
            background: "rgba(255,255,255,0.7)"
          }, children: "Ver como funciona →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-9 flex flex-wrap gap-5", children: [{
          icon: "🛡️",
          title: "Acesso imediato",
          sub: "Entrega digital"
        }, {
          icon: "🔒",
          title: "100% Seguro",
          sub: "Seus dados protegidos"
        }, {
          icon: "🎖️",
          title: "Satisfação",
          sub: "Garantia de 7 dias"
        }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontSize: 18,
            opacity: 0.75
          }, children: b.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#5a4a38",
              margin: 0
            }, children: b.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontSize: 11,
              color: "#9a8070",
              margin: 0
            }, children: b.sub })
          ] })
        ] }, b.title)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32", style: {
      background: "#fdf4f6"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-4 py-1.5 text-xs font-semibold", style: {
        background: "rgba(176,80,112,0.1)",
        color: "#b05070"
      }, children: "Você se identifica?" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-5xl font-bold leading-tight text-center mb-5", style: {
        color: "#1a1410"
      }, children: [
        "As memórias mais lindas estão",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: {
          color: "#b05070"
        }, children: "esquecidas na sua galeria" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 140, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-base leading-relaxed mb-12", style: {
        color: "#7a6870",
        maxWidth: 480,
        margin: "0 auto 3rem"
      }, children: "Você viveu momentos incríveis juntos. Mas eles ficam perdidos entre milhares de fotos que ninguém mais vê. Isso te frustra." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: [{
        icon: "📱",
        title: "Memórias dormindo no celular",
        desc: "O primeiro encontro, a primeira viagem, os momentos mais lindos — guardados numa pasta que ninguém abre."
      }, {
        icon: "🎁",
        title: "Presente sem alma",
        desc: "Você quer surpreender, mas tudo parece igual. Nada parece especial o suficiente para a história de vocês."
      }, {
        icon: "⏳",
        title: "O tempo apagando tudo",
        desc: "Cada dia que passa, os detalhes somem. A data, o lugar, a sensação daquele momento — se perdem."
      }, {
        icon: "💔",
        title: "Nada realmente único",
        desc: "Você procura em todo lugar e não encontra nada que conte a história de vocês do jeito que ela merece."
      }].map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-hover rounded-2xl p-6 bg-white h-full", style: {
        boxShadow: "0 2px 16px rgba(176,80,112,0.07)",
        border: "1px solid rgba(176,80,112,0.08)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg", style: {
          background: "rgba(176,80,112,0.08)"
        }, children: card.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold mb-2", style: {
          color: "#1a1410",
          fontSize: 15
        }, children: card.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", style: {
          color: "#7a6870"
        }, children: card.desc })
      ] }) }, card.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl px-7 py-6", style: {
        background: "rgba(176,80,112,0.07)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-base sm:text-lg leading-relaxed text-center", style: {
          color: "#7a6870"
        }, children: '"Eu queria muito dar um presente que fizesse ela chorar de emoção. Mas nunca encontrava algo que fosse realmente especial..."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs mt-3 font-semibold", style: {
          color: "#b05070"
        }, children: "— Provavelmente você, antes de conhecer A Copa da Nossa História" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32", style: {
      background: "linear-gradient(160deg, #fdf0f3 0%, #fef8fa 100%)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] font-bold mb-4", style: {
          color: "#C9900A"
        }, children: "A virada" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-5xl font-bold leading-tight", style: {
          color: "#1a1410"
        }, children: [
          "E se cada memória ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "virasse uma ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: {
            color: "#C9900A"
          }, children: "figurinha" }),
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-5 text-lg leading-relaxed", style: {
          color: "#4a4a4a"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Imagine abrir um álbum e encontrar toda a trajetória do relacionamento transformada em uma coleção única." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#b05070",
              fontWeight: 600
            }, children: "Cada página" }),
            " representa uma fase."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#b05070",
              fontWeight: 600
            }, children: "Cada figurinha" }),
            " guarda uma lembrança."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#b05070",
              fontWeight: 600
            }, children: "Cada detalhe" }),
            " conta uma parte da história."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-xl", style: {
            color: "#b05070"
          }, children: "E cada página faz vocês reviverem momentos que pareciam esquecidos." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-3xl opacity-20 blur-2xl", style: {
          background: "#e8a0b0"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: {
          aspectRatio: "16 / 9",
          borderRadius: 16,
          overflow: "hidden",
          border: "3px solid rgba(176,80,112,0.25)",
          boxShadow: "0 20px 60px rgba(176,80,112,0.15)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: `https://www.youtube.com/embed/1QoWYZfGq1s?autoplay=1&mute=${videoMuted ? 1 : 0}&rel=0&modestbranding=1&playsinline=1`, title: "A Copa da Nossa História", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, style: {
            width: "100%",
            height: "100%",
            border: "none",
            display: "block"
          } }, videoMuted ? "muted" : "unmuted"),
          videoMuted && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setVideoMuted(false), style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.35)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            backdropFilter: "blur(1px)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              fontSize: 48
            }, children: "🔊" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "white",
              fontWeight: 700,
              fontSize: 15,
              textShadow: "0 1px 4px rgba(0,0,0,0.6)",
              letterSpacing: "0.02em"
            }, children: "Toque para ativar o som" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", style: {
          position: "relative",
          zIndex: 10
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          const el = document.getElementById("comprar");
          if (!el) return;
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({
            top,
            behavior: "smooth"
          });
        }, className: "inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-transform hover:scale-[1.03]", style: {
          background: "linear-gradient(135deg, #b05070 0%, #c0607a 100%)",
          color: "white",
          boxShadow: "0 8px 24px rgba(176,80,112,0.35)",
          border: "none",
          cursor: "pointer"
        }, children: "❤️ Quero meu álbum" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32", style: {
      background: "#ffffff"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-4 py-1.5 text-xs font-semibold", style: {
        background: "rgba(176,80,112,0.1)",
        color: "#b05070"
      }, children: "A jornada de vocês" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-5xl font-bold leading-tight text-center mb-4", style: {
        color: "#1a1410"
      }, children: [
        "A Copa ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: {
          color: "#b05070"
        }, children: "de vocês" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-base leading-relaxed mb-14", style: {
        color: "#7a6870",
        maxWidth: 460,
        margin: "0 auto 3.5rem"
      }, children: "Cada fase do relacionamento ganha o lugar que merece — contada como uma verdadeira Copa do Mundo." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: phases.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 70, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl p-5 card-hover", style: {
        background: p.bg,
        border: `1px solid ${p.color}22`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm", style: {
          background: p.color,
          color: "#fff"
        }, children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] font-bold mb-0.5", style: {
            color: p.color
          }, children: p.stage }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base mb-1", style: {
            color: "#1a1410"
          }, children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed", style: {
            color: "#7a6870"
          }, children: p.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-2xl ml-auto", children: p.icon })
      ] }) }, p.stage)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 sm:py-32 overflow-hidden", style: {
      background: "linear-gradient(160deg, #fdf0f3 0%, #fff8fa 50%, #fdf0f3 100%)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black leading-none", style: {
        fontSize: "clamp(10rem, 35vw, 28rem)",
        color: "rgba(176,80,112,0.05)",
        letterSpacing: "-0.05em"
      }, children: "2026" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-4 py-1.5 text-xs font-semibold", style: {
          background: "rgba(201,144,10,0.1)",
          color: "#C9900A"
        }, children: "Por que é diferente" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold leading-tight", style: {
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            color: "#1a1410"
          }, children: [
            "Em 2026, o mundo terá um campeão.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-2 italic", style: {
              color: "#b05070"
            }, children: "Vocês terão algo maior." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base leading-relaxed", style: {
            color: "#7a6870",
            maxWidth: 440,
            margin: "1.25rem auto 0"
          }, children: "Os gols passam. Os campeões mudam. A história de vocês — essa fica para sempre." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-6 bg-white", style: {
            border: "1px solid rgba(176,80,112,0.1)",
            boxShadow: "0 2px 20px rgba(176,80,112,0.05)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold mb-5", style: {
              color: "#c4a0ac"
            }, children: "O que o mundo vai ter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: [["🏆", "Um campeão — que muda a cada 4 anos"], ["📺", "Uma festa que dura 4 semanas"], ["📰", "Uma manchete que vira história antiga"], ["⏳", "Uma memória que o tempo apaga"]].map(([icon, text]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm", style: {
              color: "#9a8a9a"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text })
            ] }, text)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-6", style: {
            background: "rgba(176,80,112,0.07)",
            border: "1px solid rgba(176,80,112,0.18)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold mb-5", style: {
              color: "#b05070"
            }, children: "O que vocês vão ter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: [["❤️", "Uma história que nunca muda"], ["📖", "Um álbum que dura a vida toda"], ["😭", "Uma emoção que não tem preço"], ["✨", "Uma lembrança guardada para sempre"]].map(([icon, text]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm font-medium", style: {
              color: "#1a1410"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text })
            ] }, text)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-12 font-display italic text-xl sm:text-2xl text-center leading-relaxed", style: {
          color: "#b05070"
        }, children: '"A Copa da Nossa História."' })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32", style: {
      background: "#ffffff"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-4 py-1.5 text-xs font-semibold", style: {
        background: "rgba(201,144,10,0.1)",
        color: "#C9900A"
      }, children: "O que você recebe" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-5xl font-bold leading-tight text-center mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          color: "#C9900A"
        }, children: "Um álbum completo" }),
        " ",
        "pronto para emocionar"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-base leading-relaxed mb-12", style: {
        color: "#7a6870",
        maxWidth: 480,
        margin: "0 auto 3rem"
      }, children: "Tudo pensado para que você entregue um presente único, cheio de significado e impossível de esquecer." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden mb-12", style: {
        background: "#1a1410"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-0", children: [{
        src: showcase1,
        label: "Casal montando juntos"
      }, {
        src: showcase2,
        label: "O álbum por dentro"
      }, {
        src: showcase3,
        label: "A reação que vai causar"
      }].map((img) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden group", style: {
        height: 260
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.label, className: "w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: "linear-gradient(to top, rgba(26,20,16,0.7) 0%, transparent 50%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "absolute bottom-4 left-4 text-white text-xs font-semibold", children: img.label })
      ] }, img.label)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: [{
        title: "PDF em Alta Resolução",
        tag: "300 DPI",
        desc: "Arte profissional pronta para impressão em gráficas ou em casa, sem perder qualidade."
      }, {
        title: "Figurinhas Personalizadas",
        tag: "até 40 figurinhas",
        desc: "Suas fotos transformadas em figurinhas únicas, organizadas por fases do relacionamento."
      }, {
        title: "6 Fases do Relacionamento",
        tag: "6 capítulos",
        desc: "Do primeiro encontro aos sonhos futuros — cada fase ganha o lugar que merece."
      }, {
        title: "Dedicatória Personalizada",
        tag: "Premium",
        desc: "Uma mensagem especial escrita dentro do álbum, exclusiva para vocês dois."
      }, {
        title: "Guia de Impressão",
        tag: "passo a passo",
        desc: "Instruções completas para imprimir em qualquer gráfica, Kalunga ou em casa."
      }, {
        title: "Entrega Digital",
        tag: "até 24h",
        desc: "Receba pelo e-mail ou WhatsApp. Sem esperar frete, sem sair de casa."
      }].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-hover rounded-2xl p-5 bg-white h-full", style: {
        border: "1px solid rgba(176,80,112,0.1)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.05)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0", style: {
          background: "rgba(176,80,112,0.1)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "10", height: "8", viewBox: "0 0 10 8", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M1 4l2.5 2.5L9 1", stroke: "#b05070", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", style: {
              color: "#1a1410"
            }, children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold px-2 py-0.5 rounded-full", style: {
              background: "rgba(201,144,10,0.1)",
              color: "#C9900A"
            }, children: f.tag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed", style: {
            color: "#7a6870"
          }, children: f.desc })
        ] })
      ] }) }) }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32", style: {
      background: "linear-gradient(160deg, #fdf0f3 0%, #fef8fa 100%)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] font-bold mb-4", style: {
          color: "#C9900A"
        }, children: "Quem viveu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-5xl font-bold", style: {
          color: "#1a1410"
        }, children: [
          "Histórias que ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: {
            color: "#b05070"
          }, children: "emocionaram" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base", style: {
          color: "#7a6870"
        }, children: "Pessoas reais. Reações reais. Por R$ 19,90." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "bg-white rounded-2xl p-7 card-hover h-full", style: {
        boxShadow: "0 8px 40px rgba(0,0,0,0.10)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.photo, alt: t.name, width: 56, height: 56, className: "rounded-full object-cover shrink-0", style: {
            border: "3px solid #C9900A",
            width: 56,
            height: 56
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground text-sm", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.city }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-sm", style: {
              color: "#C9900A"
            }, children: "★★★★★" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto text-xs font-semibold px-2 py-1 rounded-full", style: {
            background: "rgba(176,80,112,0.07)",
            color: "#b05070"
          }, children: "Compra verificada" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-foreground/90 leading-relaxed text-sm sm:text-base", style: {
          borderLeft: "4px solid rgba(201,144,10,0.4)",
          paddingLeft: "1rem"
        }, children: [
          "“",
          t.text,
          "”"
        ] })
      ] }) }, t.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 flex flex-col md:flex-row items-center gap-16 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-3xl opacity-20 blur-2xl", style: {
            background: "#e8a0b0"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sentadaComAlbum, alt: "Penélope com o álbum da Copa", className: "relative rounded-2xl", style: {
            width: 280,
            boxShadow: "0 24px 64px rgba(176,80,112,0.2)",
            border: "3px solid rgba(176,80,112,0.15)"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-sm text-center md:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest font-bold mb-3", style: {
            color: "#C9900A"
          }, children: "Reação real" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl sm:text-3xl font-bold leading-snug", style: {
            color: "#1a1410"
          }, children: [
            "Isso é o que acontece quando o presente ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: {
              color: "#b05070"
            }, children: "é perfeito" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed", style: {
            color: "#7a6870"
          }, children: "Todo dia recebemos prints como esse. Casais mandando fotos do momento exato em que o presente foi aberto. A reação de surpresa, o choro, o abraço." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-semibold", style: {
            color: "#b05070"
          }, children: "Por R$ 19,90. Menos que um lanche." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "como-funciona", className: "py-24 sm:py-32 section-azul-light", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] font-bold mb-4", style: {
          color: "#b05070"
        }, children: "Simples assim" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-5xl font-bold", style: {
          color: "#1a1410"
        }, children: "Como funciona e o que você recebe" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest font-bold mb-6", style: {
            color: "#b05070"
          }, children: "Passo a passo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-4", children: steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "bg-white rounded-2xl p-5 flex gap-5 items-start", style: {
            borderLeft: `5px solid ${s.color}`,
            boxShadow: "0 2px 12px rgba(176,80,112,0.07)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl shrink-0", children: s.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold", style: {
                  color: s.color
                }, children: s.n }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: s.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
            ] })
          ] }, s.n)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest font-bold mb-6", style: {
            color: "#b05070"
          }, children: "O que você recebe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-8", style: {
            boxShadow: "0 4px 24px rgba(176,80,112,0.10)",
            border: "2px solid rgba(0,156,59,0.15)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6 pb-4", style: {
              borderBottom: "1px solid rgba(0,0,0,0.08)"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "📄" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: "PDF do Álbum Personalizado" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Arquivo digital · Alta resolução · Pronto para imprimir" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: [{
              icon: "🏆",
              t: "Arte completa do álbum de figurinhas da Copa",
              c: "#b05070"
            }, {
              icon: "📸",
              t: "Suas fotos transformadas em figurinhas personalizadas",
              c: "#b05070"
            }, {
              icon: "🎨",
              t: "Design profissional fase por fase",
              c: "#b05070"
            }, {
              icon: "📋",
              t: "Instruções detalhadas de impressão",
              c: "#C9900A"
            }, {
              icon: "🖨️",
              t: "Funciona em gráficas, Kalunga e impressora caseira",
              c: "#b05070"
            }, {
              icon: "⚡",
              t: "Entrega digital — sem esperar frete",
              c: "#b05070"
            }].map(({
              icon,
              t,
              c
            }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-foreground/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base shrink-0", children: icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
            ] }, t)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 flex items-center gap-2 text-xs text-muted-foreground", style: {
              borderTop: "1px solid rgba(0,0,0,0.08)"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⏱" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Entrega em até 48h após o envio das fotos" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl p-4 flex items-center gap-4", style: {
            background: "rgba(201,144,10,0.08)",
            border: "1px solid rgba(201,144,10,0.4)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: "⏳" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: "Atendimento com capacidade limitada" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Cada álbum é feito com atenção e cuidado — pedidos são atendidos por ordem de chegada" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32", style: {
      background: "#ffffff"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-4 py-1.5 text-xs font-semibold", style: {
        background: "rgba(176,80,112,0.1)",
        color: "#b05070"
      }, children: "Veja como funciona" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-center mb-10", style: {
        color: "#1a1410"
      }, children: [
        "Um presente que",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: {
          color: "#b05070"
        }, children: "emociona de verdade" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 140, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "100%",
        maxWidth: 360,
        aspectRatio: "9 / 16",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 24px 64px rgba(176,80,112,0.18), 0 4px 16px rgba(0,0,0,0.1)",
        border: "2px solid rgba(176,80,112,0.15)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://www.youtube.com/embed/vSBiSmS6A7k?autoplay=0&rel=0&modestbranding=1", title: "A Copa da Nossa História", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, style: {
        width: "100%",
        height: "100%",
        border: "none",
        display: "block"
      } }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "comprar", className: "py-24 sm:py-32", style: {
      background: "#fdf4f6"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-4 py-1.5 text-xs font-semibold", style: {
        background: "rgba(176,80,112,0.1)",
        color: "#b05070"
      }, children: "Oferta Especial" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-center mb-12", style: {
        color: "#1a1410"
      }, children: [
        "Escolha o plano ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: {
          color: "#b05070"
        }, children: "ideal para vocês" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { from: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-7 bg-white card-hover", style: {
          border: "1px solid rgba(176,80,112,0.12)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.05)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#C9900A",
              fontSize: 13
            }, children: "☆" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", style: {
              color: "#9a8a70"
            }, children: "Essencial" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-5", style: {
            color: "#1a1410"
          }, children: "Álbum Basic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 mb-7", children: [
            ["PDF do álbum completo", "Até 20 figurinhas personalizadas", "5 fases da Copa + capa", "Instruções de impressão", "Entrega digital em até 48h"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm", style: {
              color: "#4a3a38"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "shrink-0 mt-0.5", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 7l3 3 6-6", stroke: "#b05070", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
              item
            ] }, item)),
            ["Dedicatória personalizada", "Guia de encadernação", "Suporte via WhatsApp"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm opacity-35", style: {
              color: "#4a3a38"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "shrink-0 mt-0.5", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 3l8 8M11 3l-8 8", stroke: "#9a8a70", strokeWidth: "1.5", strokeLinecap: "round" }) }),
              item
            ] }, item))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mb-1", style: {
            color: "#9a8a70"
          }, children: "Por apenas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1 mb-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold", style: {
              color: "#1a1410"
            }, children: "R$" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold", style: {
              color: "#1a1410",
              fontSize: 40,
              lineHeight: 1
            }, children: "19" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold", style: {
              color: "#1a1410"
            }, children: ",90" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mb-6", style: {
            color: "#9a8a70"
          }, children: "Pagamento único" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://pay.kirvano.com/ed40e7de-0767-4152-bf5f-120f9e9dc729", target: "_blank", rel: "noopener noreferrer", className: "block text-center rounded-full py-3 text-sm font-semibold transition-transform hover:scale-[1.02]", style: {
            border: "1.5px solid #b05070",
            color: "#b05070"
          }, children: "Quero o Álbum Basic" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { from: "right", delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-7 relative card-hover", style: {
          background: "rgba(176,80,112,0.06)",
          border: "1.5px solid rgba(176,80,112,0.25)",
          boxShadow: "0 8px 40px rgba(176,80,112,0.12)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold", style: {
            background: "#b05070",
            color: "white"
          }, children: "Mais Popular" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#C9900A",
              fontSize: 13
            }, children: "♛" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", style: {
              color: "#b05070"
            }, children: "Completo" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-5", style: {
            color: "#1a1410"
          }, children: "Álbum Premium" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 mb-5", children: ["PDF do álbum em alta resolução (300dpi)", "Até 40 figurinhas personalizadas", "6 fases + capa exclusiva + contracapa", "Dedicatória personalizada dentro do álbum", "Guia completo de impressão + encadernação", "Arte editável (ajustes no texto)", "Suporte prioritário via WhatsApp", "Entrega digital em até 24h"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm", style: {
            color: "#4a3a38"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "shrink-0 mt-0.5", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 7l3 3 6-6", stroke: "#b05070", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
            item
          ] }, item)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl px-4 py-2.5 mb-5 text-xs font-medium", style: {
            background: "rgba(176,80,112,0.08)",
            color: "#b05070"
          }, children: "🎁 Inclui dedicatória + guia de encadernação exclusivos!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mb-1", style: {
            color: "#9a8a70"
          }, children: [
            "De ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("s", { children: "R$ 59,90" }),
            " por apenas"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1 mb-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold", style: {
              color: "#1a1410"
            }, children: "R$" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold", style: {
              color: "#1a1410",
              fontSize: 40,
              lineHeight: 1
            }, children: "39" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold", style: {
              color: "#1a1410"
            }, children: ",90" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mb-6", style: {
            color: "#9a8a70"
          }, children: "Pagamento único · Melhor custo-benefício" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://pay.kirvano.com/2d7ac7a8-860e-41d3-9f39-0e6ab11d8552", target: "_blank", rel: "noopener noreferrer", className: "block text-center rounded-full py-3 text-sm font-bold transition-transform hover:scale-[1.02]", style: {
            background: "#b05070",
            color: "white"
          }, children: "Quero o Álbum Premium" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex items-center justify-center gap-8", children: [{
        i: "🔒",
        t: "Compra segura"
      }, {
        i: "⚡",
        t: "Acesso imediato"
      }, {
        i: "🔄",
        t: "Revisão gratuita"
      }].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm opacity-60", children: g.i }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: {
          color: "#9a8a70"
        }, children: g.t })
      ] }, g.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32", style: {
      background: "#f8f3ee"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[380px_1fr] gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-3xl opacity-25 blur-2xl", style: {
          background: "#e8b4c4"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: penelopePhoto, alt: "Penélope", loading: "lazy", className: "relative w-full rounded-2xl object-cover", style: {
          border: "2px solid rgba(176,80,112,0.15)",
          boxShadow: "0 20px 60px rgba(176,80,112,0.15)"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] font-bold mb-4", style: {
          color: "#C9900A"
        }, children: "Quem está por trás" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl sm:text-3xl font-bold leading-snug mb-6", style: {
          color: "#1a1410"
        }, children: [
          "Prazer, eu sou Penélope. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "#C9900A"
          }, children: "✨" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm leading-relaxed", style: {
          color: "#6b5a48"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tenho 24 anos e sou apaixonada por tudo o que desperta criatividade, beleza e significado. Amo fotografia, design, moda e a capacidade que uma imagem tem de eternizar momentos e contar histórias." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Foi dessa paixão que nasceu o Álbum ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#b05070",
              fontWeight: 600
            }, children: '"A Copa da Nossa História"' }),
            " — uma ideia muito pessoal. Eu queria presentear meu namorado com algo que contasse a nossa trajetória de um jeito divertido e inesquecível. Inspirada nos álbuns da Copa, transformei nossa história em uma coleção única, cheia de memórias e significado."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "O resultado foi tão especial que decidi compartilhar com outros casais, transformando uma ideia feita com amor em um presente capaz de emocionar para sempre." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display italic pt-1", style: {
            color: "#9a7080"
          }, children: [
            "As melhores histórias não são apenas vividas.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-0.5 not-italic font-semibold", style: {
              color: "#b05070"
            }, children: "Elas merecem ser lembradas para sempre. ❤️✨" })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-gold mb-4", children: "Perguntas frequentes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-5xl font-bold", children: "Tudo o que você precisa saber" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "glass rounded-2xl px-6 border-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-display text-lg hover:no-underline py-5", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed pb-5", children: f.a })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative pt-20 pb-12", style: {
      borderTop: "1px solid rgba(0,156,59,0.2)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl sm:text-2xl italic leading-relaxed text-foreground/90", children: [
        "Algumas histórias são especiais demais para ficarem esquecidas na galeria.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-2 not-italic font-semibold", style: {
          color: "#b05070"
        }, children: "Elas merecem virar uma Copa do Mundo." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 text-3xl flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🏆" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          color: "#b05070"
        }, children: "❤" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🏆" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 font-display text-lg", children: [
        "A Copa da Nossa História",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          color: "#b05070",
          fontWeight: 700
        }, children: "2026" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "Transformando memórias em conquistas eternas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-brasil mt-12 mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " A Copa da Nossa História — Todos os direitos reservados"
      ] })
    ] }) })
  ] });
}
export {
  LandingPage as component
};
