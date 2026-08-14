import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PhoneMockup } from "@/components/PhoneMockup";
import { FEATURE_CATEGORIES } from "@/data/features";

function FeaturesTabs() {
  return (
    <section id="funcionalidades" className="bg-bg-light px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Eyebrow tone="dark">Funcionalidades</Eyebrow>
          <h2 className="mt-4 text-3xl font-black leading-tight text-text-dark sm:text-4xl">
            Ferramentas para cada momento do dia.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Dez frentes de apoio que se conectam — explore cada uma para ver como funciona.
          </p>
        </div>

        <Tabs defaultValue={FEATURE_CATEGORIES[0].id} className="mt-12">
          <TabsList className="justify-start overflow-x-auto">
            {FEATURE_CATEGORIES.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id}>
                <cat.icon className="size-4" aria-hidden="true" />
                {cat.tabLabel}
              </TabsTrigger>
            ))}
          </TabsList>

          {FEATURE_CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-blue">
                      {cat.tagline}
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-text-dark sm:text-3xl">
                      {cat.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-text-muted">
                      {cat.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {cat.resources.map((r) => (
                        <li key={r} className="flex items-start gap-3">
                          <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary-blue" aria-hidden="true" />
                          <span className="text-sm text-text-dark">{r}</span>
                        </li>
                      ))}
                    </ul>

                    {cat.legalNotice && (
                      <p className="mt-6 rounded-xl border border-border bg-white px-4 py-3 text-xs leading-relaxed text-text-muted">
                        {cat.legalNotice}
                      </p>
                    )}
                  </div>

                  <div className="mx-auto">
                    <PhoneMockup>
                      <cat.Screen />
                    </PhoneMockup>
                  </div>
                </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export { FeaturesTabs };
