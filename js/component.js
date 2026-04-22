const components = document.getElementsByClassName('component');

for(let component of components) {
    
    fetch(`components/${component.id}.html`)
        .then(response => response.text())
        .then(data => {
            component.innerHTML = data;
        }
    );

};
