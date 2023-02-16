let X = 500;
function result(X)
{

    for (let num = 300; num < X; num++)
    {
        if (num % 5 == 0 && num % 8 == 0)
            console.log( num+ " ");
    }
}
result(X)