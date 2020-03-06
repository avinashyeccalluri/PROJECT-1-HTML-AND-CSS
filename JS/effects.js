//  Gallery
function mygallery() {
    let galleryFolderPath = "../IMG/wkd/";
    let imgExt = ".jpg";
    let totalGalleryImages = 35;
    let interval = 2000;
    imageSwapper(".one_row", galleryFolderPath, imgExt, totalGalleryImages, interval);
}

//  Main section
function carousel() {
    let jumboFolderPath = "../IMG/jumbo/";
    let imgExt = ".jpg";
    let totalGalleryImages = 3;
    let interval = 4000;
    imageSwapper(".the_image", jumboFolderPath, imgExt, totalGalleryImages, interval);
}

function imageSwapper(selector, path, ext, totalCount, interval) {
    let currentImageCount = 0;
    setInterval(() => {
        let imageContainers = $(selector);
        for (let i = 0; i < imageContainers.length; i++) {
            currentImageCount++;
            if (currentImageCount > totalCount) {
                currentImageCount = 1;
            }
            imageContainers[i].setAttribute("src", path + currentImageCount + ext);
            imageContainers[i].setAttribute("alt", currentImageCount);
        }
        if (currentImageCount > totalCount) {
            currentImageCount = 1;
        }
    }, interval);
}

if($(window).width() <= 699){
    $('.hover_headings').on('click', (e)=>{
        console.log(e.target.parentElement.nextElementSibling);
        if(e.target.parentElement.nextElementSibling.classList.contains('new')){
            e.target.parentElement.nextElementSibling.classList.remove('new');
        e.target.parentElement.nextElementSibling.setAttribute('style','display:none');
        }else{
            e.target.parentElement.nextElementSibling.classList.add('new');
        e.target.parentElement.nextElementSibling.setAttribute('style','display:block');
        }
        
    });
}



// if (document.querySelector(".first_section")) {
//     carousel();
//     mygallery();
// }

function myFunction() {
    let x = document.getElementsByClassName("navBarContainer");
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

        let p = $("section.the_content");
        for (let uy = 0; uy < p.length; uy++) {
            if (p[uy].classList.contains(a)) {
                let po = $(".is_active");
                po[0].style.display = "none";
                po[0].classList.remove("is_active");
                p[uy].style.display = "block";

                p[uy].classList.add("is_active");
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

// let x = $('.the_content');
// for (let i = 0; i < x.length; i++) {
//     if (!x[i].classList.contains("is_active")) {
//         x[i].style.display = "none";
//     }
// }
