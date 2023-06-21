import { idClientePorCNPJ } from '../index';
test('Busca o id do cliente', () => {
  expect(idClientePorCNPJ('12346598798799')).toBeDefined();
});
