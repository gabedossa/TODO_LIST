$(document).ready(function () {
   $('#form-tarefa').on('submit', function (e) {
       const texto = $('#atividadeInput');
       const novoItem = $('<li style="display:none"></li>');
        e.preventDefault();

         $(`
                <li id="task" class="CardTask"> 
                <p>${texto.val()}</p> 
            </li>
        `).appendTo(novoItem);
            console.log(texto);
        // Adiciona à lista e faz aparecer com fadeIn
        $(novoItem).appendTo('ul');
        novoItem.fadeIn(200);

        $('#atividadeInput').val('').focus();
        $('#task').on('click', function () {
             $(novoItem).toggleClass('concluida');
        });
    });
    });
