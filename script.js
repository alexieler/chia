window.onload = function(){
    const plants = 75;
    const container = document.getElementById('plant-container');

    const button = document.getElementById('grow-button');

    // function to create new plants and add unique Id to them
    function createPlants(){
        for(let i = 0; i < plants; i ++){
            const plant = document.createElement('div');
            container.appendChild(plant);
            plant.classList.add("plant");
            plant.setAttribute("id", `plant-${i}`);
        }
    }

    button.addEventListener('click', function(){
        container.classList.remove("hidden");
    });
    
    createPlants();
}