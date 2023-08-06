// Target all elements to save to const
const page1Btn = document.querySelector('#historyBtn');
const page2Btn = document.querySelector('#evolutionBtn');
const page3Btn = document.querySelector('#variationsBtn');
const page4Btn = document.querySelector('#basicsBtn');

var allPages = document.querySelectorAll('.page');

console.log(allPages);
hideall();

function hideall()
{
    for (let onePage of allPages)
    {
        onePage.style.display = 'none';
    }
}

function show(pageIndex)
{
    hideall();

    let onePage = document.querySelector('#page'+pageIndex)

    onePage.style.display = 'block';
}

page1Btn.addEventListener('click', function()
{
    show(1);
    //page1Btn.scrollIntoView({behavior: 'smooth'});
});

page2Btn.addEventListener('click', function()
{
    show(2);
    //page2Btn.scrollIntoView({behavior: 'smooth'});
});

page3Btn.addEventListener('click', function()
{
    show(3);
    //page3Btn.scrollIntoView({behavior: 'smooth'});
});

page4Btn.addEventListener('click', function()
{
    show(4);
    //page4Btn.scrollIntoView({behavior: 'smooth'});
});

let dragon = document.getElementById('dragon');

let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');

let sun = document.getElementById('sun');

window.addEventListener('scroll', function()
{
    let value = window.scrollY;

    dragon.style.left = value * -2.5 + 'px';

    cloud1.style.left = value * -0.1 + 'px';
    cloud2.style.left = value * -0.5 + 'px';
    cloud3.style.left = value * 0.5 + 'px';

    sun.style.left = value * -0.1 + 'px';
})

const rolldie = document.querySelector('#roll-d20');

let faceArr = [
    'f1', 'f2', 'f3', 'f4', 'f5',
    'f6', 'f7', 'f8', 'f9', 'f10',
    'f11', 'f12', 'f13', 'f14', 'f15',
    'f16', 'f17', 'f18', 'f19', 'f20'
];

rolldie.addEventListener('click', function()
{
    const el = document.querySelector('#face-img');

    for (let i = 0; i < faceArr.length; i++)
    {
        let classToRemove = faceArr[i].toString();
        el.classList.remove(classToRemove);
    }

    el.classList.add('roll-anim');

    setTimeout(function()
    {
        el.classList.remove('roll-anim');
    }, 1500)

    let randSelect = faceArr[Math.ceil(Math.random() * faceArr.length - 1) ];

    el.classList.add(randSelect);
})

const topPage = document.querySelector('.header');
const totop = document.querySelector('#to-top');

totop.addEventListener('click', function()
{
    topPage.scrollIntoView({behavior: 'smooth'});
})