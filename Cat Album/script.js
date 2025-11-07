document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('randomButton');
    const imageDisplay = document.getElementById('imageDisplay');

    imageFolder = 'src/images/';
    const imageFiles = ['cat_top.jpg', 'Chestnut.jpg', 'Doubao.jpg'];

    button.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * imageFiles.length);
        const randomImage = imageFiles[randomIndex];

        imageDisplay.src = imageFolder + randomImage;
        imageDisplay.style.display = 'block';
    });
});
