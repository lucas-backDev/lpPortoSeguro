import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

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
      <div className="max-w-3xl mx-auto px-4 py-6">
        <p className="text-gray-800 text-lg mb-2">Olá!</p>
        <p className="text-gray-800 text-lg mb-4">
          Você é meu convidado especial para abrir a Conta Porto Bank. Ela é a única que já vem com{" "}
          <span className="font-bold">Seguro Conta Protegida, com cobertura de até R$ 2 mil*</span>, sem qualquer custo
          adicional.
        </p>
      </div>

      {/* Benefits Section with Phone Partially Outside */}
      <div className="w-full max-w-3xl mx-auto px-4 mb-8 relative">
        {/* Blue section with phone partially outside */}
        <div className="bg-blue-600 rounded-3xl px-4 py-5 relative">
          <div className="flex flex-row items-center">
            <div className="text-white mr-4 w-3/5">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-2">
                Além desse benefício exclusivo, ao abrir sua conta você também aproveita diversas funcionalidades para
                seu dia a dia, como:
              </p>
            </div>
            <div className="w-2/5 flex justify-center">
              {/* Phone image positioned to appear partially outside the blue section */}
              <div className="absolute -top-4 right-8 z-20">
                <Image
                  src="/images/celularcortado.png"
                  alt="Celular com app"
                  width={200}
                  height={350}
                  className="max-w-[100px] sm:max-w-[120px] md:max-w-[140px] h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Features Grid - Reduced size */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-6">
            <div className="flex flex-col items-center text-white">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-1">
                <img src="/images/icons/24h.svg" alt="Banco 24 Horas" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-center text-[10px] sm:text-xs">
                Saque no
                <br />
                Banco24Horas
              </p>
            </div>

            <div className="flex flex-col items-center text-white">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-1">
                <img src="/images/icons/cartao.svg" alt="Cartão" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-center text-[10px] sm:text-xs">
                Compras no
                <br />
                débito e crédito
              </p>
            </div>

            <div className="flex flex-col items-center text-white">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-1">
                <img src="/images/icons/celular.svg" alt="Celular" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-center text-[10px] sm:text-xs">
                Carteiras
                <br />
                Digitais
              </p>
            </div>

            <div className="flex flex-col items-center text-white">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-1">
                <img src="/images/icons/pix.svg" alt="Pix" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-center text-[10px] sm:text-xs">Pix</p>
            </div>

            <div className="flex flex-col items-center text-white">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-1">
                <img src="/images/icons/barras.svg" alt="Calendário" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-center text-[10px] sm:text-xs">
                Pagamentos
                <br />
                de boletos
              </p>
            </div>

            <div className="flex flex-col items-center text-white">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-1">
                <img src="/images/icons/LogoPorto.svg" alt="Barras" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-center text-[10px] sm:text-xs">
                Gestão no
                <br />
                App Porto
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Text */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-6">
        <p className="text-gray-800 text-lg">
          Abra sua conta agora mesmo e comece a usar para viver o melhor da sua vida financeira com a Conta Porto Bank.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row gap-4 w-full mb-8">
        <Link
          href="https://www.porto.vc/CONTADIGITALPORTOBANK_S11K4J_441ceaf56534457ca9e2092a076ff3ba"
          className="bg-blue-600 text-white text-xl font-semibold py-4 px-6 rounded-md text-center w-full"
        >
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
          className="w-10 h-10 rounded-full border border-sky-400 flex items-center justify-center text-sky-400"
        >
          <Instagram className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.facebook.com/share/1YqWwEJe7m/"
          className="w-10 h-10 rounded-full border border-sky-400 flex items-center justify-center text-sky-400"
        >
          <Facebook className="w-5 h-5" />
        </Link>
        <Link
          href="https://wa.me/message/XBYD42MCYPZ7M1"
          className="w-10 h-10 rounded-full border border-sky-400 flex items-center justify-center text-sky-400"
        >
          <FaWhatsapp className="w-5 h-5 text-sky-400" />
        </Link>
        <Link
          href="https://youtube.com/@especseguroseconsorcios?si=wNH6lnM6v6fmKDcj"
          className="w-10 h-10 rounded-full border border-sky-400 flex items-center justify-center text-sky-400"
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
