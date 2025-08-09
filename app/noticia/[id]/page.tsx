"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

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

export default function NoticiaPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params)
  const noticiaId = Number.parseInt(resolvedParams.id)
  const noticia = noticias.find((n) => n.id === noticiaId)

  if (!noticia) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Noticia no encontrada</h1>
          <Link href="/">
            <button className="bg-red text-cream px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors">
              Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    )
  }

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

            {/* Botón volver */}
            <Link href="/">
              <button className="flex items-center space-x-2 text-cream hover:text-red transition-colors">
                <ArrowLeft size={20} />
                <span>Volver</span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Contenido del artículo */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categoría */}
        <div className="mb-4">
          <span className="bg-red text-cream px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
            {noticia.categoria}
          </span>
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">{noticia.titulo}</h1>

        {/* Fecha */}
        <div className="text-gray-600 mb-8 text-lg">{noticia.fecha}</div>

        {/* Imagen principal */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img src={noticia.imagen || "/placeholder.svg"} alt={noticia.titulo} className="w-full h-96 object-cover" />
        </div>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none mb-12">
          {noticia.contenidoCompleto.split("\n").map((parrafo, index, array) => {
            // Para la noticia 2, agregar imagen antes del último párrafo
            if (noticia.id === 2 && index === array.length - 2 && parrafo.trim()) {
              return (
                <div key={index}>
                  <p className="text-gray-800 leading-relaxed mb-6 text-lg">{parrafo.trim()}</p>
                  {/* Imagen adicional para la noticia 2 */}
                  <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/noticias/noticia21.jpeg"
                      alt="Celebración del equipo de Sololá"
                      className="w-full h-64 object-cover"
                    />
                    <p className="text-sm text-gray-500 text-center mt-2 italic">
                      Ter Stegen con el presidente del FC Barcelona, Joan Laporta.
                    </p>
                  </div>
                </div>
              )
            }

            return parrafo.trim() ? (
              <p key={index} className="text-gray-800 leading-relaxed mb-6 text-lg">
                {parrafo.trim()}
              </p>
            ) : null
          })}
        </div>

        {/* Información del autor */}
        <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-red">
          <h3 className="text-xl font-bold text-black mb-4">
            {noticia.id === 3 ? "Sobre los autores" : "Sobre el autor"}
          </h3>

          {/* Para la noticia 3, mostrar dos autores */}
          {noticia.id === 3 ? (
            <div className="space-y-4">
              {/* Primer autor */}
              <div className="flex items-center space-x-4">
                <img
                  src={noticia.autor.foto || "/placeholder.svg"}
                  alt={noticia.autor.nombre}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-black">{noticia.autor.nombre}</h4>
                  <p className="text-gray-600">Periodista deportivo</p>
                </div>
              </div>

              {/* Segundo autor */}
              <div className="flex items-center space-x-4">
                <img src="/autores/cony.jpeg" alt="cony" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="text-lg font-semibold text-black">Cony Rodriguez</h4>
                  <p className="text-gray-600">Periodista Deportivo</p>
                </div>
              </div>
            </div>
          ) : (
            /* Autor único para otras noticias */
            <div className="flex items-center space-x-4">
              <img
                src={noticia.autor.foto || "/placeholder.svg"}
                alt={noticia.autor.nombre}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-black">{noticia.autor.nombre}</h4>
                <p className="text-gray-600">Periodista deportivo</p>
              </div>
            </div>
          )}
        </div>

        {/* Botón volver */}
        <div className="text-center mt-12">
          <Link href="/">
            <button className="bg-black text-cream px-8 py-3 rounded-lg font-semibold hover:bg-red transition-colors duration-200 shadow-lg">
              Volver a noticias
            </button>
          </Link>
        </div>
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
