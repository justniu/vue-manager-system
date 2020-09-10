<template>
    <div class="common-table">
        <el-table :data="tableData" height="90%" stripe v-loading="config.loading">
            <el-table-column label="序号" width="85">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ (config.page - 1) * 20 + scope.$index + 1 }}</span>
                </template>
            </el-table-column>
            <el-table-column show-overflow-tooltip v-for="item in tableLabel" :key="item.prop" :label="item.label">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="pager"
            layout="prev, pager, next"
            :total="config.total"
            :current-page.sync="config.page"
            @current-change="changePage"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    name: 'CommonTable',
    props: ['tableData', 'tableLabel', 'config'],
    methods: {
        handleEdit(row) {
            this.$emit('edit', row);
        },
        handleDelete(row) {
            this.$emit('del', row);
        },
        changePage() {
            this.$emit('changePage');
        }
    }
};
</script>

<style lang="scss" scoped>
.common-table {
    height: calc(100% - 62px);
    background-color: #fff;
    position: relative;
    .pager {
        position: absolute;
        bottom: 0px;
        right: 20px;
    }
}
</style>
