/* ── CPF mask ── */
document.getElementById('cpf').addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
    else if (v.length > 3) v = v.replace(/(\d{3})(\d{0,3})/, '$1.$2');
    this.value = v;
});

/* ── Phone mask ── */
document.getElementById('phone').addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 6) v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    this.value = v;
});

/* ── Password strength ── */
document.getElementById('password').addEventListener('input', function () {
    const val = this.value;
    const bar = document.getElementById('strengthBar');
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    const colors = ['', '#e63946', '#f4a261', '#52B788', '#74C69D'];
    const widths = ['0%', '25%', '50%', '75%', '100%'];
    bar.style.width = widths[score];
    bar.style.background = colors[score];
});

/* ── Form submit ── */
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const pwd = document.getElementById('password').value;
    const conf = document.getElementById('confirm-password').value;
    if (pwd !== conf) {
        alert('As senhas não coincidem!');
        return;
    }
    alert('Cadastro realizado com sucesso!');
});