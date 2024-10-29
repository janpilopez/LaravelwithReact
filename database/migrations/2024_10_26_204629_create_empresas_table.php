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
        Schema::create('empresas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('email')->unique();
            $table->string('telefono')->nullable();
            $table->string('direccion')->nullable();
            $table->string('descripcion')->nullable();
            $table->string('website')->nullable();
            $table->string('facebook')->nullable();
            $table->string('youtube')->nullable();
            $table->string('tiktok')->nullable();
            $table->string('urlfoto')->nullable();
            $table->boolean('publicado')->default(false);
            $table->integer('visitas')->default(1);
            $table->foreignId('categoria_id')->references('id')->on('categorias')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');





            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empresas');
    }
};
