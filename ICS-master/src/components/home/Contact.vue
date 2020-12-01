<template>
    <div class="row container">
        <h3 class="center-align" style="font-weight:bold;">Contact Us</h3>
        <p class="flow-text">ติดต่อเรา</p>
        <div class="col s12 m12 l12">
            <img src="https://dlabi.com/project/interactive-computing-science/Materials/logo/ICS.png" alt="" 
                    class="responsive-img col s4 m4 l2 offset-s4 offset-m4 offset-l5 row">
        </div>
        
        <div class="col s12 m12 l12 card-panel">
            <p class="flow-text center-align" style="line-height:35px;">สิ่งแวดล้อมส่งเสริมการเรียนรู้<br>
                วิทยาการคำนวณของประเทศไทย<br>(รู้เท่าทันดิจิทัล)<br>
                Interactive Learning Environment 
                for Computing Science in Thailand<br>(Digital Literacy)
            </p>
            <h5 class="center-align">ics.trf19@gmail.com</h5>
        </div>
        
        <div class="col s12 m12 l12">
            <router-link :to="{name: 'UnitHome'}"><a class="waves-effect blue lighten-1 btn-large col s4 m4 l2 flow-text">ย้อนกลับ</a></router-link>
          </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
p{
    font-family: 'Prompt', sans-serif;
}
div{
    font-family: 'Prompt', sans-serif;
}
h1{
    font-family: 'Prompt', serif;
}
h2{
    font-family: 'Prompt', serif;
}
h3{
    font-family: 'Prompt', serif;
}
h4{
    font-family: 'Prompt', serif;
}
h5{
    font-family: 'Prompt', serif;
}
h6{
    font-family: 'Prompt', serif;
}
a{
  font-family: 'Pridi', serif;
}
</style>
