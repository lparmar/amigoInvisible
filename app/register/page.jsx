import Form from "next/form";

export default function registerUsers() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fondo-amigo-invisible.png')" }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm">
        <div className="relative z-10 flex flex-col min-h-screen items-center justify-between p-6 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-1 items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full max-w-md gap-6 bg-white p-6 rounded-2xl shadow-lg">
              <Form className="flex flex-col gap-4 w-full">
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo"
                  className="border p-3 rounded-2xl border-gray-300 w-full"
                />
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  className="border p-3 rounded-2xl border-gray-300 w-full"
                />
                <button
                  type="submit"
                  className="bg-emerald-300 text-gray-700 p-3 rounded-2xl w-full font-semibold hover:bg-emerald-400 transition"
                >
                  Añadir
                </button>
              </Form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}