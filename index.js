const initialMarkdown = 
`# Head 1
## Head 2

**Bold text**

*Italic text*

[FreeCodeCamp](https://www.freecodecamp.org/)

\`const PI = 3.14;\`

\`\`\`
function sum(x, y) {
  return x + y;
}
\`\`\`

* List item 1
* List item 2
* List item 3

>Block quote text

![Sample image](./freecodecamp-logo.png "Sample image")

**Code by [Thiago Bitencourt](https://github.com/thiagobitencourt)**
`;

function parseTextToMarkdown(element, text) {
  element.innerHTML = marked(text, { breaks:true, gmf: true });
}

window.onload = function() {
  const editor = document.getElementById('editor');
  const preview = document.getElementById('preview');

  editor.value = initialMarkdown;
  parseTextToMarkdown(preview, initialMarkdown);

  editor.addEventListener('keyup', function(event) {
    console.log('Text changed: ', event.target.value);
    parseTextToMarkdown(preview, event.target.value);
  });
}
