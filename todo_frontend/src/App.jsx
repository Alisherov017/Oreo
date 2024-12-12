import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState({
    viewCompleted: false,
    todoList: [],
    modal: false,
    activeItem: {
      title: "",
      description: "",
      completed: false,
    },
    message: "",
    response: "",
    responseJson: [],
  });

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    axios
      .get("/api/tasks/")
      .then((res) => setState((prev) => ({ ...prev, todoList: res.data })))
      .catch((err) => console.log(err));
  };

  const toggle = () => {
    setState((prev) => ({ ...prev, modal: !prev.modal }));
  };

  const handleSubmit = (item) => {
    toggle();

    if (item.id) {
      axios.put(`/api/tasks/${item.id}/`, item).then((res) => refreshList());
      return;
    }
    axios.post("/api/tasks/", item).then((res) => refreshList());
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://127.0.0.1:8000/api/generate-text/", {
          prompt: state.message,
        })
        .then((res) =>
          setState((prev) => ({
            ...prev,
            response: res.data["data"],
            responseJson: JSON.parse(res.data["data"]),
          }))
        );
    } catch (error) {
      console.error("Error chatting with GPT:", error);
    }
  };

  const handleDelete = (item) => {
    axios.delete(`/api/tasks/${item.id}/`).then((res) => refreshList());
    // const updatedList = state.todoList.filter((task) => task.id !== item);

    // //
    // const reindexedTasks = updatedList.map((task, index) => ({
    //   ...task,
    //   id: index + 1,
    // }));
  };

  // const createItem = () => {
  //   const item = { title: "", description: "", completed: false };
  //   setState((prev) => ({ ...prev, activeItem: item, modal: !prev.modal }));
  // };

  // const editItem = (item) => {
  //   setState((prev) => ({ ...prev, activeItem: item, modal: !prev.modal }));
  // };

  // const displayCompleted = (status) => {
  //   setState((prev) => ({ ...prev, viewCompleted: status }));
  // };

  return (
    <main className="container">
      <>
        <div className="row text-center later">
          <h2>Generate Delicious Recipes with OpenAI</h2>
          <form onSubmit={(e) => handleChatSubmit(e)}>
            {/* <textarea
              value={state.message}
              onChange={(e) =>
                setState((prev) => ({ ...prev, message: e.target.value }))
              }
              rows="4"
              cols="50"
            /> */}

            <div className="inputBlue">
              <div class="galaxy"></div>
              <div id="search-container">
                <div class="nebula"></div>
                <div class="starfield"></div>
                <div class="cosmic-dust"></div>
                <div class="cosmic-dust"></div>
                <div class="cosmic-dust"></div>

                <div class="stardust"></div>

                <div class="cosmic-ring"></div>

                <div id="main">
                  <input
                    class="input"
                    // name="text"
                    // type="text"
                    placeholder="Explore the food..."
                    value={state.message}
                    onChange={(e) =>
                      setState((prev) => ({ ...prev, message: e.target.value }))
                    }
                  />
                  <div id="input-mask"></div>
                  <div id="cosmic-glow"></div>
                  <div class="wormhole-border"></div>
                  <div id="wormhole-icon">
                    <svg
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="#a9c7ff"
                      fill="none"
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                    >
                      <circle r="10" cy="12" cx="12"></circle>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </div>
                  <div id="search-icon">
                    <svg
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="url(#cosmic-search)"
                      fill="none"
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                    >
                      <circle r="8" cy="11" cx="11"></circle>
                      <line y2="16.65" x2="16.65" y1="21" x1="21"></line>
                      <defs>
                        <linearGradient
                          gradientTransform="rotate(45)"
                          id="cosmic-search"
                        >
                          <stop stop-color="#a9c7ff" offset="0%"></stop>
                          <stop stop-color="#6e8cff" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* <br /> */}
            {/* button */}
            {/* <button className="btn btn-primary" type="submit">
            </button> */}
            <button type="submit" className="starBtn">
              Button
              <div class="star-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      class="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      class="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      class="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      class="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      class="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      class="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
            {/* End button */}
            {/* Send */}
          </form>

          {state.response && (
            <div>
              <h2 className="recipe">
                {/* Recipe Name: {state.responseJson.recipe.name} */}
                Recipe Name: {state.responseJson.name}
              </h2>

              <h3>History:</h3>
              <p>{state.responseJson.history}</p>

              <h3>Instructions:</h3>
              <ul>
                {state.responseJson.instructions.map((instruction, index) => (
                  <li className="instruction" key={index}>
                    {instruction}
                  </li>
                ))}
              </ul>

              <h3>Ingredients:</h3>
              <ul>
                {state.responseJson.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>

              {/* <p>{state.response}</p> */}
            </div>
          )}
        </div>
      </>
    </main>
  );
}

export default App;
