<template>
    <div class="row align-items-center justify-content-center">
      <div class="col-xl-6 col-lg-6 col-md-6">
        <div class="row">
          <div class="col-lg-12">
            <form class="user" @submit.prevent="login">
              <div class="form-group">
                <input type="email" class="form-control mt-3" id="exampleInputEmail" placeholder="email" v-model="form.email">
              </div>
              <div class="form-group">
                <input type="password" class="form-control mt-3" id="exampleInputPassword" placeholder="password" v-model="form.password">
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary mt-3 btn-block">Login</button>
              </div>
            </form>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const errors = reactive({});
    const form = reactive({
        email: null,
        password: null
    });
    function login() {
      store.dispatch("login", this.form)
    }
    return { errors, form, login };
  }
}
</script>

<style>

</style>