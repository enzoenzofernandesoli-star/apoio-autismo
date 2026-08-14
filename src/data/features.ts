import {
  MessageCircle,
  CalendarCheck,
  Wind,
  Trophy,
  ScanEye,
  Utensils,
  Users,
  School,
  Stethoscope,
  Hand,
  type LucideIcon,
} from "lucide-react";
import { CommunicationBoard } from "@/components/screens/CommunicationBoard";
import { RoutineTimeline } from "@/components/screens/RoutineTimeline";
import { CalmMode } from "@/components/screens/CalmMode";
import { MissionCard } from "@/components/screens/MissionCard";
import { EnvironmentScan } from "@/components/screens/EnvironmentScan";
import { FoodTracker } from "@/components/screens/FoodTracker";
import { FamilyDashboard } from "@/components/screens/FamilyDashboard";
import { SchoolDashboard } from "@/components/screens/SchoolDashboard";
import { ProfessionalDashboard } from "@/components/screens/ProfessionalDashboard";
import { HelpButtonScreen } from "@/components/screens/HelpButtonScreen";

export type FeatureCategory = {
  id: string;
  icon: LucideIcon;
  tabLabel: string;
  title: string;
  tagline: string;
  description: string;
  resources: string[];
  legalNotice?: string;
  Screen: React.ComponentType;
};

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    id: "comunicacao",
    icon: MessageCircle,
    tabLabel: "Comunicação",
    title: "Comunicação sem barreiras.",
    tagline: "Prancha personalizada por contexto",
    description:
      "Uma prancha de comunicação organizada por contexto — Escola, Casa, Terapia, Alimentação, Passeio — com figuras, frases e áudio.",
    resources: [
      "Figuras organizadas por contexto",
      "Reprodução de frases em áudio ao toque",
      "Combinação de figuras para frases mais completas",
      "Personalização de figuras e frases",
      "Botão de emergência sempre visível",
    ],
    Screen: CommunicationBoard,
  },
  {
    id: "rotina",
    icon: CalendarCheck,
    tabLabel: "Rotina",
    title: "Transforme o dia em algo mais previsível.",
    tagline: "Linha do tempo visual",
    description:
      "Uma linha do tempo visual com horários e atividades, alertas e contagem regressiva para a próxima atividade.",
    resources: [
      "Linha do tempo com horários e atividades",
      "Alertas sonoros e visuais",
      "Marcação de atividades concluídas",
      "Contagem regressiva para a próxima atividade",
      "Aviso claro quando a rotina muda",
    ],
    Screen: RoutineTimeline,
  },
  {
    id: "modo-calma",
    icon: Wind,
    tabLabel: "Modo Calma",
    title: "Um espaço para desacelerar.",
    tagline: "Recursos de regulação sensorial",
    description:
      "Acesso rápido a recursos de regulação: sons calmantes, música, exercícios de respiração e uma interface com menos estímulos.",
    resources: [
      "Sons calmantes e música",
      "Exercícios de respiração guiada",
      "Interface simplificada, com menos estímulos",
      "Acesso rápido a partir de qualquer tela",
    ],
    legalNotice:
      "O aplicativo pode reproduzir sons e conteúdos de regulação. O cancelamento ativo de ruído depende de hardware compatível.",
    Screen: CalmMode,
  },
  {
    id: "missoes",
    icon: Trophy,
    tabLabel: "Missões",
    title: "Transforme atividades em conquistas.",
    tagline: "Missões e reforçadores",
    description:
      "A pessoa cumpre uma missão e desbloqueia um reforçador escolhido com ela — jogo, desenho, música, vídeo, história ou quebra-cabeça.",
    resources: [
      "Missões com atividade, duração e condições definidas",
      "Reforçadores escolhidos em conjunto com a pessoa",
      "Responsável ou profissional define disponibilidade",
      "Acompanhamento das conquistas do dia",
    ],
    Screen: MissionCard,
  },
  {
    id: "ambiente",
    icon: ScanEye,
    tabLabel: "Ambiente",
    title: "Entenda melhor o ambiente.",
    tagline: "Análise informativa do ambiente",
    description:
      "Uma ferramenta informativa que aponta possíveis estímulos do ambiente — ruído, iluminação intensa, ambientes movimentados e rotas de saída.",
    resources: [
      "Identificação de fontes de ruído",
      "Sinalização de iluminação intensa",
      "Indicação de ambientes movimentados",
      "Rotas de saída disponíveis",
    ],
    legalNotice: "Essa ferramenta é informativa e não realiza diagnóstico clínico.",
    Screen: EnvironmentScan,
  },
  {
    id: "alimentacao",
    icon: Utensils,
    tabLabel: "Alimentação",
    title: "Conhecer. Experimentar. Acompanhar.",
    tagline: "Registro alimentar e contexto sobre alimentos",
    description:
      "Registro de experiências alimentares e, para cada alimento, contexto sobre origem e preparo — respeitando o ritmo de cada pessoa.",
    resources: [
      "Registro de status: Aceitei, Experimentei, Não aceitei",
      "Histórico visual ao longo do tempo",
      "Contexto sobre origem e preparo de cada alimento",
      "Etapas guiadas: observar, sentir o cheiro, conhecer, experimentar",
    ],
    legalNotice:
      "As ferramentas de alimentação servem para registro e apoio. Não têm como objetivo substituir orientação nutricional ou terapêutica.",
    Screen: FoodTracker,
  },
  {
    id: "familia",
    icon: Users,
    tabLabel: "Família",
    title: "Tudo o que importa, em um só lugar.",
    tagline: "Painel da família",
    description:
      "Um painel com comunicação, rotina, alimentação e reforçadores utilizados — sempre a partir de registros autorizados.",
    resources: [
      "Solicitações de comunicação registradas",
      "Atividades de rotina concluídas",
      "Alimentos aceitos e experimentados",
      "Reforçadores utilizados e observações",
    ],
    Screen: FamilyDashboard,
  },
  {
    id: "escola",
    icon: School,
    tabLabel: "Escola",
    title: "Mais conexão entre escola e família.",
    tagline: "Painel do professor",
    description:
      "O professor registra atividades realizadas, comunicação utilizada, reforçadores e observações do dia — sempre com autorização da família.",
    resources: [
      "Painel do dia com atividades e reforçador",
      "Registro de comunicação utilizada",
      "Registro de alterações de rotina e desconforto",
      "Somente informações autorizadas pela família",
    ],
    Screen: SchoolDashboard,
  },
  {
    id: "profissionais",
    icon: Stethoscope,
    tabLabel: "Profissionais",
    title: "Informações que podem apoiar o acompanhamento.",
    tagline: "Área de profissionais autorizados",
    description:
      "Psicólogos, terapeutas ocupacionais, fonoaudiólogos, nutricionistas e outros profissionais autorizados acessam histórico e evolução.",
    resources: [
      "Histórico de comunicação, rotina e alimentação",
      "Indicadores de evolução ao longo do tempo",
      "Acesso restrito a profissionais autorizados",
    ],
    legalNotice: "O aplicativo não substitui acompanhamento profissional.",
    Screen: ProfessionalDashboard,
  },
  {
    id: "ajuda",
    icon: Hand,
    tabLabel: "Ajuda",
    title: "Quando falar é difícil, um toque pode ajudar.",
    tagline: "Botão de sobrecarga",
    description:
      "Um botão grande e sempre acessível que revela opções rápidas para pedir silêncio, água, descanso ou a presença do responsável.",
    resources: [
      "Botão \"Estou sobrecarregado\" sempre visível",
      "Opções rápidas: silêncio, sair, água, descanso",
      "Aviso imediato para quem está autorizado",
    ],
    Screen: HelpButtonScreen,
  },
];
