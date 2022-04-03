window.onscroll=function(){scrollclick()};
function scrollclick()
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop>20)
    {
        document.getElementById("kathir").style.display="block";
    }
    else{
        document.getElementById("kathir").style.display="none";
    }
}
function buttonclick()
{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
// $(document).ready(function()
// {
//     $("#clickhidden").clcik(function()
//     {
//         document.getElementById("hidden").style.display="none";
//     });
// });
document.querySelector("#clickhidden").addEventListener("click",function()
{
    var hidden=document.getElementById("hidden");
    if(hidden.style.display=="block")
    {
    document.getElementById("hidden").style.display="none";
    document.getElementById("hiddencontent").style.display="none";
    }
    else
    {
        document.getElementById("hidden").style.display="block";
        document.getElementById("hiddencontent").style.display="block";
    }
});