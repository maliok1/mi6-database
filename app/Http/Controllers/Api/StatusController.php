<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Status;

class StatusController extends Controller
{
    public function index(){
        $statuses = Status::orderBy('name')->get();
        return $statuses;
    }
}
