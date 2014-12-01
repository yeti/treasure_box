var page = require('webpage').create(), address, output, size;

if (phantom.args.length < 2 || phantom.args.length > 3) {
    console.log('Usage: rasterize.js URL filename');
    phantom.exit();
} else {
    address = phantom.args[0];
    output = phantom.args[1];
    page.viewportSize = { width: 1280, height: 800 };
    page.clipRect = { top: 0, left: 0, width: 1280, height: 800 };
//    page.paperSize = {
//        format: "A4",
//        orientation: "portrait"
//    }
    page.settings.localToRemoteUrlAccessEnabled = true;
    page.settings.javascriptEnabled = true;
    page.settings.loadImages = true;
    page.open(address, function (status) {
        if (status == 'fail') {
            console.log('Unable to load the address!');
            phantom.exit();
        } 

        if (status == 'success') {
            window.setTimeout(function () {
                page.render(output);
                phantom.exit();
            }, 2000);
        }
    });
}