alert("Am on My Way")
// create function
const navSlide = function(){
    // select burger div and nav div from the DOM
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    // select all the links
    const navLinks = nav.querySelectorAll(".nav-links li");

    //Toggle navigation
    burger.addEventListener('click', function(){
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            // console.log(link, index);
            if(link.style.animation === true){
                link.style.animation = '';
            } else{
                // Animate links
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`
            }
        });
        
        // burger Animation
        burger.classList.toggle("toggle")
    })

}
navSlide()

// PRODUCT FILTER SECTION START //
const btns = document.querySelectorAll(".btn");
// console.log(btns)
const blogItems = document.querySelectorAll('.card-items');
// console.log(blogItems)

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(e){
        e.preventDefault()
        const filter = e.target.dataset.filter
        console.log(filter)


        // create foreach loop
        blogItems.forEach((blogItem) => {
            if(filter ==='all'){
                blogItem.style.display = 'flex';
                btns[4].classList.remove('active')
                btns[1].classList.remove('active')
                btns[2].classList.remove('active')
                btns[3].classList.remove('active')

                btns[0].classList.add('active')
                btns[0].style.color = 'crimson'
            }else{
                btns[0].classList.remove('active')
                if(blogItem.classList.contains(filter)){
                    blogItem.style.display = 'flex';

                    if(btns[1] === e.target){
                        btns[1].classList.add('active')
                    }else{
                        btns[1].classList.remove('active')
                    }
                    if(btns[2] === e.target){
                        btns[2].classList.add('active')
                    }else{
                        btns[2].classList.remove('active')
                    }
                    if(btns[3] === e.target){
                        btns[3].classList.add('active')
                    }else{
                        btns[3].classList.remove('active')
                    }
                    if(btns[4] === e.target){
                        btns[4].classList.add('active')
                    }else{
                        btns[4].classList.remove('active')
                    }
                }else{
                    blogItem.style.display = 'none';
                }
            }
        })
    })
}

// PRODUCT FILTER SECTION END //

// Search Filter Start//

const search = document.querySelector('#search');
search.addEventListener("keyup", (e) => {
    e.preventDefault()
    const searchValue = search.ariaValueMax.toLowerCase().trim();

    // loop through blog category
    for (let i = 0; i < blogItems.length; i++) {
        if(blogItems[i].classList.contains(searchValue)) {
            blogItems[i].style.display = 'flex';       
        }else if(searchValue === ""){
            blogItems[i].style.display = 'flex';
        }else{
            blogItems[i].style.display = 'none';
        }
    }
})
// Search Filter End//
