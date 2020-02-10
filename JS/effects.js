// let imgArr = [
//     "../IMG/action-adult-affection-eldery-339620.jpg",
//     "../IMG/activity-asian-people-boys-children-1153976.jpg",
//     "../IMG/adult-doctors-gloves-health-263337.jpg"
// ];

// var myIndex = 0;
// carousel();

// function carousel() {
//     // var i;
//     // var x = document.getElementsByClassName("image_container");
//     // for (i = 0; i < x.length; i++) {
//     //   x[i].style.display = "none";
//     // }
//     // myIndex++;
//     // if (myIndex > x.length) {myIndex = 1}
//     // x[myIndex-1].style.display = "block";
//     // setTimeout(carousel, 3000); // Change image every 2 seconds

//     let imgContainer = document.getElementsByClassName("image_container")[0];
//     // console.log(imgContainer.firstChild);

//     setInterval(() => {
//         imgContainer.innerHTML = "";
//         let imgPath = imgArr[myIndex++];
//         let theImg = document.createElement("img");
//         theImg.setAttribute("src", imgPath);
//         theImg.setAttribute("alt", "hmmm");
//         theImg.setAttribute("class", "the_image");
//         imgContainer.appendChild(theImg);

//         if (myIndex >= imgArr.length) {
//             myIndex = 0;
//         }
//     }, 4000);
// }

function myFunction() {
    let x = document.getElementsByClassName("navBarContainer");
    console.log(x);

    for (let i = 0; i < x.length; i++) {
        if (x[i].style.display === "block") {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "block";
        }
    }
}



$(window).on('load',()=>{
    $('.page_heading').on('click',(e)=>{
    //    console.log(e.target.nextSibling.nextSibling.style);
       
        if(e.target.nextSibling.nextSibling.style.display == "none" || e.target.nextSibling.nextSibling.style.display == ""){
            // console.log('yup');
            console.log();
            
            if(e.target.children[0].children[0].classList.contains('fa-arrow-right')){
            e.target.nextSibling.nextSibling.style.display = "block";

                e.target.children[0].children[0].className = 'fa fa-arrow-down';
            }
            
        }else{
             e.target.nextSibling.nextSibling.style.display = "none";
             e.target.children[0].children[0].className = 'fa fa-arrow-right';
        }
// console.log();


        // if(e.target.getAttribute('value') == "anatomy"){
        //     document.getElementsByClassName('isActive')[0].style.display = "none";
        //     document.getElementById('anatomy').style.display = "block";
        //     document.getElementById('anatomy').classList.add('isActive');
        // }
    })
});

$(window).on('scroll',(e)=>{
    // console.log(e);
    console.log();
    if(window.pageYOffset <= 100 ){
        $('.left_navbar')[0].style.top = "15%";
    }else{
    $('.left_navbar')[0].style.top = "5%";

    }
    
    
})
