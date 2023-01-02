const left = document.querySelector('#leftarrow');
const right = document.querySelector('#rightarrow');
const image1 = document.querySelector('.pi1');
const image2 = document.querySelector('.pi2');
const image3 = document.querySelector('.pi3');

const allImg = [image1,image2,image3];

for(let i = 0; i<3; i++){
    left.addEventListener('click',() =>{
        allImg[i].style.height = '120px';
        allImg[i].style.width = '120px';
        allImg[i].style.opacity = '1';

        let back = allImg[i-1];
        let front = allImg[i+1];
        back.style.height = '60px';
        back.style.width ='60px';
        back.style.opacity = '0.5';
        front.style.height = '60px';
        front.style.width ='60px';
        front.style.opacity = '0.5';

    })

    

    i++;
}

    
    


