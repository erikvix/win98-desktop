import React, { useEffect } from "react";
import { useState } from "react";
import DesktopBody from "../DesktopBody";

import Window from "../Window";

export default function index() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenWindow, setIsOpenWindow] = useState(2);

  function handleStart() {
    setIsOpen(!isOpen);
  }

  function handleOpenWindow() {
    setIsOpenWindow(!isOpenWindow);
  }

  useEffect(() => {
    fetch("https://lb-embed-content.bokonon.dev?username=osgilyath")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("letterboxd-embed-wrapper-tc").innerHTML = data;
      });
  }, []);

  return (
    <div className="bg-[#c0c0c0] w-full h-12 bottom-0 text-sm font-win left-0 absolute">
      <div className="border flex items-center h-full pl-2">
        {isOpen == true ? (
          <d className="h-[250px] w-40 absolute bottom-12 bg-[#c0c0c0]">
            <div className="m-2">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setIsOpenWindow(1)}
                  className="w-full flex p-1 items-center gap-4"
                >
                  <img
                    className="w-6"
                    src="https://win98icons.alexmeub.com/icons/png/address_book_users.png"
                    alt=""
                  />
                  ChatBox
                </button>
                <button
                  onClick={() => setIsOpenWindow(2)}
                  className="w-full flex p-1 items-center gap-4"
                >
                  <img
                    className="w-6"
                    src="https://win98icons.alexmeub.com/icons/png/world_star-0.png"
                    alt=""
                  />
                  Playlist
                </button>
              </div>
            </div>
          </d>
        ) : null}
        <button onClick={handleStart} className="button h-8">
          Start
        </button>
        {isOpenWindow !== 0 && (
          <div>
            <Window isOpen={isOpenWindow == 1}>
              <div class="title-bar">
                <div class="title-bar-text">ChatBox</div>
                <div class="title-bar-controls">
                  <button
                    aria-label="Close"
                    onClick={() => setIsOpenWindow(0)}
                  ></button>
                </div>
              </div>
              <DesktopBody>
                {/* <div id="letterboxd-embed-wrapper-tc">Loading...</div> */}
                <div className="p-2">
                  <iframe
                    src="https://www3.cbox.ws/box/?boxid=3539382&boxtag=2sLtED"
                    width="100%"
                    height="450"
                    allowtransparency="yes"
                    allow="autoplay"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    scrolling="auto"
                  ></iframe>
                </div>
              </DesktopBody>
            </Window>
            <Window isOpen={isOpenWindow === 2}>
              <div class="title-bar">
                <div class="title-bar-text">Spotify Playlist</div>
                <div class="title-bar-controls">
                  <button
                    aria-label="Close"
                    onClick={() => setIsOpenWindow(0)}
                  ></button>
                </div>
              </div>
              <DesktopBody>
                <div className="text-center p-2">
                  <h1 className="text-2xl"> My Musics/Playlists:</h1>
                </div>
                <div className="flex flex-col gap-3 text-base p-2 bg-[#B8B8B8] max-w-[500px]">
                  <p className="mb-4 text-xl border-b-2 border-gray-50 bg-red-700 px-2 py-1 text-gray-50">
                    LoFi/Japanese Hip-Hop:
                  </p>
                  <p>
                    Essas são minhas músicas mais focadas em Hip-Hop japonês e
                    lofi que escuto enquanto estudo e quando estou voltando do
                    trabalho de onibûs
                  </p>
                  <p>Alguns artistas dessa playlist:</p>
                  <ul>
                    <li>- Nujabes</li>
                    <li>- Cise Starr</li>
                    <li>- Shing02</li>
                  </ul>
                  <iframe
                    src="https://open.spotify.com/embed/playlist/4xjW1DFMEcQC5J3C59eZVz?utm_source=generator"
                    width="100%"
                    height="352"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="flex flex-col gap-3 text-base p-2 bg-[#B8B8B8] max-w-[500px]">
                  <p className="mb-4 text-xl border-b-2 border-gray-50 bg-red-700 px-2 py-1 text-gray-50">
                    LoFi/Japanese Hip-Hop:
                  </p>
                  <p>
                    Essas são minhas músicas mais focadas em Hip-Hop japonês e
                    lofi que escuto enquanto estudo e quando estou voltando do
                    trabalho de onibûs
                  </p>
                  <p>Alguns artistas dessa playlist:</p>
                  <ul>
                    <li>- Nujabes</li>
                    <li>- Cise Starr</li>
                    <li>- Shing02</li>
                  </ul>
                  <iframe
                    src="https://open.spotify.com/embed/playlist/4xjW1DFMEcQC5J3C59eZVz?utm_source=generator"
                    width="100%"
                    height="352"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </DesktopBody>
            </Window>
          </div>
        )}
      </div>
    </div>
  );
}
