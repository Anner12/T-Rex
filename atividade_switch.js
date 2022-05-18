//  Comandos:
//  if - condicional
//  for - loop (repetição)
//  switch - condicional

var tamanho_copo = 100;

function setup()
{
    tamanho_copo = 5;

    switch (tamanho_copo) {
        case 100:
            ligarCafeteira(1);
            break;
        case 200:
            ligarCafeteira(2);
            break;
        default:
            ligarCafeteira(0.5);
            break;
    }
}

function ligarCafeteira(tempo)
{
    console.log(tempo + 'min ligada');
}