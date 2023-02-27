const personal = document.getElementById("personal");
const dropdown = document.getElementById("dropdown");
const big_card=document.getElementsByClassName("big_card");
personal.addEventListener("mouseover", () => {
    document.getElementById("dropdown").innerHTML = `
    <div class="drop_head">
    <div class="head_txt card_items">
        PayPal for You
     </div>
 </div>
 <div class="drop_card">
     <div class="card_ele c1">
         <div class="card_items main_txt">Shop and Buy</div>
         <hr>
         <div class="card_items">Buy Now, Pay Later</div>
         <div class="card_items">Buy Now, Pay Later</div>
         <div class="card_items">Pay with Rewards</div>
         <div class="card_items">Pay with QR Codes</div>
         <div class="card_items">Checkout with Crypto</div>
         <div class="card_items">PayPal Credit and Cards</div>
     </div>
     <div class="card_ele c2">
         <div class="card_items main_txt">Send and Receive</div>
         <hr>
         <div class="card_items">Send Money</div>
         <div class="card_items">Request Money</div>
         <div class="card_items">Start Selling</div>
         <div class="card_items">Donate and Raise Funds</div>
         
     </div>
     <div class="card_ele c3">
         <div class="card_items main_txt">Manage Your Money</div>
         <hr>
         <div class="card_items">Set up Direct Deposit</div>
         <div class="card_items">Deposit Checks</div>
         <div class="card_items">Add Cash</div>
         <div class="card_items">Savings and Goals</div>
         <div class="card_items">Buy and Sell Crypto</div>
         <div class="card_items">Pay Bills</div>
         
     </div>
     <div class="card_ele c4">
         <div class="c4_1">
             <img src="/images/icon_download.png" alt="icon">
             Get the App
         </div>
         <div class="c4_1">
             <img src="/images/icon_paypal.png" alt="icon">
             How PayPal Works
             </div>
             </div>
             </div>
             `;
    dropdown.classList.add("dropdown");
    dropdown.classList.add("h_effect");
    dropdown.classList.remove("h_make_0");
});
dropdown.addEventListener("mouseleave", () => {
    document.getElementById("dropdown").innerHTML = ``;
    dropdown.classList.remove("h_effect");
    dropdown.classList.add("h_make_0");
    dropdown.classList.remove("dropdown");
});

function slide_r() {
    let margin = document.getElementById("card_section").style.marginLeft = "-34vw";
}
function slide_l() {
    let margin = document.getElementById("card_section").style.marginLeft = "0";
}