<template>
<div class="headerContainer">
  <div class="mb-2"><logBar></logBar></div>

</div>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.headerContainer{
  background-color: #1a73e8;
  .mb-2{
    background: url('../../assets/bainuo.png');
    background-size: 100% 100%;
    //background-color: #67C23A;
    width: 100px;
    height: 60px;
    display: block;
    position: fixed;
    position: sticky;
    img{
      height: 55px;
      margin-left: 18px;
      vertical-align: center;
    }
  }
}
</style>