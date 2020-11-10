function do_something(){
    var cov;
    var amount = document.getElementById("nhapso").value;
    amount = parseFloat(amount);
    var  selectedValue = document.getElementById('mySelect').value;
    var sl = document.getElementById("sl").value;
    cov = amount*sl/selectedValue;
    document.getElementById("demo").innerHTML= "Số tiền của bạn là:" + cov + "K";
}