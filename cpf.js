
    function cpf(cpf) {
        
        // Remove caracteres não numéricos
        cpf = cpf.replace(/\D/g, '');

        // Verifica se tem 11 dígitos ou é sequência repetida
        if (!cpf || cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

        const calcDigito = (cpf, fator) => {
            let total = 0;
            for (let i = 0; i < fator - 1; i++) {
            total += parseInt(cpf.charAt(i)) * (fator - i);
            }
            let resto = (total * 10) % 11;
            return resto === 10 ? 0 : resto;
        };

        const digito1 = calcDigito(cpf, 10);
        const digito2 = calcDigito(cpf, 11);

        return digito1 === parseInt(cpf.charAt(9)) && digito2 === parseInt(cpf.charAt(10));
    }
    
    module.exports = cpf;
