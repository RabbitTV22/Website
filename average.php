
<!DOCTYPE html>
<html>
<head>
<script>
function rickroll() {
  // get the video element by id
  var video = document.getElementById("rick");
  // make the video visible
  video.style.display = "block";
  // enter full screen mode
  video.requestFullscreen();
  // play the video with autoplay
  video.setAttribute("src", video.getAttribute("src") + "?autoplay=1");
}
</script>
</head>
<body>
<!-- hide the video element -->
<iframe id="rick" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="display: none;"></iframe>
<!-- create a button that calls the rickroll function -->
<button onclick="rickroll();">Click Me</button>
</body>
</html>

