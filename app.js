const TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
////////////////////////////////////////////////////////////////////

const serv = document.getElementById("serv") ;
const drop = document.getElementById("drop") ;
const arrowServ = document.getElementById("arrow") ;
arrowServ.style.transition = '0.5s' ;
const openServ = () => {
  drop.style.display = 'inline-block' ;
  drop.setAttribute('data-open', 'true') ;
  arrowServ.style.transform = 'rotate(180deg)' ;
  arrowServ.style.color = '#1ba94c' ;
} ;

const closeServ = () => {
  drop.style.display = 'none' ;
  drop.setAttribute('data-open', 'false') ;
  arrowServ.style.transform = 'rotate(0deg)'; 
  arrowServ.style.color = '#fff' ;
} ;
serv.addEventListener('mouseover', () => {
  openServ() ;
  drop.addEventListener('mouseover', () => {
    openServ() ;
  })
}) ;

serv.addEventListener('mouseleave', () => {
  closeServ() ;
  drop.addEventListener('mouseleave', () => {
    closeServ() ;
  })
})
/////////////////////////////////////////////////

const sideDown = document.getElementById('side-down') ;
const openSide = document.getElementById('open-side-down') ;
const closeSide = document.getElementById('close-side-down') ;

openSide.addEventListener('click', () => {
  sideDown.style.top = '0' ;
}) ;
const closeSideDown = () => {
  sideDown.style.top = '-100%' ;
  closeServMenu() ;
} ;
closeSide.addEventListener('click', closeSideDown) ;

const sideServTog = document.getElementById('side-menu-serv') ;
const sideServ = document.getElementById('side-serv') ;
const sideArrow = document.getElementById('side-arrow') ;
const closeServMenu = () => {
  sideServ.style.display = 'none' ;
    sideServTog.setAttribute('data-open', 'false') ;
    sideArrow.style.transform = 'rotate(0)' ;
    sideArrow.style.transition = '0.5s' ;
    sideArrow.style.color = '#fff' ;
    
};
sideServTog.addEventListener('click', () => {
  if (sideServTog.getAttribute('data-open') === 'false') {
    sideServ.style.display = 'inline-block' ;
    sideServTog.setAttribute('data-open', 'true') ;
    sideArrow.style.transform = 'rotate(180deg)' ;
    sideArrow.style.transition = '0.5s' ;
    sideArrow.style.color = '#9d8df7' ;
  } else {
    closeServMenu() ;
  }
}) ;

// window.addEventListener('scroll', closeSideDown) ;
/////////////////////////////////////////////////////

const road = document.getElementsByClassName('road-tit') ;
const roadHidden = document.getElementsByClassName('road-hidden') ;
const roadArrow = document.getElementsByClassName('arrow') ;
const closeRoad = (index) => {
  roadHidden[index].style.display = 'none' ;
  roadHidden[index].setAttribute('data-hidden', 'true') ;
  roadArrow[index].style.transform = 'rotate(90deg)' ;
  roadArrow[index].style.color = '#fff' ;
} ;
const checkClosed = () => {
  for(let i =  0; i < roadHidden.length; i++) {
    if (roadHidden[i].getAttribute("data-hidden") === 'false')
      closeRoad(i) ;
  }
}
for(let i = 0 ; i < road.length ; i++) {
  road[i].addEventListener('click', () => {
    if(roadHidden[i].getAttribute("data-hidden") === 'true') {
      checkClosed() ;
      roadHidden[i].style.display = 'block' ;
      roadHidden[i].setAttribute('data-hidden', 'false') ;
      roadArrow[i].style.transform = 'rotate(270deg)' ;
      roadArrow[i].style.color = '#1ba94c' ;
      roadArrow[i].style.transition = '0.5s' ;
    } else {
      closeRoad(i) ;
    }
    
  }) ;
} 
////////////////////////////////////////

const card = document.getElementsByClassName("card") ;
const filledbar = document.getElementsByClassName("filledbar") ; 
const closeCardBtn = document.getElementsByClassName("closeMobCard") ;

const closeCard = (index) => {
  card[index].style.transform = "translateY(0px)";
  card[index].setAttribute('data-open', 'false') ;
  card[index].style.right = '0' ;
  filledbar[index].style.display = 'none' ;
}

const checkClosedCards = () => {
  for (let i = 0 ; i < card.length ; i++) {
    if (card[i].getAttribute('data-open') === 'true') 
      closeCard(i) ;
  }
} ;
const openClosedCard = (index) => {
  card[index].style.transform = "translateY(-50px)";
      card[index].style.transition = '0.4s' ;
      card[index].style.position = 'relative' ;
      card[index].style.right = '90px' ;
      card[index].setAttribute('data-open', 'true') ;
      filledbar[index].style.display = 'inline' ;
      filledbar[index].style.transition = '0.5s ease-out' ;
}

for (let i = 0 ; i < card.length ; i++) {
  card[i].addEventListener('mouseover', () => {
    openClosedCard(i) ;
  }) ;
  card[i].addEventListener('mouseleave', () => {
    closeCard(i) ;
  }) ;
}

//////////////////////////
const mobGrid = document.getElementById('mob-grid') ;

const mobCard = document.getElementsByClassName("mob-card") ;
const cardStick = document.getElementsByClassName("card-stick") ;
const closeMobCard = (index) => { 
  mobCard[index].style.transform = "translateY(0px)";
  mobCard[index].setAttribute('data-open', 'false') ;
  cardStick[index].style.backgroundColor = '#6155a6' ;
}
const checkMobCardClosed = () => {
  for (let i = 0; i < mobCard.length; i++)
  if (mobCard[i].getAttribute('data-open') === 'true') 
    closeMobCard(i) ;
}
for (let i = 0; i < mobCard.length; i++) {
  mobCard[i].addEventListener('click', () => {
    if (mobCard[i].getAttribute('data-open') === 'false') {
      checkMobCardClosed() ;
      mobCard[i].style.transform = "translateY(-100px)";
      mobCard[i].setAttribute('data-open', 'true') ;
      cardStick[i].style.backgroundColor = '#1ba94c' ;
    } else {
      closeMobCard(i) ;
    }
    
  }) ;
};

// Contact Home //


const inputs = document.getElementsByClassName("input") ;
const dataErrInput = document.getElementsByClassName("error-data") ;
// console.log(dataErrInput) ;
const focusInput = (index) => {
  inputs[index].parentNode.classList.add("focus") ;
  if(dataErrInput[index].innerHTML != "") {
    dataErrInput[index].innerHTML = "" ;
  }
}

const blurInput = index => {
  if (inputs[index].value == "") {
    inputs[index].parentNode.classList.remove("focus") ;
    console.log(inputs[index].getAttribute("data-error")) ;
    dataErrInput[index].innerHTML = inputs[index].getAttribute("data-error") ;
  }
}

for(let i = 0 ; i < inputs.length ; i++) {
  inputs[i].addEventListener('focus', () => {
      focusInput(i) ;
  }) ;
  inputs[i].addEventListener('blur', () => {
    blurInput(i) ;
  }) ;
}

const fileInput = document.querySelector('#file') ;
const fileContainer_ul = document.querySelector('#uploaded-files .file-container') ;


let mainFailesArray = new Array() ; // Main Array that stores files names
const default_file = document.getElementById("default-file") ;
let li ;
const checkDefaultLi = () => {
  if (mainFailesArray.length === 0) {
    default_file.style.display = 'inline-block' ;
  } else {
    default_file.style.display = 'none' ;
  }
} ;

const addNewFile = (files) => {
  
  let newLiElement ;
  for (const file of files) {
    mainFailesArray.push(file.name)
  } ;

  checkDefaultLi() ;

  for (let i = 0; i < files.length; i++) {
    newLiElement = `
    <span class="name">${files[i].name}</span>
    <span class="delete"><i class="far fa-times-circle"></i></span>
    ` ;
    li = document.createElement("li") ;
    li.innerHTML = newLiElement ;
    fileContainer_ul.appendChild(li) ;
  };

  const deleteFileBtn = document.querySelectorAll('#uploaded-files .file-container .delete') ;
  for (const btn of deleteFileBtn) {
    btn.addEventListener('click', (e) => {
      removedChild = e.target.parentElement.parentElement ;
      fileContainer_ul.removeChild(removedChild) ;
      const indexRemoved = mainFailesArray.indexOf(removedChild.querySelector('.name').textContent) ;
      if (mainFailesArray.length > -1) {
        mainFailesArray.splice(indexRemoved, 1) ;
        checkDefaultLi() ;
      };
    }) ;
  }
};


fileInput.addEventListener('change', (event) => {
  let arrFiles = Array(...event.target.files) ;
  addNewFile(arrFiles) ;
}) ;
checkDefaultLi() ;

/////////////////////// 

const copyYear = document.getElementById("copy-year") ;
let year = new Date() ;
copyYear.innerHTML = year.getFullYear() ;