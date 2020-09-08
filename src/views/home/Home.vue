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
            <el-card shadow="hover" style="height: 522px; margin-top: 20px">
                <el-table :data="tableData">
                    <el-table-column show-overflow-tooltip v-for="(item, key) in tableLabel" :key="key" :prop="key" :label="item"></el-table-column>
                </el-table>
            </el-card>
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
                <e-charts style="height:280px" :chartData="echartData.order" :isAxisChart="true"></e-charts>
            </el-card>
            <div class="graph">
                <el-card shadow="hover">
                    <e-charts style="height:260px" :chartData="echartData.user" :is-axis-chart="true"></e-charts>
                </el-card>
                <el-card shadow="hover">
                    <e-charts style="height:260px" :chart-data="echartData.video"></e-charts>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import ECharts from '@/components/ECharts';
export default {
    name: 'Home',
    components: { ECharts },
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
            tableData: [],
            tableLabel: {
                name: '课程名',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买'
            },
            echartData: {
                order: {
                    xData: [],
                    series: []
                },
                user: {
                    xData: [],
                    series: []
                },
                video: {
                    series: []
                }
            }
        };
    },
    methods: {
        getTableData() {
            this.$http.get('/home/getData').then(res => {
                res = res.data;
                this.tableData = res.data.tableData;
                console.log(res.data);
                const order = res.data.orderData;
                this.echartData.order.xData = order.date;
                let keyArray = Object.keys(order.data[0]);
                console.log(keyArray);
                keyArray.forEach(key => {
                    this.echartData.order.series.push({
                        name: key === 'wechat' ? 'xiaochengxu' : key,
                        data: order.data.map(item => item[key]),
                        type: 'line'
                    });
                });
                //用户柱状图
                this.echartData.user.xData = res.data.userData.map(item => item.date);
                this.echartData.user.series.push(
                    {
                        name: '新增用户',
                        data: res.data.userData.map(item => item.new),
                        type: 'bar'
                    },
                    {
                        name: '活跃用户',
                        data: res.data.userData.map(item => item.active),
                        type: 'bar',
                        barGap: 0
                    }
                );
                //视频饼图
                this.echartData.video.series.push({
                    data: res.data.videoData,
                    type: 'pie'
                });
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
