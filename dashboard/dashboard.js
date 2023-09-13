function onShow() {
  var arr1 = [
    {
      id: 1,
      name: "EyeBogler Men's Printed PoloNeck Blue Tshirts",
      img1: "../image/s1.webp",
      img2: "../image/s2.webp",
      img3: "../image/s3.webp",
      main_img: "../image/S.webp",
      price: "270",
      sub_img1: "../image/s1.webp",
      sub_img2: "../image/2.webp",
      sub_img3: "../image/4.webp",
      sub_img4: "../image/1.webp",
    },
    {
      id: 2,
      name: "Footox Pvt Footowear Women Casual Shoes",
      img1: "../image/shoe_1.webp",
      img2: "../image/shoe2.webp",
      img3: "../image/shoe3.webp",
      main_img: "../image/shoe4.webp",
      price: "300",
      sub_img1: "../image/shoe_1.webp",
      sub_img2: "../image/shoe2.webp",
      sub_img3: "../image/shoe3.webp",
      sub_img4: "../image/shoe_1.webp",
    },
  ];

  product = [
    {
      Product_img: "../image/shoe4.webp",
      price: 300,
      id: 1,
      name: "Trendy Graceful Women Shoes",
      img1: "../image/shoe_1.webp",
      img2: "../image/shoe2.webp",
      img3: "../image/shoe3.webp",
      sub_img1: "../image/shoe_1.webp",
      sub_img2: "../image/shoe2.webp",
      sub_img3: "../image/shoe3.webp",
      sub_img4: "../image/shoe_1.webp",
    },
    {
      Product_img: "../image/w__1.webp",
      price: 370,
      name: "Crop Collar Half Zip",

      id: 2,
      img1: "../image/w-2.webp",
      img2: "../image/w-3.webp",
      img3: "../image/w1.webp",
      sub_img1: "../image/w_1.webp",
      sub_img2: "../image/w_2.webp",
      sub_img3: "../image/w_3.webp",
      sub_img4: "../image/w_4.webp",
    },
    {
      Product_img: "../image/S.webp",
      price: 240,
      id: 3,
      img1: "../image/s1.webp",
      img2: "../image/s2.webp",
      img3: "../image/s3.webp",
      sub_img1: "../image/s1.webp",
      sub_img2: "../image/2.webp",
      sub_img3: "../image/4.webp",
      sub_img4: "../image/1.webp",
      name: "Proffesional Attractive T-shirts",
    },
    {
      Product_img: "../image/lljux_512.webp",
      price: 180,
      id: 4,
      name: "Proffesional Attractive Sunglasses ",
      img1: "../image/C.webp",
      img2: "../image/C2.webp",
      img3: "../image/C3.webp",
      sub_img1: "../image/C_!!.webp",
      sub_img2: "../image/C_!.webp",
      sub_img3: "../image/C_!!.webp",
      sub_img4: "../image/C_!.webp",
    },
    {
      Product_img: "../image/AA.webp",
      price: 470,
      id: 5,
      name: "Classy Elegant Women Dresses",
      img1: "../image/A.webp",
      img2: "../image/A1.webp",
      img3: "../image/A2.webp",
      sub_img1: "../image/A.webp",
      sub_img2: "../image/A1.webp",
      sub_img3: "../image/A2.webp",
      sub_img4: "../image/A3.webp",
    },
    {
      Product_img: "../image/demo.webp",
      price: 500,
      id: 6,
      name: "Women's Black Micro Printed Crepe Suits & Dress Materials",
      img1: "../image/demo2.webp",
      img2: "../image/demo1.webp",
      img3: "../image/demo2.webp",
      sub_img1: "../image/demo_1.webp",
      sub_img2: "../image/demo_2.webp",
      sub_img3: "../image/demo_3.webp",
      sub_img4: "../image/demo.webp",
    },
    {
      Product_img: "../image/oo7.webp",
      price: 560,
      id: 7,
      name: "casual men tshirt",
      img1: "../image/small.webp",
      img2: "../image/small1.webp",
      img3: "../image/small2.webp",
      sub_img1: "../image/small_1.webp",
      sub_img2: "../image/small_2.webp",
      sub_img3: "../image/small_3.webp",
      sub_img4: "../image/small_4.webp",
    },
    {
      Product_img: "../image/oo8.webp",
      price: 430,
      id: 8,
      img1: "../image/sub_img.webp",
      img2: "../image/sub_img1.webp",
      img3: "../image/sub_img2.webp",
      sub_img1: "../image/oo8.webp",
      sub_img2: "../image/oo8.webp",
      sub_img3: "../image/oo8.webp",
      sub_img4: "../image/oo8.webp",
      name: "Cotton Blend Maroon Long Sleeves Printed Tshirts",
    },

    {
      Product_img: "../image/t5.webp",
      price: 430,
      id: 10,
      name: "casual men tshirt",
      img1: "../image/sub-img.webp",
      img2: "../image/sub-img1.webp",
      img3: "../image/sub-img2.webp",

      sub_img1: "../image/sub-img.webp",
      sub_img2: "../image/sub-img1.webp",
      sub_img3: "../image/sub-img2.webp",
      sub_img4: "../image/sub-img3.webp",
    },
  ];
  var data_of_cart = document.getElementById("showData");
  var data = "";

  var getParam = new URLSearchParams(window.location.search);
  var getValue = getParam.get("id");
  console.log("Id from param : ", getValue);

  var demo = product.filter((item) => item.id == getValue);
  console.log(demo, "++");
  var selectedSize = "";
  console.log("selectedSize", selectedSize);
  arr1.map((element) => {
    data = `<div class="d-flex justify-content-center  mt-3">
       <div class="row demo3">
                <div class="col-6 d-flex demo">
                    <div class="img_priview">
                        <div class="img_icon mb-4 mt-2 ">
                            <img src="${demo[0].img1}" alt="" class="rounded-3">
                        </div>
                        <div class="img_icon mb-4 mt-2">
                            <img src="${demo[0].img2}" alt="" class="rounded-3">
                        </div>
                        <div class="img_icon mb-4 mt-2">
                            <img src="${demo[0].img3}" alt="" class="rounded-3">
                        </div>
                    </div>
                    <div class="img_action ms-4 ">
                        <div class="img_view border border-1 pt-2 pb-2 rounded-1">
                            <img src="${demo[0].Product_img}" alt="">
                        </div>
                        <div class="img_order mt-4 d-flex justify-content-center">
                            <button type="button" class="btn btn-outline-danger w-50  pt-3 pe-5
                            pb-3 ps-5 me-3"  onclick="onCart()"><i class="fas fa-cart-arrow-down me-2" ></i><span class="btn_order">Add
                                    Cart</span></button>
                            <button type="button" class="btn btn-danger w-50 pt-3 pe-5
                            pb-3 ps-5"><i class="fas fa-angle-double-right me-2"></i><span class="btn_order">Buy
                                    Now</span></button>
                        </div>
                        <hr class="mt-4">
                        <div class="similar_product mt-3">
                            <h4 class="fw-bold">5 Similar Products</h4>
                            <div class="mt-2 d-flex justify-content-around">
                                <img src="${demo[0].sub_img1}" alt="" width="18%" height="120px" class="rounded-3">
                                <img src="${demo[0].sub_img2}" alt="" width="18%" height="120px" class="rounded-3">
                                <img src="${demo[0].sub_img3}" alt="" width="18%" height="120px" class="rounded-3">
                                <img src="${demo[0].sub_img4}" alt="" width="18%" height="120px" class="rounded-3">
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-secondary fs-5">${demo[0].name}
                            </h5>
                            <h2 class="mt-1">&#8377;${demo[0].price} <i class="fas fa-info-circle fs-6 mb-2"></i></h2>
                            <div class="Product_rating mt-1 d-flex ">
                                <span class="d-inline-flex ">
                                    <span class="d-inline-flex rating">
                                        <span class="fw-bold text-light">3.6</span>
                                        <span class="fs"><i class="fas fa-star mt-2 ms-0"></i></span>
                                    </span>
                                    <span class="text-secondary rating_review mt-1 ms-2">17817 Ratings, 4001 Reviews
                                    </span>
                                </span>
                            </div>
                            <div class="mt-2 pb-2 badge12">
                                <span class="badge rounded-pill text-bg-secondary ">Free Dilevery</span>
                            </div>
                            <div class="d-flex justify-content-start mt-3">
                                <div class="rating_img_id me-4 mt-1">
                                    <img src="../image/mall-badge.png" alt="" class="img_media_id">
                                </div>
                                <div class="rating_authoriez me-3 mt-1">
                                    <img src="../image/mall-trust-marker.png" alt="" class="me-2 verified">
                                    <p>Original Brand
                                    </p>
                                </div>
                                <div class="rating_authoriez mt-1">
                                    <img src="../image/mall-trust-marker.png" alt="" class="me-2 verified">
                                    <p>Original Brand
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-3">
                        <div class="card-body">
                            <h5 class="card-title fw-bold fs-4">Select Size <span class="fw-bold">:</span></h5>
                            <div class="d-flex justify-content-start gap-3 pb-2">
                                <div class="size"><a href="#" class="text-dark a1  Size1 fw-bold  fs-5" id="S1" onclick="onSize('S')">S</a></div>
                                <div class="size"><a href="#" class="text-dark a1  Size1 fw-bold  fs-5" id="S2" onclick="onSize('M')">M</a></div>
                                <div class="size"><a href="#" class="text-dark a1  Size1 fw-bold  fs-5" id="S3" onclick="onSize('L')">L</a></div>
                                <div class="size"><a href="#" class="text-dark a1  Size1 fw-bold  fs-5" id="S4" onclick="onSize('XL')">XL</a></div>
                                <div class="size"><a href="#" class="text-dark a1  Size1 fw-bold  fs-5" id="S5" onclick="onSize('XXL')">XXL</a></div>
                            </div>
                            <p id="size_ofProduct"></p>
                        </div>
                    </div>
                    <div class="card mt-3 pb-0">
                        <div class="card-body">
                            <h5 class="card-title fw-bold fs-4">Product Details</h5>
                            <div class="mt-3">
                                <p class="text-secondary Product_detail">Name&nbsp;:&nbsp;EyeBogler Men's Printed
                                    PoloNeck Blue Tshirts</p>
                                <p class="text-secondary Product_detail">Fabric &nbsp;:&nbsp;Cotton</p>
                                <p class="text-secondary Product_detail">Sleeve Length &nbsp;:&nbsp;Short Sleeves</p>
                                <p class="text-secondary Product_detail">Pattern &nbsp;:&nbsp;Printed </p>
                                <p class="text-secondary Product_detail">Net Quantity (N)&nbsp;:&nbsp;1</p>
                                <p class="text-secondary Product_detail">Sizes &nbsp;:&nbsp;</p>
                                <p class="text-secondary Product_detail">M (Chest Size &nbsp;: &nbsp; 19 in, Length
                                    Size: 27 in)</p>
                                <p class="text-secondary Product_detail">L (Chest Size &nbsp;:&nbsp; 20 in, Length Size:
                                    27.5 in)</p>
                                <p class="text-secondary Product_detail">XL (Chest Size &nbsp;:&nbsp; 21 in, Length
                                    Size: 28 in)</p>
                                <p class="text-secondary Product_detail">XXL (Chest Size &nbsp;:&nbsp; 22 in, Length
                                    Size: 28.5 in)</p>
                                <p class="text-secondary Product_detail">Durable stitch and quality finish. This t-shirt
                                    is stitched for higher</p>
                                <p class="text-secondary Product_detail">durability using the best technology in the
                                    industry. Manufactured</p>
                                <p class="text-secondary Product_detail">from cotton fabric, this t-shirt is very smooth
                                    and soft making it</p>
                                <p class="text-secondary Product_detail">odorless and passed through anti fading
                                    treatment which ensures</p>
                                <p class="text-secondary Product_detail">the t-shirt color to be intact even after
                                    repeated washes.,</p>
                                <p class="text-secondary Product_detail">Country of Origin &nbsp;: &nbsp; India</p>
                                <p class="mt-5 text-start "> <a href="" class="line">More Information</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-3">
                        <div class="card-body">
                            <h5 class="card-title fw-bold fs-4">Product Ratings & Reviews</h5>
                            <div class="row mt-4 mb-4">
                                <div class="col-4">
                                    <div class="averege_rating">
                                        <div class="d-flex justify-content-center mb-0 align-self-center">
                                            <h1 class="text-success text-center" style="font-weight: 700;">3.6</h1>
                                            <span class="rate"><i class="fas fa-star mt-2 fs-5"></i></span>
                                        </div>
                                        <span class="text-secondary rating2 fw-bold mt-0">17817 Ratings,</span>
                                        <span class="text-secondary  rating2 fw-bold">4001 Reviews</span>
                                    </div>
                                </div>
                                <div class="col-8">

                                    <div class="d-flex justify-content-around rate_base">
                                        <div class="w-25">
                                            <p class="rate_base_1">Excellent</p>
                                        </div>
                                        <div class="w-75">
                                            <div class="progress" role="progressbar"
                                                aria-label="Default striped example" aria-valuenow="10"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar bg-success" style="width: 38%">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-25">
                                            <p class="rate_base_1">10</p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-around rate_base">
                                        <div class="w-25">
                                            <p class="rate_base_1">Very Good</p>
                                        </div>
                                        <div class="w-75">
                                            <div class="progress" role="progressbar"
                                                aria-label="Default striped example" aria-valuenow="10"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar bg-success" style="width: 38%">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-25">
                                            <p class="rate_base_1">11</p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-around rate_base">
                                        <div class="w-25">
                                            <p class="rate_base_1">Good</p>
                                        </div>
                                        <div class="w-75">
                                            <div class="progress" role="progressbar"
                                                aria-label="Default striped example" aria-valuenow="10"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar bg-warning" style="width: 38%">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-25">
                                            <p class="rate_base_1">8</p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-around rate_base">
                                        <div class="w-25">
                                            <p class="rate_base_1">Excellent</p>
                                        </div>
                                        <div class="w-75">
                                            <div class="progress" role="progressbar"
                                                aria-label="Default striped example" aria-valuenow="10"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar bg-warning" style="width: 38%">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-25">
                                            <p class="rate_base_1">2</p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-around rate_base">
                                        <div class="w-25">
                                            <p class="rate_base_1">poor</p>
                                        </div>
                                        <div class="w-75">
                                            <div class="progress" role="progressbar"
                                                aria-label="Default striped example" aria-valuenow="10"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar bg-danger" style="width: 38%">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-25">
                                            <p class="rate_base_1">2</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <hr>
                            <div class="review_button mt-3 d-flex">
                                <a href="" class="ms-2 view_all_review">VIEW All REVIEW</a>
                                <div class="ms-3 "><i class="fas fa-angle-right align-self-center left_icon"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="prise_type d-flex justify-content-around mt-3 mb-3">
                        <div class="price_action d-flex">
                            <img src="../image/lowest_price_new.png" alt="" class="w-50 verified_1">
                            <div class="ms-2 align-self-center">
                                <p class="font_price">lowest <br>price</p>
                            </div>
                        </div>
                        <div class="price_action d-flex">
                            <img src="../image/cod_new.png" alt="" class="w-50 verified_1">
                            <div class="ms-2 align-self-center">
                                <p class="font_price">Cash&nbsp;on <br>price</p>
                            </div>
                        </div>
                        <div class="price_action d-flex">
                            <img src="../image/return_new.png" alt="" class="w-50 verified_1">
                            <div class="ms-2 align-self-center">
                                <p class="font_price">7-Days <br>Returns</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>`;
  });

  data_of_cart.innerHTML = data;
}

function onSize(item) {
  selectedSize = item;
  console.log(",,,", item);
  var size_product = {
    size: item,
  };
  localStorage.setItem("size", JSON.stringify(size_product));
}

function onCart() {
  var product = [
    {
      Product_img: "../image/shoe4.webp",
      price: 300,
      id: 1,
      name: "Trendy Graceful Women Shoes",
      img1: "../image/shoe_1.webp",
      img2: "../image/shoe2.webp",
      img3: "../image/shoe3.webp",
      sub_img1: "../image/shoe_1.webp",
      sub_img2: "../image/shoe2.webp",
      sub_img3: "../image/shoe3.webp",
      sub_img4: "../image/shoe_1.webp",
    },
    {
      Product_img: "../image/w__1.webp",
      price: 370,
      name: "Crop Collar Half Zip",

      id: 2,
      img1: "../image/w-2.webp",
      img2: "../image/w-3.webp",
      img3: "../image/w1.webp",
      sub_img1: "../image/w_1.webp",
      sub_img2: "../image/w_2.webp",
      sub_img3: "../image/w_3.webp",
      sub_img4: "../image/w_4.webp",
    },
    {
      Product_img: "../image/S.webp",
      price: 240,
      id: 3,
      img1: "../image/s1.webp",
      img2: "../image/s2.webp",
      img3: "../image/s3.webp",
      sub_img1: "../image/s1.webp",
      sub_img2: "../image/2.webp",
      sub_img3: "../image/4.webp",
      sub_img4: "../image/1.webp",
      name: "Proffesional Attractive T-shirts",
    },
    {
      Product_img: "../image/lljux_512.webp",
      price: 180,
      id: 4,
      name: "Proffesional Attractive Sunglasses ",
      img1: "../image/C.webp",
      img2: "../image/C2.webp",
      img3: "../image/C3.webp",
      sub_img1: "../image/C_!!.webp",
      sub_img2: "../image/C_!.webp",
      sub_img3: "../image/C_!!.webp",
      sub_img4: "../image/C_!.webp",
    },
    {
      Product_img: "../image/AA.webp",
      price: 470,
      id: 5,
      name: "Classy Elegant Women Dresses",
      img1: "../image/A.webp",
      img2: "../image/A1.webp",
      img3: "../image/A2.webp",
      sub_img1: "../image/A.webp",
      sub_img2: "../image/A1.webp",
      sub_img3: "../image/A2.webp",
      sub_img4: "../image/A3.webp",
    },
    {
      Product_img: "../image/demo.webp",
      price: 500,
      id: 6,
      name: "Women's Black Micro Printed Crepe Suits & Dress Materials",
      img1: "../image/demo2.webp",
      img2: "../image/demo1.webp",
      img3: "../image/demo2.webp",
      sub_img1: "../image/demo_1.webp",
      sub_img2: "../image/demo_2.webp",
      sub_img3: "../image/demo_3.webp",
      sub_img4: "../image/demo.webp",
    },
    {
      Product_img: "../image/oo7.webp",
      price: 560,
      id: 7,
      name: "casual men tshirt",
      img1: "../image/small.webp",
      img2: "../image/small1.webp",
      img3: "../image/small2.webp",
      sub_img1: "../image/small_1.webp",
      sub_img2: "../image/small_2.webp",
      sub_img3: "../image/small_3.webp",
      sub_img4: "../image/small_4.webp",
    },
    {
      Product_img: "../image/oo8.webp",
      price: 430,
      id: 8,
      img1: "../image/sub_img.webp",
      img2: "../image/sub_img1.webp",
      img3: "../image/sub_img2.webp",
      sub_img1: "../image/oo8.webp",
      sub_img2: "../image/oo8.webp",
      sub_img3: "../image/oo8.webp",
      sub_img4: "../image/oo8.webp",
      name: "Cotton Blend Maroon Long Sleeves Printed Tshirts",
    },

    {
      Product_img: "../image/t5.webp",
      price: 430,
      id: 10,
      name: "casual men tshirt",
      img1: "../image/sub-img.webp",
      img2: "../image/sub-img1.webp",
      img3: "../image/sub-img2.webp",

      sub_img1: "../image/sub-img.webp",
      sub_img2: "../image/sub-img1.webp",
      sub_img3: "../image/sub-img2.webp",
      sub_img4: "../image/sub-img3.webp",
    },
  ];
  var getParam = new URLSearchParams(window.location.search);
  var getValue = getParam.get("id");
  //   console.log("Id from param : ", getValue);

  var demo = product.filter((item) => item.id == getValue);
  var get_size = JSON.parse(localStorage.getItem("size"));

  var getProduct = {
    Product_img: `${demo[0].Product_img}`,
    price: `${demo[0].price}`,
    name: `${demo[0].name}`,
    size: `${get_size.size}`,
    id: `${getValue}`,
  };

  var product_Arr = JSON.parse(localStorage.getItem("Product")) || [];
  var productone = product_Arr.find((item) => item.id == getValue);
  if (!productone) {
    product_Arr.push(getProduct);

    localStorage.setItem("Product", JSON.stringify(product_Arr));

    console.log(product_Arr, "/--/");
  } else {
    console.log("You should not select this product more than once.");
    window.alert("You should not select this product more than once.");
  }
}
var getProductItem = JSON.parse(localStorage.getItem("Product"));
console.log("get", getProductItem);
// console.log("get_size", get_size);

onShow();
function goToCart() {
  window.location.href = "../cart/cart.html";
}
