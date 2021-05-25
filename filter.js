const clothList = document.querySelector(".clothList");

const blue = [["blue_t","　common"],["blue_p","　common"],["blue_s","　　female"]];
const yellow = [["yellow_t","　common"],["yellow_p","　common"],["yellow_s","　　female"]];
const pink = [["pink_t","　common"],["pink_p","　common"],["pink_s","　　female"]];

const t_shirt = [["blue_t","　common"],["yellow_t","　common"],["pink_t","　common"]];
const pants = [["blue_p","　common"],["yellow_p","　common"],["pink_p","　common"]];
const skirt = [["blue_s","　　female"],["yellow_s","　　female"],["pink_s","　　female"]];

const t_btn = document.querySelector(".t_btn");
const p_btn = document.querySelector(".p_btn");
const s_btn = document.querySelector(".s_btn");

const b_c_btn = document.querySelector(".b_c_btn");
const y_c_btn = document.querySelector(".y_c_btn");
const p_c_btn = document.querySelector(".p_c_btn");

function deletePrevList() {
    while(clothList.childNodes.length!==2)
        {
            const itemList = document.querySelector(".itemList");
            clothList.removeChild(itemList);
        }
}

function clickBtn(element) {
    const div = document.createElement("div");
    div.classList.add("itemList");
    const flex = document.createElement("div");
    flex.classList.add("item");
    const img = new Image();    
    img.src = `./imgs/${element[0]}.png`;
    img.width = 35;
    const span = document.createElement("span");    
    span.innerText = `${element[1]}, large size`;
    flex.appendChild(img);
    flex.appendChild(span);
    div.appendChild(flex);
    clothList.appendChild(div);
}

function clickHeaderTBtn() {
    deletePrevList();
    t_shirt.forEach((el)=>{
        clickBtn(el);
});
}

function clickHeaderPBtn() {
    deletePrevList();
    pants.forEach((el)=>{
        clickBtn(el);
});
}

function clickHeaderSBtn() {
    deletePrevList();
    skirt.forEach((el)=>{
        clickBtn(el);
});
}


function clickHeaderBbtn() {
    deletePrevList();
    blue.forEach((el)=>{
        clickBtn(el);
});
}

function clickHeaderYbtn() {
    deletePrevList();
    yellow.forEach((el)=>{
        clickBtn(el);
    });
}

function clickHeaderPbtn() {
    deletePrevList();
    pink.forEach((el)=>{
        clickBtn(el);
});
}

t_btn.addEventListener("click",clickHeaderTBtn);
p_btn.addEventListener("click",clickHeaderPBtn);
s_btn.addEventListener("click",clickHeaderSBtn);

b_c_btn.addEventListener("click",clickHeaderBbtn);
y_c_btn.addEventListener("click",clickHeaderYbtn);
p_c_btn.addEventListener("click",clickHeaderPbtn);
