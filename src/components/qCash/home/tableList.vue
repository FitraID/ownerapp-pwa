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
import axios from 'axios';
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
            axios
            .get(this.urlcloud + "owner/top-10")
            .then((response) => {
                this.jsonData = response.data;
            });
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