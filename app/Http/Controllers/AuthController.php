<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(){
        $this->content = array();
    }
    
    public function login(Request $request){

        $validateData = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);
         if(Auth::attempt([
          'email' => $request->input('email'),
          'password' => $request->input('password')
        ])){
            $user = Auth::user();
            $this->content['access_token'] =  $user->createToken($user->name . ' App')->accessToken;
            $this->content['user'] = $user;
            $status = 200;
        }
        else{
            $this->content['error'] = "Unauthorized";
            $status = 401;
        }
        return response()->json($this->content, $status);
    }
    public function logout()
    {
        $user = Auth::user();
        if($user->oatoken()->delete()){
            $this->content['message'] = 'success';
            $status = 200;
        }else{
            $this->content['message'] = 'error';
            $status = 500;
        }

        return response()->json($this->content, $status);
    }
}
