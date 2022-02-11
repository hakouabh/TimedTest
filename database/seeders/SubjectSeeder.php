<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Subject;
use App\Models\UserSubject;
class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::find(1);
        Subject::factory(10)->create();

        $subjects = Subject::all();

        foreach($subjects as $subject){
            
            UserSubject::create([
                'user_id' => $user->id,
                'subject_id'=> $subject->id
            ]);
        }
    }
}
