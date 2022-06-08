 import { gsap } from "gsap";
 import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
 

 gsap.registerPlugin(DrawSVGPlugin);

 const mainTL = gsap.timeline({id:"mainTL"});


 function patternMove(){
    let tl = gsap.timeline();

    tl.to(".orange", {
        duration: 1.5,
        scale: 0.3,
        y: 40,
        ease: "power1.inOut",
        stagger: {
          grid: [4,6],
          from: "end",
          axis: "x",
          amount: 1.5
          
          
        }})

        .to(".orange", {opacity: 0, stagger: {each: 0.1, from:"center"}, ease: "power2.out", duration:0.5})
        
        ;

        return tl;
}

function textMotion(){
    
    let tl = gsap.timeline();

    tl.fromTo ("#spritz", { drawSVG:"80%, 80%"}, {duration: 2, drawSVG: "0% 100%"})

tl.from ("spritz", {duration: 3, drawSVG: 0}, "spritz")



return tl;

}

function textFill(){

    let tl = gsap.timeline ();

    tl.to("spritz", {textFillColor: "orange", ease: "slow(0.7, 0.7, false)"})

    //tl.from(".dot", { delay: 1.5, ease: "power1.in", opacity:0 })

    tl.to(".orange", {
       
        duration: 0.7,
        scale: 0.3,
        y: 60,
        x: 10,
        ease: "power1.in", 
        opacity: 50,
        stagger: {
          grid: [4,6],
          from: "end",
          axis: "x",//
          amount: 1
           
          
        }})

        .to(".orange", {opacity: 0, stagger: {each: 0.1, from:"center"}, ease: "power2.out", duration:0.5})
        
        ;

       

    return tl;
}

//function patternBack(){
    //let tl = gsap.timeline();

    

        //return tl;
//}

function dotFill(){

    let tl = gsap.timeline ();

   

    tl.from(".dot", { delay: 1.5, ease: "power1.in", opacity:0 })

       ;

    return tl;
}











mainTL.add(patternMove(),"pattern")
.add(textMotion(), "text")
.add(textFill(), "textfill")
//.add(patternBack(), "textfill")
.add(dotFill(), "dot")
;
