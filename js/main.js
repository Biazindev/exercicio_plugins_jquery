$('#telefone').mask('(00)00000-0000');
$('#cpf').mask('000.000.000-00');
$('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            endereçoCompleto: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nomeCompleto: 'Por favor, insira seu nome'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIconrretos = validador.numberOfInvalids();
            if (camposIconrretos) {
                alert (`Existem ${camposIconrretos} campos incorretos`)
            }
        }
    });
    

