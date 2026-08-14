import { LEGAL_NOTICES } from "@/lib/constants";

const PRODUCT_LINKS = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Para famílias", href: "#funcionalidades" },
  { label: "Para escolas", href: "#funcionalidades" },
  { label: "Para profissionais", href: "#funcionalidades" },
  { label: "FAQ", href: "#faq" },
];

const LEGAL_LINKS = [
  { label: "Privacidade", href: "#privacidade" },
  { label: "Termos", href: "#privacidade" },
];

function Footer() {
  return (
    <footer className="bg-bg-dark-deep px-5 pb-10 pt-16 text-text-light lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="" className="size-9 rounded-xl bg-white object-contain p-1" />
              <span className="font-heading text-base font-bold">Apoio ao Autismo</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-light/60">
              Uma tecnologia de apoio para comunicação, rotina, autonomia e regulação.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-text-light/40">Produto</p>
            <ul className="mt-4 space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-text-light/70 hover:text-text-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-text-light/40">Legal</p>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-text-light/70 hover:text-text-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3 py-8 text-xs leading-relaxed text-text-light/45">
          <p>{LEGAL_NOTICES.general}</p>
          <p>{LEGAL_NOTICES.environment}</p>
          <p>{LEGAL_NOTICES.calm}</p>
          <p>{LEGAL_NOTICES.feeding}</p>
        </div>

        <p className="text-xs text-text-light/40">
          © {new Date().getFullYear()} Aplicativo de Apoio ao Autismo. Nome provisório — projeto
          em desenvolvimento.
        </p>
      </div>
    </footer>
  );
}

export { Footer };
