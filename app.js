console.log("App.js connected");

let globalRatio = 0.01   /* Min = 0.00001 */

let hour = 3600 * globalRatio   // 3600 ms * globalRatio
let day = 24 * hour     // 86 400 000 ms
let year = 365 * day    // 31 536 000 000 ms

/* Planet orbit ratios ===================================================================================================================== */
let sunDay = day * 28

let mercuryDay = day * 58.645
let mercuryYear = day * 87.969

let venusDay = day * 243.023
let venusYear = day * 224.667

let earthDay = day * 0.997269
let earthYear = day * 365.256

let marsDay = day * 1.026
let marsYear = day * 686.885

let jupiterDay = day * 0.4135
let jupiterYear = day * 4332

let saturnDay = day * 0.448
let saturnYear = day * 10754

let uranusDay = day * 0.718
let uranusYear = day * 30698

let neptuneDay = day * 0.67125
let neptuneYear = day * 60216.8

/* Moon orbit ratios ======================================================================================================================= */
let earthMoonYear = day * 27.321
let marsDeimosYear = day * 1.262
let marsPhobosYear = day * 0.319
let jupiterIoYear = day * 1.769
let jupiterEuropaYear = day * 3.551
let jupiterGanymedeYear = day * 7.154
let jupiterCallistoYear = day * 16.689
let saturnTitanYear = day * 15.95
let neptuneTritonYear = day * 5.877

testFunction = () => {
    console.log("clicked")
    
    console.log("hour = " + hour)
    console.log("day = " + day)
    console.log("year = " + year)

    /* Planet orbit =========================================================================================================================== */
    let mercuryOrbitStyle = document.getElementById("mercury_orbit").style;
    mercuryOrbitStyle.animation = mercuryYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";
    
    let venusOrbitStyle = document.getElementById("venus_orbit").style;
    venusOrbitStyle.animation = venusYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";
    
    let earthOrbitStyle = document.getElementById("earth_orbit").style;
    earthOrbitStyle.animation = earthYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";
    earthOrbitStyle.border = "2px solid #03aa6f";

    let marsOrbitStyle = document.getElementById("mars_orbit").style;
    marsOrbitStyle.animation = marsYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";
    
    let jupiterOrbitStyle = document.getElementById("jupiter_orbit").style;
    jupiterOrbitStyle.animation = jupiterYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";
    
    let saturnOrbitStyle = document.getElementById("saturn_orbit").style;
    saturnOrbitStyle.animation = saturnYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";
    
    let uranusOrbitStyle = document.getElementById("uranus_orbit").style;
    uranusOrbitStyle.animation = uranusYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";
    
    let neptuneOrbitStyle = document.getElementById("neptune_orbit").style;
    neptuneOrbitStyle.animation = neptuneYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";
    
    /* Moon orbit ============================================================================================================================= */
    let earthMoonOrbitStyle = document.getElementById("moon_container").style
    earthMoonOrbitStyle.animation = earthMoonYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    /* let marsDeimosOrbitStyle = document.getElementById("deimos_container").style
    marsDeimosOrbitStyle.animation = marsDeimosYear*globalRatio+"ms linear 1s infinite normal none running year_rotation"; */

    /* let marsPhobosOrbitStyle = document.getElementById("phobos_container").style
    marsPhobosOrbitStyle.animation = marsPhobosYear*globalRatio+"ms linear 1s infinite normal none running year_rotation"; */

    let jupiterIoOrbitStyle = document.getElementById("io_container").style
    jupiterIoOrbitStyle.animation = jupiterIoYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    let jupiterEuropaOrbitStyle = document.getElementById("europa_container").style
    jupiterEuropaOrbitStyle.animation = jupiterEuropaYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    let jupiterGanymedeOrbitStyle = document.getElementById("ganymede_container").style
    jupiterGanymedeOrbitStyle.animation = jupiterGanymedeYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    let jupiterCallistoOrbitStyle = document.getElementById("callisto_container").style
    jupiterCallistoOrbitStyle.animation = jupiterCallistoYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    let saturnTitanOrbitStyle = document.getElementById("titan_container").style
    saturnTitanOrbitStyle.animation = saturnTitanYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    let neptuneTritonOrbitStyle = document.getElementById("triton_container").style
    neptuneTritonOrbitStyle.animation = neptuneTritonYear*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    
    /* Planet rotation =========================================================================================================================== */
    let sunRotation = document.getElementById("sun_image").style
    sunRotation.animation = sunDay*globalRatio+"ms linear 1s infinite normal none running sun_rotation";

    let mercuryRotation = document.getElementById("mercury_image").style
    mercuryRotation.animation = mercuryDay*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    let venusRotation = document.getElementById("venus_image").style
    venusRotation.animation = venusDay*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    let earthRotation = document.getElementById("earth_image").style
    earthRotation.animation = earthDay*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    let marsRotation = document.getElementById("mars_image").style
    marsRotation.animation = marsDay*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    let jupiterRotation = document.getElementById("jupiter_image").style
    jupiterRotation.animation = jupiterDay*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    let saturnRotation = document.getElementById("saturn_image").style
    saturnRotation.animation = saturnDay*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    let uranusRotation = document.getElementById("uranus_image").style
    uranusRotation.animation = uranusDay*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    let neptuneRotation = document.getElementById("neptune_image").style
    neptuneRotation.animation = neptuneDay*globalRatio+"ms linear 1s infinite normal none running year_rotation";

    
}




