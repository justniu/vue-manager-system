<template>
    <el-container>
        <el-aside width="200px"><common-aside></common-aside></el-aside>
        <el-container>
            <el-header><common-header></common-header></el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside';
import CommonHeader from '@/components/CommonHeader';
export default {
    name: 'Main',
    components: {
        CommonAside,
        CommonHeader
    }
};
</script>

<style scoped>
.el-header {
    background-color: #333;
}
</style>
