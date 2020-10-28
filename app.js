//using dynamic programming. 
// m-1 is number right directional paths
// n-1  is number of bottom down directional paths
// According to nCr = n! / (n – r)!

function uniquepath(m,n){
    var N = m + n -2;
    var r = m-1;
    var res = 1;
    for( i=1; i<= r; i++)
        res = res * (N - r + i)/i;   
    return Math.abs(res);
}

//Lets assume for 2*2 grid possible paths are
console.log(uniquepath(-51, -7))