const imgDis = document.querySelector("[image-display]");
const rightClick = document.querySelector("[right-click]");
const leftClick = document.querySelector("[left-click]");




const image = ['http://127.0.0.1:5500/assets/a1.jpg', 'http://127.0.0.1:5500/assets/a2.jpg', 'http://127.0.0.1:5500/assets/a3.jpg',
'http://127.0.0.1:5500/assets/a4.jpg', 'http://127.0.0.1:5500/assets/a5.jpg'];

// imgDis.addEventListener('click', (e) => {
// //    let src1 = e.target.src;
//   let cussrc = image[0];
//   e.target.src = cussrc;

//    imgDis.innerHTML = src;
//    console.log("Image is", image[0]);
   
//    console.log("src is ", src1);
// });
var count = 0;
let src;
displayImg(0);
function displayImg(count)
{
   
   imgDis.src = image[count];
   imgDis.innerHTML = src;
}


rightClick.addEventListener('click', (e) => {

    count = count + 1;
    displayImg(count);
    if(count == 5)
    {
       window.alert("No More Images Available");
       count = count -1;
       displayImg(count);
    }
});
leftClick.addEventListener('click', ()=> {
   count = count-1;
   displayImg(count);
   if(count == -1)
   {
    window.alert("No More Image Available");
    count++;
    displayImg(count);
   }

});