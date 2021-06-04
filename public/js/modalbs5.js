const modal = new bootstrap.Modal(document.getElementById('modalRecurso'));
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    });
}
on(document, 'click', '#editar', e => {
    const fila = e.target.parentNode.parentNode;
    id_editar.value = fila.children[0].innerHTML;
    nombre_edit.value = fila.children[1].innerHTML;
    url_edit.value = fila.children[2].children[0].innerHTML;
    categoria_edit.value = fila.children[3].innerHTML;
    descripcion_edit.value = fila.children[4].innerHTML;
    modal.show();
});