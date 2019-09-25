document.getElementById('file-upload').addEventListener('change', (evt) => {
    var fileList = evt.target.files;
    var file = fileList[0];
    var err = document.querySelector('.error');



    if (file.type.split('/')[0] == 'image') {
        console.log('It is an image!');
    } else {
        err.style.display = 'block';
        console.log('Please upload an image');
        return;
    }
})