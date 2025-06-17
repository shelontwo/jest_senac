const sum = require('./sum');
const cpf = require('./cpf');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Valida CPF falso', () => {
  expect(cpf("123123")).toBe(false);
});

test('Valida CPF verdadeiro', () => {
  expect(cpf("00986735990")).toBe(true);
});