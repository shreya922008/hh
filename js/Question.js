class Question {
  constructor(){
    this.ques1=createButton("COLD")
    this.ques2=createButton("COUGH")
    this.ques3=createButton("Difficulties while breathing")
    this.ques4=createButton("NONE OF THE FOLLOWING!!")
    this.ques=createElement("h2")
    this.button3=createButton("NEXT")
  }

    
   //text("Are u experiencing any of the following symptoms ? ",190,120)
display(){


 //ques1=createButton("COLD")
 this.ques1.position(250,130)

 //ques2=createButton("COUGH")
 this.ques2.position(250,170)

 //ques3=createButton("Difficulties while breathing")
 this.ques3.position(250,215)

 //ques4=createButton("NONE OF THE FOLLOWING!!")
 this.ques4.position(250,260)

 this.button3.position(550,350)


 this.ques.html("Are u experiencing any of the following symptoms ?")
 this.ques.position(190,120)



 this.ques4.mousePressed(()=>{
   console.log("working")
   this.ques1.hide()
   this.ques2.hide()
   this.ques3.hide()
   this.ques4.hide()
   this.ques.hide()
   clear()
background(bg7)
  // image(bg7,100,100,50,50)
 })


}
}

