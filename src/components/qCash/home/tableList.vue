<template>
    <tbody id="tableTop">
        <tr v-for="item,index in sorted" :key="item.kode_barang">
            <td>{{ index + 1 }}</td>
            <td>{{ item.kode_barang }}</td>
            <td>{{ item.name }}</td>    
            <td>{{ item.jumlah }}</td>
        </tr>
    </tbody>
</template>
<script>
export default {
    data() {
        return {
            jsonData: [],
            sortKey: 'jumlah',
            sortOrders: {
                jumlah: 1,
                name:1,
                kode_barang:1
            }
        };
    },
    computed: {
        sorted() {
            return this.jsonData.slice(0, 10).sort((a,b) => {
                const key = this.sortKey;
                const order = this.sortOrders[key];
                return order * (a[key] > b[key] ? 1 : -1)
            });
        },
    },
    methods: {
        getBarang() {
            fetch(`${this.url}owner/top-10?access_token=${localStorage.getItem('access_token')}`)
                .then(response => response.json())
                .then(data => {
                    this.jsonData = data
                    console.log("top-10",data);
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        },
    },
    mounted() {
        this.getBarang();
        this.sortBy('jumlah');
    },
};
</script>