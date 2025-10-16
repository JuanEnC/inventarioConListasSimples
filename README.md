# 📋 Inventario con Listas Simples

Este proyecto es una aplicación web que implementa un sistema de inventario usando **listas simples (listas enlazadas)** como estructura de datos principal, desarrollada con **HTML**, **CSS** y **JavaScript**.

---

## 🧰 Funcionalidades

- Crear o insertar productos al inventario  
- Eliminar productos  
- Buscar productos por código  
- Mostrar el inventario completo  

---

## 🗂 Estructura del proyecto

```

/inventarioConListasSimples
│
├── index.html           # Página principal de la interfaz
├── css/
│   └── main.css        # Estilos de la aplicación
├── js/
│   ├── inventario.js    # Lógica de la lista simple, operaciones CRUD
│   └── producto.js      # Clase o constructor para objetos producto
└── README.md             # Documentación del proyecto

````

---

## ⚙️ Tecnologías empleadas

- **HTML5** — estructura de la página  
- **CSS3** — estilos y presentación  
- **JavaScript (ES6+)** — lógica de listas enlazadas, manipulación del DOM  

---

## 🚀 Cómo ejecutar el proyecto

1. Clona el repositorio:
  ```
  git clone https://github.com/JuanEnC/inventarioConListasSimples.git
  ````

2. Entra en la carpeta del proyecto:

   ```
   cd inventarioConListasSimples
   ```

3. Abre `index.html` en tu navegador (lo puedes abrir directamente o servirlo con un servidor local).

4. Interactúa con la aplicación: agrega productos, busca, elimina, etc.

---

## 💡 Ejemplo de uso

* **Agregar producto**
  Ingresa nombre, código, cantidad y precio → haz clic en “Agregar”.

* **Buscar producto**
  Introduce el nombre o código → el sistema buscara en la lista simple y mostrará el resultado si lo encuentra.

* **Eliminar producto**
  Usa la opción de eliminar en el producto deseado → la lista se ajusta para mantener su integridad.

* **Mostrar inventario completo**
  Podrás ver todos los productos almacenados en la lista, en el orden que fueron insertados.

---

## 🔄 Función de listas simples

En este proyecto se aprovecha la estructura de **listas enlazadas simples**, lo que permite:

* Insertar elementos manteniendo enlaces entre nodos
* Recorrer la lista nodo por nodo
* Modificar enlaces para eliminar nodos
* No depender de índices fijos (como en arrays), sino referencias a nodos

---

## 👤 Autor

**JuanEnC**
🔗 Repositorio: [https://github.com/JuanEnC/inventarioConListasSimples](https://github.com/JuanEnC/inventarioConListasSimples)

---

## 📄 Licencia

Este proyecto está bajo la **licencia MIT**.

---
