function getValue(val)
{
    document.getElementById('input').value+=val;
}

function findResult()
{
    var q=eval(document.getElementById('input').value);
    document.getElementById('input').value=q;
}

function clearInput(y)
{
    document.getElementById('input').value=y;
}