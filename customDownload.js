document.addEventListener('DOMContentLoaded', () => {
    const btnDownloadCustomTransparent = document.getElementById('btnDownloadCustomTransparent');
    const btnDownloadCustomWhite = document.getElementById('btnDownloadCustomWhite');

    btnDownloadCustomTransparent.addEventListener('click', () => downloadCustomImage('transparent'));
    btnDownloadCustomWhite.addEventListener('click', () => downloadCustomImage('white'));
});

function downloadCustomImage(background) {
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    const format = document.getElementById('formatSelector').value;

    if (isNaN(width) || isNaN(height)) {
        alert('Please enter valid dimensions for width and height.');
        return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (background === 'white') {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const originalCanvas = document.getElementById('drawingCanvas');
    ctx.drawImage(originalCanvas, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL(`image/${format}`);
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = `Custom_Drawing_${background}.${format}`;
    a.click();
}