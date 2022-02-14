<template>
      <h1>Welcome {{Username}}, <a @click="logout">Logout</a></h1> 
      <div class="table-responsive" style="font-size: 16px;">
          <table class="table align-items-center">
              <thead>
                  <tr>
                      <th>id</th>
                      <th>subject</th>
                  </tr> 
              </thead>
              <tbody>
                  <tr v-for="subject in subjects" :key="subject.id">
                      <td>{{ subject.id }}</td>
                      <td>{{ subject.subject.name }}</td>
                  </tr>          
              </tbody>
          </table>
      </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const Username = computed(() => {
      return store.getters.user.name
    });
    const subjects = computed(() => {
      return store.getters.subjects
    });
    function logout() {
      store.dispatch("logout")
    }
    onMounted(() => {
      store.dispatch("subjects")
    })
    return { logout, subjects, Username };
  }
}
</script>

<style>

</style>