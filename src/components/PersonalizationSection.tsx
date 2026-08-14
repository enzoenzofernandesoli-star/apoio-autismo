import { UserCog, MessageCircle, CalendarCheck, Trophy, Utensils, Volume2, SlidersHorizontal, ShieldCheck } from "lucide-react";
import { FeatureSection } from "@/components/FeatureSection";
import { FeatureCard } from "@/components/FeatureCard";

const SETTINGS = [
  { icon: UserCog, title: "Perfil", description: "Informações e preferências de cada pessoa." },
  { icon: MessageCircle, title: "Comunicação", description: "Figuras, frases e contextos da prancha." },
  { icon: CalendarCheck, title: "Rotina", description: "Horários, atividades e alertas de mudança." },
  { icon: Trophy, title: "Reforçadores", description: "O que motiva e engaja cada pessoa." },
  { icon: Utensils, title: "Alimentação", description: "Alimentos, etapas e ritmo de experimentação." },
  { icon: Volume2, title: "Sons", description: "Volume, tipos de som e cancelamento por hardware." },
  { icon: SlidersHorizontal, title: "Preferências", description: "Interface, estímulos visuais e sensoriais." },
  { icon: ShieldCheck, title: "Pessoas autorizadas", description: "Quem pode acompanhar e registrar informações." },
];

function PersonalizationSection() {
  return (
    <FeatureSection
      eyebrow="Personalização"
      title="Cada pessoa é única. O aplicativo também."
      description="Você escolhe o que faz sentido para cada pessoa."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SETTINGS.map((item, i) => (
          <FeatureCard key={item.title} index={i} {...item} />
        ))}
      </div>
    </FeatureSection>
  );
}

export { PersonalizationSection };
