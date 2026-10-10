/**
 * Home page translations.
 * Components render English inline and look up Spanish here by key; the same
 * dictionary powers HomeLanguage, which re-labels [data-i18n] nodes on the client.
 */
export type Locale = 'en' | 'es';

export const es: Record<string, string> = {
	'nav.journey': 'Recorrido',
	'nav.work': 'Proyectos',
	'nav.experience': 'Experiencia',
	'nav.contact': 'Contacto',

	'hero.role': 'Senior Software Engineer',
	'hero.location': 'Georgia, EE. UU.',
	'hero.greeting': 'Hola, soy Carlos.',
	'hero.headline': 'Convierto problemas concretos en',
	'hero.headline.em': 'productos simples y efectivos.',
	'hero.lead':
		'Ingeniero backend de oficio, cómodo en todo el stack. Me gusta llevar un problema real de la idea a producción, de punta a punta, y usar IA para llegar más rápido.',
	'hero.cta.primary': 'Ver mi recorrido',
	'hero.cta.secondary': 'Contactar',

	'journey.eyebrow': 'Recorrido',
	'journey.title': 'De un primer juego en República Dominicana a construir productos desde Georgia.',
	'journey.hint': 'desliza para jugar',
	'journey.map.dr': 'República Dominicana',
	'journey.map.cl': 'Santiago, Chile · remoto',
	'journey.map.us': 'Georgia, EE. UU.',
	'journey.now.top': 'Productos que resuelven problemas reales',
	'journey.now.bottom': 'Un equipo con quien construir',
	'journey.0.where': 'República Dominicana · 14 años',
	'journey.0.loc': 'República Dominicana',
	'journey.0.title': 'Todo empezó con un juego.',
	'journey.0.p1':
		'Aprendí a programar solo a los 14 años creando un pequeño juego de plataformas. Sin cursos, solo práctica constante. Lo más difícil no fue el código, sino lograr que la gente lo jugara.',
	'journey.0.p2': 'Ese juego abrió la primera puerta: alguien que lo jugó me recomendó en la empresa donde trabajaba.',
	'journey.1.where': 'Softone · 2019',
	'journey.1.loc': 'República Dominicana',
	'journey.1.title': 'Software del que depende un negocio.',
	'journey.1.p1':
		'Mi primer trabajo profesional fue un ERP de escritorio en Softone. Me enseñó que el software es algo de lo que la gente depende cada día, así que debe ser claro, confiable y fácil de usar.',
	'journey.2.where': 'ITelle · 2020',
	'journey.2.loc': 'República Dominicana',
	'journey.2.title': 'Liderar, publicar, operar.',
	'journey.2.p1':
		'Mi primera vez liderando un equipo, en proyectos muy distintos. Aprendí a llevar las apps hasta el final: publicarlas en las tiendas, desplegarlas y mantenerlas funcionando.',
	'journey.2.chip.0': 'Liderazgo de equipo',
	'journey.2.chip.1': 'Publicación móvil',
	'journey.2.chip.2': 'Despliegues',
	'journey.3.where': 'Remoto · 2022',
	'journey.3.loc': 'Remoto · Chile',
	'journey.3.title': 'Trabajo remoto.',
	'journey.3.p1':
		'Pasé a trabajar 100% remoto, primero con Drimo y luego con ListoApp, una empresa de Chile: apps móviles y plataformas multi-tenant que atienden varios tipos de usuarios sobre infraestructura compartida.',
	'journey.4.where': 'Georgia, Estados Unidos · 2024',
	'journey.4.loc': 'Georgia, Estados Unidos',
	'journey.4.title': 'Una nueva base.',
	'journey.4.p1':
		'Me mudé a Estados Unidos y seguí construyendo en remoto, ahora enfocado en la conectividad hotelera de PriceTravel.',
	'journey.5.where': 'Hoy',
	'journey.5.loc': 'Lo que sigue',
	'journey.5.title': 'Lo que busco.',
	'journey.5.p1':
		'Un equipo con el que conectar, donde pueda aportar nuevas formas de construir software potenciadas con IA y entregar productos que resuelvan problemas concretos, de punta a punta.',
	'journey.5.p2':
		'Fuera del trabajo hago juegos con vibe coding, llevo la IA generativa al límite, corro y voy al gym. Nunca dejar de aprender.',
	'journey.5.chip.0': 'Enfoque de producto',
	'journey.5.chip.1': 'Desarrollo con IA',
	'journey.5.chip.2': 'De punta a punta',

	'cases.eyebrow': 'Trabajo seleccionado',
	'cases.title': 'Problemas reales, resultados medibles.',
	'case.socrates-curriculum-grounded-exam-generation.title': 'Exámenes en minutos, no en horas',
	'case.socrates-curriculum-grounded-exam-generation.summary': 'Convierte el currículo oficial en un examen editable en 10–15 minutos en lugar de 40–90.',
	'case.socrates-curriculum-grounded-exam-generation.sector': 'EdTech · República Dominicana',
	'case.hotel-connectivity-quote-performance.title': 'Cotizaciones hoteleras sincronizadas con el inventario en vivo',
	'case.hotel-connectivity-quote-performance.summary': 'Conexiones con proveedores y caché que mantienen las cotizaciones al día con menos carga en la base de datos.',
	'case.hotel-connectivity-quote-performance.sector': 'Travel-tech',
	'case.multi-tenant-saas-platform-apis.title': 'Una plataforma para aseguradoras, proveedores y agentes',
	'case.multi-tenant-saas-platform-apis.summary': 'Backends compartidos con notificaciones por eventos que mantienen a cada parte al día.',
	'case.multi-tenant-saas-platform-apis.sector': 'SaaS multi-tenant',
	'case.real-time-streaming-api.title': 'Resultados en vivo de 128 fuentes, en tiempo real',
	'case.real-time-streaming-api.summary': 'Un recolector concurrente y una API en streaming que emite un evento limpio por cada cambio.',
	'case.real-time-streaming-api.sector': 'Datos en tiempo real',

	'experience.eyebrow': 'Experiencia',
	'experience.title': 'Dónde he trabajado y qué mejoré.',
	'experience.highlights': 'Qué mejoré',
	'experience.pricetravel-holding.role': 'Backend Developer — Conectividad hotelera y cotización',
	'experience.pricetravel-holding.date': 'Jun 2024 – Presente',
	'experience.pricetravel-holding.location': 'Remoto · EE. UU.',
	'experience.pricetravel-holding.body':
		'Responsable de la conectividad con proveedores hoteleros y de las rutas de datos detrás del motor de cotización, trabajando con el equipo de cotización en precisión y tiempo de respuesta.',
	'experience.pricetravel-holding.highlight.0': 'Construí 5 integraciones nuevas con proveedores hoteleros y reforcé otras 4',
	'experience.pricetravel-holding.highlight.1':
		'Cacheé tasas de cambio y promociones en DAX, para que las cotizaciones dejaran de repetir consultas a la base de datos',
	'experience.pricetravel-holding.highlight.2': 'Mejoré la precisión de la conversión de moneda junto al equipo de cotización',
	'experience.listoapp.role': 'Backend Developer — Plataformas SaaS y cloud',
	'experience.listoapp.date': 'Feb 2024 – 2026',
	'experience.listoapp.location': 'Remoto · Chile',
	'experience.listoapp.body':
		'Entrega backend y cloud para los productos SaaS de la empresa y plataformas de clientes, desde el diseño de APIs hasta el rendimiento serverless y CI/CD.',
	'experience.listoapp.highlight.0': 'Reduje 50% el cold start de AWS Lambda con un paso de bundling previo al despliegue',
	'experience.listoapp.highlight.1': 'Notificaciones orientadas a eventos con SNS y EventBridge en productos multi-tenant',
	'experience.listoapp.highlight.2': 'API en tiempo real que transmite resultados en vivo de 128 fuentes sin duplicados',
	'experience.listoapp.highlight.3': 'CI/CD con GitHub Actions para despliegues automatizados en AWS',
	'experience.drimo.role': 'Software Developer',
	'experience.drimo.date': 'Jul 2022 – Jun 2023',
	'experience.drimo.location': 'Remoto',
	'experience.drimo.body':
		'Funcionalidades web y móviles para los productos de la empresa, junto con las APIs serverless y microservicios detrás de ellos.',
	'experience.drimo.highlight.0': 'Migré el sitio web y el blog a Next.js para cargar más rápido y mejorar el SEO',
	'experience.drimo.highlight.1': 'Hice más confiables y económicas de operar las APIs serverless en AWS',

	'contact.eyebrow': 'Siguiente paso',
	'contact.title': 'Construyamos algo juntos.',
	'contact.description':
		'Abierto a roles backend, de plataforma y de producto de punta a punta, remotos o híbridos. Si tu equipo está resolviendo un problema concreto, me gustaría saberlo.',
	'contact.direct': 'Contacto directo',
	'contact.location': 'Ubicación',
	'contact.location.value': 'Georgia, Estados Unidos',
	'contact.profiles': 'Perfiles',

	'footer.rights': 'Todos los derechos reservados.',
};

/** Returns `t(key, english)`: the Spanish string for `key` when locale is 'es', otherwise the English fallback. */
export function useTranslations(locale: Locale) {
	return (key: string, english: string) => (locale === 'es' ? es[key] ?? english : english);
}
