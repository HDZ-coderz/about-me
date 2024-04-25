//global constants
const dc=document.getElementById('dc');
const text=document.getElementById('text');
const links={
    insta:"https://www.instagram.com/hddz36_/",
    discord:"https://discord.gg/NKpSzqCPzR",
    spotify:"https://open.spotify.com/user/31dog6sd4rg4c2e7zdicytt6mzeq?si=5bd262972d21489f"
};
const info={
    total_page:2,
    page:0,
    text:
    ["Hi I am HD, I am currently in 10th grade .I like coding as hobby as well as chess(new to it). I am from Eastern part of India. I like pop as well as metal music.~~~~Thank you for reading this",
    "Age: <span class=\"spoiler\" onclick=\"this.style.color='white';\">{(&radic;4+&radic;3)/(&radic;4-&radic;3)}+(-&radic;48)+(4/2+3)+(&radic;3)<sup>2</sup>+(&radic;1)<sup>2</sup></span> <span class=\"spoiler\" onclick=\"this.style.color='white';\"><br>Stalker</span>"
    ],
}
function undisable_page_btn(){
   document.getElementById('page_btns').style.display='inline-block';
}
function type(text,ms,i=0){
        if(i < text.length){
            let c=text.charAt(i);
            if(c=='~'){
                c="<br>";
                info.text[0]=info.text[0].replaceAll("~","<br>");
            }
            document.getElementById('text').innerHTML+=c;
            i++;
            setTimeout(type,ms,text,ms,i);
   }else{
        undisable_page_btn();
   }
}
function disable_btn(id){
    document.getElementById(id).disabled=true;
}
function undisable_btn(id){
    document.getElementById(id).disabled=false;
}
//intro
function intro(){
    let text=info.text[0];
    text=`${text} .`;
    let ms=Math.floor(Math.random()*54)+20;
    type(text,ms,0,true);
}
//on start
function on_load(){
    let e=['group0','group1'];
    for(let i in e){
        document.getElementById(e[i]).style.opacity="1";
        document.getElementById(e[i]).style.transform="translateY(-2vh)";
    }
    setTimeout(()=>{intro();},1000);
}
//dialog------------------------------------------------------------------
function cls_dialog(){
    dc.style.opacity="0";
    setTimeout(()=>{dc.close();},500);
   
}
function open_dialog(){
   dc.show();
   dc.style.opacity='1';
}
//-------------------------------------------------------------------------
function open_link(key){
    if(Object.keys(links).includes(key)){
        window.open(links[key]);
    }
}
function change_page_anim(){
    text.style.opacity=0;
    setTimeout(()=>{text.style.opacity=1;},500);
}
function change_text(){
    change_page_anim();
    setTimeout(()=>{text.innerHTML=info.text[info.page];},500);
}
function next_page(){
    if(!(info.page>=info.total_page-1)){
        info.page+=1;;
        change_text();
    }
    if(info.page==info.total_page-1){
        disable_btn('next');
    }
    undisable_btn('previous');
}
function previous_page(){
    if(!(info.page<=0)){
        info.page-=1;;
        change_text();
    }
    if(info.page==0){
        disable_btn('previous');
    }
    undisable_btn('next');
}
