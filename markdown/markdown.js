const wrap = (text, tag) => `<${tag}>${text}</${tag}>`
const parser = (markdown, delimiter, tag) => {
  const pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
  const replacement = `<${tag}>$1</${tag}>`;
  return markdown.replace(pattern, replacement);
}
const parse__ = (markdown) => parser(markdown, '__', 'strong')
const parse_ = (markdown) => parser(markdown, '_', 'em')
const parseText = (markdown, list) => {
  const parsedText = parse_(parse__(markdown));
  return list ? parsedText : wrap(parsedText, 'p')
}
const countStartingHashes = (str) => {
  const match = str.match(/^(#\1)*/);
  return match ? match[0].length : 0;
}

const parseHeader = (markdown, list) => {
  let count = countStartingHashes(markdown)
  if (count === 0 || count > 6) return [null, list];
  const headerTag = `h${count}`;
  const headerHtml = wrap(markdown.substring(count + 1), headerTag);
  return list ? [`</ul>${headerHtml}`, false] : [headerHtml, false]
}

const parseLineItem = (markdown, list) => {
  if (markdown.startsWith('*')) {
    const innerHtml = wrap(parseText(markdown.substring(2), true), 'li');
    return list ? [innerHtml, true] : [`<ul>${innerHtml}`, true]
  }
  return [null, list];
}

const parseParagraph = (markdown, list) => list ? [`</ul>${parseText(markdown, false)}`, false] : [parseText(markdown, false), false]

const parseLine = (markdown, list) => {
  let [result, inListAfter] = parseHeader(markdown, list);
  if (result === null) [result, inListAfter] = parseLineItem(markdown, list);
  if (result === null) [result, inListAfter] = parseParagraph(markdown, list);
  if (result === null) throw new Error('Invalid markdown');
  return [result, inListAfter];
}

export function parse(markdown) {
  const lines = markdown.split('\n');
  let result = '';
  let list = false;
  for (let i = 0; i < lines.length; i++) {
    let [lineResult, newList] = parseLine(lines[i], list);
    result += lineResult;
    list = newList;
  }
  return list ? result + '</ul>' : result;
}
