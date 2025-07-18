<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jet extends Model
{
    protected $fillable = [
        'nom',
        'modele',
        'capacite',
        'image',
        'description',
        'prix'
    ];

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }


}
