import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled || menuOpen
          ? "bg-bg-dark/95 shadow-lg shadow-black/10 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-2.5">
          <span
            className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-blue to-accent-purple text-sm font-black text-text-light"
            aria-hidden="true"
          >
            AA
          </span>
          <span className="font-heading text-base font-bold text-text-light">
            Apoio ao Autismo
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-text-light/80 transition-colors hover:bg-white/10 hover:text-text-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <a href="#funcionalidades">Conhecer o aplicativo</a>
          </Button>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full text-text-light lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-white/10 px-5 pb-6 pt-2 lg:hidden"
          aria-label="Navegação mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-text-light/90 hover:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-4 w-full" onClick={() => setMenuOpen(false)}>
            <a href="#funcionalidades">Conhecer o aplicativo</a>
          </Button>
        </nav>
      )}
    </header>
  );
}

export { Header };
