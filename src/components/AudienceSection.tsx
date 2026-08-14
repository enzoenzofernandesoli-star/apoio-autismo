import { PersonStanding, Users, School, Stethoscope } from "lucide-react";
import { FeatureSection } from "@/components/FeatureSection";
import { FeatureCard } from "@/components/FeatureCard";

const AUDIENCE = [
  {
    icon: PersonStanding,
    title: "Para pessoas autistas",
    description: "Mais formas de se comunicar, prever o dia e pedir ajuda no seu próprio ritmo.",
  },
  {
    icon: Users,
    title: "Para famílias",
    description: "Acompanhamento próximo, com registros claros e sempre autorizados.",
  },
  {
    icon: School,
    title: "Para escolas",
    description: "Mais conexão com a família e informações relevantes para o dia a dia escolar.",
  },
  {
    icon: Stethoscope,
    title: "Para profissionais",
    description: "Histórico e evolução para apoiar o acompanhamento — sem substituí-lo.",
  },
];

function AudienceSection() {
  return (
    <FeatureSection
      id="para-quem-e"
      eyebrow="Para quem é"
      title="Um ecossistema para quem faz parte do dia a dia."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {AUDIENCE.map((item, i) => (
          <FeatureCard key={item.title} index={i} {...item} />
        ))}
      </div>
    </FeatureSection>
  );
}

export { AudienceSection };
