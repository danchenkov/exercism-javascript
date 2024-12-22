export const parse = (markdown) =>
  markdown.replace(/(__?)(.*?)\1/g, (_, mod, text) => ({
    '_': `<em>${text}</em>`, '__': `<strong>${text}</strong>`
  })[mod])
    .replace(/(?:^|\n)(#{1,6} |\* |)([^\n]+)/g, (_, mod, text) => ({
      '* ': `<li>${text}</li>`, '# ': `<h1>${text}</h1>`, '## ': `<h2>${text}</h2>`,
      '### ': `<h3>${text}</h3>`, '#### ': `<h4>${text}</h4>`,
      '##### ': `<h5>${text}</h5>`, '###### ': `<h6>${text}</h6>`
    })[mod] ?? `<p>${text}</p>`)
    .replace(/(<li>(?!\n\n).*<\/li>)/gm, '<ul>$1</ul>');