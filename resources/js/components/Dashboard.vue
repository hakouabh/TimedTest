<template>
  <div>
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
  </div>
</template>

<script>
export default {
  computed:{
    Username(){
      return this.$store.getters.user.name
    }
  },
  mounted(){
    this.$store.dispatch("subjects")
  },
  computed:{
    subjects(){
      return this.$store.getters.subjects
    }
  },
  methods:{
    logout(){
      this.$store.dispatch("logout")
    }
  }
}
</script>

<style>

</style>