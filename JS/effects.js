// // let imgArr = [
// //     "../IMG/action-adult-affection-eldery-339620.jpg",
// //     "../IMG/activity-asian-people-boys-children-1153976.jpg",
// //     "../IMG/adult-doctors-gloves-health-263337.jpg"
// // ];

// // var myIndex = 0;
// // carousel();

// // function carousel() {
// //     // var i;
// //     // var x = document.getElementsByClassName("image_container");
// //     // for (i = 0; i < x.length; i++) {
// //     //   x[i].style.display = "none";
// //     // }
// //     // myIndex++;
// //     // if (myIndex > x.length) {myIndex = 1}
// //     // x[myIndex-1].style.display = "block";
// //     // setTimeout(carousel, 3000); // Change image every 2 seconds

// //     let imgContainer = document.getElementsByClassName("image_container")[0];
// //     // console.log(imgContainer.firstChild);

// //     setInterval(() => {
// //         imgContainer.innerHTML = "";
// //         let imgPath = imgArr[myIndex++];
// //         let theImg = document.createElement("img");
// //         theImg.setAttribute("src", imgPath);
// //         theImg.setAttribute("alt", "hmmm");
// //         theImg.setAttribute("class", "the_image");
// //         imgContainer.appendChild(theImg);

// //         if (myIndex >= imgArr.length) {
// //             myIndex = 0;
// //         }
// //     }, 4000);
// // }

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

$(window).on("load", () => {
    $(".left_nav_header_container h2").on("click", e => {
        if (e.target.parentElement.nextElementSibling != null) {
            if (e.target.parentElement.nextElementSibling.style.display == "none") {
                $(".left_navbar_container .isActive")[0].parentElement.children[0].querySelector(".arrow").className = "fa fa-chevron-right arrow";
                $(".left_navbar_container .isActive")[0].style.display = "none";
                $(".left_navbar_container .isActive")[0].classList.remove("isActive");

                e.target.parentElement.nextElementSibling.style.display = "block";
                e.target.parentElement.nextElementSibling.classList.add("isActive");
                e.target.children[0].className = "fa fa-chevron-down arrow";
            } else {
                e.target.parentElement.nextElementSibling.style.display = "none";
                e.target.children[0].className = "fa fa-chevron-right arrow";
            }
        }

        let a = e.target.classList[0];

        let p = $('section.the_content');
        for (let uy = 0; uy < p.length; uy++) {
            if (p[uy].classList.contains(a)) {
                let po = $('.is_active');
                po[0].style.display = "none";
                po[0].classList.remove('is_active');
                p[uy].style.display = "block";
                console.log(p[uy]);

                p[uy].classList.add('is_active');
            }
        }

        // console.log();

        // if(e.target.getAttribute('value') == "anatomy"){
        //     document.getElementsByClassName('isActive')[0].style.display = "none";
        //     document.getElementById('anatomy').style.display = "block";
        //     document.getElementById('anatomy').classList.add('isActive');
        // }
    });
});

// $(window).on('scroll', (e) => {
//     // console.log(e);
//     console.log();
//     if (window.pageYOffset <= 100) {
//         $('.left_navbar')[0].style.top = "15%";
//     } else {
//         $('.left_navbar')[0].style.top = "5%";

//     }

// })

let x = $('.the_content');
for (let i = 0; i < x.length; i++) {
    if (!x[i].classList.contains("is_active")) {
        x[i].style.display = "none";
    }
}

//this


