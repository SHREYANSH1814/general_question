console.log('hello')
const answerlist=document.querySelectorAll('.answer')
const questionlist=document.querySelectorAll('.question')
function onload(){
    answerlist.forEach(function(answer){
    // console.log(answer);
    const img=answer.previousElementSibling.lastElementChild;
    img.classList.remove('rotate');

     answer.classList.add('visible');
    }

    )

}
onload();

function showans(){
questionlist.forEach(function ques(question){
    console.log(question);
    const imgbutton=question.lastElementChild;
    console.log(imgbutton);
imgbutton.addEventListener('click',function show(e){
    const ans=question.nextElementSibling;
   if(ans.classList.contains('visible')){
 onload();
 ans.classList.remove('visible');
  e.target.classList.add('rotate');
   }
   else{
    onload();
    e.target.classList.remove('rotate');
   }
  
   
   
   
    
    
    
    
    
})
})}







showans();




// function showanswer(){
//     questionlist.forEach(function ques(question){
//         console.log(question);
//     const imgbutton=question.lastChild
// imgbutton.addEventListener('click',function show(e){
//     const ans=question.nextElementSibling.lastChild
//     console.log(ans);

//     ans.classList.remove('visible');
// })
    
// }
//     )
// }
// showanswer();