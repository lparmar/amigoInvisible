import Head from "next/head";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fondo-amigo-invisible.png')" }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm">
          <div className="relative z-10 flex flex-col min-h-screen items-center justify-between p-6 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-1 items-center justify-center w-3xl">
              <div className="flex flex-col items-center justify-center w-full gap-6 bg-white p-6 rounded-2xl shadow-lg">
                {/* <Image
                  className="dark:invert"
                  src="/images/logoLogin.png"
                  alt="LogoLogin"
                  width={180}
                  height={38}
                  priority
                /> */}
                <form className="flex flex-col gap-4 w-full">
                  <div className="flex flex-wrap gap-4 justify-center">
                    <input
                      placeholder="Correo 1"
                      className="border p-3 rounded-2xl border-gray-300 w-[48%]"
                    />
                    <input
                      placeholder="Correo 2"
                      className="border p-3 rounded-2xl border-gray-300 w-[48%]"
                    />
                    <input
                      placeholder="Correo 3"
                      className="border p-3 rounded-2xl border-gray-300 w-[48%]"
                    />
                    <input
                      placeholder="Correo 4"
                      className="border p-3 rounded-2xl border-gray-300 w-[48%]"
                    />
                  </div>
                  {/* <button
                    type="submit"
                    className="bg-amber-700 text-white p-3 rounded-2xl w-full font-semibold hover:bg-amber-600 transition"
                  >
                    Registrar
                  </button> */}
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
                <Image
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                Examples
              </a>
              <a
                className="flex items-center gap-2 hover:underline"
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Go to nextjs.org →
              </a>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
