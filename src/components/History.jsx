import React from 'react';
// import { Carousel } from 'react-bootstrap';

import image1 from './../assets/images/4.jpg';
import ReadMoreReadLess from './ReadMoreReadLess';


function HistoryContainer() {
    return (
        <div className="History">
            <div class="container-fluid">
                <div class="row align-items-center my-4">
                    <div class="col-lg-6">
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                    </div>
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-4">
                                <h3 class="font-weight-light line">OUR HISTORY</h3>
                            </div>
                            <div class="col-lg-8">
                                <p> See the science, stories, and geography
                                    of our Objects of Wonder exhibit from
                                    the comfort of your home. See the science, stories, and geography
                                    of our Objects of Wonder exhibit from
                                    the comfort of your home. See the science, stories, and geography
                                    of our Objects of Wonder exhibit from
                                    the comfort of your home.</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-4">
                                <h3 class="font-weight-light line">ON VIEW</h3>
                            </div>
                            <div class="col-lg-8">
                                
                                <div class="row">
                                    <div class="col-lg-4">
                                        Arts of Museum
                                        <br />
                                        Classical Art
                                        <br />
                                        Arts of Asia
                                        <br />
                                        War History
                                        <br />Kings of History
                                        <br />

                                        Decorative Art

                                    </div>
                                    <div class="col-lg-4">
                                        Arts of Museum
                                        <br />
                                        Classical Art
                                        <br />
                                        Arts of Asia
                                        <br />
                                        War History
                                        <br />Kings of History
                                        <br />

                                        Decorative Art

                                    </div>
                                    <div class="col-lg-4">
                                        Arts of Museum
                                        <br />
                                        Classical Art
                                        <br />
                                        Arts of Asia
                                        <br />
                                        War History
                                        <br />Kings of History
                                        <br />

                                        Decorative Art

                                    </div>


                                </div>

                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryContainer;



