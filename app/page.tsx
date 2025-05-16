import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Youtube} from "lucide-react"
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      {/* Header Section - Imagem estática */}
      <div className="w-full bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="relative w-full">
            <Image
              src="/images/celularcadeado.jpeg"
              alt="A Conta Porto Bank chegou!"
              width={1200}
              height={800}
              className="w-full h-auto rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Welcome Text */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-gray-800 text-lg mb-2">Olá!</p>
        <p className="text-gray-800 text-lg mb-4">
          Você é meu convidado especial para abrir a Conta Porto Bank. Ela é a única que já vem com{" "}
          <span className="font-bold">Seguro Conta Protegida, com cobertura de até R$ 2 mil*</span>, sem qualquer custo
          adicional.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="w-full bg-blue-600 rounded-3xl max-w-3xl mx-auto px-4 py-8 mb-8">
        <div className="flex flex-row items-center">
          <div className="text-white mr-4 w-3/5">
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold mb-4">
              Além desse benefício exclusivo, ao abrir sua conta você também aproveita diversas funcionalidades para seu
              dia a dia, como:
            </p>
          </div>
          <div className="w-2/5 flex justify-center">
            <Image
              src="/images/celularcortado.png"
              alt="Celular com app"
              width={300}
              height={500}
              className="max-w-full h-auto max-h-[180px] sm:max-h-none"
            />
          </div>
        </div>
      

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-8">
          <div className="flex flex-col items-center text-white">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-1 sm:mb-2">
              <img 
                src="/images/icons/24h.svg" 
                alt="Banco 24 Horas" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <p className="text-center text-xs sm:text-sm">
              Saque no
              <br />
              Banco24Horas
            </p>
          </div>

          <div className="flex flex-col items-center text-white">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-1 sm:mb-2">
              <img 
                src="/images/icons/cartao.svg" 
                alt="Cartão" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <p className="text-center text-xs sm:text-sm">
              Compras no
              <br />
              débito e crédito
            </p>
          </div>

          <div className="flex flex-col items-center text-white">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-1 sm:mb-2">
              <img 
                src="/images/icons/celular.svg" 
                alt="Celular" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <p className="text-center text-xs sm:text-sm">
              Carteiras
              <br />
              Digitais
            </p>
          </div>

          <div className="flex flex-col items-center text-white">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-1 sm:mb-2">
              <img 
                src="/images/icons/pix.svg" 
                alt="Pix" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <p className="text-center text-xs sm:text-sm">Pix</p>
          </div>

          <div className="flex flex-col items-center text-white">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-1 sm:mb-2">
              <img 
                src="/images/icons/barras.svg" 
                alt="Calendário" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <p className="text-center text-xs sm:text-sm">
              Pagamentos
              <br />
              de boletos
            </p>
          </div>

          <div className="flex flex-col items-center text-white">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-1 sm:mb-2">
              <img 
                src="/images/icons/LogoPorto.svg" 
                alt="Barras" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <p className="text-center text-xs sm:text-sm">
              Gestão no
              <br />
              App Porto
            </p>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row gap-4 w-full mb-8">
        <Link href="https://www.porto.vc/CONTADIGITALPORTOBANK_S11K4J_441ceaf56534457ca9e2092a076ff3ba" className="bg-blue-600 text-white text-xl font-semibold py-4 px-6 rounded-md text-center w-full">
          Abrir conta
        </Link>
        <Link
          href="https://wa.me/message/XBYD42MCYPZ7M1"
          className="bg-green-500 text-white text-xl font-semibold py-4 px-6 rounded-md text-center w-full"
        >
          WhatsApp
        </Link>
      </div>


      {/* Slogan */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-6">
        <p className="text-gray-800 text-xl font-semibold">Todo cuidado é Porto.</p>
      </div>


      {/* Social Media */}
      <div className="max-w-3xl mx-auto px-4 flex justify-center gap-4 mb-8">
        <Link
          href="https://www.instagram.com/especseguros?igsh=MThiM3BzcnllN3EwdA=="
          className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center text-blue-400"
        >
          <Instagram className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.facebook.com/share/1YqWwEJe7m/"
          className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center text-blue-400"
        >
          <Facebook className="w-5 h-5" />
        </Link>
        <Link
          href="https://wa.me/message/XBYD42MCYPZ7M1"
          className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center text-blue-400"
        >
          <FaWhatsapp className="w-5 h-5 text-blue-400" />
          WhatsApp
        </Link>
        <Link
          href="https://youtube.com/@especseguroseconsorcios?si=wNH6lnM6v6fmKDcj"
          className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center text-blue-400"
        >
          <Youtube className="w-5 h-5" />
        </Link>

      </div>

      {/* Disclaimer */}
        <div className="max-w-3xl mx-auto px-4 text-xs text-gray-500 mb-8">
          <p className="mb-1">A abertura da conta está sujeita a aprovação.</p>
          <p className="mb-1">
            Cobertura limitada a R$ 1.000,00 para Pix e R$ 1.000,00 para compras indevidas, saque sob coação ou por perda
            ou roubo do celular ou cartão. O valor do celular em caso de roubo, não será coberto.
          </p>
        </div>

    </main>
  )
}
