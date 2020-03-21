<template>
    <div>
        <Affix>
            <Menu mode="horizontal" :theme="'dark'" active-name="1">
                <MenuItem name="1" to="/sobre">
                    <Icon type="ios-paper" />
                    Sobre Mim
                </MenuItem>
                <MenuItem name="2" to="habilidades">
                    <Icon type="ios-people" />
                    Habilidades
                </MenuItem>
                <MenuItem name="3" to="contato">
                    <Icon type="ios-people" />
                    Contato
                </MenuItem>
            </Menu>
        </Affix>
    </div>
</template>


<script>
  export default {
  }
</script>