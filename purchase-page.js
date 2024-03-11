//type:  snacks (lanches), candy (doces),  cakes (bolos),  drinks (bebidas).
let items = [
    {id:1, name:'Iphone', img:'iphone.png', type: 'snacks', price:[1000.00, 1000.00, 1000.00], sizes:[' ', '',''], description:'Novo'},
    {id:2, name:'Iphone', img:'iphone.png', type: 'snacks', price:[1000.00, 1000.00, 1000.00], sizes:[' ', '',''], description:'Novo'},
    {id:3, name:'SmartWatch', img:'smartwatch.png', type: 'drinks', price:[1000.00, 1000.00, 1000.00], sizes:[' ', '',''], description:'Semi Novo'},
    {id:4, name:'SmartWatch', img:'smartwatch.png', type: 'drinks', price:[1000.00, 1000.00, 1000.00], sizes:[' ', '',''], description:'Novo'},
    {id:5, name:'SmartWatch', img:'smartwatch.png',type: 'drinks', price:[1000.00, 1000.00, 1000.00], sizes:[' ', '',''], description:'Novo'},
    {id:6, name:'SmartWatch', img:'smartwatch.png',type: 'drinks', price:[1000.00, 1000.00, 1000.00], sizes:[' ', '',''], description:'Novo'},
    {id:7, name:'SmartWatch', img:'smartwatch.png',type: 'drinks', price:[1000.00, 1000.00, 1000.00], sizes:[' ', '',''], description:'Usado'},
    {id:8, name:'SmartWatch', img:'smartwatch.png',type: 'drinks', price:[1000.00, 1000.00, 1000.00], sizes:[' ', '',''], description:' Usado'},
    {id:9, name:'SmartWatch', img:'smartwatch.png',type: 'drinks', price:[1000.00, 1000.00, 1000.00], sizes:[' ', '',''], description:'Vitrine'},
    {id:10, name:'SmartWatch', img:'smartwatch.png',type: 'drinks', price:[1000.00, 1000.00, 1000.00], sizes:[' ', '',''], description:'Novo'},


    {id:11, name:'Capas Iphone', img:'capa6.png', type: 'cakes', price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Novo.'},
    {id:12, name:'Capas Xiaomi', img:'capasxiaomi.png',type: 'cakes',price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Novo.'},
    {id:13, name:'Carregador Xiaomi', img:'carregadorxiaomi.png',type: 'cakes',price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Novo.'},
    {id:14, name:'Capas Iphone', img:'capa6.png',type: 'cakes', price:[22.00, 22.00, 22.00], sizes:[' ', '',''], description:'Novo.'},
    {id:15, name:'Capas Iphone', img:'capa6.png',type: 'cakes', price:[24.00, 24.00, 24.00], sizes:[' ', '',''], description:'Novo.'},
    {id:16, name:'Capas Iphone', img:'capa6.png',type: 'cakes', price:[27.00, 27.00, 27.00], sizes:[' ', '',''], description:'Novo.'},
    {id:17, name:'Capas Iphone', img:'capa6.png',type: 'cakes',price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Novo.'},
    {id:18, name:'Capas Iphone', img:'capa6.png',type: 'cakes', price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Novo.'},
    {id:19, name:'Capas Iphone', img:'capa6.png',type: 'cakes', price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Novo.'},
    {id:20, name:'Capas Iphone', img:'capa6.png', price:[18.00, 18.00, 18.00], sizes:[' ', '',''], description:'Novo.'},
    {id:21, name:'Capas Iphone', img:'capa6.png',type: 'cakes', price:[18.00, 18.00, 18.00], sizes:[' ', '',''], description:'Novo.'},
    {id:22, name:'Capas Iphone', img:'capa6.png',type: 'cakes', price:[18.00, 18.00, 18.00], sizes:[' ', '',''], description:'Novo.'},
    {id:23, name:'Capas Iphone', img:'capa6.png',type: 'cakes', price:[18.00, 18.00, 18.00], sizes:[' ', '',''], description:'Novo.'},
    {id:24, name:'Capas Iphone', img:'capa6.png',type: 'cakes',  price:[18.00, 18.00, 18.00], sizes:[' ', '',''], description:'Novo.'},
    {id:25, name:'Capas Iphone', img:'capa6.png',type: 'cakes',  price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Novo.'},



    {id:26, name:'Xiaomi', img:'xiaomi.png', type: 'candy',  price:[3.00, 3.00, 3.00], sizes:[' ', '',''], description:'Novo'},
    {id:27, name:'Xiaomi', img:'xiaomi.png', type: 'candy', price:[3.00, 3.00, 3.00], sizes:[' ', '',''], description:'Novo'},
    {id:28, name:'Xiaomi', img:'xiaomi.png',  type: 'candy', price:[3.50, 3.50, 3.50], sizes:[' ', '',''], description:'Novo'},
    {id:29, name:'Xiaomi', img:'xiaomi.png',type: 'candy', price:[10.00, 10.00, 10.00], sizes:[' ', '',''], description:'Novo'},
    {id:30, name:'Xiaomi', img:'xiaomi.png',type: 'candy', price:[5.00, 5.00, 5.000], sizes:[' ', '',''], description:'Novo'},
    {id:31, name:'Xiaomi', img:'xiaomi.png',type: 'candy', price:[4.00, 4.00, 4.00], sizes:[' ', '',''], description:'Novo'},
    {id:32, name:'Xiaomi', img:'xiaomi.png',type: 'candy', price:[12.00, 12.00, 12.00], sizes:[' ', '',''], description:'Novo'},

    {id:33, name:'Iphone', img:'iphone.png',type: 'snacks',price:[8.00, 8.00, 8.00], sizes:[' ', '',''], description:'Novo.'},
    {id:34, name:'Iphone', img:'iphone.png',type:'snacks',price:[8.00, 8.00, 8.00], sizes:[' ', '',''], description:'Novo.'},
    {id:35, name:'Iphone', img:'iphone.png',type:'snacks',price:[6.00, 6.00, 6.00], sizes:[' ', '',''], description:'Novo.'},
    {id:36, name:'Iphone', img:'iphone.png',type:'snacks',price:[7.00, 7.00, 7.00], sizes:[' ', '',''], description:'Novo.'},
    {id:37, name:'Iphone', img:'iphone.png',type:'snacks',price:[6.00, 6.00, 6.00], sizes:[' ', '',''], description:'Novo.'},
    {id:38, name:'Iphone', img:'iphone.png',type:'snacks',price:[6.00, 6.00, 6.00], sizes:[' ', '',''], description:'Novo.'},
    {id:39, name:'Iphone', img:'iphone.png',type:'snacks',price:[6.00, 6.00, 6.00], sizes:[' ', '',''], description:'Novo.'},
    {id:40, name:'Iphone', img:'iphone.png',type:'snacks',price:[7.00,7.00, 7.00], sizes:[' ', '',''], description:'Novo.'},
    {id:41, name:'Iphone', img:'iphone.png',type:'snacks',price:[6.00, 6.00, 6.00], sizes:[' ', '',''], description:'Novo.'},
    {id:42, name:'Iphone', img:'iphone.png',type:'snacks',price:[8.00, 8.00, 8.00], sizes:[' ', '',''], description:'Novo.'},
    {id:43, name:'Iphone', img:'iphone.png',type:'snacks',price:[5.00, 5.00, 5.00], sizes:[' ', '',''], description:'Novo.'},
    {id:44, name:'Iphone', img:'iphone.png',type:'snacks',price:[5.00, 5.00, 5.00], sizes:[' ', '',''], description:'Novo.'},
    {id:45, name:'Iphone', img:'iphone.png',type:'snacks',price:[12.00, 5.00, 5.00], sizes:[' ', '',''], description:'Novo.'},
    {id:46, name:'Iphone', img:'iphone.png',type:'snacks',price:[5.00, 5.00, 5.00], sizes:[' ', '',''], description:'Novo.'},
    {id:47, name:'Iphone', img:'iphone.png',type:'snacks',price:[6.00, 6.00, 6.00], sizes:[' ', '',''], description:'Novo.'},
];

let cart = [];
let cartItemsSaved = JSON.parse(window.localStorage.getItem("cart"));
let modalQt = 0;
let key = 0;

window.addEventListener("load", () => {
    cart.push(...cartItemsSaved || []);
    updateCart()
    window.localStorage.setItem("cart", JSON.stringify(cart));
}); 

const c = (el)=>document.querySelector(el); 
const cs = (el)=>document.querySelectorAll(el);

function getTypeFilterValue(){
    return !window.localStorage.getItem("type") ? 'snacks' : window.localStorage.getItem("type");
}

items.filter(item => item.type === getTypeFilterValue()).map((item, index)=>{
    let menuItem = c('.menu .snacks-items').cloneNode(true);
    menuItem.setAttribute('class', index + ' snacks-items');
    menuItem.setAttribute('data-key', index);
    menuItem.querySelector('.snacks-img').src= `${item.img}`;
    menuItem.querySelector('.snacks-footer p').innerHTML = item.description;
    menuItem.querySelector('.snacks-info h1').innerHTML = item.name;
    menuItem.querySelector('.snacks-span').innerHTML = `R$ ${item.price[0].toFixed(2)}`;
    menuItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault(); 
        key = e.target.closest('.snacks-items').getAttribute('data-key'); 
        modalQt = 1;
        
        c('.menuBig img').src = items[key].img;
        c('.menuInfo h1').innerHTML = items[key].name;
        c('.menuInfo--desc').innerHTML = items[key].description;
        c('.menuInfo--size.selected').classList.remove('selected');
        cs('.menuInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2) {
                size.classList.add('selected');
                c('.menuInfo--actualPrice').innerHTML = `R$ ${items[key].price[sizeIndex].toFixed(2)}`;
                //c('.menuInfo--actualPrice2').innerHTML = `R$ ${items[key].price[sizeIndex].toFixed(2)}`;

            }
            //size.innerHTML = items[key].sizes[sizeIndex];
            size.querySelector('span').innerHTML = items[key].sizes[sizeIndex];
        });
        c('.menuInfo--qt').innerHTML = modalQt;
        c('.menuWindowArea').style.opacity = 0; 
        c('.menuWindowArea').style.display = 'flex';
        setTimeout(()=> {
            c('.menuWindowArea').style.opacity = 1; 
        }, 200);
    });

    c('#snacks').append(menuItem);
    
});

function closeModal(){
    c('.menuWindowArea').style.opacity = 0; 
    setTimeout(()=> {
        c('.menuWindowArea').style.display = 'none';
    }, 500);
    
}

cs('.menuInfo--cancelButton, .menuInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});

c('.menuInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQt > 1) {
        modalQt--;
        c('.menuInfo--qt').innerHTML = modalQt;
    }
});

c('.menuInfo--qtmais').addEventListener('click', ()=>{
    modalQt++;
    c('.menuInfo--qt').innerHTML = modalQt;
});

cs('.menuInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=> {
        c('.menuInfo--size.selected').classList.remove('selected');
        //e.target.classList.add('selected'); //ocorre erro se clicar no <span></span>
        size.classList.add('selected');
        c('.menuInfo--actualPrice').innerHTML = `R$ ${items[key].price[sizeIndex].toFixed(2)}`;
        //c('.menuInfo--actualPrice2').innerHTML = `R$ ${items[key].price[sizeIndex].toFixed(2)}`;
    });
});


c('.menuInfo--addButton').addEventListener('click', ()=>{
    let size = parseInt(c('.menuInfo--size.selected').getAttribute('data-key'));
    let identifier = items[key].id+'@'+size;
    
    let locaId = cart.findIndex((item)=>item.identifier == identifier);
    if(locaId > -1){
        cart[locaId].qt += modalQt; 
    } else {
        cart.push({
            identifier,
            id: items[key].id,
            size,
            qt:modalQt
        });
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }
    updateCart();
    closeModal();
});

window.addEventListener("load", () => {
    if(cart.length > 0) {
        c('.menu-openner span').innerHTML = cart.length;
    }
});


c('.menu-openner').addEventListener('click', ()=>{
    updateCart();
    if(cart.length > 0){
        c('aside').style.left = '0';
    }
});

c('.menu-closer').addEventListener('click', ()=>{
    c('aside').style.left='100vw';
});

$("#cartFinalizar").click(function(){
    $(location).attr("href", "https://wa.me/5575992137982?text=Ol%C3%A1+Gostaria+de+fazer+o+seguinte+pedido" + encodeURI( "olá, gostaria de fazer um pedido\n" + document.getElementById("cart").innerText.replace(/<br\s*\/?>/, "\n") + document.getElementById("details").textContent + "\n *Campo para endereço de entrega e observações:* \n"))
    window.localStorage.clear();
    var pegarTxt = document.getElementById("Total").innerText;
    
})

function sendOrder(){
    $(location).attr("href", "https://wa.me/5575992137982?text=Ol%C3%A1+Gostaria+de+fazer+o+seguinte+pedido" + encodeURI( "olá, gostaria de fazer um pedido\n" + document.getElementById("cart").innerText.replace(/<br\s*\/?>/, "\n") + document.getElementById("details").textContent + "\n *Campo para endereço de entrega e observações:* \n"))
    window.localStorage.clear();
    var pegarTxt = document.getElementById("Total").innerText;
}

function updateCart() {
    window.localStorage.setItem("cart", JSON.stringify(cart));
    c('.menu-openner span').innerHTML = cart.length;
    if(cart.length > 0) {
        c('aside').classList.add('show');
        c('.cart').innerHTML = ''; 
        let subtotal = 0;
        let desconto = 0;
        let total = 0;
        let taxa = 5;
        cart.map((itemCart, index)=>{
            let modelItem = items.find((itemBD)=>itemBD.id == itemCart.id);
            subtotal += modelItem.price[itemCart.size] * itemCart.qt;
            let cartItem = c('.menu .cart--item').cloneNode(true);
            let menuizeName;
            switch(itemCart.size) {
                case 0:
                    menuizeName = `${items[key].sizes[0]}`;
                    break;
                case 1:
                    menuizeName = `${items[key].sizes[1]}`;
                    break;
                case 2:
                    menuizeName = `${items[key].sizes[2]}`;
            }
            //itens abaixo aparecem no carrinho enviar pedido
            cartItem.querySelector('img').src = modelItem.img;
            //cartItem.querySelector('.cart--item-nome').innerHTML = `${modelItem.name} - ${modelItem.sizes[itemCart.size]}`;
            cartItem.querySelector('.cart--item-nome').innerHTML = `${modelItem.name} ${menuizeName}`;
            cartItem.querySelector('.cart--item--qt').innerHTML = itemCart.qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click',()=>{
                if(itemCart.qt > 1) {
                    itemCart.qt--
                } else {
                    cart.splice(index, 1);
                    
                }
                updateCart();
            });
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click',()=>{
                itemCart.qt++; 
                updateCart();
            });
            c('.cart').append(cartItem);
        });

        desconto = subtotal * 0.1;
        total = subtotal - desconto + taxa;
        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;
    } else {
        c('.menu-openner span').innerHTML = 0;
        c('aside').innerHTML = `
        <div class="cart--area">
            <div class="texto--cart">FINALIZE AGORA</div><br><br>

            <div class="cart" id="cart"></div>
            <div class="cart--details" id="details">
                <div class="fontes1">
                    <div class="cart--totalitem subtotal">
                        <span>Subtotal</span>
                        <span>R$ 0,00</span>
                    </div>
                    <div class="cart--totalitem taxa">
                        <span>Taxa de entrega</span>
                        <span>R$ 5,00</span>
                    </div>
                    <div class="cart--totalitem desconto">
                        <span>Desconto (-10%)</span>
                        <span>R$ 0,00</span>
                    </div>
                    <div class="cart--totalitem total big">
                        <span>Total</span>
                        <span>R$ 0,00</span>
                    </div>
                </div>
            </div>
            <div class="cart--finalizar" id="cartFinalizar" onclick="sendOrder()">ENVIAR PEDIDO</div><br><br>
            <div class="menu-closer">
                <span class="material-icons">arrow_back_ios</span>
            </div>
        </div>
        `;
        
        c('aside').classList.remove('show');
        c('aside').style.left = '100vw';
    }
}
