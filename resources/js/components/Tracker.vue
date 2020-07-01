<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-4 col-12">
            <div class="card testimonial-card mt-2 mb-3">
    <!-- Background color -->
        <div :style="{ backgroundImage: `url(${kingstevennos.data.segments[1].metadata.bgImageUrl})` }" class="card-up apex-bg"></div>

    <!-- Avatar -->
    <div class="avatar mx-auto white">
      <img v-bind:src=kingstevennos.data.platformInfo.avatarUrl class="rounded-circle img-responsive" alt="woman avatar">
    </div>

    <!-- Content -->
    <div class="card-body">
      <!-- Name -->
      <h4 class="card-title font-weight-bold">{{ kingstevennos.data.platformInfo.platformUserHandle }}</h4>
      <hr>
      <!-- Quotation -->
      <p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
        adipisci</p>
    </div>
</div>
  <!--Card-->
        </div>
    </div>
</div>
</template>

<script>
export default {
    
    data(){
        return{
            kingstevennos:[],
            stats:[],
            damage:'',
            
                
               
       }
       

    },
    
    methods:{
        getNosData(){
            axios.get('/api/v1/profile/xbl/KingStevenNOS')
                .then((res) => {
                    this.kingstevennos = res.data
                    console.log(res.data)
                }).catch((err) => {
                    console.log(err)
                });
        }
    },
    created(){
        this.getNosData()
        
        
    },

}
</script>

<style>

</style>