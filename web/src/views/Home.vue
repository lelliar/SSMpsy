<template>
    <div>
       <el-container style="height: 500px; border: 1px solid #eee;height:100vh;" >
  <el-aside width="200px" style="background-color: rgb(238, 241, 246);height:100vh;" >
    <el-menu router :default-openeds="['1']" unique-opend :default-active="$route.path">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>订单</template>
        <el-menu-item-group>
          <el-menu-item index="/success/Ordern">配送中订单</el-menu-item>
          <el-menu-item index="/success/Ordery">已完成订单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>用户管理</template>
        <el-menu-item-group>
          <el-menu-item index="/account">账号管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="4">
        <template slot="title"><i class="el-icon-menu"></i>其他</template>
        <el-menu-item-group>
          <el-menu-item index="/nocie">首页通知公告</el-menu-item>
          <el-menu-item index="/background">首页背景图管理</el-menu-item>
          <el-menu-item index="/nociebyps">配送员通知</el-menu-item>
          <el-menu-item index="/program">问题查看</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main >
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    </div>
</template>

<script>
export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

<style>
*{
  margin:0px;
  padding:0px;
}
   .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
