// Code trang giỏ hàng

var iconCart = document.querySelector(".tool-item .fa-cart-shopping");
iconCart.addEventListener("click", function (event) {
  window.location.href = "giohang.html";
});

function isExistTed(itempresent, listItems) {
  let id = 0;
  listItems.forEach(function (item) {
    if (item.idItem === itempresent.idItem) {
      id = item.idItem;
    }
  });
  return id;
}

var presentCart = []; // Các mặt hàng hiện tại trong giỏ hàng

function addItemsToShoppingCart() {
  var listButtonsCart = document.querySelectorAll(
    ".content .descriptionItem i"
  ); //Lấy ra tất cả các nút
  listButtonsCart.forEach(function (element, index) {
    element.addEventListener("click", function (event) {
      event.stopPropagation();
      let item =
        element.parentElement.parentElement.parentElement.parentElement;
      let idItem = parseInt(item.querySelector(".idItem").textContent);
      let newItem = {
        idItem: parseInt(item.querySelector(".idItem").textContent),
        imageItem: item.querySelector("img").src,
        nameItem: item.querySelector(".descriptionItem .nameItem").textContent,
        priceItem: parseInt(
          item
            .querySelector(".descriptionItem .infoOtherItem .costItem")
            .textContent.replace(/\D/g, "")
        ),
        quantity: 1,
      };
      if (localStorage.getItem("cartItems") === null) {
        // Chưa có giỏ hàng
        alert(
          "Sản phẩm " +
            item.querySelector(".descriptionItem .nameItem").textContent +
            " đã được thêm vào giỏ hàng thành công!"
        );
        presentCart.push(newItem);
        localStorage.setItem("cartItems", JSON.stringify(presentCart));
        window.location.reload();
      } //Đã có giỏ hàng
      else {
        presentCart = JSON.parse(localStorage.getItem("cartItems"));
        if (isExistTed(newItem, presentCart) > 0) {
          alert("Sản phẩm đã tồn tại trong giỏ hàng");
        } else {
          alert(
            "Sản phẩm " +
              item.querySelector(".descriptionItem .nameItem").textContent +
              " đã được thêm vào giỏ hàng thành công!"
          );
          presentCart.push(newItem);
          localStorage.setItem("cartItems", JSON.stringify(presentCart));
          window.location.reload();
        }
      }
    });
  });
}

addItemsToShoppingCart();

function showCart() {
  if (localStorage.cartItems == undefined) {
    // alert('Giỏ hàng hiện đang trống!');
  } else {
    let customerCart = JSON.parse(localStorage.getItem("cartItems"));
    console.log(customerCart);
    let tbody = document.querySelector("tbody");
    let bodyContent = "";
    customerCart.forEach(function (item, index) {
      bodyContent +=
        '<tr class="page-main__shoppingCart__item">' +
        "<td>" +
        (index + 1) +
        "</td>" +
        "<td>" +
        '<img src="' +
        item.imageItem +
        '" alt="">' +
        "</td>" +
        "<td>" +
        item.nameItem +
        "</td>" +
        "<td>" +
        '<input type="number" min="1" value="' +
        item.quantity +
        '">' +
        "</td>" +
        "<td>" +
        item.priceItem +
        "<sup>đ</sup></td>" +
        '<td><i class="fa-solid fa-trash"></i></td>' +
        "</tr>";
    });
    tbody.innerHTML = bodyContent;

    let inputElements = document.querySelectorAll('tbody input[type="number"]');
    inputElements.forEach(function (input, index) {
      input.addEventListener("change", function (event) {
        let newQuantity = event.target.value;
        customerCart[index].quantity = newQuantity;
        localStorage.setItem("cartItems", JSON.stringify(customerCart));
        let tFoot = document.querySelector(".page-main__shoppingCart_total");
        let total = 0;
        customerCart.forEach(function (item, index) {
          console.log(item.priceItem);
          console.log(item.quantity);
          total += item.priceItem * item.quantity;
        });
        tFoot.innerHTML = total + "<sup>đ</sup>";
      });
    });

    let tFoot = document.querySelector(".page-main__shoppingCart_total");
    let total = 0;
    customerCart.forEach(function (item, index) {
      console.log(item.priceItem);
      console.log(item.quantity);
      total += item.priceItem * item.quantity;
    });

    tFoot.innerHTML = total + "<sup>đ</sup>";
  }
  deleteCart();
}

function deleteCart() {
  let trash = document.querySelectorAll(
    ".page-main__shoppingCart__item .fa-trash"
  );
  let customerCart = JSON.parse(localStorage.getItem("cartItems"));

  trash.forEach(function (element, index) {
    element.addEventListener("click", function (evt) {
      customerCart.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(customerCart));
      location.reload();
    });
  });

  if (customerCart != null) {
    if (customerCart.length === 0) {
      let restore = document.querySelector("tbody");
      let emptyContent =
        '<td class="emptyCart blink" colspan="6">Giỏ hàng của bạn hiện đang trống !!!</td>';
      restore.innerHTML = emptyContent;
    }
  }
}

function ordered() {
  let order = document.querySelector(".page-main__shoppingCart__order");
  order.addEventListener("click", function (event) {
    localStorage.removeItem("cartItems");
    alert("Bạn đã đặt hàng thành công!!!");
    location.reload();
  });
}
