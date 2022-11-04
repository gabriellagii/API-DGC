import { getUsers } from './conexion';
test('real fetch call', async () => {
 const resultM = await getUsers();
  expect(resultM[0].name).toBe('Leanne Graham');  // Success!
});