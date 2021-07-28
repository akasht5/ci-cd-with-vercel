const profile = require('./profile');

test('checks that profile returns a correct sentence', () => {
  const result = profile('john doe', 'jonny10@gmail.com', 27);
  expect(result).toBe('My name is john doe and I am 27 years old. You can mail at jonny10@gmail.com');
  expect(result).toMatch(/^My name is john doe and I am(.*)27/);
  expect(result).toMatchInlineSnapshot('"My name is john doe and I am 27 years old. You can mail at jonny10@gmail.com"');
});
