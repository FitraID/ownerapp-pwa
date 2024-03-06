<template>
<div id="list" class="row row-cols-lg-3 ">
    <div v-for="item in cabang" :key="item.id">
        <div class="wallet-widget card col">
                <h2>{{ item.nama }}</h2> 
                <h5>{{ item.alamat   }}</h5>
                <b-button
                        class="btn btn-primary btn-block"
                        variant="primary"
                      >
                        Cek Cabangs
                  </b-button>
            </div>
    </div>
</div>

</template>

<script>
//API masukan Ke button list
//https://cloudinventory.nustrastudio.com/api/
import axios from 'axios';
export default {
    data() {
        return {
            cabang : []
        }
    },
    methods : {
        getList() {
            axios
                .get('https://cloudinventory.nustrastudio.com/api/owner/listcabang')
                .then((Response) => {
                    console.log(Response.data)
                    this.cabang = Response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    mounted() {
        this.getList();
    }
}
</script>