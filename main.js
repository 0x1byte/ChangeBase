function changeBase(number, fromBase, toBase) {
    if (fromBase == 10)
        return (parseInt(number)).toString(toBase)
    else if (toBase == 10)
        return parseInt(number, fromBase);
    else {
        var numberInDecimal = parseInt(number, fromBase);
        return parseInt(numberInDecimal).toString(toBase);
    }
}

function decbin(dec,length){
    var out = "";
    while(length--)
      out += (dec >> length ) & 1;    
    return out;  
  }

function bin2dec(event)
{
    var out = "";
    var count = 0;
    event.target.value.split(".").forEach((element) => {
        count++;
        if(count != 4)
        {
            out += changeBase(element,2,10)+".";
        }else
        {
            out += changeBase(element,2,10);
        }
    });
    document.getElementById("binIpOut").innerText = out;
    console.log(out);
}
function dec2bin(event)
{
    var out = "";
    var count = 0;
    event.target.value.split(".").forEach((element) => {
        count++;
        if(count != 4)
        {
            out += decbin(element,8)+".";
        }else
        {
            out += decbin(element,8);
        }
    });
    document.getElementById("decIpOut").innerText = out;
    console.log(out);
}