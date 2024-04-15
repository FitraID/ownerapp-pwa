<template>
    <table class="table table-bordered">
        <thead>
            <tr class="text-center">
                <th>No</th>
                <th>Nama</th>
                <th>Jumlah</th>
                <th>Tanggal</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item, index in dataGudang" :key="item.id" class="text-center">
                <td>{{ index+1 }} </td>
                <td>{{ item.name }}</td>
                <td>{{ item.jumlah }}</td>
                <td>{{ proccessDate(item.created_at) }}</td>
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
                this.dataGudang = data;
            })
        },
        proccessDate(tgl) {
            const final = new Date(tgl);
            const formatter = new Intl.DateTimeFormat('en', { month: 'short' });

            const bulan = formatter.format(final);
            const hari = final.getDate();
            const jam = final.getHours();
            const menit = final.getMinutes();
            const detik = final.getSeconds();

            const finalDate = `${bulan}-${hari}-${jam}:${menit}:${detik}`;

            return finalDate;
        }
    },
    mounted() {
        this.getGudang();
    }
}
</script>