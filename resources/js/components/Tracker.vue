<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6 col-12 my-3">
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
                    
                    <h4 class="card-title text-center" style="font-family: 'Yellowtail', cursive" v-if="kingstevennos.data.platformInfo.platformUserHandle"><a>{{ kingstevennos.data.platformInfo.platformUserHandle }}</a></h4>
                    <div class="card-text">
                        <div class="row justify-content-center">
                            <div class="col-md-6 col-12 text-center" v-if="kingstevennos.data.segments[0].stats.kills">
                                {{ kingstevennos.data.segments[0].stats.kills.displayName }} : <b>{{ kingstevennos.data.segments[0].stats.kills.displayValue }}</b>
                                <hr>
                            </div>
                            <div class="col-md-6 col-12 text-center" v-if="kingstevennos.data.segments[0].stats.damage">
                                {{ kingstevennos.data.segments[0].stats.damage.displayName }} : <b>{{ kingstevennos.data.segments[0].stats.damage.displayValue }}</b>
                                <hr>
                            </div>
                            <div class="col-md-6 col-12 text-center" v-if="kingstevennos.data.segments[0].stats.rankScore">
                                {{ kingstevennos.data.segments[0].stats.rankScore.displayName }} : <b>{{ kingstevennos.data.segments[0].stats.rankScore.displayValue }}</b>
                                <hr>
                            </div>
                            
                            <!-- <div class="col-md-6 col-12">
                                Wins: <b>{{ kingstevennos.data.segments[0].stats.wins.displayValue }}</b>
                                <hr>
                            </div> -->
                            <div class="col-12 text-center" v-if="kingstevennos.data.segments[0].stats.level.displayValue">
                                <h2 class="text-center text-apex">{{ kingstevennos.data.segments[0].stats.level.displayName }} <b>{{ kingstevennos.data.segments[0].stats.level.displayValue }}</b></h2> 
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-center">
                    <button class="btn btn-sm btn-apex" data-toggle="modal" data-target="#search">Compare</button>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-12 my-3" v-if="!isEmpty ">
            <div class="card card-apex">
                <img class="card-img-top" v-bind:src="challenger.data.segments[1].metadata.bgImageUrl " alt="Background Image">
                <img class="profile rounded-circle" v-bind:src="challenger.data.platformInfo.avatarUrl" alt="Profile Image" width="125px" height="auto">
                <div class="card-body">
                    <div class="card-subtitle text-center" v-if="challenger.data.platformInfo.platformSlug === 'xbl'">
                        <i class="fab fa-xbox fa-lg text-xbox"></i>
                    </div>
                    <div class="card-subtitle text-center" v-if="challenger.data.platformInfo.platformSlug === 'psn'">
                        <i class="fab fa-playstation fa-lg text-playstation"></i>
                    </div>
                    <div class="card-subtitle text-center" v-if="challenger.data.platformInfo.platformSlug === 'origin'">
                       <i class="fab fa-steam fa-lg text-steam"></i>
                    </div>
                    
                    <h4 class="card-title text-center" style="font-family: 'Yellowtail', cursive"><a>{{ challenger.data.platformInfo.platformUserHandle }}</a></h4>
                    <div class="card-text">
                        <div class="row justify-content-center">
                            <div class="col-md-6 col-12 text-center" v-if="challenger.data.segments[0].stats.kills">
                                {{ challenger.data.segments[0].stats.kills.displayName }}: <b>{{ challenger.data.segments[0].stats.kills.displayValue }}</b>
                                <hr>
                            </div>
                            <div class="col-md-6 col-12 text-center" v-if="challenger.data.segments[0].stats.damage">
                                {{ challenger.data.segments[0].stats.damage.displayName}}: <b>{{ challenger.data.segments[0].stats.damage.displayValue }}</b>
                                <hr>
                            </div>
                            <div class="col-md-6 col-12 text-center" v-if="challenger.data.segments[0].stats.rankScore">
                                {{ challenger.data.segments[0].stats.rankScore.displayName }}: <b>{{ challenger.data.segments[0].stats.rankScore.displayValue }}</b>
                                <hr>
                            </div>
                            <!-- <div class="col-md-6 col-12">
                                Wins: <b>{{ challenger.data.segments[0].stats.wins.displayValue }}</b>
                                <hr>
                            </div> -->
                            <div class="col-12 text-center" v-if="challenger.data.segments[0].stats.level">
                                <h2 class="text-center text-apex">{{ challenger.data.segments[0].stats.level.displayName}}: <b>{{ challenger.data.segments[0].stats.level.displayValue }}</b></h2> 
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-center">
                    <button class="btn btn-danger" v-if="kingstevennos.data.segments[0].stats.level.value > challenger.data.segments[0].stats.level.value"> You are almost There!! Work Harder</button>
                    <button  class="btn btn-success" v-if="kingstevennos.data.segments[0].stats.level.value < challenger.data.segments[0].stats.level.value"> You are ahead!! looks like I need to work</button>
                    <button  class="btn btn-secondary" v-if="kingstevennos.data.segments[0].stats.level.value === challenger.data.segments[0].stats.level.value"> We are on the same level. Let's see if that will stay the same</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade nos-modal" id="search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="m-auto">
                        <img src="../../images/apex-logo.png" alt="Apex Legends Logo" width="50px">
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="getChallenger() ">
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
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <input type="submit" value="Get Challenger" class="btn btn-apex" @click.prevent="getChallenger()">
                            
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
            kingstevennos:'',
            challenger:'',
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
            player:new Form({
                platform:'',
                handle:''
            })
       }
       

    },
    computed:{
        isEmpty(){
            return $.isEmptyObject(this.challenger)
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
            let gamertag = this.player.handle
            let platform = this.player.platform

            if (gamertag.length == 0) {
                Toast.fire({
                    icon:'warning',
                    title:'Enter your gamertag!'
                })
            }
            else if (platform.length == 0) {
                Toast.fire({
                    icon:'warning',
                    title:'Select your Platform!'
                })
            }
            else{
                axios.get(`/api/v1/profile/${platform}/${gamertag}`)
                .then((res) => {
                    console.log(res.data)
                    if (res.data.errors) {
                        Toast.fire({
                            icon:'info',
                            title:'User Not Found'
                        })
                    }
                    else{
                        this.challenger = res.data
                        $('#search').modal('hide')

                    }



                }).catch((err) => {
                    console.log(err)
                    Toast.fire({
                        icon:'error',
                        title:err
                    })
                });
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