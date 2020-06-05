<template>
  <div >
  <div class="header-common">登录</div>
   <!-- <cube-form
  :model="model"
  :schema="schema"
  @submit="submitHandler"
  ></cube-form> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
    data(){
      return {
        model:{
          username:'',
          password:""
        },
        schema:{
          fields:[
            {
                type: 'input',
                modelKey: 'username',
                label: '用户名',
                props: {
                  placeholder: '请输入用户名'
                },
                rules: {
                  required: true,
                  type:"string",
                  min:2,
                  max:10
                },
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'password',
                label: '密码',
                props: {
                  placeholder: '请输入密码',
                  type:'password',
                  eye:{
                    open:false
                  }

                },
                rules: {
                  required: true,
                },
                trigger: 'blur'
              },
              {
                type:'submit',
                label:"登录"
              }
          ]
        }
      }
    },
    methods:{
     async submitHandler(e){
        e.preventDefault();
        try{
          const data = await axios.get('http://localhost:8080/api/login',{params:this.model});
        if(data.code === 0){
            this.$store.commit('setToken',data.token);
            window.localStorage.setItem('token',data.token);
            alert(data.message);
            this.$router.push('/')
        }else{
          alert(data.message);
        }
        }catch(err){
          console.log(err);
        }
      }
    }
}
</script>
<style lang="stylus" scoped>
  .header-common 
     line-height 56px
     height 56px
     background #2a2a2a
     text-align center
     color #fff
</style>