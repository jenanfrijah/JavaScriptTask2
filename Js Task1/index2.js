let mark = Number(prompt("enter mark :"));


 if (mark<50)
    swal.fire("Fail");
else if (mark>=50 && mark<=59)
    swal.fire("your Mark is D");
else if (mark>=60 && mark<=69)
    swal.fire("your Mark is C");
else if (mark>=70 && mark<=79)
    swal.fire("your Mark is B");
else if (mark>=80 && mark<=89)
    swal.fire("your Mark is A");
else if ( mark>=90 && mark<=100)
    swal.fire("your Mark is A+");
    else 
        "undefined";
