/*Tanah Bangunan*/
function checkStatus(data){
    var showData = (data==0)? "Non Aktif":"Aktif";
    return showData;
}

function checkStatusPembayaran(data){

     return  (data==0)? '<a class=" ion-ios-clipboard" title="Belum Bayar" style="font-size: 200%;"></a>'
        :(data==1)? '<a  class="ion-ios-clipboard " style="font-size: 200%;color:yellow  ;" title="Pelanggan Sudah Upload dan Menunggu Konfirmasi"></a>'
        :(data==2)? '<a  class="ion-ios-clipboard " style="font-size: 200%; align-center; color: #e32636;;"title="Pembayaran Gagal"></a>'
        :(data==3)? '<a  class="ion-ios-clipboard " style="font-size: 200%; align-center; color: #32cd32;"title="Pembayaran Terkonfirmasi"></a>'
        :'<a  class="ion-ios-clipboard " style="font-size: 200%;" title="Belum Bayar"></a>';
            
}

function checkStatusPenerbitanOrderConfirmation(data){

    return  (data==0)? '<a class=" ion-ios-clipboard" title="Belum diupload" style="font-size: 200%;"></a>'
       :(data==1)? '<a  class="ion-ios-clipboard " style="font-size: 200%;color:yellow  ;" title="Menunggu Pelanggan Upload Ulang OC"></a>'
       :(data==2)? '<a  class="ion-ios-clipboard " style="font-size: 200%;color:yellow  ;" title="Menunggu Konfirmasi Admin"></a>'
       :(data==3)? '<a  class="ion-ios-clipboard " style="font-size: 200%; align-center; color: #e32636;;"title="Penerbitan OC Gagal"></a>'
       :(data==4)? '<a  class="ion-ios-clipboard " style="font-size: 200%; align-center; color: #32cd32;"title="Penerbitan O Terkonfirmasi"></a>'
       :'<a  class="ion-ios-clipboard " style="font-size: 200%;" title="Belum Bayar"></a>';
           
}

function checkStatusPelunasan(data){

    return  (data==0)? '<a class=" ion-ios-clipboard" title="Belum Bayar Pelunasan" style="font-size: 200%;"></a>'
       :(data==1)? '<a  class="ion-ios-clipboard " style="font-size: 200%;color:yellow  ;" title="Pelanggan Sudah Upload dan Menunggu Konfirmasi"></a>'
       :(data==2)? '<a  class="ion-ios-clipboard " style="font-size: 200%; align-center; color: #e32636;;"title="Pembayaran Gagal"></a>'
       :(data==3)? '<a  class="ion-ios-clipboard " style="font-size: 200%; align-center; color: #32cd32;"title="Pembayaran Terkonfirmasi"></a>'
       :'<a  class="ion-ios-clipboard " style="font-size: 200%;" title="Belum Bayar"></a>';
           
}

function checkStatusBerkas(data){
    return  (data==0)? '<a class="ion-ios-clipboard " style="font-size: 200%;" 0.73em; title="Belum Upload"></a>'
        :(data==1)? '<a  class="ion-ios-clipboard " style="color:#yellow; font-size: 200%;" title="Menunggu Konfirmasi"></a>'
        :(data==2)? '<a  class="ion-ios-clipboard " style="align-center;color:#e32636; font-size: 200%;" title="Perbaikan"></a>'
        :(data==3)? '<a  class="ion-ios-clipboard " style=" align-center; color: #32cd32; font-size: 200%;"title="Berkas Terkonfirmasi"></a>'
        :'<a  class="ion-ios-clipboard " style="font-size: 200%;"  title="Belum Upload"></a>';
            
}

function checkStatusBerkasAuditTahap1(data){
    return  (data==0)? '<a class="ion-ios-clipboard " style="font-size: 200%;" 0.73em; title="Belum Upload"></a>'
        :(data==1)? '<a  class="ion-ios-clipboard " style="color:yellow; font-size: 200%;" title="Menunggu Konfirmasi Admin"></a>'
        :(data==2)? '<a  class="ion-ios-clipboard " style="align-center;color:#e32636; font-size: 200%;" title="Perbaikan"></a>'
        :(data==3)? '<a  class="ion-ios-clipboard " style=" align-center; color: #32cd32; font-size: 200%;"title="Audit Tahap 1 Selesai"></a>'
        :'<a  class="ion-ios-clipboard " style="font-size: 200%;"  title="Belum Upload"></a>';
            
}

function checkStatusBerkasAuditTahap2(data){
    return  (data==0)? '<a class="ion-ios-clipboard " style="font-size: 200%;" 0.73em; title="Belum Upload Audit Plan"></a>'
        :(data==1)? '<a  class="ion-ios-clipboard " style="color:yellow; font-size: 200%;" title="Menunggu Konfirmasi Audit Plan Pelaku Usaha"></a>'
        :(data==2)? '<a  class="ion-ios-clipboard " style="align-center;color:#e32636; font-size: 200%;" title="Pelaku Usaha Menolak Audit Plan"></a>'
        :(data==3)? '<a  class="ion-ios-clipboard " style=" align-center; color: #32cd32; font-size: 200%;"title="Audit Plan Terkonfirmasi"></a>'
        :(data==4)? '<a  class="ion-ios-clipboard " style="color:yellow font-size: 200%;" title="Menunggu Konfirmasi Tehnical Reviewer"></a>'
        :(data==5)? '<a  class="ion-ios-clipboard " style="align-center;color:#e32636; font-size: 200%;" title="Perbaikan Audit Tahap 2"></a>'
        :(data==6)? '<a  class="ion-ios-clipboard " style="color:yellow; font-size: 200%;" title="Menunggu Konfirmasi Komite Sertifikasi"></a>'
        :(data==7)? '<a  class="ion-ios-clipboard " style="color:yellow; font-size: 200%;" title="Menunggu Konfirmasi Approver Operasi (Juli Permana)"></a>'
        :(data==8)? '<a  class="ion-ios-clipboard " style=" align-center; color: #32cd32; font-size: 200%;"title="Laporan Audit Tahap 2 Terkonfirmasi"></a>'
        :'<a  class="ion-ios-clipboard " style="font-size: 200%;"  title="Belum Upload"></a>';
            
}


function checkStatusWaktuKebutuhanAudit(data){
    return  (data==0)? '<a class="ion-ios-clipboard " style="font-size: 200%;" 0.73em; title="Belum ditentukan"></a>'
        :(data==1)? '<a  class="ion-ios-clipboard " style="color:yellow; font-size: 200%;" title="Menunggu Konfirmasi"></a>'
        :(data==2)? '<a  class="ion-ios-clipboard " style="align-center;color:#e32636; font-size: 200%;" title="Perbaikan"></a>'
        :(data==3)? '<a  class="ion-ios-clipboard " style=" align-center; color: #32cd32; font-size: 200%;"title="Formulir Perhitungan Waktu Audit Terkonfirmasi"></a>'
        :'<a  class="ion-ios-clipboard " style="font-size: 200%;"  title="Belum ditentukan"></a>';
            
}



function checkPenjadwalan(data){
    return  (data==0)? '<a  class="ion-ios-clipboard " style="font-size: 200%; color:black;" title="Belum Dijadwalkan"></a>'
        :(data==1)? '<a   class="ion-ios-clipboard " style="font-size: 200%;color:yellow;" title="Menunggu Konfirmasi Reviewer"></a>'
        :(data==2)? '<a  class="ion-ios-clipboard " style="align-center; font-size: 200%;color:#e32636;  title="Perbaikan"></a>'
        :(data==3)? '<a  class="ion-ios-clipboard " style="font-size: 200%; align-center;color:#32cd32;"title="Perjadwalan Terkonfirmasi"></a>'
        :'<a  class="ion-ios-clipboard " style="font-size: 200%; color:black;" title="Belum Dijadwalkan-1"></a>';
            
}

// function checkStatusAkad(data){

//      return  (data==0)? '<a class="ion-ios-clipboard" title="Belum Akad" style="font-size: 200%;"></a>'
//             :(data==1)? '<a  class="ion-ios-clipboard " style="font-size: 200%;color:yellow ;" title="Menunggu Konfirmasi"></a>'
//             :(data==2)? '<a  class="ion-ios-clipboard " style="font-size: 200%;color:#e32636 ;" title="Perbaikan"></a>'
//             :(data==3)? '<a  class="ion-ios-clipboard " style="font-size: 200%;color:#32cd32 ;" title="Penawaran Terkonfirmasi"></a>'
//             :(data==4)? '<a  class="ion-ios-clipboard " style="font-size: 200%;color:yellow ;" title="Menunggu Pelanggan Megupload Ulang Kontrak"></a>'
//             :(data==5)? '<a  class="ion-ios-clipboard  " style="font-size: 200%; align-center; color: #e32636;"title="Pelanggan Menolak Penawaran"></a>'
//             :(data==6)? '<a  class="ion-ios-clipboard " style="align-center; font-size: 200%; color:yellow; " title="Pelanggan Sudah Upload Ulang dan Menunggu Konfirmasi Sales"></a>'
//             :(data==7)? '<a  class="ion-ios-clipboard  " style="font-size: 200%; align-center; color: #e32636;"title="Penawaran Gagal"></a>'
//             :(data==8)? '<a  class="ion-ios-clipboard  " style="font-size: 200%; align-center; color:#32cd32 ;"title="Penawaran Terkonfirmasi"></a>'
//             :'<a  class="ion-ios-clipboard " style="font-size: 200%;" title="Belum Akad"></a>';
            
// }

function checkStatusBeritaAcara(data){

     return  (data==0)? '<a class="ion-ios-clipboard" title="Berita Acara Belum Diupload" style="font-size: 200%;"></a>'
            :(data==1)? '<a  class="ion-ios-clipboard " style="font-size: 200%;color:yellow ;" title="Menunggu Pelanggan Megupload Ulang Berita Acara"></a>'
            :(data==2)? '<a  class="ion-ios-clipboard " style="align-center; font-size: 200%; color:#32cd32; " title="Pelanggan Sudah Upload Ulang Berita Acara"></a>'
            :'<a  class="ion-ios-clipboard " style="zoom:2.0;" title="Berita Acara Belum Diupload"></a>';
            
}

function checkStatusFaq(data){
    return  (data=='nonaktif')? 'Non Aktif'
        :(data=='aktif')? 'Aktif'
        :(data=='transfer')? 'Transfer'
        :(data=='tunai')? 'Tunai'
        :'-';
            
}
                                   
function checkWilayah(data){
    return  (data=='119')? 'Kantor Pusat'
            :(data=='115')? 'Cabang Balikpapan'
            :(data=='125')? 'Cabang Bandar Lampung'
            :(data=='107')? 'Cabang Bandung'
            :(data=='117')? 'Cabang Banjarmasin'
            :(data=='123')? 'Cabang Batam'
            :(data=='104')? 'Cabang Batu Licin'
            :(data=='103')? 'Cabang Bekasi'
            :(data=='129')? 'Cabang Bengkulu'
            :(data=='121')? 'Cabang Bontang'
            :(data=='113')? 'Cabang Cilacap'
            :(data=='131')? 'Cabang Cilegon'
            :(data=='105')? 'Cabang Cirebon'
            :(data=='114')? 'Cabang Denpasar'
            :(data=='127')? 'Cabang Dumai'
            :(data=='130')? 'Cabang Jakarta'
            :(data=='128')? 'Cabang Jambi'
            :(data=='111')? 'Cabang Makassar'
            :(data=='116')? 'Cabang Manado'
            :(data=='101')? 'Cabang Medan'
            :(data=='126')? 'Cabang Padang'
            :(data=='124')? 'Cabang Palembang'
            :(data=='109')? 'Cabang Pekanbaru'
            :(data=='122')? 'Cabang Pontianak'
            :(data=='120')? 'Cabang Samarinda'
            :(data=='102')? 'Cabang Sangatta'
            :(data=='110')? 'Cabang Semarang'
            :(data=='108')? 'Cabang Surabaya'
            :(data=='106')? 'Cabang Tarakan'
            :(data=='112')? 'Cabang Timika'
            :(data=='118')? 'SBU Kantor Pusat'
            :(data=='132')? 'SBU Laboratorium Cibitung'
            :'-';
                
}


function checkProgress(data){
    return  (data==1)? 'Pengajuan Baru'
            //verifikasi data sertifikasi
            :(data==2)? 'Verifikasi Berkas'
            :(data.trim()=='2-0')? 'Belum Upload Berkas'
            :(data.trim()=='2-1')? 'Menunggu Verifikasi Admin'
            :(data.trim()=='2-2')? 'Perbaikan Berkas'
            :(data.trim()=='2-3')? 'Berkas Terkonfirmasi'
            //menentukan waktu audit
            :(data==3)? 'Menentukan Kebutuhan Audit'
            :(data.trim()=='3-0')? 'Belum ditentukan'
            :(data.trim()=='3-1')? 'Menunggu Konfirmasi Reviewer'
            :(data.trim()=='3-2')? 'Perbaikan Kebutuhan Audit'
            :(data.trim()=='3-3')? 'Kebutuhan Waktu Audit Terkonfirmasi'
            //penawaran harga dan akad
            :(data==4)? 'Penawaran Harga dan Akad'
            //pembayaran tahap 1
            :(data==5)? 'Pembayaran'
            :(data.trim()=='5-0')? 'Belum Bayar'
            :(data.trim()=='5-1')? 'Menunggu Konfirmasi Sales'
            :(data.trim()=='5-2')? 'Pembayaran Gagal'
            :(data.trim()=='5-3')? 'Pembayaran Terkonfirmasi'
            //penerbitan OC
            :(data==6)? 'Penerbitan OC'
            :(data.trim()=='6-0')? 'Belum Upload OC'
            :(data.trim()=='6-1')? 'Menunggu Pelanggan Upload Ulang OC'
            :(data.trim()=='6-2')? 'Menunggu Konfirmasi Admin'
            :(data.trim()=='6-3')? 'Penerbitan OC Gagal'
            :(data.trim()=='6-4')? 'Penerbitan OC Terkonfirmasi'
            //Penjadwalan
            :(data==7)? 'Penjadwalan'
            :(data.trim()=='7-0')? 'Belum Dijadwalkan'
            :(data.trim()=='7-1')? 'Menunggu Konfirmasi Reviewer'
            :(data.trim()=='7-2')? 'Perbaikan Penjadwalan'
            :(data.trim()=='7-3')? 'Penjadwalan Terkonfirmasi'
            //Proses Audit Tahap 1
            :(data==8)? 'Proses Audit Tahap 1'
            :(data.trim()=='8-1')? 'Menunggu Verifikasi Admin'
            :(data.trim()=='8-2')? 'Perbaikan Berkas'
            :(data.trim()=='8-3')? 'Audit Tahap 1 Selesai'
            //Pembayaran Tahap 2
            :(data==9)? 'Pembayaran Tahap 2'
            :(data.trim()=='9-0')? 'Belum Bayar'
            :(data.trim()=='9-1')? 'Menunggu Konfirmasi Sales'
            :(data.trim()=='9-2')? 'Pembayaran Gagal'
            :(data.trim()=='9-3')? 'Pembayaran Terkonfirmasi'
            //Proses Audit Tahap 2
            :(data==10)? 'Proses Audit Tahap 2'
            :(data.trim()=='10-0')? 'Belum Upload Audit Plan'
            :(data.trim()=='10-1')? 'Menunggu Konfirmasi Pelaku Usaha'
            :(data.trim()=='10-2')? 'Audit Plan Ditolak'
            :(data.trim()=='10-3')? 'Audit Plan Terkonfirmasi'
            :(data.trim()=='10-4')? 'Menunggu Konfirmasi Tehnical Review'
            :(data.trim()=='10-5')? 'Perbaikan Laporan Audit Tahap 2'
            :(data.trim()=='10-6')? 'Menunggu Konfirmasi Komite Sertifikasi'
            :(data.trim()=='10-7')? 'Menunggu Konfirmasi Reviewer Operasi (Pak Juli)'
            :(data.trim()=='10-8')? 'Laporan Audit Tahap 2 Terkonfirmasi'
            //Berita Acara
            :(data==11)? 'Berita Acara'
            :(data.trim()=='12-0')? 'Belum Upload Berita Acara'
            :(data.trim()=='12-1')? 'Menunggu Pelanggan Upload Ulang Berita Acara'
            :(data.trim()=='12-2')? 'Berita Acara Terkonfirmasi'
            //Pelunasan
            :(data==12)? 'Pelunasan'
            :(data.trim()=='9-0')? 'Belum Bayar'
            :(data.trim()=='9-1')? 'Menunggu Konfirmasi Sales'
            :(data.trim()=='9-2')? 'Pelunasan Gagal'
            :(data.trim()=='9-3')? 'Pelunasan Terkonfirmasi'
            //Proses Sidang Fatwa
            :(data==13)? 'Proses Sidang Fatwa'
            :'-';
}

function notifProgress(data){
    console.log(data);
    return  (data==1)? 'Pengajuan Baru Berhasil Silahkan Lanjutkan Upload Berkas Pada Menu Unggah Data'
            //verifikasi data sertifikasi
            :(data==2)? 'Silahkan Lengkapi Berkas'
            :(data.trim()=='2-0')? 'Silahkan Lengkapi Berkas'
            :(data.trim()=='2-1')? 'Berkas Berhasil diunggah dan Sedang Dilakukan Verivikasi Data, Mohon Tunggu 1 Hari Kerja'
            :(data.trim()=='2-2')? 'Berkas Sertifikasi Perlu Diperbaiki, Silahkan Cek Menu Unggah Data Sertifikasi Pada Kolom Catatan'
            :(data.trim()=='2-3')? 'Berkas Sertifikasi Sudah Berhasil Terverifikasi'
            //menentukan waktu audit
            :(data==3)? 'Menentukan Kebutuhan Audit'
            :(data.trim()=='3-0')? 'Menentukan Kebutuhan Waktu Audit'
            :(data.trim()=='3-1')? 'Menunggu Konfirmasi Reviewer'
            :(data.trim()=='3-2')? 'Perbaikan Kebutuhan Audit'
            :(data.trim()=='3-3')? 'Kebutuhan Waktu Audit Terkonfirmasi'
            //penawaran harga dan akad
            :(data==4)? 'Penawaran Harga dan Akad'
            //pembayaran tahap 1
            :(data==5)? 'Silahkan Melakukan Pembayaran Sesuai dengan Akad'
            :(data.trim()=='5-0')? 'Silahkan Melakukan Pembayaran Sesuai dengan Akad'
            :(data.trim()=='5-1')? 'Silahkan Menunggu Berkas Bukti Transfer Dikonfirmasi oleh Sales Admin'
            :(data.trim()=='5-2')? 'Pembayaran Gagal Silahkan Upload Ulang Bukti Transfer Uang Muka Pastikan Foto Terlihat Jelas'
            :(data.trim()=='5-3')? 'Pembayaran  Sesuai dan Akan Dilanjutkan Pada Proses Selanjutnya Yaiut Proses Audit'
            //penerbitan OC
            :(data==6)? 'Penerbitan OC'
            :(data.trim()=='6-0')? 'Penerbitan OC'
            :(data.trim()=='6-1')? 'Silahkan mengupload Order Confirmation yang Sudah Ditandatangani'
            :(data.trim()=='6-2')? 'Silahkan Menunggu Admin Memverifikasi Order Confirmation'
            :(data.trim()=='6-3')? 'Order Confirmation Tidak Sesuai, Gagal Diterbitkan. Silahkan Upload Ulang dan Pastikan Dokumen Sudah Ditandatangani'
            :(data.trim()=='6-4')? 'Order COnfirmation Sudah Terkonfirmasi Silahkan Melanjutkan Ke Tahapan Selanjutnya Penjadwalan'
            //Penjadwalan
            :(data==7)? 'Penjadwalan'
            :(data.trim()=='7-0')? 'Belum Dijadwalkan'
            :(data.trim()=='7-1')? 'Silahkan Menunggu Reviewer Menyetujui Penjadwalan'
            :(data.trim()=='7-2')? 'Perbaikan Penjadwalan'
            :(data.trim()=='7-3')? 'Penjadwalan Terkonfirmasi Silahkan Melanjutkan ke Tahapan Selanjutnya : Proses Audit Tahap 1 Audit Tahap 1'
            //Proses Audit Tahap 1
            :(data==8)? 'Proses Audit Tahap 1: Silahkan Lengkapi Berkas'
            :(data.trim()=='8-1')? 'Silahkan Menunggu Auditor Untuk Memeriksa Kesesuaian Berkas'
            :(data.trim()=='8-2')? 'Berkas Tidak Sesuai, Silahkan Cek Kembali Catatan Ketidaksesuaian Pada Halaman Laporan Audit Tahap 1'
            :(data.trim()=='8-3')? 'Audit Tahap 1 Selesai, Silahkan Melanjutkan ke Tahapan Selanjutnya Pembayaran Tahap 2. (Apabila Nominal diatas 50 Jt)'
            //Pembayaran Tahap 2
            :(data==9)? 'Silahkan Melakukan Pembayaran Tahap 2 Sesuai dengan Akad'
            :(data.trim()=='9-0')? 'Silahkan Melakukan Pembayaran Tahap 2 Sesuai dengan Akad'
            :(data.trim()=='9-1')? 'Silahkan  Menunggu Berkas Bukti Transfer Pembayaran Tahap 2 Dikonfirmasi oleh Sales Admin'
            :(data.trim()=='9-2')? 'Pembayaran Gagal Silahkan Upload Ulang Bukti Transfer Pembayaran Tahap 2 Pastikan Foto Terlihat Jelas'
            :(data.trim()=='9-3')? 'Pembayaran Tahap 2 Sesuai dan Akan Dilanjutkan Pada Proses Selanjutnya Yaiut Proses Audit'
            //Proses Audit Tahap 2
            :(data==10)? 'Proses Audit Tahap 2 : Silahkan Kontak CS Kami Untuk Infromasi Lebih Lengkap Terkait Audit Lapangan'
            :(data.trim()=='10-0')? 'Belum Upload Audit Plan'
            :(data.trim()=='10-1')? 'Menunggu Konfirmasi Pelaku Usaha'
            :(data.trim()=='10-2')? 'Audit Plan Ditolak'
            :(data.trim()=='10-3')? 'Audit Plan Terkonfirmasi'
            :(data.trim()=='10-4')? 'Menunggu Konfirmasi Tehnical Review'
            :(data.trim()=='10-5')? 'Perbaikan Laporan Audit Tahap 2'
            :(data.trim()=='10-6')? 'Menunggu Konfirmasi Komite Sertifikasi'
            :(data.trim()=='10-7')? 'Menunggu Konfirmasi Reviewer Operasi (Pak Juli)'
            :(data.trim()=='10-8')? 'Laporan Audit Tahap 2 Terkonfirmasi'
            //Berita Acara
            :(data==11)? 'Berita Acara'
            :(data.trim()=='12-0')? 'Belum Upload Berita Acara'
            :(data.trim()=='12-1')? 'Silahkan Upload Ulang Berita Acara Yang Sudah Ditandatangani'
            :(data.trim()=='12-2')? 'Berita Acara Terkonfirmasi Silahkan Lanjutkan Tahapan Berikutnya : Pelunasan dan Penerbitan Invoice'
            //Pelunasan
            :(data==12)? 'Silahkan Melakukan Pelunasan Sesuai Dengan Akad'
            :(data.trim()=='9-0')? 'Silahkan Upload Bukti Pelunasan'
            :(data.trim()=='9-1')? 'Silahkan Menunggu Konfirmasi Sales'
            :(data.trim()=='9-2')? 'Pelunasan Gagal Silahkan Upload Ulang Bukti Pelunasan'
            :(data.trim()=='9-3')? 'Pelunasan Sesuai dan Akan Dilanjutkan Pada Proses Selanjutnya Yaitu Penerbitan Invoice'
            //Proses Sidang Fatwa
            :(data==13)? 'Proses Sidang Fatwa'
            :'-'; 
           
}
/*
function checkIcon(data){
    var showData = (data==0)? "<i class='ion-md-remove fa-lg color-grey'></i>":"<i class='ion-md-checkmark fa-lg color-green'></i>";
    return showData;
}
function checkRutr(data){
    var xdata = (data==1)? "Investasi":((data==2) ? "Perumahan" : (data==3) ? "Perkebunan" :  "<i class='ion-md-remove fa-lg color-grey'></i>");
    return xdata;
}
function checkFisik(data){
    return (data==0)? "Rusak":((data==1) ? "Baik" : "<i class='ion-md-remove fa-lg color-grey'></i>") ;
}
function checkFisikDetail(data){
    return  (data==1)? "Perlu perbaikan"
        :(data==2)? "Siap digunakan"
            :(data==3)? "Masih bisa digunakan"
                :(data==4)? "Tidak bisa digunakan"
                : "<i class='ion-md-remove fa-lg color-grey'></i>";
}

function checkUtility(data){
    return (data==0)? "Idle":((data==1) ? "Terpakai" : "<i class='ion-md-remove fa-lg color-grey'></i>");
}
function checkAir(data){
    return (data==0)? "Air Tanah":((data==1) ? "PAM" : "<i class='ion-md-remove fa-lg color-grey'></i>");
}
function checkListrik(data){
    return  (data==1)? "PLN"
        :(data==2)? "Genset"
            :(data==3)? "Solar Cell"
            : "<i class='ion-md-remove fa-lg color-grey'></i>";
}
function checkStatus(data){
    return (data==0)? "<i class='ion-md-remove fa-lg color-grey'></i>":"<i class='ion-md-checkmark fa-lg color-green'></i>";
}
function checkTelekomunikasi(data){
    return (data==0)? "Fixed":((data==1) ? "Cellular" : "<i class='ion-md-remove fa-lg color-grey'></i>");
}
function checkSpekMobilitas(data){
    return (data==0)? "Portable":((data==1) ? "Fixed" : "<i class='ion-md-remove fa-lg color-grey'></i>");
}
function checkSpekSDK(data){
    return (data==0)? "<i class='ion-md-remove fa-lg color-grey'></i>":((data==1) ? "<i class='ion-md-checkmark fa-lg color-green'></i>" : "<i class='ion-md-remove fa-lg color-grey'></i>");
}
function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}*/