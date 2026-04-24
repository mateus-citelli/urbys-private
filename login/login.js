/* ── CPF mask ── */
document.getElementById('cpf').addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
    else if (v.length > 3) v = v.replace(/(\d{3})(\d{0,3})/, '$1.$2');
    this.value = v;
});
 
/* ── Form submit ── */
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const cpf = document.getElementById('cpf').value;
    const pwd = document.getElementById('password').value;
 
    if (!cpf || !pwd) {
        alert('Preencha todos os campos!');
        return;
    }
 
    alert('Login realizado com sucesso!');
});

function togglePassword() {
    const input = document.getElementById('password');
    const icon = document.querySelector('.toggle-password');

    if (input.type === 'password') {
        input.type = 'text';
        icon.textContent = '🙈';
    } else {
        input.type = 'password';
        icon.textContent = '👁️';
    }
}