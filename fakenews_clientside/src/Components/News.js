import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";

function Job() {
  const [claim, setClaim] = useState("");
  const [factCheckResult, setFactCheckResult] = useState(null);
  const [showFacts, setShowFacts] = useState(false);

  const searchFactCheck = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${claim}&key=AIzaSyDrTcmWu6zCxJFBn82eEoHMjVWKNJmtrxY`
      );
      setFactCheckResult(response.data.claims);
      setShowFacts(true);
    } catch (error) {
      console.error("Error fetching fact check:", error);
    }
  };

  return (
    <>
      <Header logout="true" />
      <section className="hero-section d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mx-auto">
              {!showFacts && (
                <form
                  className="custom-form contact-form"
                  role="form"
                  onSubmit={searchFactCheck}
                >
                  <h2 className="hero-title text-center mb-4 pb-2">
                    Verify News
                  </h2>
                  <div className="row">
                    <div className="col-lg-12 col-12">
                      <div className="form-floating">
                        <textarea
                          onChange={(e) => setClaim(e.target.value)}
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Message"
                        ></textarea>
                        <label for="floatingTextarea">Enter News</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-10 mx-auto">
                      <button
                        type="submit"
                        className="form-control"
                        style={{ backgroundColor: "#000000" }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {showFacts && (
                <div
                  className="bg-light"
                  style={{
                    borderRadius: 15,
                    marginTop: 100,
                    padding: 20,
                    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                    maxHeight: "600px",
                    overflowY: "auto",
                  }}
                >
                  {factCheckResult.map((claim) => (
                    <div key={claim.claimReview[0].url}>
                      <p>
                        Found Related News:{" "}
                        <span className="text-danger">{claim.text}</span>
                      </p>
                      <p>
                        Publisher:{" "}
                        <a
                          href={claim.claimReview[0].url}
                          target="_blank"
                          className="text-primary text-decoration-underline"
                        >
                          {" "}
                          {claim.claimReview[0].publisher.name}
                        </a>
                      </p>
                      <p>
                        Review:{" "}
                        <span className="text-danger">
                          {claim.claimReview[0].textualRating}
                        </span>
                      </p>
                      <hr />
                    </div>
                  ))}
                  <button
                    className="btn btn-dark"
                    onClick={() => setShowFacts(false)}
                  >
                    Back
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Job;
