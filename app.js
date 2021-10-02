const category=document.getElementById('choose-category');
var val="test";
category.addEventListener('change', function() {
    val=category.value;
    console.log(val);  
    var elements=document.getElementsByClassName("question");
    if(val!="all"){
    for(var i=0;i<elements.length;i++)
    {
        elements[i].classList.remove('show');
        elements[i].classList.add('default');
    }
    elements=document.getElementsByClassName(val);
    for(var i=0;i<elements.length;i++)
    {
        elements[i].classList.add('show');
    }
    }
    else{
        for(var i=0;i<elements.length;i++)
    {
        elements[i].classList.add('show');
    }
    }
});

const like=document.getElementById('star');
like.addEventListener('click',function(){
});






