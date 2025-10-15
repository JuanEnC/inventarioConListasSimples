class Inventario {
  constructor() {
    this.primero = null;
  }
  agregar(producto) {
    let temp = this.primero;
    if (this.primero === null) {
      this.primero = producto;
    } else {
      while (temp.sig != null) {
        temp = temp.sig;
      }
      temp.sig = producto;
    }
  }
  buscar(id) {
    let temp = this.primero;
    while (temp != null && temp.id === id) {
      temp = temp.sig;
    }
    return temp;
  }
  eliminar(id) {
    let temp = this.primero;
    while (temp.sig != null && temp.sig.id === id) {
      temp = temp.sig;
    }

    temp.sig = temp.sig.sig;
    return temp;
  }
  insertar(producto, posicion) {
    let temp = this.primero;

    for (let i = 0; i < posicion - 1; i++) {
      temp = temp.sig;
    }
    producto.sig = temp.sig;
    temp.sig = producto;
  }
  listar() {
    let lista = "";
    let temp = this.primero;
    while (temp != null) {
      lista += temp.info();
      temp = temp.sig;
    }
    return lista;
  }
  listarHtml() {
    let lista = "";
    let temp = this.primero;
    while (temp != null) {
      lista += temp.infoHtml();
      temp = temp.sig;
    }
    return lista;
  }
  extraerPrimero() {
    let temp;
    if (this.primero === null) {
      return null;
    } else {
      temp = this.primero;
      this.primero = temp.sig;
    }
    return temp;
  }
  agregarInicio(producto) {
    if (this.primero === null) {
      this.primero = producto;
    } else {
      let temp = this.primero;
      this.primero = producto;
      this.primero.sig = temp;
    }
  }
}
