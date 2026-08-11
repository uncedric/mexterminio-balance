# 🎮 Mexterminio — Balance de Juego y Constantes de Mapa

¡Bienvenido al repositorio público oficial de balance de juego y configuración de mapas para **[Mexterminio](https://mexterminio.com)**, el hero shooter multijugador open-source!

Este repositorio contiene los parámetros de estadísticas de héroes, ajuste de habilidades, tiempos de captura de beacons, coordenadas de reaparición (spawn), precios de la tienda y waypoints de navegación de la IA. La comunidad puede proponer y enviar Pull Requests con ajustes de balanceo y modificaciones de mapas.

---

> [!IMPORTANT]
>
> ### ⚠️ Regla de Idioma para el Código (Code Language Standard)
>
> **Todo el código del juego, nombres de variables, archivos, tipos e interfaces en TypeScript DEBEN estar redactados en INGLÉS.**  
> (_All game code, variable names, file names, TypeScript types, and property keys MUST be in English._)
>
> _Las descripciones de los Pull Requests, discusiones, incidencias (issues) y comentarios pueden ser en español o inglés._

---

## 🔗 Enlaces Oficiales y Comunidad

- 🕹️ **Jugar Mexterminio**: [https://mexterminio.com](https://mexterminio.com)
- 💬 **Comunidad en Discord**: [https://discord.gg/esAgFN3jw6](https://discord.gg/esAgFN3jw6)
- 🎨 **Repositorio de Assets 3D Públicos**: [mexterminio-assets](https://github.com/uncedric/mexterminio-assets)

---

## 🛠️ Cómo Contribuir con Ajustes de Balance

1. **Haz un Fork de este repositorio**.
2. **Edita los valores de balance** en `src/heros/`, `src/constants/` o `src/maps/`.
3. **Ejecuta las validaciones y pruebas locales**:
   ```bash
   npm install
   npm run validate
   ```
4. **Abre un Pull Request**. Nuestro sistema de integración continua (CI) evaluará automáticamente las reglas de rango seguro con Zod y publicará un **Reporte de Comparación de Balance** en tu PR.

---

## 📊 Estructura del Repositorio

- `src/heros/`: Estadísticas, velocidades de movimiento, daño, cooldowns y tipos de acciones para cada héroe.
- `src/constants/`: Tiempos de beacons, parámetros de matchmaking, duraciones de partidas y estadísticas de vehículos.
- `src/maps/`: Waypoints para bots de IA, posiciones de spawn y definiciones de áreas de mapa.
- `src/schemas/`: Esquemas de validación Zod que garantizan límites de balance lógicos.
- `tests/`: Pruebas de integración de datos y reglas de esquema.

---

## 📜 Licencia

[Licencia Apache-2.0](LICENSE) © Equipo Mexterminio
