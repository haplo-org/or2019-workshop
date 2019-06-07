
/*
    After install, try the OAI-PMH URL with:
        ?verb=ListMetadataFormats
        ?verb=ListRecords&metadataPrefix=author_count
*/


P.implementService("or2019workshop:author-count:write-store-object-below-xml-cursor", function(item, cursor, options) {
    cursor.
        element("title").
            text(item.title).
        up().
        element("count").
            text(item.every(A.Author).length).
        up();
});
