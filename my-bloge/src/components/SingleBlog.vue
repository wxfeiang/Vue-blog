<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<p>{{blog.content}}</p>
		<p>作者: {{blog.author}}</p>
		<ul>
			<li v-for="cateroty in blog.categorigs">
				{{cateroty}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name : "single-blog",
        data(){
        	return{
        		/*id: 1,*/
        		id: this.$route.params.id,
        		blog:{

        		}
        	}
        },
      created : function(){
      	//console.log(this.id)
      	/*真实地址拼接*/
         this.$http.get('https://wd6927739674grumzc.wilddogio.com/posts/' + this.id +".json")
    .then(function(data){

      // console.log(data);
       this.blog = data.body;
      // console.log(this.blog.body);
      return data.json();   
    })
    .then(function(data){
        this.blog = data;
         console.log(this.blog);
    })
   
      }
	}
</script>
<style>
	#single-blog{
		margin: 0 auto;
		max-width: 960px;
		background: #eee;
		border:1px solid #eee;
	}



</style>