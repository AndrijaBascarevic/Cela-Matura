function Promena()
{
    var i=1;
    var img=document.getElementById("slika");
    img.src="./images/slika"+i+".jpg";
    //slika= zena koja place slika2=devojka pred ogledalo slika3= gernika slika4=picaso portret slika5=stari gitarista
}
function Load()
{
    setInterval(Promena,3000);
}