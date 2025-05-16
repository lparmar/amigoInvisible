export default function RegisterPage() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/fondo-amigo-invisible.png')" }}>
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm">
            <div className="relative z-10 flex flex-col min-h-screen items-center justify-between p-6 font-[family-name:var(--font-geist-sans)]">
                <Image
                                className="dark:invert"
                                src="/images/logoLogin.png"
                                alt="LogoLogin"
                                width={180}
                                height={38}
                                priority
                              />
            </div>
        </div>
    </div>
  );
}