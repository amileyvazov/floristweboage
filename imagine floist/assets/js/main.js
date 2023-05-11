const hed=document.querySelector('.header a');
const imgs=document.querySelector('.images img');

for(let i=1; i<hed.length;i++){
    hed[i].adEventListener('click',filterImg);
}

function setActiveA1(e){
    hed.forEach(hed=>{
        hed.classList.remove('clicked');
        
    });
    e.target.classList.add('clicked');

};
function filterImg(e){
    setActiveA1(e);
    imgs.forEach(img=>{
     img.classList.remove('img-shink');
     img.classList.add('img-expand');
    })
}

const imgType=parseInt(img.dataset.img);

const btnType=parseInt(e.target.dataset.header);

if(imgType !== btnType){
    img.classList.remove('img-expand');
    img.classList.add('img-shrink');
}

hed[0].adEventListener('click', (e)=>{
    setActiveBtn(e);
    imgs.forEach(img=>{
        img.classList.remove('img-shrink');
        img.classList.add('img-expanded');
    });
});
