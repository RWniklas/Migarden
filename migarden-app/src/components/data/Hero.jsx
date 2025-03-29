// src/components/Button.js
import React from 'react';


export default function Hero({ label, onClick }) {
  return (
    
    <div class="container-xxl">
        <div class="row mt-5">
            <div class="d-md-block d-none col-lg-1"></div>
            <div class="d-md-block d-none col-md-1"></div>
            <div class="col-6 col-md-1"></div>
            <div class="col-6 col-md-1"></div>
            <div class="col-12 col-md-1"></div>
            <div class="d-md-block d-none col-md-1 offset-image−bot">
                <div class="card">
                <img src="images/homepage/hero1.png" alt="logo"></img>
                </div>
            </div>
            <div class="d-md-block d-none col-md-1"></div>
        </div>
        <div class="row">
            <div class="d-md-block d-none col-lg-12">
                <div class="card">
                    <img src="images/hero1.png" alt="logo"></img>
                </div>
            </div>
            <div class="d-md-block d-none col-md-1 offset-image">
                <div class="card">
                    <img src="images/hero2.png" alt="logo"></img>
                </div>
            </div>
            <div class="col-6 col-md-1">
                <div class="card">
                    <img src="images/values.png" alt="logo"></img>
                    <div class="card-body">
                        <h5>Values</h5>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-1">
                <div class="card">
                    <img src="images/archive.png" alt="logo"></img>
                    <div class="card-body">
                        <h5>Values</h5>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-1">
                <div class="card">
                    <img src="images/services.png" alt="logo"></img>
                    <div class="card-body">
                        <h5>Services</h5>
                    </div>
                </div>
            </div>
            <div class="d-md-block d-none col-md-1 offset-image−bot"></div>
            <div class="d-md-block d-none col-md-1">
                <div class="card">
                    <img src="images/hero4.png" alt="logo"></img>
                </div>
            </div>
        </div>
    </div>
    
    
  );
}
