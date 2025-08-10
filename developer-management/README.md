# Gestión de Developers - Angular Fundamentals

Una aplicación web para la gestión de desarrolladores de una empresa, desarrollada con Angular siguiendo los fundamentos del framework.

## 🚀 Características

- **Página de bienvenida** con diseño moderno y responsive
- **Header** con navegación y botón de cambio de tema (Dark/Light)
- **Lista de desarrolladores** con filtros por especialidad (Frontend/Backend)
- **Vista de detalle** de cada desarrollador
- **Formulario de edición** con validación
- **Formulario de añadir** nuevos desarrolladores
- **Funcionalidad de eliminar** desarrolladores (opcional)
- **Tema oscuro/claro** con persistencia
- **Diseño responsive** para móviles y tablets

## 🛠️ Tecnologías Utilizadas

- **Angular 17** - Framework principal
- **TypeScript** - Lenguaje de programación
- **CSS3** - Estilos y animaciones
- **HTML5** - Estructura semántica
- **JSON** - Datos de desarrolladores

## 📋 Requisitos del Sistema

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)
- Angular CLI

## 🔧 Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd developer-management
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación:**
   ```bash
   npm start
   ```

4. **Abrir en el navegador:**
   ```
   http://localhost:4200
   ```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── header/           # Componente del header
│   │   ├── welcome/          # Página de bienvenida
│   │   ├── developer-list/   # Lista de desarrolladores
│   │   ├── developer-detail/ # Detalle del desarrollador
│   │   └── developer-form/   # Formulario de añadir/editar
│   ├── services/
│   │   ├── developer.service.ts  # Servicio de gestión de datos
│   │   └── theme.service.ts      # Servicio de tema
│   ├── models/
│   │   └── developer.ts      # Interfaz del desarrollador
│   ├── assets/
│   │   └── developers.json   # Datos de desarrolladores
│   ├── app.routes.ts         # Configuración de rutas
│   ├── app.config.ts         # Configuración de la aplicación
│   └── app.component.ts      # Componente principal
├── styles.css               # Estilos globales
└── main.ts                  # Punto de entrada
```

## 🎯 Funcionalidades Implementadas

### ✅ Requisitos Cumplidos

1. **Página de bienvenida** - Diseño libre con header
2. **Header** - Botones "Mostrar usuarios", "Añadir usuario" y "Aspecto"
3. **Lista de desarrolladores** - Vista general con foto, nombre, apellidos, posición y botón "ver detalle"
4. **Filtros** - "Mostrar Frontend" y "Mostrar Backend"
5. **Vista de detalle** - Foto, nombre, apellidos, email, estado remoto, posición y botón "editar"
6. **Formulario de edición** - Campos editables con botones "Cancelar" y "Guardar"
7. **Formulario de añadir** - Nuevo desarrollador con validación
8. **Cambio de tema** - Botón "Aspecto" que cambia entre Dark/Light
9. **Eliminación** - Botón opcional para eliminar desarrolladores

### 🔧 Características Técnicas

- **HTML semántico** y CSS moderno
- **Router de Angular** para navegación
- **Directivas estructurales** (ngIf, ngFor)
- **Data binding** bidireccional
- **Interpolación** en templates
- **Lifecycle hooks** (ngOnInit)
- **Formularios template-driven**
- **Comunicación entre componentes** (@Input/@Output)
- **Servicios** para gestión de estado
- **Diseño responsive**

## 🎨 Diseño y UX

- **Diseño moderno** con gradientes y sombras
- **Animaciones suaves** y transiciones
- **Tema oscuro/claro** con persistencia
- **Responsive design** para todos los dispositivos
- **Iconos y badges** para mejor UX
- **Formularios intuitivos** con validación

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (hasta 767px)

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm start          # Ejecutar en modo desarrollo
npm run build      # Construir para producción
npm run serve      # Servir build de producción

# Testing
npm test           # Ejecutar tests unitarios
npm run test:watch # Tests en modo watch

# Linting
npm run lint       # Verificar código
npm run lint:fix   # Corregir problemas de linting
```

## 📊 Datos de Ejemplo

Los desarrolladores se cargan desde `src/assets/developers.json` con la siguiente estructura:

```json
{
  "id": 1,
  "name": "Ana",
  "surname": "García López",
  "email": "ana.garcia@empresa.com",
  "position": "Frontend Developer",
  "remote": true,
  "photo": "https://drive.google.com/file/d/1UURUjvM_Os_CUEUHc1_6-Lbqc4qdpovc/view/1"
}
```

## 🔄 Flujo de la Aplicación

1. **Página de bienvenida** → Navegación principal
2. **Lista de desarrolladores** → Ver todos o filtrar por especialidad
3. **Detalle del desarrollador** → Ver información completa
4. **Editar desarrollador** → Modificar datos existentes
5. **Añadir desarrollador** → Crear nuevo registro
6. **Eliminar desarrollador** → Borrar registro (opcional)

## 🎯 Evaluación de Competencias

Este proyecto demuestra competencias en:

- ✅ **Angular Fundamentals** - Uso correcto del framework
- ✅ **HTML semántico** - Estructura bien definida
- ✅ **CSS moderno** - Estilos y responsive design
- ✅ **TypeScript** - Tipado fuerte y interfaces
- ✅ **Router** - Navegación entre componentes
- ✅ **Directivas** - ngIf, ngFor, ngSwitch
- ✅ **Data Binding** - Two-way binding e interpolación
- ✅ **Lifecycle Hooks** - ngOnInit
- ✅ **Formularios** - Template-driven forms
- ✅ **Comunicación** - @Input/@Output entre componentes

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

Desarrollado como proyecto de evaluación para Angular Fundamentals.

---

**¡Disfruta gestionando tu equipo de desarrolladores! 🚀**
