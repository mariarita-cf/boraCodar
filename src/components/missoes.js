const vagasPadrao = [
  { id: 1, titulo: "Heróis contra o Malware", descricao: "Estamos buscando um(a) DEV especialista em capturar MALWARE. Venha fazer parte dessa missão!.", status: "disponivel", link: "https://exemplo.com/vaga1" },
  { id: 2, titulo: "Desenvolvedor Back-end", descricao: "Vaga para back-end.", status: "encerrada", link: "https://exemplo.com/vaga2" }
];

function getVagasCadastradas() {
  return JSON.parse(localStorage.getItem('vagas')) || [];
}

function getSalvos() {
  const salvos = localStorage.getItem('vagasSalvas');
  return salvos ? JSON.parse(salvos) : [];
}

function salvarVaga(id) {
  let salvos = getSalvos();
  if (!salvos.includes(id)) {
    salvos.push(id);
    localStorage.setItem('vagasSalvas', JSON.stringify(salvos));
    alert('Vaga salva com sucesso!');
  } else {
    alert('Você já salvou esta vaga.');
  }
}

function criarCardVaga(vaga) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.style.border = vaga.status === "disponivel" ? "3px solid #6ecc57" : "3px solid #d9534f";

  card.innerHTML = `
    <h3>${vaga.titulo}</h3>
    <p>${vaga.descricao}</p>
    <p><strong>Empresa:</strong> ${vaga.empresa || "Não informado"}</p>
    <div class="btn-group">
      <a href="${vaga.link}" target="_blank" class="btn btn-acessar">Acessar</a>
      ${
        vaga.status === "disponivel"
          ? `<button class="btn btn-salvar">Salvar</button>`
          : `<button class="btn btn-encerrada" disabled>Encerrada</button>`
      }
    </div>
  `;

  if (vaga.status === "disponivel") {
    const btnSalvar = card.querySelector(".btn-salvar");
    btnSalvar.addEventListener("click", () => salvarVaga(vaga.id));
  }

  return card;
}

function mostrarVagas() {
  const container = document.getElementById("vagas-container");
  if (!container) return;

  container.innerHTML = "";
  const todasVagas = [...vagasPadrao, ...getVagasCadastradas()];
  todasVagas.forEach(vaga => container.appendChild(criarCardVaga(vaga)));
}

window.addEventListener('DOMContentLoaded', () => mostrarVagas());



function mostrarVagas() {
  const container = document.getElementById("vagas-container");
  container.innerHTML = "";

  const todasVagas = [...vagasPadrao, ...getVagasCadastradas()];

  todasVagas.forEach(vaga => {
    const card = criarCardVaga(vaga);
    container.appendChild(card);
  });
}


window.onload = () => {
  mostrarVagas();
};
