let imgArr = [
    "../IMG/action-adult-affection-eldery-339620.jpg",
    "../IMG/activity-asian-people-boys-children-1153976.jpg",
    "../IMG/adult-doctors-gloves-health-263337.jpg"
];

var myIndex = 0;
carousel();

function carousel() {
    // var i;
    // var x = document.getElementsByClassName("image_container");
    // for (i = 0; i < x.length; i++) {
    //   x[i].style.display = "none";
    // }
    // myIndex++;
    // if (myIndex > x.length) {myIndex = 1}
    // x[myIndex-1].style.display = "block";
    // setTimeout(carousel, 3000); // Change image every 2 seconds

    let imgContainer = document.getElementsByClassName("image_container")[0];
    // console.log(imgContainer.firstChild);

    setInterval(() => {
        imgContainer.innerHTML = "";
        let imgPath = imgArr[myIndex++];
        let theImg = document.createElement("img");
        theImg.setAttribute("src", imgPath);
        theImg.setAttribute("alt", "hmmm");
        theImg.setAttribute("class", "the_image");
        imgContainer.appendChild(theImg);
        imgContainer.appendChild(theImg).style. linear-gradient(
            rgba(231, 224, 224, 0.534);

        if (myIndex >= imgArr.length) {
            myIndex = 0;
        }
    }, 4000);
}
