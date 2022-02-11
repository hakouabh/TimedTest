<?php

namespace App\Http\Controllers;

use App\Models\UserSubject;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get()
    {
        $subjects = UserSubject::where('user_id', Auth::user()->id)->with('subject')->get();
        return response()->json($subjects, 200);
    }
}
