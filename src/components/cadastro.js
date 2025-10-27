const formUsuario = document.getElementById('form-usuario');
const formVaga = document.getElementById('form-empresa');

formUsuario.addEventListener('submit', e => {
  e.preventDefault();
  const nome = document.querySelector('#form-usuario input[name="nome"]').value;
  const email = document.querySelector('#form-usuario input[name="email"]').value;
  const senha = document.querySelector('#form-usuario input[name="senha"]').value;
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios.push({ nome, email, senha });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  alert('Usuário cadastrado com sucesso!');
  formUsuario.reset();
});

formVaga.addEventListener('submit', e => {
  e.preventDefault();
  const empresa = document.getElementById('empresa-nome').value;
  const titulo = document.getElementById('vaga-titulo').value;
  const descricao = document.getElementById('vaga-descricao').value;
  const status = document.getElementById('vaga-status').value;
  const link = document.getElementById('vaga-link').value;
  let vagas = JSON.parse(localStorage.getItem('vagas')) || [];
  const novaVaga = { id: Date.now(), empresa, titulo, descricao, status, link };
  vagas.push(novaVaga);
  localStorage.setItem('vagas', JSON.stringify(vagas));
  alert('Vaga cadastrada com sucesso!');
  formVaga.reset();
});

