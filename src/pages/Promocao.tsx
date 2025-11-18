import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Gift } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    fbq?: (action: string, event: string) => void;
  }
}

export default function Promocao() {
  const [showDiscountModal, setShowDiscountModal] = useState(true);
  const navigate = useNavigate();

  const handleDiscountAccept = () => {
    setShowDiscountModal(false);
    if (window.fbq) {
      window.fbq("track", "InitiateCheckout");
    }
    window.location.href = "https://pay.cakto.com.br/3f8wpvp";
  };

  const handleClose = () => {
    setShowDiscountModal(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <Dialog open={showDiscountModal} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold">
              🎉 Cupom Especial de R$10 OFF!
            </DialogTitle>
            <DialogDescription className="text-base space-y-3">
              <p className="font-semibold text-foreground">
                Aproveite esta oferta exclusiva!
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="line-through text-muted-foreground text-sm">
                  De R$29,90
                </p>
                <p className="text-3xl font-bold text-green-600">
                  Por apenas R$19,90
                </p>
              </div>
              <p className="text-sm">
                Garanta o BandLy agora com desconto especial e organize seu ministério de forma profissional!
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button
              onClick={handleDiscountAccept}
              size="lg"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold"
            >
              Quero Aproveitar o Desconto!
            </Button>
            <Button
              onClick={handleClose}
              variant="ghost"
              size="sm"
              className="w-full"
            >
              Voltar para página inicial
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
