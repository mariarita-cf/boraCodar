class VagaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const vaga = JSON.parse(this.getAttribute('vaga'));
    const statusColor = vaga.status === 'disponivel' ? '#28a745' : '#dc3545'; // verde ou vermelho

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          background: rgba(255 255 255 / 0.15);
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          padding: 20px;
          color: #fff;
          border: 3px solid ${statusColor};
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        h3 {
          margin-bottom: 10px;
          font-size: 1.4rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        p {
          flex-grow: 1;
          font-size: 1rem;
          margin-bottom: 15px;
          line-height: 1.3;
          color: #f0f0f0cc;
        }
        .status {
          font-weight: 700;
          color: ${statusColor};
          margin-bottom: 15px;
          font-size: 1.1rem;
          text-align: right;
        }
        button {
          background-color: #ff6f61;
          border: none;
          border-radius: 30px;
          padding: 10px 18px;
          font-weight: 600;
          cursor: pointer;
          color: white;
          transition: background-color 0.3s ease;
        }
        button:disabled {
          background-color: #999;
          cursor: not-allowed;
        }
        button:hover:not(:disabled) {
          background-color: #e65a4d;
        }
        .btns {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
      </style>

      <div class="card">
        <h3>${vaga.titulo}</h3>
        <p>${vaga.descricao}</p>
        <div class="status">${vaga.status === 'disponivel' ? 'Disponível' : 'Encerrada'}</div>
        <div class="btns">
          <button class="inscrever" ${vaga.status !== 'disponivel' ? 'disabled' : ''}>Se Inscrever</button>
          <button class="salvar">Salvar</button>
        </div>
      </div>
    `;

    this.shadowRoot.querySelector('.inscrever').addEventListener('click', () => {
      alert(`Você se inscreveu na vaga: ${vaga.titulo}`);
    });

    this.shadowRoot.querySelector('.salvar').addEventListener('click', () => {
      alert(`Vaga "${vaga.titulo}" salva!`);
    });
  }
}

customElements.define('vaga-card', VagaCard);
