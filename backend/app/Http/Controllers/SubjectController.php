<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;
use Illuminate\Support\Facades\Storage;

class SubjectController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $subject = new Subject();
        $subject->name = $request->name;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images');
            $subject->image_path = $path;
        }

        $subject->save();

        return response()->json($subject, 201);
    }

    public function get($id = null)
    {
        if ($id) {
            $subject = Subject::find($id);

            if (!$subject) {
                return response()->json(['message' => 'Subject not found'], 404);
            }

            return response()->json($subject);
        } else {
            $subjects = Subject::all();
            return response()->json($subjects);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $subject = Subject::find($id);

        if (!$subject) {
            return response()->json(['message' => 'Subject not found'], 404);
        }

        $subject->name = $request->name;

        if ($request->hasFile('image')) {
            // Delete the old image
            if ($subject->image_path) {
                Storage::delete($subject->image_path);
            }
            $path = $request->file('image')->store('images');
            $subject->image_path = $path;
        }

        $subject->save();

        return response()->json($subject);
    }

    public function delete($id)
    {
        $subject = Subject::find($id);

        if (!$subject) {
            return response()->json(['message' => 'Subject not found'], 404);
        }

        // Delete the image
        if ($subject->image_path) {
            Storage::delete($subject->image_path);
        }

        $subject->delete();

        return response()->json(['message' => 'Subject deleted']);
    }
}
