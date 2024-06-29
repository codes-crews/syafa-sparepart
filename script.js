function goToBooking() {
    window.location.assign("pesan.html");
}

function prosses() {
    var fullname = document.getElementById("full-name").value;
    var package = document.getElementById('sparepart').value;

    var num_of_people = parseInt(document.getElementById('num-of-people').value);
    var totalPayment = package * num_of_people;

    var diskon = 100;
    var totalharga = totalPayment - diskon;
    
    document.getElementById('total').innerHTML = totalharga;

    setTimeout(function() {
        alert("Terima kasih Telah Memesan!" + fullname)
        window.location.assign("about.html");
    }, 3000); 
}
