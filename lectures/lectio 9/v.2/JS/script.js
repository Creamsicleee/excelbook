

var imgList = document.querySelectorAll(".item img");//NodeList //html collection
var imgArray = [];
var lightboxItem = document.getElementById("lightbox-item");
var lightboxContainer = document.getElementById("lightbox-container");
var currentSlideIndex = 0; //rkam el sora el 7aliaa
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");

for(var i=0 ; i <imgList.length ; i++)
{

    imgArray.push(imgList[i]);

    imgList[i].addEventListener("click" , function(e){

        currentSlideIndex =  imgArray.indexOf(e.target);//2

        var imgSrc = e.target.getAttribute("src");
        lightboxContainer.style.display = "flex";
        lightboxItem.style.backgroundImage = "url("+imgSrc+")";

    })
}



function nextSlide()
{
    currentSlideIndex++;//rkam el sora elly 3leha el dor
    if(currentSlideIndex == imgArray.length)//9
    {
        currentSlideIndex = 0;
    }
    var imgSrc = imgArray[currentSlideIndex].getAttribute("src");
    lightboxItem.style.backgroundImage= "url("+imgSrc+")";
} //3mlna if 3shan lma awsl l a5er sora yrg3 ll2ola tany
function prevSlide()
{
    currentSlideIndex--;  //1
    if(currentSlideIndex < 0) //awel ma twsl le -1 rga3o l2a5er el array
    {
        currentSlideIndex = imgArray.length -1;//5 a5er element fl array
    }
    var imgSrc = imgArray[currentSlideIndex].getAttribute("src");//bro7 llaray ageb rkm sora elly 3leha el door
    lightboxItem.style.backgroundImage= "url("+imgSrc+")";
}
function closeSlide()
{
    lightboxContainer.style.display = "none";
}
nextBtn.addEventListener("click" , nextSlide);
prevBtn.addEventListener("click" , prevSlide);
closeBtn.addEventListener("click" , closeSlide);
document.addEventListener("keydown" , function(e){  //keyCode info

    if(e.keyCode == 39)//ArrowRight//37//27
    {
        nextSlide();
    }
    else if(e.keyCode  == 37)//ArrowLeft
    {
        prevSlide();
    }
    else if(e.keyCode == 27 )//Escape
    {
        closeSlide();
    }
})


lightboxContainer.addEventListener("click" , function(e){

    if(e.target == lightboxItem || e.target == nextBtn || e.target == prevBtn)
    {
        return false;
    }
    closeSlide();
})

lightboxContainer.addEventListener("click" , function(e){
    if(e.target != lightboxItem)
    {
        lightboxContainer.style.display = "none";
    }
})


