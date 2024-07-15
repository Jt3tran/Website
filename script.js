document.addEventListener('DOMContentLoaded', function() {
    const output = document.getElementById('output');

    document.getElementById('navigator').addEventListener('click', function() {
        output.innerHTML = `
            <h2>Navigator Information</h2>
            <p>appName: ${navigator.appName}</p>
            <p>product: ${navigator.product}</p>
            <p>appVersion: ${navigator.appVersion}</p>
            <p>userAgent: ${navigator.userAgent}</p>
            <p>platform: ${navigator.platform}</p>
            <p>language: ${navigator.language}</p>
        `;
    });

    document.getElementById('window').addEventListener('click', function() {
        output.innerHTML = `
            <h2>Window Information</h2>
            <p>innerHeight: ${window.innerHeight}</p>
            <p>innerWidth: ${window.innerWidth}</p>
        `;
    });

    document.getElementById('screen').addEventListener('click', function() {
        output.innerHTML = `
            <h2>Screen Information</h2>
            <p>width: ${screen.width}</p>
            <p>height: ${screen.height}</p>
            <p>availWidth: ${screen.availWidth}</p>
            <p>availHeight: ${screen.availHeight}</p>
            <p>colorDepth: ${screen.colorDepth}</p>
            <p>pixelDepth: ${screen.pixelDepth}</p>
        `;
    });

    document.getElementById('location').addEventListener('click', function() {
        output.innerHTML = `
            <h2>Location Information</h2>
            <p>href: ${window.location.href}</p>
            <p>hostname: ${window.location.hostname}</p>
            <p>pathname: ${window.location.pathname}</p>
            <p>protocol: ${window.location.protocol}</p>
        `;
    });

    document.getElementById('geolocation').addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                output.innerHTML = `
                    <h2>Geolocation Information</h2>
                    <p>Latitude: ${position.coords.latitude}</p>
                    <p>Longitude: ${position.coords.longitude}</p>
                `;
            }, function(error) {
                output.innerHTML = `
                    <h2>Geolocation Information</h2>
                    <p>Your Location is: </p>
                `;
            });
        } else {
            output.innerHTML = `
                <h2>Geolocation Information</h2>
                <p>Geolocation is not supported by this browser</p>
            `;
        }
    });
});