const container=document.querySelector('.container');

for(let index=0; index<30; index++){

    const colorContainer=document.createElement('div');
    colorContainer.classList.add('color-container');
    container.append(colorContainer);
}

const colorContainerElements=document.querySelectorAll('.color-container');

// console.log(colorContainerElements);

// randomColor();

function generateColor(){

    colorContainerElements.forEach((value)=>{

        const newRandomColor=randomColor();
        value.style.backgroundColor=newRandomColor;
        value.innerText=newRandomColor;
    })

}

function randomColor(){

    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);

    const randomColor=`rgb(${red},${green},${blue})`;
    return randomColor;
}
generateColor();
