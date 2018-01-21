<template>
  <div id="add-bloge">
    <h2>添加博客</h2>
    <form v-if="!submited">
    	<label for="">博客标题</label>
    	<input type="text" v-model="bloge.title" required/>

    	<label >博客内容</label>
    	<textarea v-model="bloge.content" row="4" class="textarea"></textarea>
         
         <div id="checkboxes">
         	<!-- vlaue 数据绑定 -->
         	<label>Vue.js</label>
         	<input type="checkbox" value="Vue.js"  v-model="bloge.categorigs">
         	<label>React.js</label>
         	<input type="checkbox" value="React.js" v-model="bloge.categorigs">
         	<label>Angular.js</label>
         	<input type="checkbox" value="Angular.js" v-model="bloge.categorigs">
         	<label>Node.js</label>
         	<input type="checkbox" value="Node.js" v-model="bloge.categorigs">
         </div>
         <label>作者</label>
         <!-- <select v-model="bloge.author">
         	 <option v-for="author in authors">
         	 	{{author}}
         	 </option>
         </select> -->
         <input type="text" v-model="bloge.author">
            <!-- 把数据POST到具体位置 -->
            <button v-on:click.prevent="post" class="btn">添加博客</button>
            <!-- 阻止默认刷新页面事件 -->
    </form>
    <div v-if="submited">
    	<h3>你的博客添加成功了</h3>
    </div>
    <!-- 数据绑定  -->
    <div id="preview">
    	<h3>博客总览</h3>
    	<p>博客标题:</p>
    	<p> {{bloge.title}}</p>
    	<p>博客内容:</p>
    	<p>{{bloge.content}}</p>
         <p>博客分类:</p>
         <ul>
         	<!-- 遍历 -->
         	<li v-for="key in bloge.categorigs">
         	{{key}}
         </li>
         </ul>

         <p>作者 :{{bloge.author}}</p>
    </div>
  

  </div>


</template>

<script>
export default {
  name: 'add-bloge',
  data () {
    return {
      bloge: {
        title: "",
        content: "",
        author : "",
        categorigs : []
      },
      /*定义 author*/
      authors :["wangpeng","ARR","ghduhrg"],
      submited : false
    }
  },
  methods :{
  	post : function(){
      /*post 到野狗服务器中*/
       this.$http.post("https://wd6927739674grumzc.wilddogio.com/posts.json",/*{
         title: this.bloge.title,
         body: this.bloge.content,
         userId: 1
       }*/this.bloge)
       .then(function(data){
       	this.submited = true;
       	 console.log(data);
       });
  	}

  }






}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-bloge *{
	box-sizing: border-box;

}
#add-bloge{
	margin: 20px auto;
	max-width: 600px;
	padding: 20px;
}
label{
	display: block;
	margin: 20px 0 10px;
}
input[type="text"],textarea,select{
	display: block;
	width: 100%;
	padding:8px;
}
.textarea{
  height:50px;
}
#checkboxes label{
	display: inline-block;
	margin-top:10;
}
#checkboxes input{
	display: inline-block;
	margin-right: 10px;
}
.btn{
	display: block;
	margin: 20px 0;
	padding:14px;
	background: crimson;
	font-size:18px;
	color: #fff;
	border-radius: 6px;
	cursor: pointer;
}
#preview{
	margin: 30 0 ;
	padding: 10px 20px;
	border: 1px solid #ccc;
}
#preview h3{
	margin:10px 0 ;
}


</style>
