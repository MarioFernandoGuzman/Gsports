"use client"

import Link from "next/link"

export default function NewsPage() {
  // Aquí puedes agregar más noticias siguiendo la misma estructura
const noticias = [
  {
    id: 1,
    titulo: "Deportivo Mixco: imparable y líder tras arranque perfecto en el Apertura",
    resumen: "Deportivo Mixco ha comenzado el Torneo Apertura 2025 con un historial impecable: tres victorias consecutivas y apenas un gol encajado, lo que lo coloca como líder indiscutible de la tabla tras la jornada 3.  ",
    fecha: "8 de agosto de 2025",
    categoria: "Deportes",
    imagen: "/noticias/noticia1.jpeg",
    contenidoCompleto: `
      Deportivo Mixco ha comenzado el Torneo Apertura 2025 con un historial impecable: tres victorias consecutivas y apenas un gol encajado, lo que lo coloca como líder indiscutible de la tabla tras la jornada 3. El equipo, dirigido por Fabrizio Benítez, ha mostrado solidez ofensiva y defensiva, con el experimentado Nicolás Martínez como figura clave en la ofensiva. ¡Un inicio histórico para el club mezclano!
    `,
    autor: {
      nombre: "Cony Rodriguez",
      foto: "/autores/cony.jpeg",
      
    },
  },
  {
    id: 2,
    titulo: "Tormenta en la portería: El pulso entre Ter Stegen y el Barça",
    resumen: " El FC Barcelona enfrenta una crisis institucional tras la negativa de Ter Stegen a firmar un informe médico que le habría permitido ser inscrito como lesionado de larga duración, lo que habría liberado parte de su salario.",
    fecha: "8 de agosto de 2025",
    categoria: "Deportes",
    imagen: "/noticias/noticia2.jpeg",
    contenidoCompleto: `
      En lo que parecía ser una pretemporada tranquila tras un sucio traspié físico, el FC Barcelona se ha visto envuelto en una tormenta institucional de magnitudes in imaginadas. El protagonista: Marc-André Ter Stegen, guardameta veterano y, hasta hace poco, capitán indiscutible.
      Todo comenzó con la necesidad de inscribir nuevos fichajes como Joan García y Marcus Rashford, en medio de las férreas restricciones salariales de La Liga. La solución pasaba por designar a Ter Stegen como lesionado de larga duración una jugada que habría liberado el 80 % de su salario, pero el portero se negó a firmar el informe médico requerido. Según sus propias palabras, su ausencia sería de tres meses, no cuatro o más, lo que dejaba al club en jaque económico y operativo.
      La respuesta del club fue rápida y contundente: apertura de expediente disciplinario, retiro temporal de la capitanía con Ronald Araújo como sustituto y la instrucción al cuerpo técnico de no permitir su reelección, especialmente antes del simbólico Trofeo Gamper.
      El conflicto escaló aún más al hacerse público que Ter Stegen ya no aparece con número asignado en la plantilla oficial para la temporada 2025-26, una señal clara del deterioro de su relación con la entidad.
      En medio del fuego cruzado, el arquero rompió el silencio. En un comunicado en varios idiomas, aseguró que la operación y plazos fueron acordados con el club y negó cualquier intención de perjudicar al equipo o retrasar fichajes. Reafirmó su afecto por los colores blaugrana, su profesionalismo y su deseo de resolver el conflicto a través del diálogo.
      Queda claro que, mientras el calendario aprieta y La Liga observa de cerca, el Barça enfrenta una crisis interna que trasciende lo deportivo. La lealtad, la economía y la imagen institucional chocan frontalmente. ¿Será el diálogo la vía para reconducir esta situación? Todo apunta a que, si hay una salida, deberá pasar por la mesa de negociación y mucho tacto.
    `,
    autor: {
      nombre: "Gabriel Cifuentes",
      foto: "/autores/gabriel.png",
    },
  },
  {
    id: 3,
    titulo: "Rubio Rubin: La afición guatemalteca nos hará sentir en casa si clasificamos al Mundial 2026",
    resumen: "Rubio Rubin, delantero de la selección de Guatemala, expresó su convicción tras la histórica participación de su equipo en la Copa Oro 2025, donde llegaron hasta las semifinales.",
    fecha: "8 Agosto 2025",
    categoria: "Deportes",
    imagen: "/noticias/noticia3.jpeg",
    contenidoCompleto: `
     Rubio Rubin, delantero de la selección de Guatemala, expresó su convicción tras la histórica participación de su equipo en la Copa Oro 2025, donde llegaron hasta las semifinales. Rubin afirmó que, de clasificarse al Mundial 2026, podrían jugar como locales debido al enorme apoyo de guatemaltecos en EE. UU. También destacó cómo el equipo superó adversidades, mostrando mentalidad ganadora para enfrentar ahora las eliminatorias contra Panamá, El Salvador y Surinam.
    `,
    autor: {
      nombre: "Gabriel Cifuentes",
      foto: "/autores/gabriel.png",
    },
  },
]

  return (
    <div className="min-h-screen bg-cream">
      {/* Header con logo */}
      <header className="bg-black shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img src="/logo.jpeg" alt="Logo" className="w-12 h-12 object-contain" />
              <h1 className="text-cream text-2xl font-bold">NOTICIAS GSPORTS</h1>
            </div>

            {/* Fecha actual */}
            <div className="text-cream text-sm">
              {new Date().toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">ÚLTIMAS NOTICIAS</h2>
          <div className="w-24 h-1 bg-red mx-auto"></div>
        </div>

        {/* Grid de noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <article
              key={noticia.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 border-red"
            >
              {/* Imagen de la noticia */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={noticia.imagen || "/placeholder.svg"}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Categoría sobre la imagen */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red text-cream px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                    {noticia.categoria}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3 leading-tight hover:text-red transition-colors duration-200">
                  {noticia.titulo}
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">{noticia.resumen}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{noticia.fecha}</span>
                  <Link href={`/noticia/${noticia.id}`}>
                    <button className="bg-red text-cream px-4 py-2 rounded-md text-sm font-semibold hover:bg-black transition-colors duration-200">
                      Leer más
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botón para cargar más noticias */}
        <div className="text-center mt-12"></div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-cream py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2024 Blog de Noticias. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
