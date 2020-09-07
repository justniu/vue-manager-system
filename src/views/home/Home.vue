<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8">
            <el-card shadow="hover" style="height: 290px">
                <div class="user">
                    <img :src="userImg" alt="" />
                    <div class="userinfo">
                        <p class="name">Nick</p>
                        <p class="access">super user</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间: <span>2020-09-07</span></p>
                    <p>上次登录地点: <span>beijing</span></p>
                </div>
            </el-card>
            <el-card shadow="hover" style="height: 522px; margin-top: 20px"></el-card>
        </el-col>
        <el-col :span="16">
            <div class="num">
                <el-card shadow="hover" v-for="(item, index) in countData" :key="index">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="num">${{ item.value }}</p>
                        <p class="txt">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card shadow="hover">
                <div style="height:280px"></div>
            </el-card>
            <div class="graph">
                <el-card shadow="hover">
                    <div style="height:260px"></div>
                </el-card>
                <el-card shadow="hover">
                    <div style="height:260px"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            userImg: require('@/assets/images/user.png'),
            countData: [
                {
                    name: '今日支付订单',
                    value: 1234,
                    icon: 'success',
                    color: '#2ec7c9'
                },
                {
                    name: '今日收藏订单',
                    value: 1234,
                    icon: 'star-on',
                    color: '#ffb980'
                },
                {
                    name: '今日未支付订单',
                    value: 1234,
                    icon: 's-goods',
                    color: '#5ab1ef'
                },
                {
                    name: '本月支付订单',
                    value: 1234,
                    icon: 'success',
                    color: '#2ec7c9'
                },
                {
                    name: '本月收藏订单',
                    value: 1234,
                    icon: 'star-on',
                    color: '#ffb980'
                },
                {
                    name: '本月未支付订单',
                    value: 1234,
                    icon: 's-goods',
                    color: '#5ab1ef'
                }
            ],
            tableData: []
        };
    },
    methods: {
        getTableData() {
            this.$http.get('/home/getData').then(res => {
                res = res.data;
                this.tableData = res.data.videoData;
                console.log(this.tableData);
            });
        }
    },
    created() {
        this.getTableData();
    }
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home.scss'; /* `~` relative path*/
</style>
