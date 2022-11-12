import React from "react";
import keeper from "../images/edersonCity.jpg";
import defOne from "../images/ming.jpg";
import defTwo from "../images/chenko.jpg";
import defThree from "../images/tripper.jpg";
import defFour from "../images/robertson.jpg";
import midOne from "../images/deBrunye.jpg";
import midTwo from "../images/almiron.png";
import midThree from "../images/martinelli.jpg";
import fordOne from "../images/andreas.jpg";
import fordTwo from "../images/haaland.jpg";
import fordThree from "../images/jesus.jpg";

export default function Content(){
    return(
        <div className="container border border-primary bg-success">
            {/* row for keeper */}
            <div className="row">
                <div className="col-5"></div>
                <div className="col-2">
                    <div class="card" style={{width: '100%'}}>
                        <img src={keeper} class="card-img-top" alt="..." style={{height: '125px'}} />
                        <div class="card-body text-center">
                        <h5 class="card-title">Ederson</h5>
                        <p class="card-text">Man City</p>
                        </div>
                        <div class="card-footer text-center">
                        <small class="text-muted">Leeds(A)</small>
                        </div>
                    </div>
                </div>
                <div className="col-5"></div>
            </div>
            <br/>

            {/* row for defenders */}
            <div className="row">   

                <div className="col-2"></div>

                <div className="col-2">
                    <div class="card" style={{width: '100%'}}>
                    <img src={defOne} class="card-img-top" alt="mings aston villa" style={{height: '125px'}}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Mings</h5>
                        <p class="card-text">Aston Villa</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted">LIV(H)</small>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div class="card" style={{width: '100%'}}>
                    <img src={defTwo} class="card-img-top" alt="zinchenko arsenal" style={{height: '125px'}}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Zinchenko</h5>
                        <p class="card-text">Arsenal</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted">WHU(H)</small>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div class="card" style={{width: '100%'}}>
                    <img src={defThree} class="card-img-top" alt="..." style={{height: '125px'}}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Tripper</h5>
                        <p class="card-text">New Castle</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted text-center">LEI(A)</small>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div class="card" style={{width: '100%'}}>
                    <img src={defFour} class="card-img-top" alt="..." style={{height: '125px'}}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Robertson</h5>
                        <p class="card-text">Liverpool</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted text-center">AVL(A)</small>
                        </div>
                    </div>
                </div>
                
                <div className="col-2"></div>

            </div>
            <br/>

            {/* row for midfielders */}
            <div className="row">
                <div className="col-3"></div>
                
                <div className="col-2">
                    <div class="card" style={{width: '100%'}}>
                    <img src={midOne} class="card-img-top" alt="..." style={{height: '125px'}}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Kevin Debrunye</h5>
                        <p class="card-text">Man City</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted text-center">LEE(A)</small>
                        </div>
                    </div>
                </div>
                
                <div className="col-2">
                    <div class="card" style={{width: '100%'}}>
                    <img src={midTwo} class="card-img-top" alt="..." style={{height: '125px'}}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Almiron</h5>
                        <p class="card-text">New Castle</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted">LEI(A)</small>
                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <div class="card" style={{width: '100%'}}>
                    <img src={midThree} class="card-img-top" alt="..." style={{height: '125px'}}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Martinelli</h5>
                        <p class="card-text">Arsenal</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted">WHU(H)</small>
                        </div>
                    </div>
                </div>

                <div className="col-3"></div>
            </div>
            <br/>

            {/* row for forwards */}
            <div className="row">
                <div className="col-3"></div>
                
                <div className="col-2">
                    <div class="card" style={{width: '100%'}}>
                    <img src={fordOne} class="card-img-top" alt="..." style={{height: '125px'}}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Andreas</h5>
                        <p class="card-text">Fulham</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted text-center">CRY(A)</small>
                        </div>
                    </div>
                </div>
                
                <div className="col-2">
                    <div class="card" style={{width: '100%'}}>
                    <img src={fordTwo} class="card-img-top" alt="..." style={{height: '125px'}}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Haaland</h5>
                        <p class="card-text">Man City</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted">LEE(A)</small>
                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <div class="card" style={{width: '100%'}}>
                    <img src={fordThree} class="card-img-top" alt="..." style={{height: '125px'}}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Jesus</h5>
                        <p class="card-text">Arsenal</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted">WHU(H)</small>
                        </div>
                    </div>
                </div>

                <div className="col-3"></div>
            </div>
            <br/>
        </div>
    )
}