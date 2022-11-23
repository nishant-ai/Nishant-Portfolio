import { useState, useEffect } from "react";
import "./App.css";

// Components
import Navbar from "./Components/Navbar/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function App() {
  const [scrolled, setScrolled] = useState(0);
  const [content, setContent] = useState("CODER");
  const [jumpto, setJumpto] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    // Cursor
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 25) + "px; left: " + (e.pageX - 25) + "px;"
      );
    });

    // Entry Animation
    setTimeout(() => {
      document.getElementsByClassName("App_Init")[0].style.color = "#000";
    }, 200);

    setTimeout(() => {
      document.getElementsByClassName("App_Init")[0].style.color = "#fff";
      const circleStyles = document.querySelector(".Circle").style;
      circleStyles.height = "100vh";
      circleStyles.width = "100vh";
      circleStyles.backgroundColor = "#000";
    }, 500);

    setTimeout(() => {
      const circleStyles = document.querySelector(".Circle").style;
      circleStyles.borderRadius = "0%";
      circleStyles.width = "100vw";
    }, 1100);

    setTimeout(() => {
      document.querySelector(".MainCurtain").style.height = "100vh";
    }, 1500);

    setTimeout(() => {
      document.getElementsByClassName("App_Init")[0].remove();
      document.querySelector(".MainCurtain").style.height = "0vh";
    }, 2000);
  }, []);

  const triggerContentAnimation = () => {
    document.querySelector(".App_Decor").style.height = "85vh";

    setTimeout(() => {
      const contents = [
        "WEB DEVELOPER",
        "MACHINE LEARNING ENTHUSIAST",
        "PROBLEM SOLVER",
      ];

      setContent(contents[scrolled]);

      document.querySelector(".App_Decor").style.height = "0vh";
    }, 500);
  };

  const increaseState = () => {
    setScrolled(scrolled + 1);
    triggerContentAnimation();
  };

  useEffect(() => {
    if (scrolled === 4) {
      setTimeout(() => {
        document.querySelector(".MainCurtain").style.height = "100vh";
      }, 200);

      setTimeout(() => {
        document.getElementsByClassName("App")[0].remove();
        document.querySelector(".MainCurtain").style.height = "0vh";
      }, 700);
    }
  }, [scrolled]);

  return (
    <>
      <div className="MainCurtain"></div>
      <div className="cursor"></div>

      <div className="App_Init">
        <div className="Circle"></div>

        <div className="WelcomeMessage" id="eelcome">
          HELLO WORLD!
          <span id="_higher_highlight"> WELCOME TO NISHANT'S PORTFOLIO</span>
        </div>
      </div>

      <div className="App">
        <Navbar state={scrolled} />

        <div className="App_Content">
          <div className="App_Decor"></div>
          <span className="App_Content_Nohighlight">
            NISHANT <span id="App_Content_lowerHighlight">is a</span>
          </span>
          <span className="App_Content_Highlight">{content}</span>
        </div>

        <button className="Next_Button" onClick={increaseState}>
          <ArrowForwardIosIcon />
        </button>
      </div>

      {scrolled === 4 && (
        <div className="Contact">
          <Navbar state={scrolled} />

          <code
            className="UpcomingFeature"
            onClick={() => {
              document.querySelector(".Popup").style.display = "flex";
            }}
          >
            Access Directory
          </code>

          <div className="ContactHead">
            Contact <span id="Contact_Highlight">Nishant</span>
          </div>

          <div className="JumpTo">
            <code>&gt; $bash ping nishant-sharma.developer</code>
            <code>
              &gt; <span style={{ color: "blue" }}> status</span>
              :&lt;success=<span style={{ color: "green" }}>true</span>&gt;
            </code>
            <br />

            <code>&gt; $bash goto me {`{i}`}</code>
            <code>
              &gt; <span style={{ color: "blue" }}> status</span>
              :&lt;success=<span style={{ color: "green" }}>true</span>&gt;
            </code>
            <br />

            <code>&gt; $bash goto contact</code>
            <code>
              &gt; <span style={{ color: "blue" }}> status</span>
              :&lt;success=<span style={{ color: "green" }}>true</span>&gt;
            </code>
            <br />
            <br />

            <code>
              &gt; $bash goto
              <span className="target">
                {jumpto ? ` $${jumpto}` : ` hover-contacts`}
              </span>
            </code>
          </div>

          <div className="Contact_Methods">
            <div
              onClick={() => {
                window.location.href = "https://github.com/nishant-ai";
              }}
              className="Contact_Method"
              onMouseEnter={() => setJumpto("github")}
            />
            <div
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/nishantsh20/";
              }}
              className="Contact_Method"
              onMouseEnter={() => setJumpto("linkedin")}
            />
            <div
              onClick={() => {
                window.location.href = "https://www.instagram.com/_nishan.t/";
              }}
              className="Contact_Method"
              onMouseEnter={() => setJumpto("instagram")}
            />
            <div
              className="Contact_Method"
              onMouseEnter={() => setJumpto("nishant-ai@outlook.com")}
            />
            <div
              onClick={() => {
                window.location.href = "https://twitter.com/Nishant59625688";
              }}
              className="Contact_Method"
              onMouseEnter={() => setJumpto("twitter")}
            />
          </div>
        </div>
      )}

      <div className="Popup">
        INCOMING <span style={{ color: "#ff3e3e" }}>&lt;SOON&gt;</span>
      </div>
    </>
  );
}

export default App;
