let curr = 1;
function changeBg() {
    let vids = [
        "assets/videos/city-snow.m4v",
        "assets/videos/evening-traffic.m4v",
        "assets/videos/train.m4v",
        "assets/videos/forest.mp4",
        "assets/videos/window-rain.m4v",
    ];
    let source = document.getElementById("bg-video");
    source.src = vids[curr];
    curr++;
    if (curr >= vids.length) {
        curr = 0;
    }
}
