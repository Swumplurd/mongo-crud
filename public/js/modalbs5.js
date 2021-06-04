const modal = new bootstrap.Modal(document.getElementById('modalRecurso'));
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    });
}
on(document, 'click', '#editar', e => {
    modal.show();
});