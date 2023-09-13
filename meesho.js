function onCart(index) {
  console.log("Item added to cart:", product[index].id);

  window.location.href = `../dashboard/dashboard.html?id=${product[index].id}`;
}

var product = [];
function onProduct() {
  product = [
    {
      Product_img: "../image/shoe4.webp",
      price: 300,
      id: 1,
      name: "Footox Pvt Footowear Women Casual Shoes",
    },
    {
      Product_img: "../image/w__1.webp",
      price: 370,
      id: 2,
      name: "EyeBogler Men's Printed PoloNeck Blue Tshirts",
    },
    {
      Product_img: "../image/S.webp",
      price: 240,
      id: 3,
      name: "Proffesional Attractive T-shirts",
    },
    {
      Product_img: "../image/card_2.webp",
      price: 180,
      id: 4,
      name: "Classy Elegant Women Dresses",
    },
    {
      Product_img: "../image/card_4.webp",
      price: 470,
      id: 5,
      name: "Women's Black Micro Printed Crepe Suits & Dress Materials",
    },
    {
      Product_img: "../image/oo4.webp",
      price: 500,
      id: 6,
      name: "Cotton Blend Maroon Long Sleeves Printed Tshirts",
    },
    {
      Product_img: "../image/oo7.webp",
      price: 560,
      id: 7,
      name: "casual men tshirt",
    },
    {
      Product_img: "../image/oo8.webp",
      price: 430,
      id: 8,
      name: "Cotton Blend Maroon Long Sleeves Printed Tshirts",
    },
    // {
    //   Product_img: "../image/t1.webp",
    //   price: 260,
    //   id: 9,
    //   name: "KEESOR MEN'S T-SHIRT",
    // },
    {
      Product_img: "../image/t5.webp",
      price: 430,
      id: 10,
      name: "casual men tshirt",
    },
  ];

  var data = document.getElementById("on_product");
  var pruct_data = "";

  product.map((element, index) => {
    if (element) {
      pruct_data += `
                        <div class="col-lg-3 col-12">
                        <a href="#" class="on_cart" onclick="onCart(${index})" 
                    ><div class="card" >
                    <div class="w-100">
                      <img
                        src="${element.Product_img}"
                        class="card-img-top w-100"
                        style="height: 220px;"                                        
                      
                        
                      />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-secondary fs-6 text_product">
                          ${element.name}
                        </h5>
                        <div class="price d-flex">
                          <strong class="fs-4"> &#8377; ${element.price}</strong>
                        </div>
                        <span class="badge rounded-pill text-bg-secondary mt-2"
                          >Free Delivery</span
                        >
                        
                      </div>
                    </div></a
                  >
                </div>
                
                `;
    }
  });
  data.innerHTML = pruct_data;
}

onProduct();
function goToCart() {
  window.location.href = "../cart/cart.html";
}
