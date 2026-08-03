# Guía de Contribución — Mexterminio Balance

¡Agradecemos mucho tus aportes, propuestas de balance, mejoras en los mapas y sugerencias!

## Reglas de Idioma y Código

> [!IMPORTANT]
> 1. **Código en Inglés**: Todo el código de TypeScript, nombres de variables, propiedades de objetos y comentarios en el código deben escribirse en **Inglés**.
> 2. **Discusiones**: Las descripciones de los Pull Requests, razones de balanceo y comentarios en GitHub pueden escribirse en **Español** o **Inglés**.

## Guía de Balanceo

1. **Justificación**: Explica siempre el motivo de tus cambios en la descripción del Pull Request (ej. *"Se reduce el daño primario de Buchona de 20 a 18 para nivelar su tiempo de eliminación (TTK) con Jaguar"*).
2. **Límites de Esquema**: Mantén los valores dentro de límites razonables. Las estadísticas están validadas por esquemas de Zod (ej. la velocidad de movimiento debe estar entre `1.0` y `30.0`, y la vida entre `20` y `2000`).
3. **Pruebas Locales**: Asegúrate de que `npm run validate` pase sin errores antes de enviar tu PR.
4. **Sin Código Privado**: No incluyas código propietario del motor del juego ni rutas privadas en este repositorio.

¡Gracias por ayudar a balancear Mexterminio! 🇲🇽🔥
