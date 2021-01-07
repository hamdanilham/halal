@extends('layouts.default')

@section('title', 'Pelunasan Sertifikasi Halal')

@push('css')
	<link href="{{asset('/assets/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker.css')}}" rel="stylesheet" />
@endpush

@section('content')
    <!-- begin breadcrumb -->
	<ol class="breadcrumb float-xl-right">
		<li class="breadcrumb-item">Pelunasan</li>
		<li class="breadcrumb-item active">Pembayaran Sertifikasi Halal</li>
	</ol>
	<!-- end breadcrumb -->
	<!-- begin page-header -->
	<h1 class="page-header">Pembayaran Sertifikasi Halal<small></small></h1>
	<!-- end page-header -->
	<!-- begin row -->
	<div class="row">
		<!-- begin col-12 -->
		<div class="col-xl-12">
            <!-- begin panel -->
            <div class="panel panel-inverse" data-sortable-id="form-plugins-7">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Pembayaran Sertifikasi Halal</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin panel-body -->
				<div class="panel-body panel-form">
					<form action="{{route('registrasi.konfirmasipelunasanuser',["id" => $data->id])}}" method="post"  class="form-horizontal form-bordered" enctype="multipart/form-data">
						@csrf
						@method('PUT')
						<div class="form-group row" >
							<label class="col-lg-4 col-form-label">No Registrasi</label>
							<div class="col-lg-8">
								<input type="text" name="id" value="{{$data->id}}" hidden readonly>
								<input type="text" class="form-control" name='no_registrasi' value="{{$data->no_registrasi}}" readonly/>
							</div>
							<!-- <label class="col-lg-4 col-form-label">Metode Pembayaran</label> -->
							<!-- <div class="col-lg-8">
								<div class="radio radio-css radio-inline">
									<input type="radio" name="metode_pembayaran" id="metodePembayaran1" value="tunai" {{ $data->metode_pembayaran == "tunai" ? 'checked' : 'disabled'}}  />
									<label for="metodePembayaran1">Tunai</label>
								</div>
								 <div class="radio radio-css radio-inline">
									<input type="radio" name="metode_pembayaran" id="metodePembayaran2" value="transfer" {{ $data->metode_pembayaran == "transfer" ? 'checked' : 'disabled'}} />
									<label for="metodePembayaran2">Transfer</label>
								</div> 
							</div> -->
							<label class="col-lg-4 col-form-label">Tanggal Pelunasan</label>
							<div class="col-lg-8">
								<input id="tanggal_tahap3" name="tanggal_tahap3" type="text" class="form-control" {{ $dataP->status_tahap3 == 1 ? 'disabled' : ''}} />
							</div>
							<label class="col-lg-4 col-form-label">Biaya Sertifikasi</label>
							
							<div class="col-lg-8">
								<input type="text" class="form-control" value="Rp. {{ $dataP->nominal_tahap3}} " disabled/>
							</div>
							
							@elseif($dataP->status_tahap3 == 1)	
								<!--Auto Download-->
								<label class="col-lg-4 col-form-label">Bukti Pelunasan</label>
								<div id="sh" class="col-lg-8">
									<div class="form-control" readonly>
										<a href="{{url('') .Storage::url('public/buktipembayaran/'.Auth::user()->id.'/'.$dataP->bb_tahap3) }}" download>{{$dataP->bb_tahap3}}</a>
									</div>
								</div>
								
							@elseif($dataP->status_tahap3 == 2)	
								<!--Auto Download-->
								<label class="col-lg-4 col-form-label">Bukti Pelunasan</label>
								<div id="sh" class="col-lg-8">
									<div class="form-control" readonly>
										<a href="{{url('') .Storage::url('public/buktipembayaran/'.Auth::user()->id.'/'.$dataP->bb_tahap3) }}" download>{{$dataP->bb_tahap3}}</a>
									</div>
								</div>
								<label class="col-lg-4 col-form-label">Bukti Konfirmasi Pelunasan Sertifikasi</label>
								<div id="sh" class="col-lg-8">
									<div class="form-control" readonly>
											<a href="{{url('') .Storage::url('public/buktipembayaran/'.$dataP->bt_tahap3) }}" download>{{$dataP->bt_tahap3}}</a>
									</div>
								</div>
								<label class="col-lg-4 col-form-label">Invoice Pelunasan</label>
								<div id="sh" class="col-lg-8">
									<div class="form-control" readonly>
											<a href="{{url('') .Storage::url('public/INV/'.$data->inv_pembayaran) }}" download>{{$data->inv_pembayaran}}</a>
									</div>
								</div>								
							@else
								<label class="col-lg-4 col-form-label">Upload Bukti Pelunasan</label>
								<div class="col-lg-8">
									<input type="file"  name="file" id="file" oninvalid="this.setCustomValidity('File bukti pelunasan masih kosong')" oninput="setCustomValidity('')" onchange="getValue('file')" accept="image/*" required />
								</div>
							@endif

							
								<label id="ltransfer" class="col-lg-4 col-form-label">Cara Pelunasan Transfer</label>
	                            <div id="dtransfer" class="col-lg-8">
	                                <div id="accordionTransfer" class="accordion">
	                                    @foreach($dataTransfer as $index => $value)
	                                        <!-- begin card -->
	                                        <div class="card">
	                                            <div class="card-header pointer-cursor d-flex align-items-center" data-toggle="collapse" data-target="#collapse{{$value['id']}}" style="cursor: pointer; padding: 2px 5px">
	                                                <img class="animated bounceIn " src="{{asset('/assets/img/user/reg-info.png')}}" alt="" style="height: 30px;margin-right: 10px;"> 
	                                                <span class="faq-ask">{{ucwords($value['question'])}}</span>
	                                            </div>
	                                            <div id="collapse{{$value['id']}}" class="collapse" data-parent="#accordionTransfer">
	                                                <div class="card-body">
	                                                    <?php echo html_entity_decode($value['answer'])?>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    @endforeach
	                                </div>
	                            </div>
							
								<div class="col-md-12 offset-md-5">
									
									<!-- @if($data->metode_pembayaran == 'tunai')
										@component('components.buttonback',['href' => route("registrasiHalal.index")])@endcomponent
									@else -->
										@component('components.buttonback',['href' => route("registrasiHalal.index")])@endcomponent	
										
										@if($dataP->status_tahap3 == 2)
											<button type="submit" class="btn btn-sm btn-success m-r-5" disabled>Pelunasan Sudah Dikonfirmasi</button>
										@else
											<button type="submit" class="btn btn-sm btn-primary m-r-5">Konfirmasi</button>

											@if($dataP->status_tahap3 == 1)	
												<button type="submit" class="btn btn-sm btn-warning m-r-5" disabled>Pelunasan Sedang Diproses</button>
											@endif
										@endif								
									<!-- @endif -->
								</div>
						</div>
					</form>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-12 -->
	</div>
	<!-- end row -->
@endsection

@push('scripts')
	<script src="{{asset('/assets/plugins/bootstrap-datepicker/dist/js/bootstrap-datepicker.js')}}"></script>
    <script type="text/javascript">
    	//var date = new Date();
        var today = new Date();
    	$('#tanggal_tahap3').datepicker({
            format: "yyyy-mm-dd",
            todayHighlight: true,
        });
        $('#tanggal_tahap3').datepicker('setDate', today);

        function getValue(y){
        	const x  = document.getElementById(y);

        	// var length = x.files[0];
        	// console.log(length);

            var getSize = x.files[0].size;
            //var maxSize = 5120*1024;
            var maxSize = 2048*1024;
            var values = x.value;
            var ext = values.split('.').pop();
            if(getSize > maxSize){
                    alert("File terlalu besar, ukuran file maksimal 2MB");
                    x.value = "";
                    return false;
            }

          
        }
    </script>

@endpush