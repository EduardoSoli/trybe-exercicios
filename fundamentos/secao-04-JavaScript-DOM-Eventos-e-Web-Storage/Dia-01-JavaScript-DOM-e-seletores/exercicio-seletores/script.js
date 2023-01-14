const colorHeader = document.getElementById('header-container');
colorHeader.style.backgroundColor = 'lightgreen';

const sectionLeft = document.getElementsByClassName('emergency-tasks')[0];
sectionLeft.style.backgroundColor = 'pink'

const leftH3 = document.querySelectorAll('.emergency-tasks h3');
for ( let i = 0; i < leftH3.length; i += 1 ){
    leftH3[i].style.backgroundColor = 'purple';
}


const sectionRight = document.getElementsByClassName('no-emergency-tasks')[0];
sectionRight.style.backgroundColor = 'yellow';

const rightH3 = document.querySelectorAll('.no-emergency-tasks h3');
for ( let i = 0; i < leftH3.length; i += 1 ){
    rightH3[i].style.backgroundColor = 'black';
}

const colorFooter = document.getElementById('footer-container');
colorFooter.style.backgroundColor = 'green'