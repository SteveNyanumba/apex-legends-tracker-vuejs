<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6 col-12">
            <div class="card card-apex">
                <img class="card-img-top" v-bind:src="kingstevennos.data.segments[1].metadata.bgImageUrl " alt="Background Image">
                <img class="profile rounded-circle" v-bind:src="kingstevennos.data.platformInfo.avatarUrl" alt="Profile Image" width="125px" height="auto">
                <div class="card-body">
                    <div class="card-subtitle text-center" v-if="kingstevennos.data.platformInfo.platformSlug === 'xbl'">
                        <i class="fab fa-xbox fa-lg text-xbox"></i>
                    </div>
                    <div class="card-subtitle text-center" v-if="kingstevennos.data.platformInfo.platformSlug === 'psn'">
                        <i class="fab fa-playstation fa-lg text-playstation"></i>
                    </div>
                    <div class="card-subtitle text-center" v-if="kingstevennos.data.platformInfo.platformSlug === 'origin'">
                       <i class="fab fa-steam fa-lg text-steam"></i>
                    </div>
                    
                    <h4 class="card-title text-center" style="font-family: 'Yellowtail', cursive"><a>{{ kingstevennos.data.platformInfo.platformUserHandle }}</a></h4>
                    <p class="card-text">
                        <div class="row justify-content-center">
                            <div class="col-md-6 col-12 text-center">
                                Kills: <b>{{ kingstevennos.data.segments[0].stats.kills.displayValue }}</b>
                                <hr>
                            </div>
                            <div class="col-md-6 col-12 text-center">
                                Damage: <b>{{ kingstevennos.data.segments[0].stats.damage.displayValue }}</b>
                                <hr>
                            </div>
                            <div class="col-md-6 col-12 text-center">
                                Rank Score: <b>{{ kingstevennos.data.segments[0].stats.rankScore.displayValue }}</b>
                                <hr>
                            </div>
                            <!-- <div class="col-md-6 col-12">
                                Wins: <b>{{ kingstevennos.data.segments[0].stats.wins.displayValue }}</b>
                                <hr>
                            </div> -->
                            <div class="col-12 text-center">
                                <h2 class="text-center text-apex">LEVEL: <b>{{ kingstevennos.data.segments[0].stats.level.displayValue }}</b></h2> 
                                <hr>
                            </div>
                        </div>
                    </p>



                </div>
                <div class="card-footer">
                    <div class="row justify-content-center">
                        <div class="col-6">
                            <button class="btn btn-sm btn-apex" data-toggle="modal" data-target="#search">Compare</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <!-- Modal -->
    <div class="modal fade" id="search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="getChallenger()" method="post">
                        <div class="modal-body">
                            <div class="row justify-content-center">
                                <div class="form-group col-md-6 col-12">
                                    <label for="Category">Platform</label>
                                    <select v-model="player.platform" type="text" class="form-control" name="platform" id="platform">
                                        <option value="xbl"><i class="fab fa-xbox text-xbox  fa-lg"></i>XBOX Live</option>
                                        <option value="psn"><i class="fab fa-playstation text-playstation fa-lg"></i>PlayStation Network</option>
                                        <option value="origin"><i class="fab fa-steam  fa-lg"></i>EA Origin</option>
                                    </select>
                                    <small class="form-text text-muted">Select your Platform</small>
                                    <has-error :form="player" field="platform"></has-error>
                                </div>
                                <div class="form-group col-md-6 col-12">
                                    <label for="handle">Gamertag</label>
                                    <input v-model="player.handle" type="text" class="form-control" name="handle" id="handle">
                                    <small class="form-text text-muted">Enter Your Username</small>
                                    <has-error :form="player" field="handle"></has-error>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                            <button type="submit" @click.prevent="getChallenger" class="btn btn-apex">Get</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
    data(){
        return{
            kingstevennos:[],
            challenger:[],
            nosStats: {
                damage:'',
                kills:'',
                rank:'',
                level:'',
            },
            stats: {
                damage:'',
                kills:'',
                rank:'',
                level:'',
            },
            playerDetails:{
                platformUserHandle:'',
                platformSlug:'',
                avatarUrl:''

            },
            player:{
                platform:'',
                handle:''
            }
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
        },
        getChallenger(){
            if (this.player.platform === null) {
                console.log('There is no Platform selected');
                
                Toast.fire({
                    icon: 'error',
                    title: 'There is no Platform selected'
                })
            }
            if (this.player.platform === null) {
                console.log( 'You have not entered your gamertag');
                Toast.fire({
                    icon: 'error',
                    title: 'You have not entered your gamertag'
                })
            }

            
        }
    },
    created(){
        this.getNosData()
        
        
    },

}
</script>

<style>

</style>