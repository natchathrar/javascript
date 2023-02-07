function check() {

    var n, i, isprime = true;
    n = parseInt(document.getElementById('number').value);
    for (i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            isprime = false;
            break;
        }

    if (isprime == true){
        document.getElementById('demo').innerHTML = (n + " is prime number");
    }
    else{
        document.getElementById('demo').innerHTML = (n + " is not prime number");
    }
}

