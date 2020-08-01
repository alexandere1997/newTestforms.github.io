const radioBTN = document.querySelectorAll(".box__rb input"),
    optionBtn = document.querySelector(".box__list select"),
    plan = document.querySelector(".box__plan p span"),
    box__price = document.querySelector(".box__price span"),
    box__it = document.querySelectorAll(".box__it")
let func = () => {
    radioBTN.forEach((item, ind1) => {
        box__it.forEach((count, ind2) => {
            item.addEventListener("change", (e) => {
                console.log(item.value)
                price = e.target.dataset.price
                plan.innerHTML = item.value;
                box__price.innerHTML = price;
                if(item.type == "radio" && item.checked && ind1 == ind2){
                    count.classList.add("act")
                }
                else {
                    count.classList.remove("act")
                }
                optionBtn.removeAttribute("disabled");
            })
        })
    })
    optionBtn.addEventListener("change", () => {
        let indexCount = optionBtn.options[optionBtn.selectedIndex].text;
        let countPrice = box__price.innerHTML * indexCount;
        box__price.innerHTML = countPrice;
        optionBtn.setAttribute("disabled", "disabled")
    })
}

func();
      