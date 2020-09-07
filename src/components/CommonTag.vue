<template>
    <div class="tags">
        <el-tag
            size="small"
            :key="tag.name"
            v-for="tag in tags"
            :closable="tag.name !== 'home'"
            :disable-transitions="false"
            @close="handleClose(tag)"
            @click="changeMenu(tag)"
            :effect="$route.name === tag.name ? 'dark' : 'plain'"
        >
            {{ tag.label }}
        </el-tag>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'CommonTag',
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
    data() {
        return {
            dynamicTags: ['标签一', '标签二', '标签三'],
            inputVisible: false,
            inputValue: ''
        };
    },
    methods: {
        handleClose(tag) {
            this.close(tag);
        },
        ...mapMutations({
            close: 'closeTab'
        }),
        showInput() {
            this.inputVisible = true;
            this.$nextTick(() => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        },
        changeMenu(item) {
            this.$router.push({ name: item.name });
            // this.$store.commit('selectMenu', item);
        }
    }
};
</script>

<style lang="scss" scoped>
.tags {
    padding: 20px;
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>
