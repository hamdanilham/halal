@extends('layouts.default', ['boxedLayout' => true], ['sidebarLight' => true], ['sidebarWide' => true])

@section('title', 'Edit Data Dokumen Hala')

@push('css')
    <link href="{{asset('/assets/plugins/bootstrap-select/dist/css/bootstrap-select.min.css')}}" rel="stylesheet" />
    <link href="{{asset('/assets/plugins/select2/dist/css/select2.min.css')}}" rel="stylesheet" />
@endpush

@section('content')
    <!-- begin breadcrumb -->
    <ol class="breadcrumb float-xl-right">
        <li class="breadcrumb-item"><a href="#">Master</a></li>
        <li class="breadcrumb-item"><a href="#">Dokumen Halal</a></li>
        <li class="breadcrumb-item active">Edit Data Dokumen Halal</li>
    </ol>
    <!-- end breadcrumb -->
    <!-- begin page-header -->
    <h1 class="page-header">Edit Data Dokumen Halal<small></small></h1>
    <!-- end page-header -->
    <!-- begin row -->
    <div class="row">
        <!-- begin col-12 -->
        <div class="col-xl-12">
            <!-- begin panel -->
            <div class="panel panel-inverse" data-sortable-id="form-plugins-7">
                <!-- begin panel-heading -->
                <div class="panel-heading">
                    <h4 class="panel-title">Edit Data Dokumen Halal</h4>
                    <div class="panel-heading-btn">
                        <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    </div>
                </div>
                <!-- end panel-heading -->
                <!-- begin panel-body -->
                <div class="panel-body panel-form">
                    <form action="{{route('dokumen.update',$data->id)}}" method="post"  class="form-horizontal form-bordered" enctype="multipart/form-data">
                        <div class="form-group row">
                            @csrf
                            @method('PUT')

                            <input type="text" class="form-control col-lg-8" id="id" name="id" value="{{$data->id}}" hidden required>

                            <label class="col-lg-4 col-form-label">Nama File</label>
                            <div class="col-lg-8">
                                <input type="text" class="form-control" id="nama_file" name="nama_file" value="{{$data->nama_file}}" required>
                            </div>
                            <label class="col-lg-4 col-form-label">File</label>
                            <div class="col-lg-8">
                                <a href="{{url('') .Storage::url('public/dokumenHalal/'.$data->nama_file_extension) }}" style="font-size: 15px" download>{{$data->nama_file_extension}}</a>
                            </div>
                            <label class="col-lg-4 col-form-label">Upload File Baru</label>
                            <div class="col-lg-8">
                                
                                <input style="padding-top: 15px;padding-left: 0px" type="file" class="form-control-input" name="file" id="file" required/>  
                            </div>

                            <label class="col-lg-4 col-form-label">Kategori Role</label>
                            <div class="col-lg-8">
                                <select id="role" name="role" class="form-control selectpicker" data-size="100" data-live-search="true" data-style="btn-white" required="">
                                    <option value="">==Pilih Kategori Role==</option>
                                    <option value="pelanggan">Pelanggan</option>
                                    <option value="user">Karyawan PT SUCOFINDO</option>                                                               
                                </select>
                            </div>


                           

                            <div class="col-md-12 offset-md-5">
                                @component('components.buttonback',['href' => route("dokumen.index")])@endcomponent
                                @component('components.buttonupdate')@endcomponent
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
    <script src="{{asset('/assets/plugins/bootstrap-select/dist/js/bootstrap-select.min.js')}}"></script>
    <script src="{{asset('/assets/plugins/select2/dist/js/select2.min.js')}}"></script>
    <script src="{{asset('/assets/js/demo/form-plugins.demo.js')}}"></script>
@endpush