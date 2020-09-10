<template>
    <el-form :model="form" ref="form" label-width="100px" :inline="inline">
        <el-form-item v-for="item in formLabel" :key="item.model" :label="item.label">
            <el-input v-model="form[item.model]" :placeholder="'请输入' + item.label" v-if="!item.type"></el-input>
            <el-select v-model="form[item.model]" placeholder="请选择" v-if="item.type === 'select'">
                <el-option v-for="subItem in item.opts" :key="subItem.value" :label="subItem.label" :value="subItem.value"></el-option>
            </el-select>
            <el-switch v-model="form[item.model]" v-if="item.type === 'switch'"></el-switch>
            <el-date-picker v-model="form[item.model]" type="date" placeholder="选择日期" v-if="item.type === 'date'"> </el-date-picker>
        </el-form-item>
        <el-form-item>
            <slot></slot>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: 'CommonForm',
    props: ['form', 'formLabel', 'inline']
};
</script>

<style scoped></style>
