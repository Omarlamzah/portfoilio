var icon_setting_rotate =$("#icon-setting-rotate")



isshow=false 
icon_setting_rotate.click(function(){


    if(isshow==false){
          $("#setting").animate(
              {"right":"-100px"},1000
          )
          isshow=true 
          return 
    }
    if(isshow=true ){
        $("#setting").animate(
            {"right":"-270px"},1000
        )
        isshow=false 
    }

})

//theme color
var color1=$("#color1")
var color2=$("#color2")
var color3=$("#color3")
//event color one
color1.click(function(){
$(".portfolio-container ,a ,.myname ,.btnglobal ,.infocolor ,.colorsmode").css({
    color: "#337ab7"  

})
$(".progress div").css("backgroundColor","#337ab7")


$(".br1").css( {
    borderBottom: "5px solid #337ab7", 
    borderLeft: "5px solid #337ab7"
    })
    $(".br2").css( {
        borderRight: "5px solid #337ab7", 
        borderTop: "5px solid #337ab7"
        })

})
//end event color one
//event color tow
color2.click(function(){

    $(".portfolio-container ,a ,.myname ,.btnglobal ,.infocolor ,.colorsmode").css({
        color: "rgb(197, 62, 0)"
    })
    $(".br1").css( {
        borderBottom: "5px solid rgb(197, 62, 0)", 
        borderLeft: "5px solid rgb(197, 62, 0)"
        })
        $(".br2").css( {
            borderRight: "5px solid rgb(197, 62, 0)", 
            borderTop: "5px solid rgb(197, 62, 0)"
            })


            $(".progress div").css("backgroundColor","rgb(197, 62, 0)")
    })
    //end event color tow
  // event color tree
    color3.click(function(){

        $(".portfolio-container ,a ,.myname ,.btnglobal ,.infocolor ,.colorsmode").css({
            color: "rgb(159 62 195)"
        })
        $(".progress div").css("backgroundColor","rgb(159 62 195)")

        $(".br1").css( {
            borderBottom: "5px solid rgb(159 62 195)", 
            borderLeft: "5px solid rgb(159 62 195)"
            })
            $(".br2").css( {
                borderRight: "5px solid rgb(159 62 195)", 
                borderTop: "5px solid rgb(159 62 195)"
                })
        
        })
        //end event color tree


// end theme color


//dark-mode
isdark =true
$("#dark-mode").click(function(){
    if(isdark==true){
        $(".nav-contaiiner").css("backgroundColor","#ffffdf")
        $(".aside-container").css({
            backgroundColor: "#dddbdb",
            color: "black"
        })
        
        $("svg").css("fill","black")
        $(".svgcard").css("fill","#dfff6d")

        isdark=false
        return
    }
    if(isdark==false){
        $(".nav-contaiiner").css("backgroundColor","#302d2d")
        $(".aside-container").css({
            backgroundColor: "#1c1409",
            color: "white"
        })
        $("svg").css("fill","white")
        $(".svgcard").css("fill","#dfff6d")

        isdark=true
        return
    }
    


}

)



//dark-mode

//nav
var homenav =$("#homenav")
var aboutnav =$("#aboutnav")
var servicenav =$("#servicenav")
var portfolionav =$("#portfolionav")
var contactnav =$("#contactnav")


contactnav.click(function(){
    $(".contact-section").fadeIn()
    $(".pglobal").fadeOut(1000)
    $(".secvices-container").fadeOut(1000)
    $(".about-container").fadeOut(1000)
    $(".abme").fadeOut(1000)
})

portfolionav.click(function(){
    $(".pglobal").fadeIn(1000)
    $(".secvices-container").fadeOut(1000)
    $(".about-container").fadeOut(1000)
    $(".abme").fadeOut(1000)
    $(".contact-section").fadeOut()

})

servicenav.click(function(){
    $(".pglobal").fadeOut(1000)
    $(".secvices-container").fadeIn(1000)
    $(".about-container").fadeOut(1000)
    $(".abme").fadeOut(1000)
    $(".contact-section").fadeOut()
})

homenav.click(function(){
    $(".pglobal").fadeOut(1000)
    $(".secvices-container").fadeOut(1000)
    $(".about-container").fadeIn(1000)
    $(".abme").fadeOut(1000)
    $(".contact-section").fadeOut()
})

aboutnav.click(function(){
    $(".pglobal").fadeOut(1000)
    $(".secvices-container").fadeOut(1000)
    $(".about-container").fadeOut(1000)
    $(".abme").fadeIn(1000)
    $(".contact-section").fadeOut()

  
})

//nav

var inptstyle =document.getElementsByClassName("inputborder")
for(var x=0;x<3;x++){
  
    inptstyle[x].addEventListener("focus",function(){
        this.style.outline="0px solid black"
        this.style.borderBottom="3px solid #ff382a" 
       
    })
}




for(var x=0;x<3;x++){
  
 
inptstyle[x].addEventListener("blur",function(){
    this.style.outline="0px solid black"
    this.style.borderBottom="1px #e5ed6c solid"
    })
}


isopen=false;
var imgtogle_menu =document.getElementById("imgtogle-menu")
$(".menu-icon").click(function(){
    
    if(isopen==false){
        imgtogle_menu.setAttribute("src","images/closeicon.png")

    $(".nav-contaiiner").show(2000)
    isopen=true
    $(".menu-icon").animate({left: "68%"},2000)
    return
    }
    
    if(isopen==true){
        imgtogle_menu.setAttribute("src","images/menu.png")
        $(".menu-icon").animate({left: "5%"},2000)
        $(".nav-contaiiner").hide(2000)
        isopen=false
        
        }
        
    
})



