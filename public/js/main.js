/* ===========================================
   FUNERARIA LA CANDELARIA - JAVASCRIPT
   
   Este archivo contiene toda la lógica interactiva
   del sitio web de la funeraria.
   
   ÍNDICE DE FUNCIONES:
   1. Inicialización del DOM
   2. Menú de navegación móvil
   3. Header con scroll (sticky)
   4. Scroll suave para enlaces internos
   5. Validación del formulario de contacto
   6. Animaciones de entrada (Intersection Observer)
   7. Año actual en el footer
   8. Utilidades generales
   
   INSTRUCCIONES PARA MODIFICAR:
   - Número de WhatsApp: Cambiar en la variable WHATSAPP_NUMBER
   - Tiempo de animaciones: Ajustar ANIMATION_DELAY
   - Mensajes de error: Modificar objeto ERROR_MESSAGES
   =========================================== */

/* ===========================================
   CONFIGURACIÓN GLOBAL
   Variables que puedes modificar fácilmente
   =========================================== */

const CONFIG = {
    // Número de WhatsApp (con código de país, sin + ni espacios)
    WHATSAPP_NUMBER: '573001234567',
    
    // Tiempo en ms para mostrar el header con fondo al hacer scroll
    SCROLL_THRESHOLD: 50,
    
    // Retraso entre animaciones de elementos
    ANIMATION_DELAY: 100,
    
    // Tiempo que se muestra el mensaje de éxito del formulario
    SUCCESS_MESSAGE_DURATION: 5000
};

// Mensajes de error personalizados para el formulario
const ERROR_MESSAGES = {
    nombre: {
        required: 'Por favor, ingrese su nombre completo',
        minLength: 'El nombre debe tener al menos 3 caracteres'
    },
    telefono: {
        required: 'Por favor, ingrese su número de teléfono',
        pattern: 'Por favor, ingrese un número de teléfono válido'
    },
    email: {
        invalid: 'Por favor, ingrese un correo electrónico válido'
    },
    asunto: {
        required: 'Por favor, seleccione un asunto'
    },
    mensaje: {
        required: 'Por favor, escriba su mensaje',
        minLength: 'El mensaje debe tener al menos 10 caracteres'
    }
};

/* ===========================================
   1. INICIALIZACIÓN DEL DOM
   Espera a que el documento esté listo
   =========================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initMobileMenu();
    initStickyHeader();
    initSmoothScroll();
    initContactForm();
    initScrollAnimations();
    initCurrentYear();
    
    // Mensaje de bienvenida en consola para desarrolladores
    console.log('%c🕯️ Casa De Funeraria La Candelaria', 'font-size: 20px; font-weight: bold; color: #C9A24D;');
    console.log('%cSitio web desarrollado con respeto y profesionalismo.', 'color: #6B7280;');
});

/* ===========================================
   2. MENÚ DE NAVEGACIÓN MÓVIL
   Abre y cierra el menú hamburguesa
   =========================================== */

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.header__nav-link');
    
    if (!menuToggle || !mainNav) return;
    
    // Toggle del menú al hacer clic en el botón hamburguesa
    menuToggle.addEventListener('click', function() {
        const isOpen = mainNav.classList.contains('header__nav--open');
        
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Cerrar menú al presionar Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mainNav.classList.contains('header__nav--open')) {
            closeMenu();
        }
    });
    
    /**
     * Abre el menú móvil
     * Añade clases y actualiza atributos ARIA
     */
    function openMenu() {
        mainNav.classList.add('header__nav--open');
        menuToggle.classList.add('header__menu-toggle--active');
        menuToggle.setAttribute('aria-expanded', 'true');
        // Prevenir scroll del body cuando el menú está abierto
        document.body.style.overflow = 'hidden';
    }
    
    /**
     * Cierra el menú móvil
     * Remueve clases y actualiza atributos ARIA
     */
    function closeMenu() {
        mainNav.classList.remove('header__nav--open');
        menuToggle.classList.remove('header__menu-toggle--active');
        menuToggle.setAttribute('aria-expanded', 'false');
        // Restaurar scroll del body
        document.body.style.overflow = '';
    }
}

/* ===========================================
   3. HEADER CON SCROLL (STICKY)
   Cambia el estilo del header al hacer scroll
   =========================================== */

function initStickyHeader() {
    const header = document.getElementById('header');
    
    if (!header) return;
    
    // Verificar scroll inicial (por si la página se carga ya scrolleada)
    checkScroll();
    
    // Escuchar eventos de scroll con throttle para mejor rendimiento
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                checkScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    /**
     * Verifica la posición del scroll y actualiza el header
     */
    function checkScroll() {
        if (window.scrollY > CONFIG.SCROLL_THRESHOLD) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }
}

/* ===========================================
   4. SCROLL SUAVE PARA ENLACES INTERNOS
   Navegación fluida a las secciones
   =========================================== */

function initSmoothScroll() {
    // Seleccionar todos los enlaces que apuntan a anclas
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            
            // Ignorar si es solo "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                event.preventDefault();
                
                // Calcular la posición considerando el header fijo
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Scroll suave
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Actualizar el historial del navegador
                history.pushState(null, null, targetId);
            }
        });
    });
}

/* ===========================================
   5. VALIDACIÓN DEL FORMULARIO DE CONTACTO
   Validación en tiempo real y al enviar
   =========================================== */

function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    // Referencias a los campos
    const fields = {
        nombre: form.querySelector('#nombre'),
        telefono: form.querySelector('#telefono'),
        email: form.querySelector('#email'),
        asunto: form.querySelector('#asunto'),
        mensaje: form.querySelector('#mensaje')
    };
    
    // Referencias a los mensajes de error
    const errors = {
        nombre: form.querySelector('#nombreError'),
        telefono: form.querySelector('#telefonoError'),
        email: form.querySelector('#emailError'),
        asunto: form.querySelector('#asuntoError'),
        mensaje: form.querySelector('#mensajeError')
    };
    
    const submitBtn = form.querySelector('#submitBtn');
    const successMessage = form.querySelector('#formSuccess');
    
    // Validación en tiempo real (al salir del campo)
    Object.keys(fields).forEach(function(fieldName) {
        if (fields[fieldName]) {
            fields[fieldName].addEventListener('blur', function() {
                validateField(fieldName);
            });
            
            // Limpiar error al escribir
            fields[fieldName].addEventListener('input', function() {
                clearError(fieldName);
            });
        }
    });
    
    // Validación al enviar
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validar todos los campos
        let isValid = true;
        
        Object.keys(fields).forEach(function(fieldName) {
            if (!validateField(fieldName)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            submitForm();
        }
    });
    
    /**
     * Valida un campo específico
     * @param {string} fieldName - Nombre del campo a validar
     * @returns {boolean} - True si es válido
     */
    function validateField(fieldName) {
        const field = fields[fieldName];
        const value = field ? field.value.trim() : '';
        let isValid = true;
        let errorMessage = '';
        
        switch (fieldName) {
            case 'nombre':
                if (!value) {
                    isValid = false;
                    errorMessage = ERROR_MESSAGES.nombre.required;
                } else if (value.length < 3) {
                    isValid = false;
                    errorMessage = ERROR_MESSAGES.nombre.minLength;
                }
                break;
                
            case 'telefono':
                if (!value) {
                    isValid = false;
                    errorMessage = ERROR_MESSAGES.telefono.required;
                } else if (!/^[0-9\s\-\+]{7,15}$/.test(value)) {
                    isValid = false;
                    errorMessage = ERROR_MESSAGES.telefono.pattern;
                }
                break;
                
            case 'email':
                // Email es opcional, pero si se ingresa debe ser válido
                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    isValid = false;
                    errorMessage = ERROR_MESSAGES.email.invalid;
                }
                break;
                
            case 'asunto':
                if (!value) {
                    isValid = false;
                    errorMessage = ERROR_MESSAGES.asunto.required;
                }
                break;
                
            case 'mensaje':
                if (!value) {
                    isValid = false;
                    errorMessage = ERROR_MESSAGES.mensaje.required;
                } else if (value.length < 10) {
                    isValid = false;
                    errorMessage = ERROR_MESSAGES.mensaje.minLength;
                }
                break;
        }
        
        if (!isValid) {
            showError(fieldName, errorMessage);
        } else {
            clearError(fieldName);
        }
        
        return isValid;
    }
    
    /**
     * Muestra un mensaje de error para un campo
     * @param {string} fieldName - Nombre del campo
     * @param {string} message - Mensaje de error
     */
    function showError(fieldName, message) {
        const field = fields[fieldName];
        const error = errors[fieldName];
        
        if (field) {
            field.classList.add('form-input--error');
        }
        
        if (error) {
            error.textContent = message;
            error.classList.add('form-error--visible');
        }
    }
    
    /**
     * Limpia el error de un campo
     * @param {string} fieldName - Nombre del campo
     */
    function clearError(fieldName) {
        const field = fields[fieldName];
        const error = errors[fieldName];
        
        if (field) {
            field.classList.remove('form-input--error');
        }
        
        if (error) {
            error.textContent = '';
            error.classList.remove('form-error--visible');
        }
    }
    
    /**
     * Envía el formulario (simulado)
     * En producción, aquí irían las llamadas a la API
     */
    function submitForm() {
        // Mostrar estado de carga
        submitBtn.disabled = true;
        submitBtn.classList.add('form-submit--loading');
        
        // Simular envío (reemplazar con llamada real a API)
        setTimeout(function() {
            // Ocultar loading
            submitBtn.disabled = false;
            submitBtn.classList.remove('form-submit--loading');
            
            // Mostrar mensaje de éxito
            successMessage.classList.add('form-success--visible');
            
            // Limpiar formulario
            form.reset();
            
            // Ocultar mensaje de éxito después de un tiempo
            setTimeout(function() {
                successMessage.classList.remove('form-success--visible');
            }, CONFIG.SUCCESS_MESSAGE_DURATION);
            
            // Log para desarrollo (quitar en producción)
            console.log('Formulario enviado:', {
                nombre: fields.nombre.value,
                telefono: fields.telefono.value,
                email: fields.email.value,
                asunto: fields.asunto.value,
                mensaje: fields.mensaje.value
            });
            
        }, 1500); // Simula tiempo de respuesta del servidor
    }
}

/* ===========================================
   6. ANIMACIONES DE ENTRADA
   Usa Intersection Observer para animar
   elementos cuando entran en el viewport
   =========================================== */

function initScrollAnimations() {
    // Verificar soporte del navegador
    if (!('IntersectionObserver' in window)) {
        // Fallback: mostrar todos los elementos sin animación
        document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
            el.style.opacity = '1';
        });
        return;
    }
    
    // Configuración del observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px 0px -50px 0px', // trigger un poco antes
        threshold: 0.1 // 10% visible
    };
    
    // Callback cuando un elemento entra/sale del viewport
    const observerCallback = function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Añadir clase de animación
                entry.target.classList.add('animate-visible');
                // Dejar de observar (solo animar una vez)
                observer.unobserve(entry.target);
            }
        });
    };
    
    // Crear el observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Elementos a animar
    const animatedElements = document.querySelectorAll(
        '.about__card, .service-card, .plan-card, .contact__info-item'
    );
    
    // Preparar elementos para animación
    animatedElements.forEach(function(element, index) {
        // Ocultar inicialmente
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        // Añadir delay escalonado
        element.style.transitionDelay = (index % 3) * CONFIG.ANIMATION_DELAY + 'ms';
        // Observar
        observer.observe(element);
    });
    
    // Añadir estilos para el estado visible
    const style = document.createElement('style');
    style.textContent = `
        .animate-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/* ===========================================
   7. AÑO ACTUAL EN EL FOOTER
   Actualiza automáticamente el año del copyright
   =========================================== */

function initCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/* ===========================================
   8. UTILIDADES GENERALES
   Funciones auxiliares reutilizables
   =========================================== */

/**
 * Debounce: Limita la frecuencia de ejecución de una función
 * Útil para eventos que se disparan muy frecuentemente (scroll, resize)
 * 
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} - Función con debounce aplicado
 * 
 * Ejemplo de uso:
 * window.addEventListener('resize', debounce(function() {
 *     console.log('Resize terminado');
 * }, 250));
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle: Ejecuta una función máximo una vez cada X milisegundos
 * Útil para scroll y resize cuando necesitas actualizaciones periódicas
 * 
 * @param {Function} func - Función a ejecutar
 * @param {number} limit - Límite de tiempo en ms
 * @returns {Function} - Función con throttle aplicado
 * 
 * Ejemplo de uso:
 * window.addEventListener('scroll', throttle(function() {
 *     console.log('Scroll');
 * }, 100));
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, limit);
        }
    };
}

/**
 * Formatea un número de teléfono para WhatsApp
 * Remueve espacios, guiones y asegura formato correcto
 * 
 * @param {string} phone - Número de teléfono
 * @returns {string} - Número formateado
 */
function formatPhoneForWhatsApp(phone) {
    // Remover todo excepto números
    let cleaned = phone.replace(/\D/g, '');
    // Asegurar código de país (Colombia = 57)
    if (!cleaned.startsWith('57')) {
        cleaned = '57' + cleaned;
    }
    return cleaned;
}

/**
 * Genera un enlace de WhatsApp con mensaje predefinido
 * 
 * @param {string} phone - Número de teléfono
 * @param {string} message - Mensaje a enviar (opcional)
 * @returns {string} - URL de WhatsApp
 */
function generateWhatsAppLink(phone, message) {
    const formattedPhone = formatPhoneForWhatsApp(phone);
    let url = 'https://wa.me/' + formattedPhone;
    if (message) {
        url += '?text=' + encodeURIComponent(message);
    }
    return url;
}

/* ===========================================
   PUNTOS DE MEJORA FUTUROS
   
   Ideas para expandir la funcionalidad:
   
   1. Integración con backend real para el formulario
      - Conectar con API de envío de correos
      - Guardar mensajes en base de datos
   
   2. Galería de instalaciones
      - Lightbox para ver imágenes grandes
      - Lazy loading de imágenes
   
   3. Chat en vivo
      - Integración con servicios como Tawk.to o Crisp
   
   4. Testimonios
      - Carrusel de testimonios de familias
      - Sistema de valoraciones
   
   5. Blog
      - Artículos de apoyo al duelo
      - Noticias de la funeraria
   
   6. Multi-idioma
      - Soporte para inglés y español
   
   7. Modo oscuro
      - Toggle para cambiar entre temas
      - Respetar preferencia del sistema
   =========================================== */
