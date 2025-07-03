<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationController extends Controller
{
    /**
     * Store a newly created reservation in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'departureLocation' => 'required|string|max:255',
            'arrivalLocation' => 'required|string|max:255',
            'planeType' => 'required|string|max:255',
            'arrivalDate' => 'required|date',
            'departureDate' => 'required|date',
            'passengers' => 'required|integer|min:1|max:10',
        ]);

        $reservation = Reservation::create([
            'first_name' => $validated['firstName'],
            'last_name' => $validated['lastName'],
            'email' => $validated['email'],
            'departure_location' => $validated['departureLocation'],
            'arrival_location' => $validated['arrivalLocation'],
            'plane_type' => $validated['planeType'],
            'arrival_date' => $validated['arrivalDate'],
            'departure_date' => $validated['departureDate'],
            'passengers' => $validated['passengers'],
        ]);

        return response()->json([
            'message' => 'Reservation created successfully',
            'reservation' => $reservation,
        ], 201);
    }
}
