console.log("App.js connected");
testFunction = (option) => {

console.log("clicked");
console.log("Option = " + option)

let day = 1000/option

console.log("day = " + day);

/* Planet orbit ratios ===================================================================================================================== */
let sunDay = 28

let mercuryDay =  58.645
let mercuryYear =  87.969

let venusDay =  243.023
let venusYear =  224.667

let earthDay =  0.997269
let earthYear =  365.256

let marsDay =  1.026
let marsYear =  686.885

let jupiterDay =  0.4135
let jupiterYear =  4332

let saturnDay =  0.448
let saturnYear =  10754

let uranusDay =  0.718
let uranusYear = 30698

let neptuneDay =  0.67125
let neptuneYear =  60216.8


/* Moon orbit ratios ======================================================================================================================= */
let earthMoonYear = 27.321
let marsDeimosYear = 1.262
let marsPhobosYear = 0.319
let jupiterIoYear = 1.769
let jupiterEuropaYear = 3.551
let jupiterGanymedeYear = 7.154
let jupiterCallistoYear = 16.689
let saturnTitanYear = 15.95
let neptuneTritonYear = 5.877


/* Planet orbit =========================================================================================================================== */
let mercuryOrbitStyle = document.getElementById("mercury_orbit").style;
mercuryOrbitStyle.animation = mercuryYear*day+"ms linear 1s infinite normal none running year_rotation";

let venusOrbitStyle = document.getElementById("venus_orbit").style;
venusOrbitStyle.animation = venusYear*day+"ms linear 1s infinite normal none running year_rotation";

let earthOrbitStyle = document.getElementById("earth_orbit").style;
earthOrbitStyle.animation = earthYear*day+"ms linear 1s infinite normal none running year_rotation";
earthOrbitStyle.border = "2px solid #03aa6f";

let marsOrbitStyle = document.getElementById("mars_orbit").style;
marsOrbitStyle.animation = marsYear*day+"ms linear 1s infinite normal none running year_rotation";

let jupiterOrbitStyle = document.getElementById("jupiter_orbit").style;
jupiterOrbitStyle.animation = jupiterYear*day+"ms linear 1s infinite normal none running year_rotation";

let saturnOrbitStyle = document.getElementById("saturn_orbit").style;
saturnOrbitStyle.animation = saturnYear*day+"ms linear 1s infinite normal none running year_rotation";

let uranusOrbitStyle = document.getElementById("uranus_orbit").style;
uranusOrbitStyle.animation = uranusYear*day+"ms linear 1s infinite normal none running year_rotation";

let neptuneOrbitStyle = document.getElementById("neptune_orbit").style;
neptuneOrbitStyle.animation = neptuneYear*day+"ms linear 1s infinite normal none running year_rotation";


/* Moon orbit ============================================================================================================================= */
let earthMoonOrbitStyle = document.getElementById("moon_container").style
earthMoonOrbitStyle.animation = earthMoonYear*day+"ms linear 1s infinite normal none running year_rotation";

/* let marsDeimosOrbitStyle = document.getElementById("deimos_container").style
marsDeimosOrbitStyle.animation = marsDeimosYear*globalRatio+"ms linear 1s infinite normal none running year_rotation"; */

/* let marsPhobosOrbitStyle = document.getElementById("phobos_container").style
marsPhobosOrbitStyle.animation = marsPhobosYear*globalRatio+"ms linear 1s infinite normal none running year_rotation"; */

let jupiterIoOrbitStyle = document.getElementById("io_container").style
jupiterIoOrbitStyle.animation = jupiterIoYear*day+"ms linear 1s infinite normal none running year_rotation";

let jupiterEuropaOrbitStyle = document.getElementById("europa_container").style
jupiterEuropaOrbitStyle.animation = jupiterEuropaYear*day+"ms linear 1s infinite normal none running year_rotation";

let jupiterGanymedeOrbitStyle = document.getElementById("ganymede_container").style
jupiterGanymedeOrbitStyle.animation = jupiterGanymedeYear*day+"ms linear 1s infinite normal none running year_rotation";

let jupiterCallistoOrbitStyle = document.getElementById("callisto_container").style
jupiterCallistoOrbitStyle.animation = jupiterCallistoYear*day+"ms linear 1s infinite normal none running year_rotation";

let saturnTitanOrbitStyle = document.getElementById("titan_container").style
saturnTitanOrbitStyle.animation = saturnTitanYear*day+"ms linear 1s infinite normal none running year_rotation";

let neptuneTritonOrbitStyle = document.getElementById("triton_container").style
neptuneTritonOrbitStyle.animation = neptuneTritonYear*day+"ms linear 1s infinite normal none running year_rotation";


/* Planet rotation =========================================================================================================================== */
let sunRotation = document.getElementById("sun_image").style
sunRotation.animation = sunDay*day+"ms linear 1s infinite normal none running sun_rotation";

let mercuryRotation = document.getElementById("mercury_image").style
mercuryRotation.animation = mercuryDay*day+"ms linear 1s infinite normal none running year_rotation";

let venusRotation = document.getElementById("venus_image").style
venusRotation.animation = venusDay*day+"ms linear 1s infinite normal none running year_rotation";

let earthRotation = document.getElementById("earth_image").style
earthRotation.animation = earthDay*day+"ms linear 1s infinite normal none running year_rotation";

let marsRotation = document.getElementById("mars_image").style
marsRotation.animation = marsDay*day+"ms linear 1s infinite normal none running year_rotation";

let jupiterRotation = document.getElementById("jupiter_image").style
jupiterRotation.animation = jupiterDay*day+"ms linear 1s infinite normal none running year_rotation";

let saturnRotation = document.getElementById("saturn_image").style
saturnRotation.animation = saturnDay*day+"ms linear 1s infinite normal none running year_rotation";

let uranusRotation = document.getElementById("uranus_image").style
uranusRotation.animation = uranusDay*day+"ms linear 1s infinite normal none running year_rotation";

let neptuneRotation = document.getElementById("neptune_image").style
neptuneRotation.animation = neptuneDay*day+"ms linear 1s infinite normal none running year_rotation";

    
}




