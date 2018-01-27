<template>
  <div class="index">
     <div class="tab">
       <router-link v-for="item in tab" tag="div" :to="item.path" :key="item.id" active-class="active">{{item.name}}</router-link>

     </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tab:[
        {
          name:'index1',
          path:'/index1',
          id:'index1'
        },
        {
          name:'index2',
          path:'/index2',
          id:'index2'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .index{
   font-size: 30px;
 }
  .tab{
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid blue;
  }
  .tab > div{
    display:inline-block;
    width: 50%;
    height: 50px;
    float: left;
    line-height: 50px;
  }
  .active{
    background: red;
    color: #ffffff;
  }
</style>
