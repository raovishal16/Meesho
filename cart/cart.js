var steps = document.querySelectorAll(".step");
var count = 0;
var productList = JSON.parse(localStorage.getItem("Product"));
var get_size = JSON.parse(localStorage.getItem("size"));
var totle_price = "";
var totleGst = "";
if (productList) {
  productList.forEach((element) => {
    element.qty = 1;
  });

  console.log("ProductLISR", productList);
}

steps.forEach((step, index) => {
  step.addEventListener("click", () => {
    steps[count].classList.remove("active");
    step.classList.add("active");
    count = index;
  });
});

function saveCart() {
  var data = "";
  var addCart = document.getElementById("add_product");

  productList.map((element, index) => {
    data += `
                  <div class="card mt-3 " style="width: 80%;">
                      <div class="card-body">
                          <div class="product_cart_detail d-flex">
                              <div class="product_img me-4">
                                  <img src="${element.Product_img}" alt="" class="w-100">
                              </div>
                              <div class="product_detail">
                                  <p class="text-secondary title">${element.name}</p>
                                  <p class="demo2 fs-5 text-secondary">&#8377;${element.price}</p>
                                  <p class="demo3">All issue easy returns allowed</p>
                                  <span class="d-flex demo4">
                                      <h5>Size:&nbsp;<span id="size_product">${element.size}</span></h5>
                                      <div class="qun_ty d-flex">
                                      <h5 class="ms-3">Qty:&nbsp;</h5>
                                      <span class="qun_btn d-flex  ms-3">
                                        <button class="less_product" id="Min" >
                                          <i class="fas fa-minus" onclick="onDec(${element.id})"></i>
                                        </button>
                                        <span id="Qunty">${element.qty}</span>
                                         <button class="more_product" id="Add" onclick="onAdd(${element.id})">
                                          <i class="fas fa-plus"></i>
                                        </button>
                                      </span>
                                      </div>
                                     
                                  </span>
                                  <div class="rmv" onclick = "onRemove(${element.id})" >
                                      <a href="#" class="fw-bold text-success-emphasis" >REMOVE</a>
  
                                  </div>
                              </div>
                              <div class="edit">
                                  <h5><a href="" class="text-success-emphasis">Edit</a></h5>
                              </div>
                          </div>
                          <hr>
                          <div class="sold d-flex justify-content-between">
                              <p class=" demo1">Sold&nbsp;by&nbsp;:&nbsp;<span class="text-secondary">NANA FASHION</span></p>
                              <p class="text-secondary demo1">FREE DELIVERY</p>
                          </div>
                      </div>
                  </div>
                 
              `;
  });

  addCart.innerHTML = data;
}

saveCart();

function onAdd(productId) {
  for (let index = 0; index < productList.length; index++) {
    if (productList[index].id == productId) {
      if (productList[index].qty >= 10) {
        alert(
          "Please ensure that the quantity of the product does not exceed 10 units"
        );
        return;
      }

      productList[index].qty++;
      break;
    }
  }

  saveCart();
  ontotleCalculation();
  document.getElementById("product_price_totle").innerHTML = totle_price;
  document.getElementById("price_totle").innerHTML = totleGst;
}
function onDec(productId) {
  for (let index = 0; index < productList.length; index++) {
    if (productList[index].id == productId) {
      if (productList[index].qty == 1) {
        return;
      }

      productList[index].qty--;
      break;
    }
  }

  saveCart();
  ontotleCalculation();
  document.getElementById("product_price_totle").innerHTML = totle_price;
  document.getElementById("price_totle").innerHTML = totleGst;
}

function ontotleCalculation() {
  totle_price = productList.reduce(function (acc, obj) {
    return acc + Number(obj.price * obj.qty);
  }, 0);

  var gst = (5 / 100) * totle_price;
  totleGst = gst + totle_price;
  console.log("totle_price,", totleGst);
}

ontotleCalculation();

var dispayTotle = (document.getElementById("product_price_totle").innerHTML =
  totle_price);
var totleDisplayGst = (document.getElementById("price_totle").innerHTML =
  totleGst);

function onRemove(cartId) {
  productList = productList.filter((x) => x.id != cartId);
  localStorage.setItem("Product", JSON.stringify(productList));
  saveCart();
}
