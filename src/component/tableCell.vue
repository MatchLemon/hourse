<template>
    <el-tooltip content="value" placement="top">
    <span>{{value}}</span>
    </el-tooltip>

</template>
<script type="text/javascript">

    export default {
      data() {
        return {
        }
      },
      props: ['value'],
    }
</script>