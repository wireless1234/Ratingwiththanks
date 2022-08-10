    let score;
    const pageOne=document.querySelector('.page__one');
    const pageTwo=document.querySelector('.page__two');
    const submitButton=document.querySelector('.submit__rating');
    const result = document.querySelector('.result');
    const ratingList=document.querySelectorAll('.rating__numb');
    ratingList.forEach((rate) => {
        rate.addEventListener("click", () => {
            score=rate.innerText;
            rate.classList.add("rating__numb--light");
            submitButton.addEventListener("click", () => {
                pageOne.classList.add("hide")
                pageTwo.classList.remove("hide")
            })
            result.innerText=`You selected ${score} out of 5`
        })
    });

