function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function criaLinha(usuario) {

    linha = document.createElement("tr");

    tdData = document.createElement("td");
    tdNumero = document.createElement("td");
    tdNome = document.createElement("td");
    tdClinica = document.createElement("td");
    tdHora = document.createElement("td");
    tdPlano = document.createElement("td");
    tdProfissional = document.createElement("td");
    tdEspecialidade = document.createElement("td");
    tdTipo = document.createElement("td");
    
    tdData.innerHTML = usuario.Data;
    tdNumero.innerHTML = usuario.Celular
    tdNome.innerHTML = usuario.Paciente;
    tdClinica.innerHTML = usuario.Clinica
    tdHora.innerHTML = usuario.Hora
    tdPlano.innerHTML = usuario.Plano
    tdProfissional.innerHTML = usuario.Profissional
    tdEspecialidade.innerHTML = usuario.Especialidade
    tdTipo.innerHTML = usuario.Tipo

    linha.appendChild(tdData);
    linha.appendChild(tdNumero);
    linha.appendChild(tdNome);
    linha.appendChild(tdClinica);
    linha.appendChild(tdHora);
    linha.appendChild(tdPlano);
    linha.appendChild(tdProfissional);
    linha.appendChild(tdEspecialidade);
    linha.appendChild(tdTipo);

    console.log(`Olá, bom dia! Meu nome é Lucas Aquino, sou da Clínica São José, e estou entrando em contato para confirmar o horário de seu atendimento.

Nome: ${usuario.Paciente}

Especialidade: ${usuario.Especialidade}

Dr (a): ${usuario.Profissional}

Data: ${usuario.Data}

Horário marcado: ${usuario.Hora} por horario marcado
`)

    return linha;

}

function main() {
    let data = fazGet("https://sheet.best/api/sheets/b5af9109-ad47-4e21-b6c2-bf89bfacfcbff")
    let usuarios = JSON.parse(data)

    let tabela = document.getElementById("tabela");

    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()
