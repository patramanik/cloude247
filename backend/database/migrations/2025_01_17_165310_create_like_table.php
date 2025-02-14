<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('like', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('post_id');
            // $table->foreign('post_id')->references('id')->on('post');
            $table->foreign('post_id')
              ->references('id')
              ->on('post')
              ->onDelete('cascade')
              ->onUpdate('cascade');
            $table->Integer('like_count');
            $table->Integer('dislike_count');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('like');
    }
};
