<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Likes extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'likes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'post_id',
        'like_count',
        'dislike_count',
    ];

    /**
     * Get the post associated with the likes.
     */
    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }
}
