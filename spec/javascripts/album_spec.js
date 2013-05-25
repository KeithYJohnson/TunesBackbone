var albumData = [{
    "title":  "Album A",
    "artist": "Artist A",
    "tracks": [
        {
            "title": "Track A",
        },
        {
            "title": "Track B",
        }]
}, {
    "title": "Album B",
    "artist": "Artist B",
    "tracks": [
        {
            "title": "Track A",
        },
        {
            "title": "Track B",
    }]
}];

describe("Album", function () {

    beforeEach(function () {
        this.album = new app.models.Album(albumData[0]);
    });

    it("creates from data", function () {
        expect(this.album.get('tracks').length).toEqual(2);
    });
});