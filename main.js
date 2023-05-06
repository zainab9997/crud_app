let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=documanent.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('submit');

function getTotal(){
    if(price.value!=''){
        let result=(+price.value+ +taxes.value+ +ads.value)
        - +discount.value ;
        total.innerHTML= result ;
        total.style.background='#040';

    }else{
        total.innerHTML= '' ;
        total.style.background='navy';


    } 
}