

;(function(){
	"use strict"
	class List{
        constructor(){
            this.url = "http://localhost/bookuu/data/goods data/data2.json";
            this.rec = document.querySelector(".recommend");
			
            this.load();
        }
        load(){
            var that = this;
            ajax({
                url:this.url,
                success:function(res){
                    that.res = JSON.parse(res)
                    that.display();
                }
            })
        }
        display(){
//             console.log(this.res);
            var str = "";
            for(var i=0;i<this.res.length;i++){                
                str += `<div class="msg2" index="${this.res[i].goodsId}">
							<a href="#">
								<img src="${this.res[i].url}" />
								<h4>${this.res[i].name}</h4>
							</a>
							<p>${this.res[i].price}</p>
						</div>` 			
            }           
            this.rec.innerHTML = str;
        }

   }
	new List();
})();
