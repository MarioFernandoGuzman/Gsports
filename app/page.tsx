"use client"

import Link from "next/link"

export default function NewsPage() {
  // Aquí puedes agregar más noticias siguiendo la misma estructura
const noticias = [
  {
    id: 1,
    titulo: "Xelaju MC arranca con victoria",
    resumen: "Xelaju MC arranca con victoria: 2-0 frente al Hércules de El Salvador en la Copa Centroamericana",
    fecha: "30 Julio 2024",
    categoria: "Deportes",
    imagen: "/noticias/noticia1.jpg",
    contenidoCompleto: `
      Xelaju MC arranca con victoria: 2-0 frente al Hércules de El Salvador en la Copa Centroamericana.
      Este miércoles 30 de julio, Xela debutó con el pie derecho en la Copa Centroamericana, llevándose una victoria 2-0 sobre Hércules en la jornada 1 del Grupo D. ¡Inicio con todo!
      Desde los primeros minutos, el equipo mostró actitud, presión alta y buena conexión en el medio campo. El primer gol llegó tras una jugada bien armada, donde Romário da Silva definió con clase para abrir el marcador. El segundo tanto también cayó en la segunda mitad, con Pedro Báez aprovechando una desconcentración defensiva para poner el 2-0 definitivo.
      Hércules intentó responder, pero no logró romper el bloque defensivo rival ni generar peligro claro. El arquero de Xela, también tuvo un par de intervenciones clave para mantener el arco en cero.
      Con este resultado, Xela suma sus primeros 3 puntos en el grupo D y se perfila como uno de los candidatos a avanzar en esta edición de la copa.
      El equipo no solo ganó, también gustó. Buen ritmo, presión y contundencia. 🔥 Jugador destacado: Pedro Báez, por su liderazgo y aporte en ambos lados del campo.
      ¿Qué sigue?
      La próxima jornada será clave para mantener el impulso. Por ahora, la afición puede celebrar este arranque soñado.
    `,
    autor: {
      nombre: "Gabriel Cifuentes",
      foto: "/autores/gabriel.png",
    },
  },
  {
    id: 2,
    titulo: "Sololá Arrassa y se corona!",
    resumen: "¡Sololá arrasa y se corona campeona nacional U14 de baloncesto femenino! ",
    fecha: "14 Enero 2024",
    categoria: "Deportes",
    imagen: "/noticias/noticia2.jpeg",
    contenidoCompleto: `
      ¡Orgullo puro del altiplano guatemalteco! El equipo femenino de baloncesto U14 del departamento de Sololá se alzó como campeón nacional en los Juegos Deportivos Nacionales 2025, celebrados del 22 al 26 de julio. ¡Y vaya manera de cerrar la competencia más esperada del año!
      Con un juego lleno de energía, trabajo en equipo y mucha pasión por la duela, las chicas sololatecas dejaron el alma en la cancha y demostraron que el talento joven en Guatemala está más vivo que nunca. El triunfo no solo es un logro deportivo, sino también una inspiración para nuevas generaciones que sueñan con representar a su departamento a nivel nacional.
      La final se vivió con intensidad y emoción en el coliseo deportivo, donde el equipo de Sololá, vestido de verde vibrante, levantó la copa con orgullo y la bandera bien en alto. El esfuerzo de cada jugadora, junto con el compromiso de su cuerpo técnico, se tradujo en una victoria que marcará historia para el baloncesto femenino juvenil del país.
      En la imagen oficial compartida por la Federación Nacional de Baloncesto de Guatemala (FNBG), se ve al equipo completo celebrando su gran hazaña con sonrisas, medallas y la bandera de Sololá al centro. ¡Una postal que grita campeonas con cada píxel!
    `,
    autor: {
      nombre: "Cony Rodriguez",
      foto: "/autores/cony.jpeg",
    },
  },
  {
    id: 3,
    titulo: "FC Barcelona inicia su pretemporada",
    resumen: "FC Barcelona inicia su pretemporada con ilusiones renovadas y expectativas en el mercado de fichajes",
    fecha: "13 Enero 2024",
    categoria: "Deportes",
    imagen: "/noticias/noticia3.jpeg",
    contenidoCompleto: `
      El FC Barcelona ha dado inicio a su pretemporada 2025-26 con entrenamientos intensos en la Ciudad Deportiva Joan Gamper, bajo las órdenes de Hansi Flick, quien encara su primera temporada completa al frente del banquillo culé. El objetivo es claro: recuperar la competitividad y volver a luchar por todos los títulos tras una campaña pasada marcada por la irregularidad.
      Los jugadores ya han disputado algunos partidos amistosos, en los que se ha podido ver una propuesta más dinámica y organizada, especialmente en defensa, una de las prioridades del nuevo técnico alemán. Además, se ha notado una apuesta por jóvenes talentos de La Masia, como Marc Guiu, Héctor Fort y Pau Cubarsí, que buscan consolidarse en el primer equipo.
      En cuanto al mercado de fichajes, la directiva azulgrana trabaja con cautela debido a las limitaciones financieras, pero no se descartan movimientos importantes. El club sigue negociando la posible llegada de un mediocentro de corte defensivo, siendo Mikel Merino uno de los nombres que más suena. También se mantiene la esperanza de cerrar un fichaje para reforzar el lateral derecho, una posición que sigue sin dueño claro.
      En el capítulo de salidas, algunos jugadores como Sergiño Dest, Lenglet o Ferran Torres podrían abandonar el club si llegan ofertas convincentes. La prioridad es liberar masa salarial para facilitar nuevas incorporaciones.
      Con la Liga a punto de comenzar, el Barça busca llegar a punto físicamente y con la plantilla definida. Los próximos días serán clave para cerrar fichajes y perfilar el equipo que intentará devolver la ilusión a la afición culé.
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
