// NON VEG data
const non_veg = [
    {
        id: 1,
        name: "BIRYANI",
        price: 220,
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe.jpg",
        quantity: 0
    },
    {
      id: 2,
      name: "CHICKEN BURGER",
      price: 120,
      image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg",
      quantity: 0
    },
    {
        id: 3,
        name: "CHICKEN POPCORN",
        price: 300,
        image: "https://img.buzzfeed.com/video-api-prod/assets/c2c3a2ffe8b740baa57c9a51fdc9eec1/BFV11503_CheddarRanchPopcornChicken-ThumbTextless1080.jpg?resize=1200:*",
        quantity: 0
      },
      {
        id: 4,
        name: "CHICKEN TACOS",
        price: 100,
        image: "https://therecipecritic.com/wp-content/uploads/2022/11/shredded-chicken-tacos-2.jpg",
        quantity: 0
      },
      {
        id: 5,
        name: "CHICKEN SHAWARMA",
        price: 100,
        image: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=0.8893333333333334xw:1xh;center,top&resize=1200:*",
        quantity: 0
      },
      {
        id: 6,
        name: "CHICKEN FRIED RICE",
        price: 100,
        image: "https://vismaifood.com/storage/app/uploads/public/9c1/148/420/thumb__700_0_0_0_auto.jpg",
        quantity: 0
      },
      {
          id: 7,
          name: "CHICKEN TIKKA",
          price: 150,
          image: "https://imagevars.gulfnews.com/2023/05/01/Tandoori-chicken_187d79b132b_large.jpg",
          quantity: 0
        },
        {
          id: 8,
          name: "CHICKEN ALFAHAM",
          price: 150,
          image: "https://static.toiimg.com/thumb/83114901.cms?width=1200&height=900",
          quantity: 0
        },
  ];
  
  // VEG Data
  const veg = [
    {
      id: 9,
      name: "Gobi",
      price: 50,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3jEZq2m1Ap-ubavAaHoNEeukOsSrOI1t-riUwNdt1pOI-2vvlWkTAxbL2KZf6Fj0EUU&usqp=CAU",
      quantity: 0
    },
    {
      id: 10,
      name: "PARATA",
      price: 40,
      image: "https://opt.toiimg.com/recuperator/img/toi/m-59862336/59862336.jpg&width=500&resizemode=4",
      quantity: 0
    },
    {
      id: 11,
      name: "VEG FRIED RICE",
      price: 50,
      image: "https://recipesofhome.com/wp-content/uploads/2020/06/veg-fried-rice-recipe.jpg",
      quantity: 0
    },
    {
      id: 12,
      name: "PANEER TACOS",
      price: 120,
      image: "https://c.ndtvimg.com/2021-09/10cgsus8_tacos_625x300_09_September_21.jpg",
      quantity: 0
    },
    {
      id: 13,
      name: "MASALA DOSA",
      price: 100,
      image: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg",
      quantity: 0
    },
    {
      id: 14,
      name: "GOLI BAJE",
      price: 40,
      image: "https://i.pinimg.com/736x/01/b5/56/01b556ec84788aadf01b5ee8f9a04ab4--birthday-menu-mangalore.jpg",
      quantity: 0
    },
    {
      id: 15,
      name: "CHOW CHOW BATH",
      price: 60,
      image: "https://2.bp.blogspot.com/-qUacgUjuins/W0L93bJe2LI/AAAAAAAAz1Q/3O08ZW-8UKMUq83kWvQjH9Umh1UWVokigCLcBGAs/s1600/chow-chow-bath-1.jpg",
      quantity: 0
    },
    {
      id: 16,
      name: "NEERULI BAJE",
      price: 40,
      image: "https://img-global.cpcdn.com/recipes/28fcc2559ea563da/680x482cq70/crispy-neerulli-baje-onion-pakora-recipe-main-photo.jpg",
      quantity: 0
    }
  ];
  
  // Cart data
  let cartItems = [];
  
  // Function to store cart items in localStorage
  function storeCartItems() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  
  // Function to retrieve cart items from localStorage
  function retrieveCartItems() {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
        cartItems = JSON.parse(storedCartItems);
    } else {
        cartItems = [];
    }
  }
  
  // Function to render product cards
  function renderProductCards() {
    const productList = document.getElementById("non_veg-list");
    if (!productList) return;
  
    productList.innerHTML = "";
  
    const allnon_veg = [...non_veg, ...veg]; // Combine NON VEG and VEG

    allnon_veg.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
      card.innerHTML = `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h4 class="card-title">${product.name}</h4>
            <span class="card-text">&#8377;${product.price}</span> <!-- Use &#8377; for the rupee symbol -->
            <div class="d-grid gap-2">
              <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">Add to cart</button>
            </div>
          </div>
        </div>
      `;
    
  
      if (product instanceof Object && product.id >= 9 && product.id <= 16) {
        const vegList = document.getElementById("veg-list");
        if (vegList) {
          vegList.appendChild(card);
        }
      } else {
        productList.appendChild(card);
      }
    });
  
    // Add event listeners to the "Add to cart" buttons
    const addToCartButtons = document.getElementsByClassName("add-to-cart-btn");
    for (let i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener("click", addToCart);
    }
  }
  
  // Function to handle adding a product to the cart
  function addToCart(event) {
    const productId = parseInt(event.target.getAttribute("data-product-id"));
  
    // Check if the product is already in the cart
    const existingCartItem = cartItems.find(item => item.id === productId);
    if (existingCartItem) {
        existingCartItem.quantity++;
    } else {
        const product = [...non_veg, ...veg].find(item => item.id === productId);
        cartItems.push({ ...product, quantity: 1 });
    }
  
    // Update the cart count and store the cart items in localStorage
    updateCartCount();
    storeCartItems();
  
    // Show notification
    showNotification("Item added to cart!");
  
    // Reset notification after 2 seconds
    setTimeout(() => {
      resetNotification();
    }, 2000);
  }
  
  // Function to remove a product from the cart
  function removeFromCart(event) {
    const productId = parseInt(event.target.getAttribute("data-product-id"));
    cartItems = cartItems.filter(item => item.id !== productId);
    renderCartItems();
    updateTotalPrice();
    updateCartCount();
  
    // Store the cart items in localStorage or clear it if all items are removed
    if (cartItems.length > 0) {
        storeCartItems();
    } else {
        clearCart();
    }
  }
  
  // Function to clear the cart
  function clearCart() {
    cartItems = [];
    renderCartItems();
    updateTotalPrice();
    updateCartCount();
    localStorage.removeItem("cartItems");
  }
  
  // Function to decrease the quantity of a cart item
  function decreaseQuantity(event) {
    const productId = parseInt(event.target.getAttribute("data-product-id"));
    const cartItem = cartItems.find(item => item.id === productId);
  
    if (cartItem.quantity > 1) {
        cartItem.quantity--;
        renderCartItems();
        updateTotalPrice();
        storeCartItems(); // Store cart items after updating the quantity
    }
  }
  
  // Function to increase the quantity of a cart item
  function increaseQuantity(event) {
    const productId = parseInt(event.target.getAttribute("data-product-id"));
    const cartItem = cartItems.find(item => item.id === productId);
  
    cartItem.quantity++;
    renderCartItems();
    updateTotalPrice();
    storeCartItems(); // Store cart items after updating the quantity
  }
  
  // Function to render cart items
  function renderCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    if (!cartItemsContainer) return;
  
    cartItemsContainer.innerHTML = "";
  
  cartItems.forEach(item => {
  const cartItem = document.createElement("div");
  cartItem.classList.add("mb-3");
  cartItem.innerHTML = `
    <div class="card">
      <div class="row g-0">
        <div class="col-md-1">
          <img src="${item.image}" class="img-fluid rounded-start" alt="${item.name}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text price">&#8377;${item.price}</p> <!-- Use &#8377; for the rupee symbol -->
            <div class="d-flex align-items-center">
              <button class="btn btn-secondary decrease-quantity-btn" data-product-id="${item.id}">-</button>
              <span class="mx-2">${item.quantity}</span>
              <button class="btn btn-secondary increase-quantity-btn" data-product-id="${item.id}">+</button>
              <button class="btn btn-danger remove-from-cart-btn ms-auto" data-product-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  cartItemsContainer.appendChild(cartItem);
});

    
  
    // Add event listeners to the quantity and remove buttons
    const decreaseQuantityButtons = document.getElementsByClassName("decrease-quantity-btn");
    const increaseQuantityButtons = document.getElementsByClassName("increase-quantity-btn");
    const removeFromCartButtons = document.getElementsByClassName("remove-from-cart-btn");
  
    for (let i = 0; i < decreaseQuantityButtons.length; i++) {
      decreaseQuantityButtons[i].addEventListener("click", decreaseQuantity);
      increaseQuantityButtons[i].addEventListener("click", increaseQuantity);
      removeFromCartButtons[i].addEventListener("click", removeFromCart);
    }
  
    updateTotalPrice();
    updateCartCount();
  }
  
  // Function to update the cart count
  function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (!cartCount) return;
  
    cartCount.textContent = cartItems.length;
  
    const navLink = document.querySelector(".nav-link");
    if (cartItems.length > 0) {
      navLink.classList.add("has-count");
    } else {
      navLink.classList.remove("has-count");
    }
  
    storeCartItems();
  }
  
  // Function to update the total price
  function updateTotalPrice() {
    const totalPriceElement = document.getElementById("total-price");
    if (!totalPriceElement) return;
  
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    totalPriceElement.textContent = `₹${totalPrice.toFixed(2)}`; // Use ₹ for the rupee symbol
  }
  
  // Function to handle checkout button click
  function checkout() {
    // Check if there are items in the cart
    if (cartItems && cartItems.length > 0) {
      alert("Order placed successfully!");
    } else {
      alert("No items found in the cart. Please add items to your cart before proceeding to checkout.");
    }
  }
  
  // Function to show notification
  function showNotification(message) {
    const notification = document.getElementById("notification");
    if (!notification) return;
  
    notification.textContent = message;
    notification.style.display = "block";
  }
  
  // Function to reset notification
  function resetNotification() {
    const notification = document.getElementById("notification");
    if (!notification) return;
  
    notification.textContent = "";
    notification.style.display = "none";
  }
  
  // Function to render cart items on page load
  function renderCartItemsOnLoad() {
    retrieveCartItems();
    renderCartItems();
    updateTotalPrice();
    updateCartCount();
  
    if (cartItems.length === 0) {
      localStorage.removeItem("cartItems");
    }
  }
  
  // Call the necessary functions to initialize the page
  document.addEventListener("DOMContentLoaded", function() {
    renderProductCards();
    renderCartItemsOnLoad();
  });