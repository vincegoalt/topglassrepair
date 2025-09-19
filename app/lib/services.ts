import { Language, Service } from '../types';
import { normalizeSlug } from '../utils/slug';

export const services: Service[] = [
  {
    id: 'window-glass-replacement',
    name: {
      en: 'Window Glass Replacement',
      es: 'Reemplazo de Vidrios de Ventanas'
    },
    slug: {
      en: 'window-glass-replacement',
      es: 'reemplazo-vidrios-ventanas'
    },
    longTailKeywords: {
      en: [
        {
          title: "Residential Window Glass Replacement in [location]",
          description: "Upgrade your home's windows with high-quality glass replacement for better insulation and clarity. Call today for a free quote."
        },
        {
          title: "Commercial Window Glass Replacement in [location]",
          description: "Professional commercial window glass replacement for offices, retail stores, and high-rise buildings. Get a free estimate now!"
        },
        {
          title: "Double-Pane Window Glass Replacement in [location]",
          description: "Improve energy efficiency with double-pane window glass replacement. Reduce noise and lower energy bills. Call for a consultation."
        },
        {
          title: "Tempered Window Glass Replacement in [location]",
          description: "Durable and shatter-resistant tempered glass replacement for added safety and security. Contact us today for expert service."
        },
        {
          title: "Low-E Glass Window Replacement in [location]",
          description: "Upgrade to energy-efficient Low-E glass windows to reduce heat loss and UV damage. Call today for a free estimate."
        },
        {
          title: "Emergency Window Glass Replacement in [location]",
          description: "Fast and reliable emergency window glass replacement when you need it most. Available 24/7 for urgent replacements. Call now!"
        }
      ],
      es: [
        {
          title: "Reemplazo de Vidrios de Ventanas Residenciales en [location]",
          description: "Mejore las ventanas de su hogar con un reemplazo de vidrios de alta calidad para mejor aislamiento y claridad. Llame hoy para una cotización gratuita."
        },
        {
          title: "Reemplazo de Vidrios de Ventanas Comerciales en [location]",
          description: "Reemplazo profesional de vidrios de ventanas comerciales para oficinas, tiendas y edificios. ¡Obtenga un presupuesto gratis ahora!"
        },
        {
          title: "Reemplazo de Vidrios de Ventanas de Doble Panel en [location]",
          description: "Mejore la eficiencia energética con reemplazo de vidrios de doble panel. Reduzca el ruido y las facturas de energía. Llame para una consulta."
        },
        {
          title: "Reemplazo de Vidrios Templados para Ventanas en [location]",
          description: "Reemplazo de vidrio templado duradero y resistente a roturas para mayor seguridad. Contáctenos hoy para un servicio experto."
        },
        {
          title: "Reemplazo de Ventanas con Vidrio Low-E en [location]",
          description: "Actualice a ventanas con vidrio Low-E energéticamente eficientes para reducir la pérdida de calor y el daño UV. Llame hoy para un presupuesto gratuito."
        },
        {
          title: "Reemplazo de Vidrios de Ventanas de Emergencia en [location]",
          description: "Reemplazo de vidrios de ventanas rápido y confiable cuando más lo necesite. Disponible 24/7 para reemplazos urgentes. ¡Llame ahora!"
        }
      ]
    },
    description: {
      en: 'Professional window glass replacement services for residential and commercial properties. We handle all types of window repairs and replacements with precision and care.',
      es: 'Servicios profesionales de reemplazo de vidrios para ventanas en propiedades residenciales y comerciales. Manejamos todo tipo de reparaciones y reemplazos de ventanas con precisión y cuidado.'
    },
    imageUrl: 'https://portageglassandmirror.com/wp-content/uploads/2025/02/foggy-window-panes.jpeg',
    faqs: {
      en: [
        {
          question: "How do I know if my window glass needs replacement in [location]?",
          answer: "If your glass is cracked, foggy (in double-pane windows), or inefficient at insulation, replacement is the best option. Our [location] experts can assess your windows and recommend the best solution."
        },
        {
          question: "Can I replace just the glass instead of the entire window?",
          answer: "Yes! If the frame is in good condition, we can replace just the glass, saving you money. Our [location] team specializes in efficient, cost-effective glass replacement."
        },
        {
          question: "How long does window glass replacement take in [location]?",
          answer: "Most replacements in [location] take a few hours, but it depends on the size and type of window. We work efficiently to minimize disruption to your schedule."
        },
        {
          question: "Do you offer energy-efficient glass options in [location]?",
          answer: "Yes! We provide Low-E, double-pane, and insulated glass options in [location] for better energy savings. Our energy-efficient solutions help reduce your utility bills."
        }
      ],
      es: [
        {
          question: "¿Cómo sé si necesito reemplazar el vidrio de mi ventana en [location]?",
          answer: "Si el vidrio está agrietado, empañado (en ventanas de doble panel), o es ineficiente en el aislamiento, el reemplazo es la mejor opción. Nuestros expertos en [location] pueden evaluar sus ventanas y recomendar la mejor solución."
        },
        {
          question: "¿Puedo reemplazar solo el vidrio en lugar de toda la ventana?",
          answer: "¡Sí! Si el marco está en buenas condiciones, podemos reemplazar solo el vidrio, ahorrándole dinero. Nuestro equipo en [location] se especializa en reemplazo de vidrios eficiente y económico."
        },
        {
          question: "¿Cuánto tiempo toma el reemplazo de vidrios de ventanas en [location]?",
          answer: "La mayoría de los reemplazos en [location] toman algunas horas, pero depende del tamaño y tipo de ventana. Trabajamos eficientemente para minimizar la interrupción de su horario."
        },
        {
          question: "¿Ofrecen opciones de vidrio energéticamente eficientes en [location]?",
          answer: "¡Sí! Proporcionamos opciones de vidrio Low-E, doble panel y aislado en [location] para un mejor ahorro de energía. Nuestras soluciones energéticamente eficientes ayudan a reducir sus facturas de servicios públicos."
        }
      ]
    },
    features: {
      en: [
        'Emergency service available',
        'All glass types and sizes',
        'Energy-efficient options',
        'Professional installation',
        'Free estimates'
      ],
      es: [
        'Servicio de emergencia disponible',
        'Todo tipo y tamaño de vidrios',
        'Opciones energéticamente eficientes',
        'Instalación profesional',
        'Presupuestos gratuitos'
      ]
    }
  },
  {
    id: 'window-glass-repair',
    name: {
      en: 'Window Glass Repair',
      es: 'Reparación de Vidrios de Ventanas'
    },
    slug: {
      en: 'window-glass-repair',
      es: 'reparacion-vidrios-ventanas'
    },
    aliases: {
      en: ['glass-repair']
    },
    longTailKeywords: {
      en: [
        {
          title: "Cracked Window Glass Repair in [location]",
          description: "Quick and professional cracked window glass repair to prevent further damage. Call now for fast service!"
        },
        {
          title: "Foggy Window Glass Repair in [location]",
          description: "Fix foggy windows with our expert glass repair services. Restore clarity and insulation today. Get a free quote now."
        },
        {
          title: "Emergency Window Glass Repair in [location]",
          description: "Need urgent window glass repair? We offer same-day emergency services to keep your home or business secure. Call now!"
        },
        {
          title: "Sliding Window Glass Repair in [location]",
          description: "Smooth and efficient sliding window glass repair for easy operation and visibility. Contact us for an estimate today."
        },
        {
          title: "Insulated Glass Repair for Windows in [location]",
          description: "Repair damaged insulated glass windows and restore energy efficiency in your home or office. Call for expert service."
        },
        {
          title: "Window Seal Repair Services in [location]",
          description: "Expert window seal repair to eliminate drafts and moisture. Improve your window's performance today. Contact us for service!"
        }
      ],
      es: [
        {
          title: "Reparación de Vidrios Agrietados en [location]",
          description: "Reparación rápida y profesional de vidrios agrietados para prevenir daños mayores. ¡Llame ahora para un servicio rápido!"
        },
        {
          title: "Reparación de Vidrios Empañados en [location]",
          description: "Arregle ventanas empañadas con nuestros servicios expertos. Restaure la claridad y el aislamiento hoy. Obtenga una cotización gratis."
        },
        {
          title: "Reparación de Emergencia de Vidrios en [location]",
          description: "¿Necesita reparación urgente de vidrios? Ofrecemos servicios de emergencia el mismo día para mantener su propiedad segura. ¡Llame ahora!"
        },
        {
          title: "Reparación de Vidrios de Ventanas Corredizas en [location]",
          description: "Reparación suave y eficiente de vidrios de ventanas corredizas para una fácil operación y visibilidad. Contáctenos hoy para un presupuesto."
        },
        {
          title: "Reparación de Vidrios Aislantes para Ventanas en [location]",
          description: "Repare vidrios aislantes dañados y restaure la eficiencia energética en su hogar u oficina. Llame para un servicio experto."
        },
        {
          title: "Servicios de Reparación de Sellos de Ventanas en [location]",
          description: "Reparación experta de sellos de ventanas para eliminar corrientes de aire y humedad. Mejore el rendimiento de sus ventanas hoy. ¡Contáctenos para servicio!"
        }
      ]
    },
    description: {
      en: 'Expert window glass repair services to fix cracks, chips, and other damage. Fast, reliable service to restore your windows to perfect condition.',
      es: 'Servicios expertos de reparación de vidrios para arreglar grietas, astillas y otros daños. Servicio rápido y confiable para restaurar sus ventanas a una condición perfecta.'
    },
    imageUrl: 'https://portageglassandmirror.com/wp-content/uploads/2024/09/foggy-window-gpai.jpg',
    faqs: {
      en: [
        {
          question: "Can a cracked window be repaired in [location]?",
          answer: "Small cracks or chips in [location] can sometimes be repaired, but larger damage often requires replacement. Our experts will assess the damage and recommend the most cost-effective solution."
        },
        {
          question: "How soon should I repair a broken window in [location]?",
          answer: "Immediately! Cracks can spread quickly, especially in [location]'s climate, and broken glass poses safety risks. Contact us for prompt service to prevent further damage."
        },
        {
          question: "Do you offer same-day window glass repair in [location]?",
          answer: "Yes, we offer same-day repairs in [location], especially for urgent cases. Our local team is ready to respond quickly to your glass repair needs."
        },
        {
          question: "How much does window glass repair cost in [location]?",
          answer: "Repair costs in [location] depend on the extent of the damage. We provide free estimates to assess the repair cost and will recommend the most cost-effective solution for your situation."
        }
      ],
      es: [
        {
          question: "¿Se puede reparar una ventana agrietada en [location]?",
          answer: "Las grietas o astillas pequeñas en [location] a veces se pueden reparar, pero los daños más grandes generalmente requieren reemplazo. Nuestros expertos evaluarán el daño y recomendarán la solución más económica."
        },
        {
          question: "¿Qué tan pronto debo reparar una ventana rota en [location]?",
          answer: "¡Inmediatamente! Las grietas pueden expandirse rápidamente, especialmente en el clima de [location], y el vidrio roto representa riesgos de seguridad. Contáctenos para un servicio rápido y evitar daños mayores."
        },
        {
          question: "¿Ofrecen reparación de vidrios el mismo día en [location]?",
          answer: "Sí, ofrecemos reparaciones el mismo día en [location], especialmente para casos urgentes. Nuestro equipo local está listo para responder rápidamente a sus necesidades de reparación de vidrios."
        },
        {
          question: "¿Cuánto cuesta la reparación de vidrios de ventanas en [location]?",
          answer: "Los costos de reparación en [location] dependen del alcance del daño. Proporcionamos presupuestos gratuitos para evaluar el costo de la reparación y recomendaremos la solución más económica para su situación."
        }
      ]
    },
    features: {
      en: [
        'Same-day service',
        'Crack and chip repair',
        'Seal replacement',
        'Weather damage repair',
        'Commercial & residential'
      ],
      es: [
        'Servicio el mismo día',
        'Reparación de grietas y astillas',
        'Reemplazo de sellos',
        'Reparación de daños por clima',
        'Comercial y residencial'
      ]
    }
  },
  {
    id: 'custom-mirrors',
    name: {
      en: 'Custom Mirrors',
      es: 'Espejos Personalizados'
    },
    slug: {
      en: 'custom-mirrors',
      es: 'espejos-personalizados'
    },
    aliases: {
      en: ['mirror-installation'],
      es: ['instalacion-espejos']
    },
    longTailKeywords: {
      en: [
        {
          title: "Wall Mirror Installation in [location]",
          description: "Custom wall mirrors for home gyms, bathrooms, or decorative use. Get your personalized mirror today!"
        },
        {
          title: "Bathroom Vanity Mirror Installation in [location]",
          description: "Upgrade your bathroom with a stylish custom vanity mirror. Contact us for a free quote on installation."
        },
        {
          title: "Gym & Studio Mirror Installation in [location]",
          description: "Enhance your fitness space with large custom gym mirrors. Call now for expert installation services."
        },
        {
          title: "Antique & Decorative Mirror Installation in [location]",
          description: "Custom antique and decorative mirrors tailored to your interior design. Contact us for a consultation."
        },
        {
          title: "Beveled Edge Mirror Customization in [location]",
          description: "Add elegance to any space with custom beveled-edge mirrors. Get a free estimate today!"
        },
        {
          title: "LED Mirror Installation in [location]",
          description: "Modern LED mirrors for perfect lighting and style. Ideal for bathrooms and vanity areas. Schedule your installation today!"
        }
      ],
      es: [
        {
          title: "Instalación de Espejos de Pared en [location]",
          description: "Espejos de pared personalizados para gimnasios en casa, baños o uso decorativo. ¡Obtenga su espejo personalizado hoy!"
        },
        {
          title: "Instalación de Espejos de Tocador en [location]",
          description: "Mejore su baño con un elegante espejo de tocador personalizado. Contáctenos para una cotización gratuita de instalación."
        },
        {
          title: "Instalación de Espejos para Gimnasio y Estudio en [location]",
          description: "Mejore su espacio de ejercicio con grandes espejos personalizados. Llame ahora para servicios de instalación experta."
        },
        {
          title: "Instalación de Espejos Antiguos y Decorativos en [location]",
          description: "Espejos antiguos y decorativos personalizados adaptados a su diseño interior. Contáctenos para una consulta."
        },
        {
          title: "Personalización de Espejos con Borde Biselado en [location]",
          description: "Añada elegancia a cualquier espacio con espejos personalizados de borde biselado. ¡Obtenga un presupuesto gratis hoy!"
        },
        {
          title: "Instalación de Espejos LED en [location]",
          description: "Espejos LED modernos para una iluminación y estilo perfectos. Ideal para baños y áreas de tocador. ¡Programe su instalación hoy!"
        }
      ]
    },
    description: {
      en: 'Custom mirror solutions for any space. From wall mirrors to vanity mirrors, we create beautiful, perfectly fitted mirrors for your home or business.',
      es: 'Soluciones personalizadas de espejos para cualquier espacio. Desde espejos de pared hasta espejos de tocador, creamos espejos hermosos y perfectamente ajustados para su hogar o negocio.'
    },
    imageUrl: '/images/mirrored-walls-repairs.jpg',
    faqs: {
      en: [
        {
          question: "What types of custom mirrors do you offer in [location]?",
          answer: "In [location], we provide wall mirrors, vanity mirrors, gym mirrors, decorative mirrors, and more. Our custom solutions are tailored to fit any space or design preference."
        },
        {
          question: "Can you cut mirrors to specific sizes in [location]?",
          answer: "Yes! Our [location] team can cut and customize mirrors to fit your exact specifications. We ensure precise measurements and perfect fits for any space."
        },
        {
          question: "Do you offer framed and frameless mirror options in [location]?",
          answer: "Yes, we offer both framed and frameless mirrors in [location], including custom frames to match your decor. Our experts can help you choose the perfect style for your space."
        },
        {
          question: "How do I maintain my custom mirror in [location]?",
          answer: "For mirrors in [location], we recommend using a non-abrasive cleaner and a microfiber cloth to avoid streaks and scratches. Our team can provide specific care instructions for your mirror type."
        }
      ],
      es: [
        {
          question: "¿Qué tipos de espejos personalizados ofrecen en [location]?",
          answer: "En [location], proporcionamos espejos de pared, espejos de tocador, espejos de gimnasio, espejos decorativos y más. Nuestras soluciones personalizadas se adaptan a cualquier espacio o preferencia de diseño."
        },
        {
          question: "¿Pueden cortar espejos a medidas específicas en [location]?",
          answer: "¡Sí! Nuestro equipo en [location] puede cortar y personalizar espejos según sus especificaciones exactas. Aseguramos medidas precisas y ajustes perfectos para cualquier espacio."
        },
        {
          question: "¿Ofrecen opciones de espejos con y sin marco en [location]?",
          answer: "Sí, ofrecemos espejos con y sin marco en [location], incluyendo marcos personalizados para combinar con su decoración. Nuestros expertos pueden ayudarle a elegir el estilo perfecto para su espacio."
        },
        {
          question: "¿Cómo debo mantener mi espejo personalizado en [location]?",
          answer: "Para espejos en [location], recomendamos usar un limpiador no abrasivo y un paño de microfibra para evitar rayas y manchas. Nuestro equipo puede proporcionar instrucciones específicas de cuidado para su tipo de espejo."
        }
      ]
    },
    features: {
      en: [
        'Custom sizing',
        'Various edge finishes',
        'Installation included',
        'Multiple styles available',
        'Beveled options'
      ],
      es: [
        'Tamaños personalizados',
        'Varios acabados de bordes',
        'Instalación incluida',
        'Múltiples estilos disponibles',
        'Opciones biseladas'
      ]
    }
  },
  {
    id: 'glass-table-tops',
    name: {
      en: 'Glass Table Tops',
      es: 'Cubiertas de Vidrio para Mesas'
    },
    slug: {
      en: 'glass-table-tops',
      es: 'cubiertas-vidrio-mesas'
    },
    aliases: {
      en: ['glass-tabletop-replacement', 'glass-table-top'],
      es: ['cubiertas-cristal-mesas']
    },
    longTailKeywords: {
      en: [
        {
          title: "Custom Glass Table Top Replacement in [location]",
          description: "Protect your furniture with a custom-cut glass table top sized perfectly for your space. Call today for a free quote."
        },
        {
          title: "Tempered Glass Coffee Table Tops in [location]",
          description: "Upgrade your coffee table with durable tempered glass that resists scratches and heat. Schedule your installation now."
        },
        {
          title: "Round Glass Table Tops Cut to Size in [location]",
          description: "Get a flawless round glass top for dining tables, patio sets, and accent furniture. Fast turnaround available."
        },
        {
          title: "Glass Desk and Conference Table Tops in [location]",
          description: "Modernize your workspace with custom glass tops for desks and conference tables. Professional installation included."
        },
        {
          title: "Protective Glass Covers for Wood Tables in [location]",
          description: "Preserve valuable wood tables with a clear, beveled protective glass cover. Free in-home measurements."
        },
        {
          title: "Glass Table Tops with Beveled Edges in [location]",
          description: "Add elegance with beveled-edge glass table tops available in multiple thicknesses and finishes. Contact us for options."
        }
      ],
      es: [
        {
          title: "Reemplazo de Cubiertas de Vidrio para Mesas a Medida en [location]",
          description: "Proteja sus muebles con cubiertas de vidrio cortadas a medida para su espacio. Llame hoy para una cotización gratuita."
        },
        {
          title: "Cubiertas de Vidrio Templado para Mesas de Centro en [location]",
          description: "Actualice su mesa de centro con vidrio templado duradero que resiste rayones y calor. Programe su instalación ahora."
        },
        {
          title: "Cubiertas de Vidrio Redondas a Medida en [location]",
          description: "Obtenga una cubierta de vidrio redonda impecable para comedores, terrazas y muebles decorativos. Entrega rápida disponible."
        },
        {
          title: "Cubiertas de Vidrio para Escritorios y Mesas de Juntas en [location]",
          description: "Modernice su espacio de trabajo con cubiertas de vidrio personalizadas para escritorios y salas de juntas. Instalación profesional incluida."
        },
        {
          title: "Cubiertas Protectores de Vidrio para Mesas de Madera en [location]",
          description: "Preserve sus valiosas mesas de madera con una cubierta protectora de vidrio claro y biselado. Medidas en casa sin costo."
        },
        {
          title: "Cubiertas de Vidrio con Bordes Biselados en [location]",
          description: "Agregue elegancia con cubiertas de vidrio biseladas disponibles en varios grosores y acabados. Contáctenos para opciones."
        }
      ]
    },
    description: {
      en: 'Custom glass table tops cut to any shape with polished or beveled edges. Ideal for dining tables, coffee tables, desks, and furniture protection.',
      es: 'Cubiertas de vidrio personalizadas cortadas a cualquier forma con bordes pulidos o biselados. Ideales para comedores, mesas de centro, escritorios y protección de muebles.'
    },
    imageUrl: 'https://portageglassandmirror.com/wp-content/uploads/2025/02/glass-table-top.jpg',
    faqs: {
      en: [
        {
          question: "What glass thickness do you recommend for table tops in [location]?",
          answer: "For most tables in [location], we recommend 3/8\" tempered glass. Larger dining and conference tables may benefit from 1/2\" glass for extra stability."
        },
        {
          question: "Can you cut glass table tops to match unique shapes?",
          answer: "Yes, we custom-cut glass to match templates, curves, and unique furniture shapes. Our team provides precision measurements on-site."
        },
        {
          question: "Do you offer protective felt or bumper spacers for table tops?",
          answer: "Absolutely. We include clear bumpers or felt spacers to prevent sliding and protect the underlying surface."
        },
        {
          question: "How do I clean and maintain a glass table top?",
          answer: "Use a non-abrasive glass cleaner and microfiber cloth. Avoid harsh chemicals and place coasters under hot items to prevent thermal stress."
        }
      ],
      es: [
        {
          question: "¿Qué grosor de vidrio recomiendan para mesas en [location]?",
          answer: "Para la mayoría de las mesas en [location], recomendamos vidrio templado de 3/8\". Las mesas de comedor y juntas más grandes pueden beneficiarse de vidrio de 1/2\" para mayor estabilidad."
        },
        {
          question: "¿Pueden cortar cubiertas de vidrio para formas únicas?",
          answer: "Sí, cortamos vidrio a medida siguiendo plantillas, curvas y formas únicas de muebles. Nuestro equipo realiza mediciones precisas en el lugar."
        },
        {
          question: "¿Ofrecen topes protectores o espaciadores para las cubiertas?",
          answer: "Claro. Incluimos topes transparentes o espaciadores de fieltro para evitar deslizamientos y proteger la superficie inferior."
        },
        {
          question: "¿Cómo debo limpiar y mantener una cubierta de vidrio?",
          answer: "Use un limpiador de vidrio no abrasivo y un paño de microfibra. Evite químicos agresivos y coloque posavasos bajo objetos calientes para prevenir estrés térmico."
        }
      ]
    },
    features: {
      en: [
        'Tempered safety glass',
        'Custom shapes & sizes',
        'Edge polish & bevel options',
        'Furniture protection pads',
        'Residential & commercial'
      ],
      es: [
        'Vidrio templado de seguridad',
        'Formas y tamaños personalizados',
        'Opciones de borde pulido y biselado',
        'Protectores para muebles incluidos',
        'Residencial y comercial'
      ]
    }
  },
  {
    id: 'emergency-glass',
    name: {
      en: 'Emergency Glass Replacement',
      es: 'Reemplazo de Vidrios de Emergencia'
    },
    slug: {
      en: 'emergency-glass-replacement',
      es: 'reemplazo-vidrios-emergencia'
    },
    aliases: {
      en: ['emergency-glass-repair'],
      es: ['reparacion-vidrios-emergencia']
    },
    longTailKeywords: {
      en: [
        {
          title: "24/7 Emergency Glass Replacement in [location]",
          description: "Broken glass? We offer 24/7 emergency replacement services for homes and businesses. Call now for immediate assistance!"
        },
        {
          title: "Same-Day Glass Replacement Services in [location]",
          description: "Fast and reliable same-day glass replacement to secure your property. Contact us now!"
        },
        {
          title: "Storm-Damaged Glass Replacement in [location]",
          description: "Quick replacement for storm-damaged glass windows and doors. Get a free estimate today!"
        },
        {
          title: "Shattered Storefront Glass Replacement in [location]",
          description: "Keep your business secure with expert storefront glass replacement. We offer emergency service!"
        },
        {
          title: "Security Glass Installation & Replacement in [location]",
          description: "Upgrade to security glass for enhanced protection. Call us now for a consultation!"
        },
        {
          title: "After-Hours Glass Emergency Services in [location]",
          description: "Expert glass replacement available nights, weekends, and holidays. Don't wait - secure your property now!"
        }
      ],
      es: [
        {
          title: "Reemplazo de Vidrios de Emergencia 24/7 en [location]",
          description: "¿Vidrios rotos? Ofrecemos servicios de reemplazo de emergencia 24/7 para hogares y negocios. ¡Llame ahora para asistencia inmediata!"
        },
        {
          title: "Servicios de Reemplazo de Vidrios el Mismo Día en [location]",
          description: "Reemplazo de vidrios rápido y confiable el mismo día para asegurar su propiedad. ¡Contáctenos ahora!"
        },
        {
          title: "Reemplazo de Vidrios Dañados por Tormentas en [location]",
          description: "Reemplazo rápido de vidrios de ventanas y puertas dañados por tormentas. ¡Obtenga un presupuesto gratis hoy!"
        },
        {
          title: "Reemplazo de Vidrios de Fachada Rotos en [location]",
          description: "Mantenga su negocio seguro con reemplazo experto de vidrios de fachada. ¡Ofrecemos servicio de emergencia!"
        },
        {
          title: "Instalación y Reemplazo de Vidrios de Seguridad en [location]",
          description: "Actualice a vidrios de seguridad para mayor protección. ¡Llámenos ahora para una consulta!"
        },
        {
          title: "Servicios de Emergencia de Vidrios Fuera de Horario en [location]",
          description: "Reemplazo experto de vidrios disponible noches, fines de semana y días festivos. ¡No espere - asegure su propiedad ahora!"
        }
      ]
    },
    description: {
      en: '24/7 emergency glass replacement services. Quick response times and professional service when you need it most.',
      es: 'Servicios de reemplazo de vidrios de emergencia las 24/7. Tiempos de respuesta rápidos y servicio profesional cuando más lo necesita.'
    },
    imageUrl: '/images/glass-repair-near-me.jpg',
    faqs: {
      en: [
        {
          question: "What qualifies as an emergency glass replacement in [location]?",
          answer: "In [location], any broken glass that compromises security or safety qualifies as an emergency, such as shattered windows, broken storefronts, or damaged entry doors. We prioritize these situations for immediate response."
        },
        {
          question: "Do you offer 24/7 emergency glass replacement in [location]?",
          answer: "Yes! We provide round-the-clock emergency services in [location] to secure your property as quickly as possible, any time of day or night."
        },
        {
          question: "How quickly can you respond to emergencies in [location]?",
          answer: "Our [location] team aims for rapid response times, typically arriving within 1-2 hours. We can also install temporary solutions if needed until permanent replacement glass is available."
        },
        {
          question: "What should I do while waiting for emergency service in [location]?",
          answer: "While waiting for our team to arrive in [location], secure the area to prevent injury, document the damage for insurance if applicable, and avoid touching broken glass. We'll handle the cleanup and replacement safely."
        }
      ],
      es: [
        {
          question: "¿Qué califica como un reemplazo de vidrios de emergencia en [location]?",
          answer: "En [location], cualquier vidrio roto que comprometa la seguridad califica como emergencia, como ventanas rotas, vidrieras dañadas o puertas de entrada dañadas. Priorizamos estas situaciones para una respuesta inmediata."
        },
        {
          question: "¿Ofrecen reemplazo de vidrios de emergencia 24/7 en [location]?",
          answer: "¡Sí! Proporcionamos servicios de emergencia las 24 horas en [location] para asegurar su propiedad lo más rápido posible, a cualquier hora del día o de la noche."
        },
        {
          question: "¿Qué tan rápido pueden responder a emergencias en [location]?",
          answer: "Nuestro equipo en [location] busca tiempos de respuesta rápidos, típicamente llegando dentro de 1-2 horas. También podemos instalar soluciones temporales si es necesario hasta que el vidrio de reemplazo permanente esté disponible."
        },
        {
          question: "¿Qué debo hacer mientras espero el servicio de emergencia en [location]?",
          answer: "Mientras espera que nuestro equipo llegue en [location], asegure el área para prevenir lesiones, documente el daño para el seguro si corresponde, y evite tocar el vidrio roto. Nosotros nos encargaremos de la limpieza y el reemplazo de manera segura."
        }
      ]
    },
    features: {
      en: [
        '24/7 availability',
        'Rapid response',
        'Temporary solutions available',
        'All glass types',
        'Security priority'
      ],
      es: [
        'Disponibilidad 24/7',
        'Respuesta rápida',
        'Soluciones temporales disponibles',
        'Todo tipo de vidrios',
        'Prioridad de seguridad'
      ]
    }
  },
  {
    id: 'shower-doors',
    name: {
      en: 'Shower Doors',
      es: 'Puertas de Ducha'
    },
    slug: {
      en: 'shower-doors',
      es: 'puertas-ducha'
    },
    aliases: {
      en: ['shower-door-installation'],
      es: ['instalacion-puertas-ducha']
    },
    description: {
      en: 'Custom shower door installation and repair. From frameless to semi-frameless designs, we offer beautiful solutions for your bathroom.',
      es: 'Instalación y reparación de puertas de ducha personalizadas. Desde diseños sin marco hasta semi-sin marco, ofrecemos hermosas soluciones para su baño.'
    },
    imageUrl: '/images/Glass-Shower-Door.jpg',
    longTailKeywords: {
      en: [
        {
          title: "Frameless Shower Glass Door Installation in [location]",
          description: "Expert frameless shower glass door installation for a sleek, modern look. Call (562) 436-2616 today for a free estimate."
        },
        {
          title: "Framed Shower Glass Door Installation in [location]",
          description: "Professional framed shower glass door installation for a classic, sturdy design. Contact (562) 436-2616 for a quote."
        },
        {
          title: "Custom Shower Glass Installation in [location]",
          description: "Get custom shower glass tailored to your bathroom's exact specifications. Call (562) 436-2616 for a free consultation."
        },
        {
          title: "Sliding Shower Glass Installation in [location]",
          description: "Space-saving sliding shower glass installation. Enhance your bathroom with a smooth, modern door. Call (562) 436-2616."
        },
        {
          title: "Shower Glass Panel Installation in [location]",
          description: "Professional shower glass panel installation for a seamless, open bathroom design. Get a free estimate at (562) 436-2616."
        },
        {
          title: "Pivot Shower Glass Installation in [location]",
          description: "Install a pivot shower glass for easy access and modern functionality. Call (562) 436-2616 today for a quote."
        },
        {
          title: "Shower Glass Replacement in [location]",
          description: "Replace damaged or old shower glass with our expert replacement services. Contact (562) 436-2616 today for an estimate."
        },
        {
          title: "Walk-in Shower Glass Installation in [location]",
          description: "Upgrade to a walk-in shower with custom glass installation for a spacious, modern look. Contact (562) 436-2616 now."
        },
        {
          title: "Shower Glass Door Repair in [location]",
          description: "Fast and reliable shower glass repair services to fix leaks, cracks, or misalignment. Call (562) 436-2616 for a quote."
        },
        {
          title: "Tempered Shower Glass Installation in [location]",
          description: "Safe and durable tempered shower glass installation. Perfect for modern and family-friendly bathrooms. Call (562) 436-2616 for details."
        },
        {
          title: "Curbless Shower Glass Installation in [location]",
          description: "Transform your bathroom with a sleek curbless shower glass installation for easy accessibility. Call (562) 436-2616 for a quote."
        },
        {
          title: "Corner Shower Glass Enclosures in [location]",
          description: "Stylish corner shower enclosures for optimal space utilization. Call (562) 436-2616 for a free consultation and quote."
        }
      ],
      es: [
        {
          title: "Instalación de Puertas de Ducha sin Marco en [location]",
          description: "Instalación experta de puertas de ducha sin marco para un aspecto moderno y elegante. Llame al (562) 436-2616 hoy para un presupuesto gratuito."
        },
        {
          title: "Instalación de Puertas de Ducha con Marco en [location]",
          description: "Instalación profesional de puertas de ducha con marco para un diseño clásico y resistente. Contacte al (562) 436-2616 para una cotización."
        },
        {
          title: "Instalación de Vidrio de Ducha Personalizado en [location]",
          description: "Obtenga vidrio de ducha personalizado adaptado a las especificaciones exactas de su baño. Llame al (562) 436-2616 para una consulta gratuita."
        },
        {
          title: "Instalación de Puertas Corredizas de Ducha en [location]",
          description: "Instalación de puertas corredizas que ahorran espacio. Mejore su baño con una puerta moderna y suave. Llame al (562) 436-2616."
        },
        {
          title: "Instalación de Paneles de Vidrio para Ducha en [location]",
          description: "Instalación profesional de paneles de vidrio para un diseño de baño abierto y sin interrupciones. Obtenga un presupuesto gratuito al (562) 436-2616."
        },
        {
          title: "Instalación de Vidrio Pivotante para Ducha en [location]",
          description: "Instale un vidrio pivotante para un acceso fácil y funcionalidad moderna. Llame al (562) 436-2616 hoy para una cotización."
        },
        {
          title: "Reemplazo de Vidrio de Ducha en [location]",
          description: "Reemplace el vidrio dañado o antiguo con nuestros servicios expertos de reemplazo. Contacte al (562) 436-2616 hoy para un presupuesto."
        },
        {
          title: "Instalación de Vidrio para Ducha sin Puerta en [location]",
          description: "Actualice a una ducha sin puerta con instalación de vidrio personalizado para un aspecto espacioso y moderno. Contacte al (562) 436-2616 ahora."
        },
        {
          title: "Reparación de Puertas de Ducha de Vidrio en [location]",
          description: "Servicios rápidos y confiables de reparación para arreglar fugas, grietas o desalineación. Llame al (562) 436-2616 para una cotización."
        },
        {
          title: "Instalación de Vidrio Templado para Ducha en [location]",
          description: "Instalación segura y duradera de vidrio templado. Perfecto para baños modernos y familiares. Llame al (562) 436-2616 para detalles."
        },
        {
          title: "Instalación de Vidrio para Ducha sin Bordillo en [location]",
          description: "Transforme su baño con una elegante instalación sin bordillo para fácil accesibilidad. Llame al (562) 436-2616 para una cotización."
        },
        {
          title: "Mamparas de Vidrio para Ducha en Esquina en [location]",
          description: "Elegantes mamparas en esquina para un uso óptimo del espacio. Llame al (562) 436-2616 para una consulta y cotización gratuita."
        }
      ]
    },
    faqs: {
      en: [
        {
          question: "What types of glass shower doors do you offer in [location]?",
          answer: "In [location], we offer frameless, semi-frameless, and framed shower doors in various styles and glass types. Our experts can help you choose the perfect option for your bathroom's design and budget."
        },
        {
          question: "Can you install custom-sized shower doors in [location]?",
          answer: "Yes! Our [location] team specializes in custom shower door installations. We take precise measurements to ensure a perfect fit for your unique shower space, regardless of size or shape."
        },
        {
          question: "Are your glass shower doors easy to maintain in [location]?",
          answer: "Yes, we offer water-resistant and anti-spot glass options in [location] for easier maintenance. We also provide care instructions and recommend specific cleaning products for long-lasting clarity."
        },
        {
          question: "How long does shower door installation take in [location]?",
          answer: "Most shower door installations in [location] take 2-4 hours, depending on the complexity of the design and any custom features. We work efficiently while ensuring proper installation and water-tight seals."
        }
      ],
      es: [
        {
          question: "¿Qué tipos de puertas de ducha de vidrio ofrecen en [location]?",
          answer: "En [location], ofrecemos puertas de ducha sin marco, semi-sin marco y con marco en varios estilos y tipos de vidrio. Nuestros expertos pueden ayudarle a elegir la opción perfecta para el diseño y presupuesto de su baño."
        },
        {
          question: "¿Pueden instalar puertas de ducha de tamaño personalizado en [location]?",
          answer: "¡Sí! Nuestro equipo en [location] se especializa en instalaciones de puertas de ducha personalizadas. Tomamos medidas precisas para asegurar un ajuste perfecto para su espacio único de ducha, sin importar el tamaño o la forma."
        },
        {
          question: "¿Son fáciles de mantener sus puertas de ducha de vidrio en [location]?",
          answer: "Sí, ofrecemos opciones de vidrio resistente al agua y anti-manchas en [location] para un mantenimiento más fácil. También proporcionamos instrucciones de cuidado y recomendamos productos de limpieza específicos para una claridad duradera."
        },
        {
          question: "¿Cuánto tiempo toma la instalación de una puerta de ducha en [location]?",
          answer: "La mayoría de las instalaciones de puertas de ducha en [location] toman 2-4 horas, dependiendo de la complejidad del diseño y las características personalizadas. Trabajamos eficientemente mientras aseguramos una instalación adecuada y sellos herméticos."
        }
      ]
    },
    features: {
      en: [
        'Frameless options',
        'Custom designs',
        'Professional installation',
        'Various glass types',
        'Hardware options'
      ],
      es: [
        'Opciones sin marco',
        'Diseños personalizados',
        'Instalación profesional',
        'Varios tipos de vidrio',
        'Opciones de herrajes'
      ]
    }
  },
  {
    id: 'commercial-glass',
    name: {
      en: 'Commercial Glass',
      es: 'Vidrios Comerciales'
    },
    slug: {
      en: 'commercial-glass',
      es: 'vidrios-comerciales'
    },
    longTailKeywords: {
      en: [
        {
          title: "Office Glass Partition Installation in [location]",
          description: "Modern and stylish office glass partitions for open, professional workspaces. Call us today!"
        },
        {
          title: "Commercial Glass Window Replacement in [location]",
          description: "Upgrade your commercial property with energy-efficient glass window replacements. Get a free quote now."
        },
        {
          title: "Security Glass Installation for Businesses in [location]",
          description: "Protect your business with durable security glass installation. Contact us for a consultation."
        },
        {
          title: "Frosted & Tinted Glass for Offices in [location]",
          description: "Enhance privacy and style with custom frosted and tinted glass for your office. Call now for expert installation."
        },
        {
          title: "Glass Wall Installation for Conference Rooms in [location]",
          description: "Create a modern and sleek office with glass wall partitions for conference rooms. Get a free estimate today."
        },
        {
          title: "Smart Glass Installation for Offices in [location]",
          description: "Transform your office with switchable smart glass technology. Perfect for modern workspaces. Contact us for details!"
        }
      ],
      es: [
        {
          title: "Instalación de Particiones de Vidrio para Oficinas en [location]",
          description: "Particiones de vidrio modernas y elegantes para espacios de trabajo profesionales y abiertos. ¡Llámenos hoy!"
        },
        {
          title: "Reemplazo de Ventanas de Vidrio Comercial en [location]",
          description: "Actualice su propiedad comercial con reemplazos de ventanas de vidrio energéticamente eficientes. Obtenga una cotización gratis ahora."
        },
        {
          title: "Instalación de Vidrios de Seguridad para Negocios en [location]",
          description: "Proteja su negocio con instalación de vidrios de seguridad duraderos. Contáctenos para una consulta."
        },
        {
          title: "Vidrios Esmerilados y Tintados para Oficinas en [location]",
          description: "Mejore la privacidad y el estilo con vidrios esmerilados y tintados personalizados para su oficina. Llame ahora para una instalación experta."
        },
        {
          title: "Instalación de Paredes de Vidrio para Salas de Conferencias en [location]",
          description: "Cree una oficina moderna y elegante con particiones de vidrio para salas de conferencias. Obtenga un presupuesto gratis hoy."
        },
        {
          title: "Instalación de Vidrios Inteligentes para Oficinas en [location]",
          description: "Transforme su oficina con tecnología de vidrios inteligentes conmutables. Perfecto para espacios de trabajo modernos. ¡Contáctenos para detalles!"
        }
      ]
    },
    description: {
      en: 'Comprehensive commercial glass solutions for businesses. From storefronts to office partitions, we handle all commercial glass needs.',
      es: 'Soluciones integrales de vidrios comerciales para empresas. Desde fachadas hasta particiones de oficina, manejamos todas las necesidades de vidrios comerciales.'
    },
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5e7e17212957cc2180095580/6331c7a2-0b38-4461-94d8-5998137dcee2/Brownstone+South+Detail.jpg',
    faqs: {
      en: [
        {
          question: "What types of commercial glass services do you provide in [location]?",
          answer: "In [location], we handle all commercial glass needs including storefronts, office partitions, security glass, display cases, and custom solutions. Our team is experienced with various commercial applications."
        },
        {
          question: "Can you install energy-efficient glass for commercial buildings in [location]?",
          answer: "Yes! We offer a range of energy-efficient glass solutions in [location], including Low-E, insulated, and tinted glass options. These can help reduce your building's energy costs significantly."
        },
        {
          question: "Do you offer custom glass solutions for businesses in [location]?",
          answer: "Absolutely! Our [location] team specializes in custom commercial glass solutions. Whether you need unique partitions, specialized display cases, or custom storefronts, we can create exactly what your business needs."
        },
        {
          question: "Do you provide emergency commercial glass services in [location]?",
          answer: "Yes, we offer 24/7 emergency services for businesses in [location]. We understand that broken commercial glass can impact your security and operations, so we prioritize rapid response times."
        }
      ],
      es: [
        {
          question: "¿Qué tipos de servicios de vidrios comerciales proporcionan en [location]?",
          answer: "En [location], manejamos todas las necesidades de vidrios comerciales, incluyendo fachadas, particiones de oficina, vidrio de seguridad, vitrinas y soluciones personalizadas. Nuestro equipo tiene experiencia en diversas aplicaciones comerciales."
        },
        {
          question: "¿Pueden instalar vidrios energéticamente eficientes para edificios comerciales en [location]?",
          answer: "¡Sí! Ofrecemos una variedad de soluciones de vidrio energéticamente eficientes en [location], incluyendo opciones de vidrio Low-E, aislado y tintado. Estas pueden ayudar a reducir significativamente los costos de energía de su edificio."
        },
        {
          question: "¿Ofrecen soluciones de vidrio personalizadas para negocios en [location]?",
          answer: "¡Absolutamente! Nuestro equipo en [location] se especializa en soluciones de vidrio comercial personalizadas. Ya sea que necesite particiones únicas, vitrinas especializadas o fachadas personalizadas, podemos crear exactamente lo que su negocio necesita."
        },
        {
          question: "¿Proporcionan servicios de vidrios comerciales de emergencia en [location]?",
          answer: "Sí, ofrecemos servicios de emergencia 24/7 para negocios en [location]. Entendemos que los vidrios comerciales rotos pueden afectar su seguridad y operaciones, por lo que priorizamos tiempos de respuesta rápidos."
        }
      ]
    },
    features: {
      en: [
        'Storefront systems',
        'Security glass',
        'Office partitions',
        'Display cases',
        'Custom solutions'
      ],
      es: [
        'Sistemas de fachada',
        'Vidrio de seguridad',
        'Particiones de oficina',
        'Vitrinas',
        'Soluciones personalizadas'
      ]
    }
  },
  {
    id: 'storefront-glass',
    name: {
      en: 'Storefront Glass',
      es: 'Vidrios para Fachadas'
    },
    slug: {
      en: 'storefront-glass',
      es: 'vidrios-fachadas'
    },
    longTailKeywords: {
      en: [
        {
          title: "Storefront Glass Installation & Replacement in [location]",
          description: "High-quality storefront glass installation and replacement for businesses. Call now for expert service!"
        },
        {
          title: "Custom Storefront Glass Design in [location]",
          description: "Unique and branded storefront glass designs to make your business stand out. Get a free consultation today!"
        },
        {
          title: "Storefront Security Glass Installation in [location]",
          description: "Protect your business with impact-resistant security glass for storefronts. Contact us for expert installation."
        },
        {
          title: "Bulletproof & Tempered Storefront Glass Installation in [location]",
          description: "Upgrade to bulletproof or tempered storefront glass for added security. Call today for a consultation."
        },
        {
          title: "Frosted & Tinted Storefront Glass Solutions in [location]",
          description: "Enhance your business's privacy and aesthetics with custom frosted or tinted storefront glass. Get a quote today!"
        },
        {
          title: "Energy-Efficient Storefront Glass Solutions in [location]",
          description: "Save on energy costs with our high-performance storefront glass options. Perfect for modern businesses. Get a quote now!"
        }
      ],
      es: [
        {
          title: "Instalación y Reemplazo de Vidrios para Fachadas en [location]",
          description: "Instalación y reemplazo de vidrios de alta calidad para fachadas comerciales. ¡Llame ahora para un servicio experto!"
        },
        {
          title: "Diseño Personalizado de Vidrios para Fachadas en [location]",
          description: "Diseños únicos y personalizados de vidrios para fachadas que hacen destacar su negocio. ¡Obtenga una consulta gratuita hoy!"
        },
        {
          title: "Instalación de Vidrios de Seguridad para Fachadas en [location]",
          description: "Proteja su negocio con vidrios resistentes a impactos para fachadas. Contáctenos para una instalación experta."
        },
        {
          title: "Instalación de Vidrios Antibalas y Templados para Fachadas en [location]",
          description: "Actualice a vidrios antibalas o templados para mayor seguridad en su fachada. Llame hoy para una consulta."
        },
        {
          title: "Soluciones de Vidrios Esmerilados y Tintados para Fachadas en [location]",
          description: "Mejore la privacidad y estética de su negocio con vidrios esmerilados o tintados personalizados para fachadas. ¡Obtenga una cotización hoy!"
        }
      ]
    },
    description: {
      en: 'Professional storefront glass installation and repair services. Create an inviting entrance for your business with our expert solutions.',
      es: 'Servicios profesionales de instalación y reparación de vidrios para fachadas. Cree una entrada acogedora para su negocio con nuestras soluciones expertas.'
    },
    imageUrl: '/images/storefront-glass-company.jpg',
    faqs: {
      en: [
        {
          question: "What types of storefront glass do you install in [location]?",
          answer: "In [location], we install various types of storefront glass including tempered, laminated, tinted, and energy-efficient options. We can help you choose the best glass solution for your business's needs and local building codes."
        },
        {
          question: "How long does storefront glass installation take in [location]?",
          answer: "Most storefront installations in [location] take 1-2 days, depending on the size and complexity. We work efficiently to minimize disruption to your business operations."
        },
        {
          question: "Can you customize storefront glass with logos or tinting in [location]?",
          answer: "Yes! We offer various customization options in [location], including etched logos, frosted designs, and custom tinting. Our team can help create a unique and professional look for your storefront."
        },
        {
          question: "Do you provide emergency storefront glass repair in [location]?",
          answer: "Yes, we offer 24/7 emergency repair services in [location]. If your storefront glass is damaged, we'll respond quickly to secure your property and can provide temporary or permanent solutions as needed."
        }
      ],
      es: [
        {
          question: "¿Qué tipos de vidrios para fachadas instalan en [location]?",
          answer: "En [location], instalamos varios tipos de vidrios para fachadas, incluyendo templado, laminado, tintado y opciones energéticamente eficientes. Podemos ayudarle a elegir la mejor solución de vidrio para las necesidades de su negocio y los códigos de construcción locales."
        },
        {
          question: "¿Cuánto tiempo toma la instalación de vidrios para fachadas en [location]?",
          answer: "La mayoría de las instalaciones de fachadas en [location] toman 1-2 días, dependiendo del tamaño y la complejidad. Trabajamos eficientemente para minimizar la interrupción de las operaciones de su negocio."
        },
        {
          question: "¿Pueden personalizar los vidrios de fachada con logos o tintado en [location]?",
          answer: "¡Sí! Ofrecemos varias opciones de personalización en [location], incluyendo logos grabados, diseños esmerilados y tintado personalizado. Nuestro equipo puede ayudar a crear un aspecto único y profesional para su fachada."
        },
        {
          question: "¿Proporcionan reparación de emergencia para vidrios de fachada en [location]?",
          answer: "Sí, ofrecemos servicios de reparación de emergencia 24/7 en [location]. Si su vidrio de fachada está dañado, responderemos rápidamente para asegurar su propiedad y podemos proporcionar soluciones temporales o permanentes según sea necesario."
        }
      ]
    },
    features: {
      en: [
        'Custom designs',
        'Security options',
        'Energy efficient',
        'ADA compliant',
        'Maintenance services'
      ],
      es: [
        'Diseños personalizados',
        'Opciones de seguridad',
        'Energéticamente eficiente',
        'Cumple con ADA',
        'Servicios de mantenimiento'
      ]
    }
  }
];

export interface ServiceMatch {
  service: Service;
  canonicalSlug: string;
  shouldRedirect: boolean;
}

function matchesServiceSlug(service: Service, lang: Language, slug: string): boolean {
  const canonicalSlug = normalizeSlug(service.slug[lang]);
  if (canonicalSlug === slug) {
    return true;
  }

  const aliases = service.aliases?.[lang];
  return Boolean(aliases && aliases.some(alias => normalizeSlug(alias) === slug));
}

export function findServiceBySlug(slug: string, lang: Language): ServiceMatch | null {
  const normalizedSlug = normalizeSlug(slug);
  const languageMatch = services.find(service => matchesServiceSlug(service, lang, normalizedSlug));

  if (languageMatch) {
    const canonicalSlug = languageMatch.slug[lang];
    return {
      service: languageMatch,
      canonicalSlug,
      shouldRedirect: normalizedSlug !== normalizeSlug(canonicalSlug)
    };
  }

  const fallbackLang: Language = lang === 'en' ? 'es' : 'en';
  const fallbackMatch = services.find(service => matchesServiceSlug(service, fallbackLang, normalizedSlug));

  if (fallbackMatch) {
    return {
      service: fallbackMatch,
      canonicalSlug: fallbackMatch.slug[lang],
      shouldRedirect: true
    };
  }

  return null;
}
