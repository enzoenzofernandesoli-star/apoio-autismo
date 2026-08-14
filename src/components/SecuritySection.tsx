import { Lock, UserCheck, ShieldCheck, Share2 } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { Eyebrow } from "@/components/Eyebrow";

const BLOCKS = [
  {
    icon: Lock,
    title: "Controle de acesso",
    description: "Cada informação só é visível para quem foi explicitamente autorizado.",
  },
  {
    icon: UserCheck,
    title: "O responsável define permissões",
    description: "Família decide quem acompanha escola, terapia e demais registros.",
  },
  {
    icon: ShieldCheck,
    title: "Informações protegidas",
    description: "Dados tratados com cuidado, como objetivo de produto em desenvolvimento.",
  },
  {
    icon: Share2,
    title: "Compartilhamento autorizado",
    description: "Nenhuma informação é compartilhada sem consentimento explícito.",
  },
];

function SecuritySection() {
  return (
    <section id="privacidade" className="bg-bg-dark px-5 py-20 text-text-light lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Segurança e privacidade</Eyebrow>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Os dados pertencem às pessoas.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BLOCKS.map((item, i) => (
            <FeatureCard key={item.title} index={i} tone="dark" {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { SecuritySection };
