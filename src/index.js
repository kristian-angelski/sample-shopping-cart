var products = [
  {id: 1, name: 'pc1', price: 5, img: 'url', type: 'phone'},
  {id: 2, name: 'pc2', price: 10, img: 'url', type: 'pc'},
  {id: 3, name: 'pc3', price: 15, img: 'url', type: 'phone'},
  {id: 4, name: 'pc4', price: 20, img: 'url', type: 'pc'},
  {id: 5, name: 'pc5', price: 25, img: 'url', type: 'laptop'},
  {id: 6, name: 'pc6', price: 30, img: 'url', type: 'phone'},
  {id: 7, name: 'pc7', price: 35, img: 'url', type: 'pc'},
  {id: 8, name: 'pc8', price: 40, img: 'url', type: 'laptop'},
  {id: 9, name: 'pc9', price: 45, img: 'url', type: 'phone'},
  {id: 10, name: 'pc10', price: 50, img: 'url', type: 'laptop'},
  {id: 11, name: 'pc11', price: 55, img: 'url', type: 'component'},
  {id: 12, name: 'pc12', price: 60, img: 'url', type: 'component'}
];

var navBar = `    <nav>
<div class="nav-wrapper">
  <a href="#" class="brand-logo">Store</a>
  <ul id="nav-mobile" class="right hide-on-med-and-down">
    <li><a href="#">Phones</a></li>
    <li><a href="#">PCs</a></li>
    <li><a href="#">Laptops</a></li>
    <li><a href="#">Components</a></li>
    <li><a href="#">About Us</a></li>
    <!-- TODO: cart must be implemented here -->
    <li><a href="#">Cart</a></li>
  </ul>
</div>
</nav>`;

var header = document.querySelector('header');
var element = document.querySelector('.list');
header.innerHTML = navBar;
// element.innerHTML = JSON.stringify(products);
element.innerHTML = products.map(product => {

  return `
    <div class="product"> 
      ${product.id} 
      ${product.price} 
      ${product.name} 
    </div>
  `;
}).join('');