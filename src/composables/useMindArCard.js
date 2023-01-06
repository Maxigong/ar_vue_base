import { gsap } from "gsap";
import { CSS3DObject } from "../libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer";

export const useMindArtCard = () => {
    const startFunctions = async () => {
        try {
            gsap.set(".link", { opacity: 0, zIndex: -1 });
            let tl = gsap.timeline();
            tl.from(".card-header", { opacity: 0, yPercent: -10 })
                .to("h1", {
                    duration: 1,
                    text: {
                        value: "nolgong",
                    },
                })
                .to(".link", { opacity: 1, y: 220, stagger: 0.3 })
                .pause();

            console.log(window.MINDAR.IMAGE);

            const mindarThree = new window.MINDAR.IMAGE.MindARThree({
                container: document.body,
                // imageTargetSrc:
                // "https://github.com/Maxigong/ar_card/blob/main/targetsTwo.mind",
                // imageTargetSrc:
                //     "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/card.mind",
                imageTargetSrc: "require('../targets/targetCard.mind')",
            });
            const { renderer, camera, cssScene, cssRenderer } = mindarThree;
            const mainContainer = new CSS3DObject(
                document.querySelector("#cardMain")
            );
            mainContainer.userData.clickable = true;
            const cssAnchor = mindarThree.addCSSAnchor(0);
            cssAnchor.group.add(mainContainer);
            cssAnchor.onTargetFound = () => {
                tl.play();
            };
            cssAnchor.onTargetLost = () => {
                tl.reverse();
            };
            await mindarThree.start();
            renderer.setAnimationLoop(() => {
                cssRenderer.render(cssScene, camera);
            });
        } catch (error) {
            console.log("error", error);
        }
    };

    return { startFunctions };
};
