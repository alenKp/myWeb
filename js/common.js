

$(document).ready(function(e) {

    $("[ data-btn='web_alert']").click(function(){

        alert("Our the website is deployment,stay tuned!")

    })

    $(".case_con_items").hover(function(){

        $(this).children(".con_items").find("span").css("color","#a22525");
        $(this).children(".con_items").css("borderColor","#a22525");

    },function(){

            $(this).children(".con_items").find("span").css("color","#a4a4a4");
            $(this).children(".con_items").css("borderColor","#a4a4a4");

        }
    )
var webUrl = window.location.href;
var dataUrl = $("[data-btn='Refresh_index']").attr("data-href");
    if(dataUrl.indexOf("http://www.").length <1 ）{



    }
    alert(webUrl)
 
$("[data-btn='Refresh_index']").on("click",function(){

    $.ajax({

        url:"http://www.kingpanl.com/WebHandle.ashx",

        dataType:"json",

        type: "POST",

      //  data: {    },

        success:function(data){

            var html_data = "" ;
            var Refresh_json = data;

            for(var i = 0 ; i<Refresh_json.length;i++)
            {

                var imgUrl = Refresh_json[i].ImageName;
               // var imgPath = data[i].ImagePath;
                var linkTxt = Refresh_json[i].LinkPath;
                var h2Text = Refresh_json[i].LinkBody;
                var linkText = Refresh_json[i].title;

                html_data += "<li> <div class='items_lists'>"+" <img src='" +imgUrl+"'>"+" <div class='bubba-con'> <h2>"+linkText+"</h2>"+" <a href='" + linkTxt+ "'>"+h2Text+"</a> </div> </div> </li>";
                console.log("success :"+imgUrl +linkTxt);

                $(".products_list ul").append(html_data);

            }

        },
        error:function(){

            alert("error");

        }

    })

})
//
//
//var jsonA = [{"ImageName":"\/images\/20160608img_07.jpg","ImagePath":null,"LinkBody":"�ٶ�","LinkPath":"http:\/\/www.baidu.com","title":"test"},{"ImageName":"\/images\/20160608img_08.jpg","ImagePath":null,"LinkBody":"����1","LinkPath":"#","title":"test1"},{"ImageName":"\/images\/20160608img_09.jpg","ImagePath":null,"LinkBody":"����2","LinkPath":"#","title":"test2"},{"ImageName":"\/images\/20160608img_10.jpg","ImagePath":null,"LinkBody":"����3","LinkPath":"#","title":"test3"}];
//
//   // var aryB = eval('(" jsonA ")');
//    var la = jsonA.length;
//    alert(jsonA[0].title + la);
//
//









});






