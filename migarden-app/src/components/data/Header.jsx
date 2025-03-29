// src/components/Button.js
import React from 'react';


export default function Header({ label, onClick }) {
  return (
    <nav class="navbar navbar-expand-md">
        <div class="container">
        <div class="row w-100 align-items-center">
              
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
               
                <div class="col-md-3 col-12 text-md-end text-center">
                    <a href="#intro" class="navbar-brand d-block mx-auto">
                       {/* <img src="" alt="logo" class="logo" style="max-width: 100%; height: auto;"></img> */}
                    </a>
                    <p class="d-none d-md-block">the green place in a gray space</p>
                </div>
    
               
                <div class="col-md-3 d-none d-md-block text-start ms-">
                    <h1 class="fw-bold d-inline-block ">Vision <span class="ms-2">&#x2192;</span></h1>
                    <p class="mt-4">Transform abandoned urban  spaces into dynamic and vibrant places.</p>
                </div>
    
               
                <div class="col-md-5 d-none d-md-block text-centre offset-1">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="#intro" class="nav-link">Home</a>
                        </div>
                        <div class="col-md-3">
                            <a href="#about" class="nav-link">About</a>
                        </div>
                        <div class="col-md-3">
                            <a href="#contact" class="nav-link">Contact</a>
                        </div>


                    </div>
                    <p class="mt-3 text-muted small">website 2025</p>
                </div>
            </div>
        </div>

    </nav>
  );
}
