let blog_one = document.querySelector(" #blog_one ");
console.log(blog_one );
var blog_two = document.getElementById("blog_two");
console.log(blog_two)
var one_page_view = document.getElementById("one-page-view");
var two_page_view = document.getElementById("two-page-view");
var next = document.getElementById("next")
var prev = document.getElementById("prev")

blog_one .addEventListener("click", ()=>{
    blog_one .classList.add("bg-y");
    one_page_view.style.display="block";
    two_page_view.style.display="none";
    blog_two.classList.remove("bg-y");
    console.log(blog_one )
    window.scrollTo(0,0)

})
prev.addEventListener("click", ()=>{
    blog_one .classList.add("bg-y");
    one_page_view.style.display="block";
    two_page_view.style.display="none";
    blog_two.classList.remove("bg-y");
    console.log(blog_one )
    window.scrollTo(0,0)

})

next.addEventListener("click", ()=>{
    console.log(blog_two)
    blog_one .classList.remove("bg-y");
    one_page_view.style.display="none";
    two_page_view.style.display="block";
    blog_two.classList.add("bg-y");
    window.scrollTo(0,0)

})
blog_two.addEventListener("click", ()=>{
    console.log(blog_two)
    blog_one .classList.remove("bg-y");
    one_page_view.style.display="none";
    two_page_view.style.display="block";
    blog_two.classList.add("bg-y");
    window.scrollTo(0,0)

})