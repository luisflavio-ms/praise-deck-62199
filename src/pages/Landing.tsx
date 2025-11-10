import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  Share2, 
  Music, 
  CheckCircle2, 
  ArrowRight, 
  Wifi, 
  Clock,
  Heart,
  Smartphone,
  ListChecks,
  Zap,
  Shield,
  Lock
} from "lucide-react";
import logo from "@/assets/logo.png";
import screenshotHome from "@/assets/screenshot-home.jpg";
import screenshotMembers from "@/assets/screenshot-members.jpg";

export default function Landing() {
  const CHECKOUT_URL = "https://pay.cakto.com.br/k6wwxva_641778";

  const benefits = [
    {
      icon: Calendar,
      title: "Agendas e ensaios organizados",
      description: "Veja o que vem pela frente e compartilhe com sua equipe de forma simples e rápida."
    },
    {
      icon: Users,
      title: "Controle de membros",
      description: "Cadastre músicos e líderes com suas funções e mantenha tudo organizado."
    },
    {
      icon: Wifi,
      title: "Tudo offline",
      description: "Funciona mesmo sem internet — dados ficam salvos no seu celular."
    },
    {
      icon: Share2,
      title: "Compartilhe com um toque",
      description: "Envie ensaios e agendas direto no WhatsApp de forma profissional."
    }
  ];

  const steps = [
    {
      number: "01",
      icon: Users,
      title: "Cadastre sua equipe",
      description: "Nome e função de cada músico. Simples e rápido."
    },
    {
      number: "02",
      icon: Calendar,
      title: "Crie seus eventos",
      description: "Ensaio, agenda ou reunião — tudo no calendário."
    },
    {
      number: "03",
      icon: Share2,
      title: "Compartilhe e acompanhe",
      description: "Mande o resumo no WhatsApp e veja quem participa."
    }
  ];

  const testimonials = [
    {
      text: "O BandLy mudou nossa rotina de ensaios. Agora ninguém se perde nos horários!",
      author: "Pr. Felipe",
      role: "Igreja Esperança"
    },
    {
      text: "Organizar a escala nunca foi tão fácil. Recomendo para todos os ministérios!",
      author: "Ana Paula",
      role: "Líder de Louvor"
    },
    {
      text: "Simples, prático e resolve tudo que a gente precisa. Funciona até sem internet!",
      author: "João Silva",
      role: "Ministério Vida Nova"
    }
  ];

  const features = [
    { icon: ListChecks, text: "Gestão completa de eventos" },
    { icon: Users, text: "Cadastro de membros e funções" },
    { icon: Music, text: "Organização de repertório" },
    { icon: Wifi, text: "Funciona offline" },
    { icon: Share2, text: "Compartilhamento WhatsApp" },
    { icon: Smartphone, text: "PWA - Instale na tela inicial" },
    { icon: Zap, text: "Interface rápida e moderna" },
    { icon: Clock, text: "Controle de horários" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const onBuy = () => {
    if ((window as any)?.fbq) {
      (window as any).fbq("track", "InitiateCheckout");
    }
    window.location.href = "https://pay.cakto.com.br/k6wwxva_641778";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-2 text-center text-sm font-medium animate-fade-in">
        ⚡ ÚLTIMAS VAGAS DISPONÍVEIS • Oferta por tempo limitado • Garanta seu acesso agora!
      </div>

      {/* Header */}
      <header className="border-b border-border/30 backdrop-blur-md bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="BandLy Logo" className="h-10 w-auto rounded-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BandLy
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('como-funciona')}
              className="hidden sm:inline-flex"
            >
              Como funciona
            </Button>
            <Button onClick={onBuy} variant="default">
              Comprar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                <Badge className="text-sm px-4 py-1 animate-pulse" variant="secondary">
                  🎶 Organize seu ministério de louvor
                </Badge>
                <Badge className="text-sm px-4 py-1 bg-destructive text-destructive-foreground animate-pulse" variant="destructive">
                  🔥 Apenas 12 vagas restantes
                </Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Organize ensaios e agendas do seu ministério de louvor{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  em minutos
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Tudo o que um líder precisa — controle de eventos, membros e músicas — 
                direto no seu celular, mesmo sem internet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={onBuy}
                  className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  Garantir Meu Acesso
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('como-funciona')}
                  className="text-lg px-8 py-6"
                >
                  Ver como funciona
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
                <Lock className="h-4 w-4" /> Pagamento 100% seguro
              </p>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
              
              <div className="relative">
                <div className="animate-[float_6s_ease-in-out_infinite]">
                  <img 
                    src={screenshotHome} 
                    alt="Tela de eventos do BandLy" 
                    className="w-[280px] sm:w-[340px] rounded-3xl shadow-2xl border-4 border-border/30"
                  />
                </div>
                <div className="absolute -right-8 top-20 animate-[float_6s_ease-in-out_infinite] [animation-delay:1s]">
                  <img 
                    src={screenshotMembers} 
                    alt="Tela de membros do BandLy" 
                    className="w-[240px] sm:w-[280px] rounded-3xl shadow-2xl border-4 border-border/30 opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Por que usar o BandLy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recursos pensados especialmente para líderes e ministérios de louvor
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <div className="mb-4 p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl w-fit">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Como funciona?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Três passos simples para organizar todo seu ministério
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" 
                 style={{ top: '80px' }} 
            />
            
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg relative z-10">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-6xl font-bold text-primary/10 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              O que dizem nossos usuários
            </h2>
            <p className="text-lg text-muted-foreground">
              Ministérios que já confiam no BandLy
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-border/50">
                <div className="mb-6">
                  <Music className="h-10 w-10 text-primary/30" />
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Tudo que você precisa
            </h2>
            <p className="text-lg text-muted-foreground">
              Recursos completos para gerenciar seu ministério
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-card to-muted border border-border/50 hover:shadow-lg transition-all"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="comprar" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <Badge className="animate-pulse" variant="secondary">
                🎉 Oferta Especial
              </Badge>
              <Badge className="animate-pulse bg-destructive text-destructive-foreground">
                ⏰ Termina em breve
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Adquira o BandLy Hoje
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Investimento único para organizar seu ministério para sempre
            </p>
          </div>

          <Card className="p-8 lg:p-12 max-w-3xl mx-auto border-2 border-primary/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mb-6">
                <Music className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">BandLy Completo</h3>
              <p className="text-muted-foreground mb-8">
                Acesso vitalício a todas as funcionalidades
              </p>
              
              <div className="mb-8">
                <div className="bg-destructive/10 border-2 border-destructive/50 rounded-lg p-4 mb-4 animate-pulse">
                  <p className="text-destructive font-bold text-lg mb-1">⚠️ ÚLTIMAS 12 VAGAS DISPONÍVEIS</p>
                  <p className="text-sm text-muted-foreground">Após esgotar, o preço volta para R$ 97,00</p>
                </div>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-xl text-muted-foreground line-through">R$ 49,90</span>
                  <Badge variant="destructive" className="text-lg px-3 py-1 animate-pulse">40% OFF</Badge>
                </div>
                <div className="text-6xl font-bold text-primary mb-3">
                  R$ 29,90
                </div>
                <p className="text-lg text-muted-foreground">pagamento único • sem mensalidades</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-left mb-8 max-w-2xl mx-auto">
                {[
                  "Gestão ilimitada de eventos",
                  "Cadastro ilimitado de membros",
                  "Organização de repertório",
                  "Compartilhamento WhatsApp",
                  "Funciona 100% offline",
                  "Atualizações gratuitas",
                  "Suporte por e-mail",
                  "Acesso vitalício"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                onClick={onBuy}
                className="w-full sm:w-auto text-lg px-12 py-6 mb-4 animate-pulse shadow-lg hover:shadow-xl"
              >
                <Lock className="mr-2 h-5 w-5" />
                Comprar Agora - R$ 29,90
              </Button>
              <p className="text-sm text-destructive font-semibold mb-6">
                ⏰ Esta oferta pode encerrar a qualquer momento
              </p>

              <div className="grid sm:grid-cols-3 gap-4 p-6 bg-muted/50 rounded-xl text-sm">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="font-medium">Garantia de 7 dias</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Lock className="h-6 w-6 text-primary" />
                  <span className="font-medium">Pagamento seguro</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Heart className="h-6 w-6 text-primary" />
                  <span className="font-medium">Suporte dedicado</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
              <Heart className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforme a organização do seu ministério hoje
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Junte-se a centenas de ministérios que já estão usando o BandLy
          </p>
          <Button 
            size="lg" 
            onClick={onBuy}
            className="text-lg px-12 py-6 shadow-xl hover:shadow-2xl transition-shadow"
          >
            Garantir Meu Acesso Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            ✓ Pagamento único de R$ 29,90  •  ✓ Garantia de 7 dias  •  ✓ Acesso imediato
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="BandLy Logo" className="h-10 w-auto rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BandLy
              </span>
            </div>
            <p className="text-center text-muted-foreground flex items-center gap-2">
              Feito com <Heart className="h-4 w-4 text-red-500 fill-red-500" /> para ministérios que amam servir através da música
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 BandLy — Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
