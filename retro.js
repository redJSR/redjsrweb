// retro.js - gives the redJSR site an early-2000s look without touching index.html's own code.
// Add this line right before </body> in index.html:  <script src="retro.js"></script>
// To go back to the normal look, delete that line.
(function () {
  var css = `
  html { scrollbar-color: #d4d0c8 #eeeeee; }
  body { font-family: Verdana, Arial, Helvetica, sans-serif; }

  /* ---- Menu: gray beveled box, classic link colors ---- */
  .wrap .nav {
    width: 140px; box-sizing: border-box; padding: 2px 4px;
    background: #d4d0c8;
    border: 2px solid; border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 1px 1px 0 #000;
    font: bold 12px/26px Arial, Helvetica, sans-serif;
    text-transform: uppercase;
  }
  .wrap .nav li { border-bottom: 1px solid #808080; padding: 0 6px; }
  .wrap .nav li:last-child { border-bottom: 0; }
  .wrap .nav a, .wrap .nav span { display: block; font-weight: bold; }
  .wrap .nav a:link { color: #0000cc; text-decoration: underline; }
  .wrap .nav a:visited { color: #551a8b; }
  .wrap .nav a:hover { color: #cc0000; }
  .wrap .nav span { color: #808080; }

  /* ---- Message ---- */
  .wrap .message { font: 13px/1.5 Verdana, Arial, Helvetica, sans-serif; }
  .wrap .message h1 { font-family: "MyRandomFont", Arial, sans-serif; font-size: 32px; }
  .message hr { margin: 14px 0 6px; border: 0; border-top: 1px solid #808080; border-bottom: 1px solid #ffffff; }
  .message .stamp { font: 11px/1.4 Arial, Helvetica, sans-serif; color: #ffffff; }

  /* ---- gif box: square sunken frame ---- */
  .gifbox { border: 2px solid; border-color: #808080 #ffffff #ffffff #808080; outline: 2px solid #d4d0c8; }

  /* ---- Radio: flat gray beveled buttons, square corners, no gloss ---- */
  .radio-controls button, .radio-panel .row button, .radio-panel .row button.alt {
    border-radius: 0; background: #d4d0c8; box-shadow: none; text-shadow: none;
    border: 2px solid; border-color: #ffffff #404040 #404040 #ffffff; color: #000;
  }
  #rPlay, #rPause, #rStop { background: #d4d0c8; }
  .radio-controls button { width: 38px; height: 28px; }
  .radio-controls button::before { display: none; }
  .radio-controls button:active, .radio-panel .row button:active {
    transform: none; box-shadow: none; border-color: #404040 #ffffff #ffffff #404040;
  }
  .ic { filter: none; }
  .ic.play { border-left-color: #000; }
  .ic.pause { border-left-color: #000; border-right-color: #000; }
  .ic.stop { background: #000; border-radius: 0; }
  .radio-panel {
    border-radius: 0; background: #d4d0c8; color: #000;
    border: 2px solid; border-color: #ffffff #404040 #404040 #ffffff;
    box-shadow: 1px 1px 0 #000; font: 11px/1.3 Arial, Helvetica, sans-serif;
  }
  .radio-panel label { text-shadow: none; }
  .radio-panel input {
    border-radius: 0; background: #fff; box-shadow: none; padding: 3px 4px;
    border: 2px solid; border-color: #808080 #ffffff #ffffff #808080;
  }
  .radio-panel .row button { font: bold 12px Arial, Helvetica, sans-serif; padding: 4px 10px; }
  .radio-status { color: #000; font-size: 11px; }

  /* ---- Announcement bar ---- */
  .bar { background: #ffffcc; border-top: 2px solid #808080; font: bold 13px/18px Arial, Helvetica, sans-serif; }

  /* ---- Copyright ---- */
  .copyright { font: 10px Arial, Helvetica, sans-serif; }

  /* ---- 88x31 badges next to the counter ---- */
  .badge {
    position: absolute; z-index: 1; bottom: 78px; width: 88px; height: 31px; box-sizing: border-box;
    display: flex; align-items: center; justify-content: center; text-align: center;
    font: bold 9px/1.15 Arial, Helvetica, sans-serif; text-transform: uppercase;
    border: 2px solid; border-color: #ffffff #404040 #404040 #ffffff;
  }
  .badge.a { left: calc(50% + 80px); background: #d4d0c8; color: #000; }
  .badge.b { left: calc(50% + 176px); background: #000080; color: #ffff00; }
  `;

  var st = document.createElement("style");
  st.textContent = css;
  document.body.appendChild(st);

  // "Last updated" line under the welcome message
  var msg = document.querySelector(".message");
  if (msg) {
    var d = new Date(document.lastModified);
    if (isNaN(d.getTime())) d = new Date();
    var day = d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
    var h = d.getHours(), m = d.getMinutes(), ap = h >= 12 ? "p.m." : "a.m.";
    h = h % 12 || 12;
    var hr = document.createElement("hr");
    var p = document.createElement("p");
    p.className = "stamp";
    p.innerHTML = "Last Updated: " + day + " - " + h + ":" + (m < 10 ? "0" : "") + m + " " + ap +
                  "<br>Best viewed at 1024x768 or higher.";
    msg.appendChild(hr);
    msg.appendChild(p);
  }

  // Badges
  var wrap = document.querySelector(".wrap");
  if (wrap) {
    wrap.insertAdjacentHTML("beforeend",
      '<div class="badge a">Best viewed<br>1024x768</div>' +
      '<div class="badge b">Powered by<br>Ruffle</div>');
  }
})();
