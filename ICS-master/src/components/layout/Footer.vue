<template>
<div class="footer-fixed">
	<footer class="blue darken-1 hide-on-small-only">
		<nav class="z-depth-0" style="height:40px;">
			<div class="nav-wrapper blue darken-1 row valign-wrapper">
				<div class="col s12 m12 l12 offset-s4 offset-m5 offset-l5">
					<ul class="justify">
						<li><a @click="Home"><i class="material-icons">home</i></a></li>
						<li><a @click="About"><i class="material-icons">info</i></a></li>
						<li><a @click="Contact"><i class="material-icons">mail</i></a></li>
					</ul>
				</div>
			</div>
		</nav>
	</footer>
	<footer class="blue darken-1 hide-on-med-and-up">
		<nav class="z-depth-0" style="height:40px;">
			<div class="nav-wrapper blue darken-1 row  valign-wrapper">
				<div class="col s12 m12 l12 offset-s4 offset-m5 offset-l5">
					<ul class="justify">
						<li><a @click="Home"><i class="material-icons">home</i></a></li>
						<li><a @click="About"><i class="material-icons">info</i></a></li>
						<li><a @click="Contact"><i class="material-icons">mail</i></a></li>
					</ul>
				</div>
			</div>
		</nav>
	</footer>
</div>
    
</template>
<script>
export default {
    methods:{
        Home(){
                this.$router.push({name:'UnitHome'})
        },
        About(){
                this.$router.push({name:'AboutUs'})
        },
        Contact(){
                this.$router.push({name:'Contact'})
        },
    }
}
</script>
<style>


body {display: flex;min-height: 100vh;flex-direction: column;}
main {flex: 1 0 auto;}

.footer-fixed {
	position: fixed;
	bottom: 0;
	width: 100%;
}

</style>