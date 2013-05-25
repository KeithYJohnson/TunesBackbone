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

		var album;

    beforeEach(function () {
        this.album = new app.models.Album(albumData[0]);
    });

    it("creates from data", function () {
        expect(this.album.get('tracks').length).toEqual(2);
    });

    describe("first track", function () {

        it("returns true for first track", function () {
            expect(this.album.isFirstTrack(0)).toBeTruthy();
        });

        it("returns false for other tracks", function () {
            expect(this.album.isFirstTrack(12)).toBeFalsy();
        });

    });
    
    describe("last track", function () {

        it("returns true for last track", function () {
            expect(this.album.isLastTrack(1)).toBeTruthy();
        });

        it("returns false for other tracks", function () {
            expect(this.album.isLastTrack(0)).toBeFalsy();
        });

    });
});