
var isGood = function(object) {
    return -1 !== object.title.toLowerCase().indexOf("very good");
};

P.implementService("std:action_panel:output", function(display, builder) {
    let good = isGood(display.object);
    let panel = builder.panel(444);
    panel.element(0, {title:"Output Quality"});
    panel.link(0, "/do/or2019workshop-output-quality/output/"+display.object.ref,
        good ? "Quality is good" : "Not good quality",
        good ? "default" : "terminal");
});

P.respond("GET", "/do/or2019workshop-output-quality/output", [
    {pathElement:0, as:"object"}
], function(E, object) {
    E.render({
        object: object,
        good: isGood(object)
    });
});

