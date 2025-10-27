const vagasPadrao = [
  { id: 1, titulo: "Heróis contra o Malware", descricao: "Estamos buscando um(a) DEV especialista em capturar MALWARE.", status: "disponivel", link: "https://exemplo.com/vaga1" },
  { id: 2, titulo: "Desenvolvedor Back-end", descricao: "Vaga para back-end.", status: "encerrada", link: "https://exemplo.com/vaga2" }
];

function getVagasCadastradas() {
  return JSON.parse(localStorage.getItem('vagas')) || [];
}

function mostrarVagas() {
  const container = document.getElementById('vagas-container');
  if (!container) return;
  container.innerHTML = '';
  const todasVagas = [...vagasPadrao, ...getVagasCadastradas()];
  todasVagas.forEach(vaga => {
    const card = document.createElement('vaga-card');
    card.setAttribute('vaga', JSON.stringify(vaga));
    container.appendChild(card);
  });
}

window.addEventListener('DOMContentLoaded', mostrarVagas);
