import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
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
  CreditCard,
  Shield,
  Lock
} from "lucide-react";
import logo from "@/assets/logo.png";

export default function Landing() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

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
      text: "O LouvorApp mudou nossa rotina de ensaios. Agora ninguém se perde nos horários!",
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

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    toast.success("Redirecionando para o pagamento...");
    // Aqui você pode integrar com Stripe ou outro gateway de pagamento
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 backdrop-blur-md bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="LouvorApp Logo" className="h-10 w-auto rounded-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              LouvorApp
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
            <Button onClick={() => scrollToSection('comprar')} variant="default">
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
              <Badge className="mb-6 text-sm px-4 py-1" variant="secondary">
                🎶 Organize seu ministério de louvor
              </Badge>
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
                  onClick={() => scrollToSection('comprar')}
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
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
              <div className="relative bg-gradient-to-br from-card to-muted p-8 rounded-3xl shadow-2xl border border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
                    <Calendar className="h-6 w-6 text-primary" />
                    <div className="flex-1">
                      <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                      <div className="h-3 bg-muted/50 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
                    <Users className="h-6 w-6 text-secondary" />
                    <div className="flex-1">
                      <div className="h-4 bg-muted rounded w-2/3 mb-2" />
                      <div className="h-3 bg-muted/50 rounded w-1/3" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
                    <Music className="h-6 w-6 text-primary" />
                    <div className="flex-1">
                      <div className="h-4 bg-muted rounded w-4/5 mb-2" />
                      <div className="h-3 bg-muted/50 rounded w-2/5" />
                    </div>
                  </div>
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
              Por que usar o LouvorApp?
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
              Ministérios que já confiam no LouvorApp
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

      {/* Purchase Section */}
      <section id="comprar" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              🎉 Oferta Especial
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Adquira o LouvorApp Hoje
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Investimento único para organizar seu ministério para sempre
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Pricing Card */}
            <Card className="p-8 lg:sticky lg:top-24 border-2 border-primary/20 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mb-4">
                  <Music className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">LouvorApp Completo</h3>
                <p className="text-muted-foreground mb-6">
                  Acesso vitalício a todas as funcionalidades
                </p>
                
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-muted-foreground line-through">R$ 49,90</span>
                    <Badge variant="destructive">40% OFF</Badge>
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    R$ 29,90
                  </div>
                  <p className="text-muted-foreground">pagamento único • sem mensalidades</p>
                </div>

                <div className="space-y-3 text-left mb-8">
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

                <div className="space-y-3 p-4 bg-muted/50 rounded-xl text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span>Pagamento 100% seguro</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CreditCard className="h-4 w-4" />
                    <span>Cartão, Pix ou Boleto</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Checkout Form */}
            <Card className="p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Complete sua compra</h3>
              <form onSubmit={handlePurchase} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome completo"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="mt-2"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Enviaremos o acesso para este e-mail
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-muted-foreground">LouvorApp</span>
                    <span className="font-semibold">R$ 29,90</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold mb-6">
                    <span>Total</span>
                    <span className="text-primary">R$ 29,90</span>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6"
                >
                  <Lock className="mr-2 h-5 w-5" />
                  Finalizar Compra
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    🔒 Seus dados estão seguros e protegidos
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ao finalizar a compra, você concorda com nossos termos de uso
                  </p>
                </div>
              </form>
            </Card>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-3">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Garantia de 7 dias</h4>
              <p className="text-sm text-muted-foreground">
                Não gostou? Devolvemos 100% do seu dinheiro
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-3">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Pagamento Seguro</h4>
              <p className="text-sm text-muted-foreground">
                Ambiente 100% protegido e criptografado
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-3">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Suporte Dedicado</h4>
              <p className="text-sm text-muted-foreground">
                Estamos aqui para ajudar você sempre
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block p-4 bg-background rounded-full mb-6 shadow-lg">
              <Heart className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforme a organização do seu ministério hoje
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Junte-se a centenas de ministérios que já estão usando o LouvorApp
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('comprar')}
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
              <img src={logo} alt="LouvorApp Logo" className="h-10 w-auto rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                LouvorApp
              </span>
            </div>
            <p className="text-center text-muted-foreground flex items-center gap-2">
              Feito com <Heart className="h-4 w-4 text-red-500 fill-red-500" /> para ministérios que amam servir através da música
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 LouvorApp — Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
