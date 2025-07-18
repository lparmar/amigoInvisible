import Head from 'next/head'
import Image from 'next/image'
// import { useState } from 'react'
// import { login } from '@/services/authService'

const LoginPage = () => {
//   const [email, setEmail] = useState('')

// const handleSubmit = async (e) => {
//   e.preventDefault()
//   const response = await login(email)
// }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="relative min-h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm">
          <div className="relative z-10 flex flex-col min-h-screen items-center justify-between p-6 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-1 items-center justify-center w-3xl xs:w-1/2">
              <div className="flex flex-col items-center justify-center w-full gap-6 bg-white p-6 rounded-2xl shadow-lg">
                <Image
                  className="dark:invert"
                  src="/images/logoLogin.png"
                  alt="LogoLogin"
                  width={180}
                  height={38}
                  priority
                />
                <form className="flex flex-col gap-4 w-full">
                  <input
                    placeholder="Correo"
                    className="border p-3 rounded-2xl border-gray-300 w-full"
                    //onSubmit={handleSubmit}
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-amber-700 text-white p-3 rounded-2xl w-full font-semibold hover:bg-amber-600 transition"
                  >
                    Entrar
                  </button>
                </form>
              </div>
            </main>

            <footer className="flex gap-6 flex-wrap items-center justify-center py-4 text-sm text-gray-700">
              <a
                className="flex items-center gap-2 hover:underline"
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/file.svg" alt="File icon" width={16} height={16} />
                Learn
              </a>
              <a
                className="flex items-center gap-2 hover:underline"
                href="https://vercel.com/templates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/window.svg" alt="Window icon" width={16} height={16} />
                Examples
              </a>
              <a
                className="flex items-center gap-2 hover:underline"
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
                Go to nextjs.org →
              </a>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
