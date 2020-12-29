<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ProgresStatus extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $registrasi;
    public $status;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user,$registrasi, $pembayaran, $status)
    {
        //

        $this->user = $user;
        $this->registrasi = $registrasi;
        $this->pembayaran = $pembayaran;
        $this->status = $status;
        //dd( $this);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        
        $this->subject('Progres Status');
        return $this->view('mail.progresstatus');
       // error_log("tes");
    }

    
}
