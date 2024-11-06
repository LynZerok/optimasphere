document.getElementById('file-input').addEventListener('change', function(event) {
    const fileInput = event.target;
    const fileName = fileInput.files[0] ? fileInput.files[0].name : 'No file selected.';
    document.getElementById('file-info').textContent = fileName;
});

document.getElementById('upload-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please choose a file first.");
        return;
    }

    // Simulación de carga (barra de progreso)
    document.getElementById('progress-bar-container').style.display = 'block';
    const progressBar = document.getElementById('progress-bar');
    let progress = 0;

    const interval = setInterval(function() {
        if (progress >= 100) {
            clearInterval(interval);
            alert('File uploaded successfully!');
        } else {
            progress += 10;
            progressBar.style.width = progress + '%';
        }
    }, 500);
});
