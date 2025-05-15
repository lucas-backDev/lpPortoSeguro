import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Youtube, Phone } from "lucide-react"

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
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-white mb-6 md:mb-0 md:mr-4 md:w-3/5">
            <p className="text-xl md:text-2xl font-semibold mb-4">
              Além desse benefício exclusivo, ao abrir sua conta você também aproveita diversas funcionalidades para seu
              dia a dia, como:
            </p>
          </div>
          <div className="md:w-2/5">
            <Image
              src="/images/celularcortado.png"
              alt="Celular com app"
              width={300}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center text-white">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <Image 
                src="/images/icons/24h.svg" 
                alt="Banco 24 Horas" 
                width={32} 
                height={32} 
              />
            </div>
            <p className="text-center text-sm">
              Saque no
              <br />
              Banco24Horas
            </p>
          </div>

          <div className="flex flex-col items-center text-white">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <Image 
                src="/images/icons/cartao.svg" 
                alt="Cartão" 
                width={32} 
                height={32} 
              />
            </div>
            <p className="text-center text-sm">
              Compras no
              <br />
              débito e crédito
            </p>
          </div>

          <div className="flex flex-col items-center text-white">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <Image 
                src="/images/icons/celular.svg" 
                alt="Celular" 
                width={32} 
                height={32} 
              />
            </div>
            <p className="text-center text-sm">
              Carteiras
              <br />
              Digitais
            </p>
          </div>

          <div className="flex flex-col items-center text-white">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <Image 
                src="/images/icons/pix.svg" 
                alt="Pix" 
                width={32} 
                height={32} 
              />
            </div>
            <p className="text-center text-sm">Pix</p>
          </div>

          <div className="flex flex-col items-center text-white">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <Image 
                src="/images/icons/barras.svg" 
                alt="Calendário" 
                width={32} 
                height={32} 
              />
            </div>
            <p className="text-center text-sm">
              Pagamentos
              <br />
              de boletos
            </p>
          </div>

          <div className="flex flex-col items-center text-white">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <Image 
                src="/images/icons/LogoPorto.svg" 
                alt="Barras" 
                width={32} 
                height={32} 
              />
            </div>
            <p className="text-center text-sm">
              Gestão no
              <br />
              App Porto
            </p>
          </div>
        </div>
      </div>
      {/* CTA Text */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-8">
        <p className="text-gray-800 text-lg">
          Abra sua conta agora mesmo e comece a usar para viver o melhor da sua vida financeira com a Conta Porto Bank.
        </p>
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
          <Phone className="w-5 h-5" />
        </Link>
        <Link
          href="https://youtube.com/@especseguroseconsorcios?si=wNH6lnM6v6fmKDcj"
          className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center text-blue-400"
        >
          <Youtube className="w-5 h-5" />
        </Link>
        
        
      </div>

    </main>
  )
}
