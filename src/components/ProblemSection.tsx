import { MessageSquareOff, CalendarClock, Ear, Utensils } from "lucide-react";
import { FeatureSection } from "@/components/FeatureSection";
import { FeatureCard } from "@/components/FeatureCard";

const PROBLEMS = [
  {
    icon: MessageSquareOff,
    title: "Comunicação",
    description: "Nem sempre é fácil expressar uma necessidade no momento em que ela surge.",
  },
  {
    icon: CalendarClock,
    title: "Previsibilidade",
    description: "Mudanças na rotina sem aviso podem gerar insegurança e ansiedade.",
  },
  {
    icon: Ear,
    title: "Regulação",
    description: "Ambientes com excesso de estímulos podem ser difíceis de processar.",
  },
  {
    icon: Utensils,
    title: "Alimentação",
    description: "Experimentar alimentos novos pode exigir tempo, contexto e segurança.",
  },
];

function ProblemSection() {
  return (
    <FeatureSection
      eyebrow="O desafio"
      title="O dia a dia pode ser mais simples de entender."
      description="Comunicação, rotina, regulação sensorial e alimentação fazem parte da vida de qualquer pessoa — e podem ser mais desafiadoras quando faltam ferramentas de apoio pensadas para cada necessidade."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((item, i) => (
          <FeatureCard key={item.title} index={i} {...item} />
        ))}
      </div>
    </FeatureSection>
  );
}

export { ProblemSection };
