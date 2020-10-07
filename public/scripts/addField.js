// Procurar o botao
document.querySelector('#add-time')
// Quando clicar no botao
.addEventListener ('click', cloneField)
// Executar uma açao
function cloneField() {
        // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //limpar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

        // pegar os campo, limpar
    fields.forEach(function(field) {
                // pegar o field do momento e limpa ele
        field.value = ""
    })
    
       // Colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}