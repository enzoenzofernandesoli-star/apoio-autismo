import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CircleCheck } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Label, Select } from "@/components/ui/input";

const interestSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo."),
  email: z.string().trim().email("Informe um e-mail válido."),
  profile: z.enum(["responsavel", "professor", "profissional", "escola", "outro"], {
    message: "Selecione um perfil.",
  }),
  message: z.string().trim().max(500, "Mensagem muito longa.").optional(),
});

type InterestFormData = z.infer<typeof interestSchema>;

// TODO: substituir por chamada real ao backend (ex.: POST /api/interesse)
// quando o serviço de cadastro estiver disponível.
async function submitInterest(_data: InterestFormData) {
  await new Promise((resolve) => setTimeout(resolve, 400));
}

function InterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InterestFormData>({ resolver: zodResolver(interestSchema) });

  const onSubmit = async (data: InterestFormData) => {
    await submitInterest(data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="interesse" className="bg-bg-soft-blue px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <Eyebrow tone="dark" className="mx-auto w-fit">
            Fique por dentro
          </Eyebrow>
          <h2 className="mx-auto mt-4 text-3xl font-black leading-tight text-text-dark sm:text-4xl">
            Quer saber quando o aplicativo estiver disponível?
          </h2>
        </div>

        {submitted ? (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center">
            <CircleCheck className="size-10 text-primary-blue" aria-hidden="true" />
            <p className="font-heading text-lg font-bold text-text-dark">
              Recebemos seu interesse!
            </p>
            <p className="max-w-sm text-sm text-text-muted">
              Este formulário ainda está em fase de testes. A integração com nosso sistema de
              cadastro será conectada em breve.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
              {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>}
            </div>

            <div>
              <Label htmlFor="profile">Perfil</Label>
              <Select id="profile" defaultValue="" aria-invalid={!!errors.profile} {...register("profile")}>
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option value="responsavel">Responsável / familiar</option>
                <option value="professor">Professor</option>
                <option value="profissional">Profissional de saúde</option>
                <option value="escola">Escola</option>
                <option value="outro">Outro</option>
              </Select>
              {errors.profile && <p className="mt-1.5 text-xs text-destructive">{errors.profile.message}</p>}
            </div>

            <div>
              <Label htmlFor="message">Mensagem (opcional)</Label>
              <Textarea id="message" {...register("message")} />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>}
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Enviando…" : "Quero acompanhar"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

export { InterestForm };
