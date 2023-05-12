const images  = document.querySelectorAll('.images img')
const sliderLine = document.querySelector('.images')
let count = 0
let width

function init(){
   console.log('resize')
   width = document.querySelector('.projects__images').offsetWidth;
   sliderLine.style.width = width * images.length + 'px';
   images.forEach(item => {
      item.style.width = width + 'px'
      item.style.height = 'auto'
   })
   rollSlider()
   console.log(width)
}

window.addEventListener('resize',init)
init()

document.querySelector('#project__name_1').addEventListener('click',function(){
   count=0
   document.getElementById('city').innerHTML= 'Rostov-on-Don <br> LCD admiral'
   document.getElementById('apartment-area').innerHTML= '81 m2'
   document.getElementById('repair-time').innerHTML= '3.5 months'
   document.getElementById('nav__item_first').style='background-color: #fff;border-radious: 30px'
   document.getElementById('nav__item_second').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
   document.getElementById('nav__item_third').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
   document.getElementById('project__name_1').style = 'color:#E3B873;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 9.8px'
   document.getElementById('project__name_2').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   document.getElementById('project__name_3').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   rollSlider()
})

document.querySelector('#project__name_2').addEventListener('click',function(){
   count=1
   document.getElementById('city').innerHTML='Sochi <br> Thieves'
   document.getElementById('apartment-area').innerHTML='105 m2'
   document.getElementById('repair-time').innerHTML='4 months'
   document.getElementById('nav__item_second').style='background-color: #fff;border-radious: 30px'
   document.getElementById('nav__item_first').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
   document.getElementById('nav__item_third').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
   document.getElementById('project__name_2').style = 'color:#E3B873;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 9.8px'
   document.getElementById('project__name_1').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   document.getElementById('project__name_3').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   rollSlider()
})

document.querySelector('#project__name_3').addEventListener('click',function(){
   count=2
   document.getElementById('city').innerHTML='Rostov-on-Don <br> Patriotic'
   document.getElementById('apartment-area').innerHTML='93 m2'
   document.getElementById('repair-time').innerHTML='3 months'
   document.getElementById('nav__item_third').style='background-color: #fff;border-radious: 30px'
   document.getElementById('nav__item_first').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
   document.getElementById('nav__item_second').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
   document.getElementById('project__name_3').style = 'color:#E3B873;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 9.8px'
   document.getElementById('project__name_1').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   document.getElementById('project__name_2').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   rollSlider()
})

document.querySelector('#nav__item_first').addEventListener('click',function(){
   count=0
   document.getElementById('city').innerHTML= 'Rostov-on-Don <br> LCD admiral'
   document.getElementById('apartment-area').innerHTML= '81 m2'
   document.getElementById('repair-time').innerHTML= '3.5 months'
   document.getElementById('nav__item_first').style='background-color: #fff;border-radious: 30px'
   document.getElementById('nav__item_second').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
   document.getElementById('nav__item_third').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
   document.getElementById('project__name_1').style = 'color:#E3B873;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 9.8px'
   document.getElementById('project__name_2').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   document.getElementById('project__name_3').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   rollSlider()
})

document.querySelector('#nav__item_second').addEventListener('click',function(){
   count=1
   document.getElementById('city').innerHTML='Sochi <br> Thieves'
   document.getElementById('apartment-area').innerHTML='105 m2'
   document.getElementById('repair-time').innerHTML='4 months'
   document.getElementById('nav__item_second').style='background-color: #fff;border-radious: 30px'
   document.getElementById('nav__item_first').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
   document.getElementById('nav__item_third').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
   document.getElementById('project__name_2').style = 'color:#E3B873;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 9.8px'
   document.getElementById('project__name_1').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   document.getElementById('project__name_3').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   rollSlider()
})

document.querySelector('#nav__item_third').addEventListener('click',function(){
   count=2
   document.getElementById('city').innerHTML='Rostov-on-Don <br> Patriotic'
   document.getElementById('apartment-area').innerHTML='93 m2'
   document.getElementById('repair-time').innerHTML='3 months'
   document.getElementById('nav__item_third').style='background-color: #fff;border-radious: 30px'
   document.getElementById('nav__item_first').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
   document.getElementById('nav__item_second').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
   document.getElementById('project__name_3').style = 'color:#E3B873;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 9.8px'
   document.getElementById('project__name_1').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   document.getElementById('project__name_2').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   rollSlider()
})

document.querySelector('.navigation__image_left').addEventListener('click', function(){
   count--
   if (count<0){
      count= images.length -1 
   }
   if (count==0){
      document.getElementById('city').innerHTML= 'Rostov-on-Don <br> LCD admiral'
      document.getElementById('apartment-area').innerHTML= '81 m2'
      document.getElementById('repair-time').innerHTML= '3.5 months'
      document.getElementById('nav__item_first').style='background-color: #fff;border-radious: 30px'
      document.getElementById('nav__item_second').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
      document.getElementById('nav__item_third').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
      document.getElementById('project__name_1').style = 'color:#E3B873;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 9.8px'
      document.getElementById('project__name_2').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
      document.getElementById('project__name_3').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   }
   if (count==1){
      document.getElementById('city').innerHTML='Sochi <br> Thieves'
      document.getElementById('apartment-area').innerHTML='105 m2'
      document.getElementById('repair-time').innerHTML='4 months'
      document.getElementById('nav__item_second').style='background-color: #fff;border-radious: 30px'
      document.getElementById('nav__item_first').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
      document.getElementById('nav__item_third').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
      document.getElementById('project__name_2').style = 'color:#E3B873;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 9.8px'
      document.getElementById('project__name_1').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
      document.getElementById('project__name_3').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   }
   if (count==2){
      document.getElementById('city').innerHTML='Rostov-on-Don <br> Patriotic'
      document.getElementById('apartment-area').innerHTML='93 m2'
      document.getElementById('repair-time').innerHTML='3 months'
      document.getElementById('nav__item_third').style='background-color: #fff;border-radious: 30px'
      document.getElementById('nav__item_first').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
      document.getElementById('nav__item_second').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
      document.getElementById('project__name_3').style = 'color:#E3B873;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 9.8px'
      document.getElementById('project__name_1').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
      document.getElementById('project__name_2').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   }
   rollSlider()
})

document.querySelector('.navigation__icon_left').addEventListener('click', function(){
   count--
   if (count<0){
      count= images.length -1 
   }
   if (count==0){
      document.getElementById('city').innerHTML= 'Rostov-on-Don <br> LCD admiral'
      document.getElementById('apartment-area').innerHTML= '81 m2'
      document.getElementById('repair-time').innerHTML= '3.5 months'
   }
   if (count==1){
      document.getElementById('city').innerHTML='Sochi <br> Thieves'
      document.getElementById('apartment-area').innerHTML='105 m2'
      document.getElementById('repair-time').innerHTML='4 months'
   }
   if (count==2){
      document.getElementById('city').innerHTML='Rostov-on-Don <br> Patriotic'
      document.getElementById('apartment-area').innerHTML='93 m2'
      document.getElementById('repair-time').innerHTML='3 months'
   }
   rollSlider()
})

document.querySelector('.navigation__image_right').addEventListener('click', function(){
   count++
   if (count>=images.length){
      count=0
   }
   if (count==0){
      document.getElementById('city').innerHTML= 'Rostov-on-Don <br> LCD admiral'
      document.getElementById('apartment-area').innerHTML= '81 m2'
      document.getElementById('repair-time').innerHTML= '3.5 months'
      document.getElementById('nav__item_first').style='background-color: #fff;border-radious: 30px'
      document.getElementById('nav__item_second').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
      document.getElementById('nav__item_third').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
      document.getElementById('project__name_1').style = 'color:#E3B873;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 9.8px'
      document.getElementById('project__name_2').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
      document.getElementById('project__name_3').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   }
   if (count==1){
      document.getElementById('city').innerHTML='Sochi <br> Thieves'
      document.getElementById('apartment-area').innerHTML='105 m2'
      document.getElementById('repair-time').innerHTML='4 months'
      document.getElementById('nav__item_second').style='background-color: #fff;border-radious: 30px'
      document.getElementById('nav__item_first').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
      document.getElementById('nav__item_third').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
      document.getElementById('project__name_2').style = 'color:#E3B873;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 9.8px'
      document.getElementById('project__name_1').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
      document.getElementById('project__name_3').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   }
   if (count==2){
      document.getElementById('city').innerHTML='Rostov-on-Don <br> Patriotic'
      document.getElementById('apartment-area').innerHTML='93 m2'
      document.getElementById('repair-time').innerHTML='3 months'
      document.getElementById('nav__item_third').style='background-color: #fff;border-radious: 30px'
      document.getElementById('nav__item_first').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
      document.getElementById('nav__item_second').style='background-color: rgba(255, 255, 255, 0.3);border-radious: 30px'
      document.getElementById('project__name_3').style = 'color:#E3B873;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 9.8px'
      document.getElementById('project__name_1').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
      document.getElementById('project__name_2').style='color: rgba(255, 255, 255, 0.3); text-decoration: none'
   }
   rollSlider()
})

document.querySelector('.navigation__icon_right').addEventListener('click', function(){
   count++
   if (count>=images.length){
      count=0
   }
   if (count==0){
      document.getElementById('city').innerHTML= 'Rostov-on-Don <br> LCD admiral'
      document.getElementById('apartment-area').innerHTML= '81 m2'
      document.getElementById('repair-time').innerHTML= '3.5 months'
   }
   if (count==1){
      document.getElementById('city').innerHTML='Sochi <br> Thieves'
      document.getElementById('apartment-area').innerHTML='105 m2'
      document.getElementById('repair-time').innerHTML='4 months'
   }
   if (count==2){
      document.getElementById('city').innerHTML='Rostov-on-Don <br> Patriotic'
      document.getElementById('apartment-area').innerHTML='93 m2'
      document.getElementById('repair-time').innerHTML='3 months'
   }
   rollSlider()
})


function rollSlider(){
   sliderLine.style.transform = 'translate(-'+count*width+'px)'
}