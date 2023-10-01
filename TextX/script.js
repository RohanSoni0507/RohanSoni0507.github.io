const editor = document.getElementById('editor');
const fileInput = document.getElementById('fileInput');
const searchInput = document.getElementById('searchInput');
const replaceInput = document.getElementById('replaceInput');

editor.addEventListener('input', () => {
  const currentText = editor.value;

});

fileInput.addEventListener('change', (event) => {
  const selectedFile = event.target.files[0];

  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target.result;

      editor.value = fileContent;
    };

    reader.readAsText(selectedFile);
  }
});

document.getElementById('createFileButton').addEventListener('click', () => {
  editor.value = '';
});

document.getElementById('saveFileButton').addEventListener('click', () => {
  const textToSave = editor.value;
  const blob = new Blob([textToSave], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'my_text_file.txt';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

document.getElementById('copyButton').addEventListener('click', () => {
  editor.select();
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
});

document.getElementById('cutButton').addEventListener('click', () => {
  editor.select();
  document.execCommand('cut');
  window.getSelection().removeAllRanges();
});

document.getElementById('pasteButton').addEventListener('click', () => {
  editor.focus();
  document.execCommand('paste');
});

document.getElementById('undoButton').addEventListener('click', () => {
  document.execCommand('undo');
});

document.getElementById('redoButton').addEventListener('click', () => {
  document.execCommand('redo');
});

document.getElementById('searchReplaceButton').addEventListener('click', () => {
  const searchText = searchInput.value;
  const replaceText = replaceInput.value;

  if (searchText && replaceText) {
    const currentText = editor.value;
    const regex = new RegExp(searchText, 'g');
    const newText = currentText.replace(regex, replaceText);
    editor.value = newText;
  }
});