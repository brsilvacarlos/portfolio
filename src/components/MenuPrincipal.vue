<template>
    <div>
        <Affix>
            <Menu mode="horizontal" :theme="dark" active-name="1">
                <MenuItem name="1">
                    <Icon type="ios-paper" />
                    内容管理
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-people" />
                    用户管理
                </MenuItem>
            </Menu>
        </Affix>
    </div>
</template>


<script>
  export default {
  }
</script>