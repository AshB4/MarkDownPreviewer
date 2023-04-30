const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const markdown = '# Hello, world!\n\nThis is **Markdown** content.';
const html = marked(markdown);

function updatePreview() {
  preview.innerHTML = marked(editor.value);
}

editor.addEventListener('input', updatePreview);

updatePreview();

// Insert the rendered HTML into your web page
document.getElementById('preview-container').appendChild(preview);
