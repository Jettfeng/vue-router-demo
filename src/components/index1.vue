<template>
    <div class="index1">
      <div class="tab">
        <router-link tag="div" v-for="item in tab" :to="item.path" :key="item.name" active-class="active">{{item.name}}</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          tab:[
            {
              path:'/index1/index11',
              name:'index11'
            },
            {
              path:'/index1/index12',
              name:'index12'
            }
          ]
        }
      }
    }
</script>

<style scoped="">
.index1{
  font-size: 30px;
}
.tab{
  height: 40px;
  border-bottom:1px solid black;
}
.tab>div{
  width:50%;
  height: 40px;
  line-height: 40px;
  float: left;
}
  .active{
    background: yellow;
    color: blue;
  }
</style>
