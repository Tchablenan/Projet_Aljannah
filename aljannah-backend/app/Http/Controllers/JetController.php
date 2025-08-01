<?php

namespace App\Http\Controllers;

use App\Models\Jet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class JetController extends Controller
{
    public function index()
    {
        $jets = Jet::paginate(10);

        return view('jets.index', compact('jets'));
    }

    public function create()
    {
        return view('jets.create');
    }

    public function store(Request $request)
    {
        //dd($request);
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'modele' => 'nullable|string|max:255',
            'capacite' => 'required|integer|min:1',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:8048', // 8MB max
             'prix' => 'required|numeric|min:0',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('jets', 'public');
        }

        Jet::create($validated);

        return redirect()->route('jets.index')->with('success', 'Jet créé avec succès.');
    }

    public function show(Jet $jet)
    {

        return view('jets.show', compact('jet'));
    }

    public function edit(Jet $jet)
    {
        return view('jets.edit', compact('jet'));
    }

    public function update(Request $request, Jet $jet)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'modele' => 'nullable|string|max:255',
            'capacite' => 'required|integer|min:1',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:8048',
          'prix' => 'sometimes|required|numeric|min:0',

        ]);

        if ($request->hasFile('image')) {
            // Supprimer l'ancienne image si elle existe
            if ($jet->image) {
                Storage::disk('public')->delete($jet->image);
            }

            $validated['image'] = $request->file('image')->store('jets', 'public');
        }

        $jet->update($validated);

        return redirect()->route('jets.index')->with('success', 'Jet mis à jour avec succès.');
    }

    public function destroy(Jet $jet)
    {
        if ($jet->image) {
            Storage::disk('public')->delete($jet->image);
        }

        $jet->delete();

        return redirect()->route('jets.index')->with('success', 'Jet supprimé avec succès.');
    }
}
