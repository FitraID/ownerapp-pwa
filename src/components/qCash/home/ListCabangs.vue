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
export default {
    data() {
        return {
            cabang : []
        }
    },
    methods : {
        getList() {
            fetch(`${this.url}owner/listcabang?access_token=${localStorage.getItem('access_token')}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.cabang = data;
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