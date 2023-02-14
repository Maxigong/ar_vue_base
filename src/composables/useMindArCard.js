import { gsap } from "gsap";
// import { CSS3DObject } from "../libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";
import { ref } from "vue";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export const useMindArtCard = () => {
    let showComponent = ref(false);
    let mindarThree;
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
            mindarThree = new window.MINDAR.IMAGE.MindARThree({
                container: document.querySelector(".main"),
                // container: document.body,
                imageTargetSrc:
                    "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind",
            });
            const { renderer, camera, cssScene, cssRenderer } = mindarThree;
            const mainContainer = new CSS3DObject(
                document.querySelector("#cardMain")
            );
            mainContainer.userData.clickable = true;
            const cssAnchor = mindarThree.addCSSAnchor(0);
            cssAnchor.group.add(mainContainer);
            cssAnchor.onTargetFound = () => {
                console.log("found");

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

    const stopFunc = () => {
        mindarThree.stop();
        window.removeEventListener("resize", () => mindarThree);
        document
            .querySelectorAll(".mindar-ui-overlay")
            .forEach((e) => e.remove());
    };

    return { startFunctions, showComponent, stopFunc };
};
