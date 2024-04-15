<template>
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Jumlah</th>
                <th>Tanggal</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item, index in dataGudang" :key="item.id">
                <td>{{ index }} </td>
                <td>{{ item.name }}</td>
                <td>{{ item.jumlah }}</td>
                <td>{{ item.created_at }}</td>
            </tr>
        </tbody>    
    </table>
</template>
<script>
export default {
    data() {
        return {
            dataGudang : [],
        };
    },
    methods: {
        getGudang() {
            fetch(`${this.url}owner/listgudang?access_token=${localStorage.getItem('access_token')}&table=${localStorage.getItem('table')}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.dataGudang = data;
            })
        },
    }
}
</script>