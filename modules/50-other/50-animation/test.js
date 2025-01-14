const { test } = require('tests');

test(({ query, expect, html }) => {
  const p = query(document, '.black-white');
  const pStyle = getComputedStyle(p);

  expect(html).to.contain('@keyframes');
  expect(pStyle).to.have.property('animation');
});
