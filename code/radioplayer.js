const channels = document.querySelector("#channels");

async function getChannels() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();

  data.channels.forEach((element) => {
    //CREATE ELEMNTS
    const channelBox = document.createElement("div");
    const titleRadio = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const audio = document.createElement("audio");

    //CREATE CLASSES

    channelBox.className = "channelBox";
    titleRadio.className = "titleRadio";

    //STYLE
    titleRadio.style.backgroundColor = `#${element.color}`;

    //Set Attreiburtes
    img.src = element.image;
    img.alt = element.name;
    title.textContent = element.name;
    audio.src = element.liveaudio.url;
    audio.controls = true;
    audio.type = "audio/mpeg";

    //AppendChild
    titleRadio.append(title, audio);
    channelBox.append(img, titleRadio);
    channels.appendChild(channelBox);
  });
}

getChannels();

// getRadioPromise.then((data) => {
//   data.channels.forEach((element) => {
//     const channelBox = document.createElement("div");
//     channelBox.classList.add("channelBox");

//     channels.appendChild(channelBox);

//     const leftChannelBox = document.createElement("div");
//     leftChannelBox.classList.add("leftChannelBox");
//     leftChannelBox.innerHTML = `<div class="radioImage">${element.image}</div>`;

//     channelBox.appendChild(leftChannelBox);

//     const rightChannelBox = document.createElement("div");
//     rightChannelBox.classList.add("channelBox");

//     rightChannelBox.innerHTML = `<h1 class="channelName">${element.name}</h1><audio controls class="player">
//    <source src="${element.liveaudio.url}" type="audio/mpeg" />
//  </audio>`;
//     channelBox.appendChild(rightChannelBox);
//   });
// });

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
