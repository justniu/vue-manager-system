<template>
    <header>
        <div class="l-content">
            <el-button type="primary" icon="el-icon-menu" size="mini"></el-button>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="current.path">{{ current.label }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link"> <img :src="userImage" class="user"/></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'CommonHeader',
    computed: {
        ...mapState({
            current: state => state.tab.currentMenu
        })
    },
    data() {
        return {
            userImage: require('@/assets/images/user.png')
        };
    }
};
</script>

<style scoped>
header {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
}
.r-content .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.l-content {
    display: flex;
    align-items: center;
}
</style>
<style lang="scss">
.el-breadcrumb__inner {
    color: #fff !important;
}
.el-button {
    margin-right: 20px !important;
}
</style>
