"use client";
import React from "react";
import Script from "next/script";
import Link from "next/link";
// window.$ = window.jQuery = require('jquery')

const hiddenOrShow = (e) => {
  if (e === true) return "block";
  else return "none";
};

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      teamSize: 1,
      collegeOptions: {
        // Initialize the state for each radio group to false (not "Other" selected).
        group1: false,
        group2: false,
        group3: false,
        group4: false,
        group5: false,
        group6: false,
      },
    };
  }

  handleJqueryLoad() {
    window.$ = window.jQuery = require("jquery");
  }
  handleTeamSizeChange = (e) => {
    this.setState({ teamSize: e }, () => {
      console.log("teamSize Updated:", this.state.teamSize);
    });
  };

  handleCollegeOptionChange = (group, value) => {
    // Update the state for the selected radio group.
    this.setState((prevState) => ({
      collegeOptions: {
        ...prevState.collegeOptions,
        [group]: value === "__other_option__",
      },
    }));
  };

  componentDidMount() {
    this.handleJqueryLoad();
  }

  static async getInitialProps(ctx) {
    ctx.res.setHeader("Content-type", "text/html");
    ctx.res.write(str);
    ctx.res.end();
  }

  render() {
    return (
      <div className=" w-[90%] md:w-2/3 sm:w-5/6 mx-auto">
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSepwkYVpD9rWy5Ym2LnvZipnlQlZH5YPbL-M6J0M6uAg9K2BA/formResponse"
          target="_self"
          id="bootstrapForm"
          method="POST"
          className=" flex flex-col items-center justify-items-center justify-center my-2"
        >
          <div id="section-1">
            <fieldset className="w-full">
              <h2 className=" flex flex-col items-center justify-between ">
                <span className=" shimmer font-bold text-3xl">
                  CBIT Hacktoberfest Hackathon 2023
                </span>
              </h2>
              <p className=" my-3 text-sm leading-6 md:text-base">
                Join the CBIT Hacktoberfest Hackathon, a virtual celebration of
                open source and community. With 105 teams and 516 participants
                in the last edition, this flagship event by COSC is back to
                foster a strong open-source community. Enhance your technical
                skills and make meaningful contributions to the open-source
                world in this exciting edition of Hacktoberfest!
              </p>
              <div className=" flex flex-col gap-2">
                <span className=" self-center text-bgold-200 mb-10 text-sm leading-6 md:text-base">
                  This is your chance to make a mark in the open-source realm!
                </span>
                <div className="align-items-center flex flex-col justify-center font-thin  md:flex-row items-center gap-4 text-bgold-200 w-full  md:text-base text-sm leading-6">
                  To edit your response or if you are unable to register on the
                  website, register using the Google form.
                </div>
                <div className=" mt-4 flex justify-center">
                  <Link
                    className="shimmerb mx-auto "
                    href="https://forms.gle/pt1HRckW8i8gAMgv9"
                  >
                    <button className=" mx-auto mb-3 px-4 py-2 rounded-lg bg-opacity-10 border border-bgold-200 shadow-md hover:bg-Manga-200 hover:bg-opacity-25 duration-300">
                      Google Form
                    </button>
                  </Link>
                </div>
                <div className=" flex flex-col">
                  <span className=" self-center text-bblue-200 md:text-xl text-base font-semibold leading-6 py-2">
                    Here are some essential rules and guidelines to keep in
                    mind:
                  </span>
                  <ul className=" list-disc text-sm md:text-base leading-6 px-6">
                    <li className=" my-1">
                      Every team will consist of 3 to 5 members and individual
                      or paired participants will be pooled together.
                    </li>
                    <li className=" my-1">
                      In the spirit of open source, there will be{" "}
                      <span className=" font-bold text-bgold-200">no Registration Fees</span>.
                    </li>
                    <li className=" my-1">
                      Problem statements will be released on the day of the hackathon.
                    </li>
                    <li className=" my-1">
                      The hackathon is inclusive and welcomes students from all
                      academic disciplines, all years of study, and any college
                      or university.
                    </li>
                  </ul>
                </div>
                <div className=" mt-3 mb-1 ">
                  <span className=" text-bgold-200"> Mode:</span>
                  <span className=" text-bblue-100"> Virtual (on Discord)</span>
                </div>
                <div className=" my-2">
                  <span className=" text-bgold-200">
                    {" "}
                    Registration Deadline:
                  </span>{" "}
                  <span className=" text-bblue-100">
                    4th October, 11:00 PM
                  </span>{" "}
                </div>
                <div>
                  <span className=" text-bgold-200">
                    Hackathon Date and Timings:
                  </span>
                  <span className=" text-bblue-100">
                    {" "}
                    7th October, 4:00 PM to 8th October, 7:30 PM
                  </span>
                </div>
                <div className=" my-2 md:text-base text-sm leading-6">
                  {" "}
                  Stay tuned for additional information that will be relayed
                  through your team leader. Please keep an eye on your
                  registered email addresses for upcoming announcements. And
                  most importantly, may the source be with you!{" "}
                  <p className=" my-2">
                    Also, stay connected and stay informed by following our
                    Instagram handle for future updates.
                  </p>{" "}
                  <div className=" my-2">
                    For any queries, contact:
                    <div className=" flex flex-col w-max my-2">
                      <div className="flex justify-between">
                        <span className=" text-bgold-200 pr-2">Akil:</span>
                        <Link
                          href="tel:+919442621187"
                          className="text-bblue-100 hover:underline"
                        >
                          +91 94426 21187
                        </Link>
                      </div>
                      <div className=" flex justify-between">
                        <span className=" text-bgold-200 pr-2">Ritesh:</span>
                        <Link
                          href="tel:+919618266824"
                          className=" text-bblue-100 hover:underline"
                        >
                          +91 96182 66824
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <div className=" px-12 py-6 bg-Manga-100 bg-opacity-20  w-full rounded-xl lex flex-col items-center my-8 ">
              <fieldset className=" my-2 w-full">
                <legend
                  htmlFor=""
                  className=" text-bblue-200 text-xl py-2 w-full"
                >
                  Email
                </legend>
                <div className="form-group w-full">
                  <input
                    id="emailAddress"
                    type="email"
                    name="emailAddress"
                    // className="form-control"
                    className=" form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                    required
                  />
                </div>
              </fieldset>

              {/*  */}
              <fieldset className=" my-2 w-full">
                <legend
                  htmlFor="589548866"
                  className=" text-bblue-200 text-xl py-2"
                >
                  Team Name
                </legend>
                <div className="form-group w-full">
                  <input
                    id="2063582306"
                    type="text"
                    name="entry.2063582306"
                    // className="form-control"
                    className=" form-control rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200  px-4 py-2 md:text-xl  w-full"
                    required
                  />
                </div>
              </fieldset>
            </div>

            <div className=" px-12 py-6 bg-Manga-100 bg-opacity-20 justify-content-center align-center items-center rounded-xl w-full justify-self-center lex flex-col  my-8">
              <fieldset className="w-full">
                <legend
                  htmlFor="115335284"
                  className=" text-bblue-200 text-xl py-2 "
                >
                  Team Size
                </legend>
                <div className="form-group w-full">
                  <p
                    //   className="help-block"
                    className="help-block text-sm leading-7"
                  >
                    Individual participants and teams comprising of two members
                    will be pooled with other participants Further details will
                    be communicated to the Team Lead and the specified email
                  </p>
                  <div className=" flex align-items-center justify-center gap-8 my-4">
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          className="radio"
                          name="entry.1110453834"
                          defaultValue={1}
                          onClick={(e) => this.handleTeamSizeChange(1)}
                          required
                        />
                        1
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          className="radio"
                          name="entry.1110453834"
                          defaultValue={2}
                          onClick={(e) => this.handleTeamSizeChange(2)}
                          required
                        />
                        2
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          className="radio"
                          name="entry.1110453834"
                          defaultValue={3}
                          onClick={(e) => this.handleTeamSizeChange(3)}
                          required
                        />
                        3
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          className="radio"
                          name="entry.1110453834"
                          defaultValue={4}
                          onClick={(e) => this.handleTeamSizeChange(4)}
                          required
                        />
                        4
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          className="radio"
                          name="entry.1110453834"
                          defaultValue={5}
                          onClick={(e) => this.handleTeamSizeChange(5)}
                          required
                        />
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className=" px-12 py-6 bg-Manga-100 bg-opacity-20  rounded-xl lex flex-col items-center my-8 w-full">
              <fieldset className="w-full">
                <legend
                  htmlFor="2019641531"
                  className=" text-bblue-200 md:text-lg text-sm  py-2 w-full"
                >
                  What technical skills and frameworks are you and your team
                  members familiar with?
                </legend>
                <div className="form-group w-full">
                  <textarea
                    id="1651657008"
                    name="entry.1651657008"
                    // className="form-control"
                    className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200  justify-items-center items-center w-full px-4 py-2"
                    required
                  ></textarea>
                </div>
              </fieldset>
            </div>

            <div className=" px-12 py-6 bg-Manga-100 bg-opacity-20  rounded-xl lex flex-col items-center my-8 w-full ">
              <div className=" flex flex-col items-start gap-4 rounded-lg  md:px-4 md:py-3 w-full">
                <fieldset className="form-group w-full">
                  <legend
                    htmlFor="1885957116"
                    className=" text-bblue-200 text-xl py-2 w-full"
                  >
                    Team Leader Name
                  </legend>
                  <div className="form-group w-full">
                    <input
                      id="445699137"
                      type="text"
                      name="entry.445699137"
                      className=" form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                      required
                    />
                  </div>
                </fieldset>

                {/*  */}
                <fieldset className="form-group w-full">
                  <legend
                    htmlFor="1476785257"
                    className=" text-bblue-200 text-xl py-2 w-full"
                  >
                    Team Leader Email ID
                  </legend>
                  <div className="form-group w-full">
                    <input
                      id="1814031188"
                      type="text"
                      name="entry.1814031188"
                      className=" form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 md:w-full w-full"
                      required
                    />
                  </div>
                </fieldset>

                {/*  */}
                <fieldset className="form-group w-full">
                  <legend
                    htmlFor="811144166"
                    className=" text-bblue-200 text-xl py-2 w-full"
                  >
                    Team Leader Contact Number
                  </legend>
                  <div className="formText ">
                    <input
                      id="580637188"
                      type="text"
                      name="entry.580637188"
                      className=" form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 md:w-full w-full"
                      required
                    />
                  </div>
                </fieldset>

                {/*  */}
                <fieldset className="form-group w-full">
                  <legend
                    htmlFor="296546576"
                    className=" text-bblue-200 text-xl py-2 w-full "
                  >
                    Roll Number
                  </legend>
                  <div className="form-group w-full">
                    <input
                      id="1494484691"
                      type="text"
                      name="entry.1494484691"
                      className=" form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                      required
                    />
                  </div>
                </fieldset>

                {/*  */}
                <fieldset className="form-group w-full">
                  <legend
                    for="30119366"
                    className="text-bblue-200 text-xl py-2"
                  >
                    College Name
                  </legend>
                  <div className="form-group">
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="entry.1644823420"
                          value="CBIT"
                          required
                          onChange={() =>
                            this.handleCollegeOptionChange("group1", "CBIT")
                          }
                        />
                        CBIT
                      </label>
                    </div>
                    <div className="radio ">
                      <label>
                        <input
                          type="radio"
                          name="entry.1644823420"
                          value="__other_option__"
                          required
                          onChange={() =>
                            this.handleCollegeOptionChange(
                              "group1",
                              "__other_option__"
                            )
                          }
                        />
                        Other
                      </label>
                      {this.state.collegeOptions.group1 && (
                        <input
                          type="text"
                          name="entry.1644823420.other_option_response"
                          placeholder="Your Institute Name"
                          className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                        />
                      )}
                    </div>
                  </div>
                </fieldset>

                {/*  */}
                <fieldset className="form-group w-full">
                  <legend
                    htmlFor="620465286"
                    className=" text-bblue-200 text-xl py-2 "
                  >
                    Year of Study
                  </legend>
                  <div className="form-group w-full">
                    <select
                      id="620465286"
                      name="entry.108615760"
                      className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void "
                    >
                      <option
                        readOnly="First Year"
                        className="  text-bblue-200 "
                      >
                        First Year
                      </option>
                      <option
                        readOnly="Second Year"
                        className="  text-bblue-200 "
                      >
                        Second Year
                      </option>
                      <option
                        readOnly="Third Year"
                        className="  text-bblue-200 "
                      >
                        Third Year
                      </option>
                      <option
                        readOnly="Fourth Year"
                        className="  text-bblue-200 "
                      >
                        Fourth Year
                      </option>
                    </select>
                  </div>
                </fieldset>

                {/*  */}
                <fieldset className="w-full">
                  <legend
                    htmlFor="1672735296"
                    className=" text-bblue-200 text-xl py-2 "
                  >
                    Branch
                  </legend>
                  <div className="form-group w-full">
                    <select
                      id="1672735296"
                      name="entry.1563983552"
                      className="w-full  form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void "
                    >
                      <option readOnly="CSE" className=" text-bblue-200 ">
                        CSE
                      </option>
                      <option
                        readOnly="CSE AI &amp; ML"
                        className=" text-bblue-200 "
                      >
                        CSE AI &amp; ML
                      </option>
                      <option readOnly="CET" className=" text-bblue-200 ">
                        CET
                      </option>
                      <option readOnly="IT" className=" text-bblue-200 ">
                        IT
                      </option>
                      <option
                        readOnly="AI &amp; DS"
                        className=" text-bblue-200 "
                      >
                        AI &amp; DS
                      </option>
                      <option readOnly="CIVIL" className=" text-bblue-200 ">
                        CIVIL
                      </option>
                      <option
                        readOnly="MECHANICAL"
                        className=" text-bblue-200 "
                      >
                        MECHANICAL
                      </option>
                      <option readOnly="ECE" className=" text-bblue-200 ">
                        ECE
                      </option>
                      <option readOnly="EEE" className=" text-bblue-200 ">
                        EEE
                      </option>
                      <option readOnly="CHEMICAL" className=" text-bblue-200 ">
                        CHEMICAL
                      </option>
                      <option readOnly="BIOTECH" className=" text-bblue-200 ">
                        BIOTECH
                      </option>
                      <option readOnly="MCA" className=" text-bblue-200 ">
                        MCA
                      </option>
                    </select>
                  </div>
                </fieldset>

                {/*  */}
                <fieldset className="w-full">
                  <legend
                    htmlFor="1743077529"
                    className=" text-bblue-200 text-xl py-2 "
                  >
                    Section
                  </legend>
                  <div className="form-group w-full">
                    <select
                      id="1743077529"
                      name="entry.1958219572"
                      className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void "
                    >
                      <option readOnly="1" className=" text-bblue-200 ">
                        1
                      </option>
                      <option readOnly="2" className=" text-bblue-200 ">
                        2
                      </option>
                      <option readOnly="3" className=" text-bblue-200 ">
                        3
                      </option>
                      <option readOnly="4 " className=" text-bblue-200 ">
                        4
                      </option>
                      <option readOnly="5" className=" text-bblue-200 ">
                        5
                      </option>
                    </select>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <div
            className=" px-12 py-6 bg-Manga-100 bg-opacity-20  rounded-xl items-center my-8 w-full fadeInFadeOut"
            id="section-2"
            style={{ display: hiddenOrShow(this.state.teamSize === 5) }}
          >
            <div className=" flex flex-col items-start gap-4 rounded-lg  md:px-4 md:py-3 w-full mx-auto">
              {/*  */}
              <fieldset className="w-full">
                <legend htmlFor="1998221997" className=" formlabel w-full">
                  Team Member Details
                </legend>
                <div className="form-group w-full"></div>
              </fieldset>

              {/*  */}
              <fieldset className="w-full">
                <legend className=" formlabel w-full" htmlFor="88520221">
                  Name
                </legend>
                <div className="form-group w-full">
                  <input
                    id="614815331"
                    type="text"
                    name="entry.614815331"
                    className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                    required={this.state.teamSize === 5}
                  />
                </div>
              </fieldset>

              {/*  */}
              <fieldset className="form-group w-full">
                <legend className=" formlabel w-full" htmlFor="1049216781">
                  Roll Number
                </legend>
                <div className="form-group w-full">
                  <input
                    id="592584203"
                    type="text"
                    name="entry.592584203"
                    className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                    required={this.state.teamSize === 5}
                  />
                </div>
              </fieldset>

              <fieldset className="form-group w-full">
                <legend
                  htmlFor="30119366"
                  className="text-bblue-200 text-xl py-2"
                >
                  College Name
                </legend>
                <div className="form-group">
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="entry.1644823420"
                        value="CBIT"
                        required={this.state.teamSize === 5}
                        onChange={() =>
                          this.handleCollegeOptionChange("group2", "CBIT")
                        }
                      />
                      CBIT
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="entry.1644823420"
                        value="__other_option__"
                        required={this.state.teamSize === 5}
                        onChange={() =>
                          this.handleCollegeOptionChange(
                            "group2",
                            "__other_option__"
                          )
                        }
                      />
                      Other
                    </label>
                    {this.state.collegeOptions.group2 && (
                      <input
                        type="text"
                        name="entry.1644823420.other_option_response"
                        placeholder="Your Institute Name"
                        className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                      />
                    )}
                  </div>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="596154546">
                  Year
                </legend>
                <div className="form-group w-full">
                  <select
                    id="596154546"
                    name="entry.467655292"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="First Year">First Year</option>
                    <option readOnly="Second Year">Second Year</option>
                    <option readOnly="Third Year">Third Year</option>
                    <option readOnly="Fourth Year">Fourth Year</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="2093469607">
                  Branch
                </legend>
                <div className="form-group w-full">
                  <select
                    id="2093469607"
                    name="entry.113284536"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="CSE">CSE</option>
                    <option readOnly="CSE AI &amp; ML">CSE AI &amp; ML</option>
                    <option readOnly="CET">CET</option>
                    <option readOnly="IT">IT</option>
                    <option readOnly="AIDS">AIDS</option>
                    <option readOnly="CIVIL">CIVIL</option>
                    <option readOnly="MECHANICAL">MECHANICAL</option>
                    <option readOnly="ECE">ECE</option>
                    <option readOnly="EEE">EEE</option>
                    <option readOnly="CHEMICAL">CHEMICAL</option>
                    <option readOnly="BIOTECH">BIOTECH</option>
                    <option readOnly="MCA">MCA</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="245507387">
                  Section
                </legend>
                <div className="form-group w-full">
                  <select
                    id="245507387"
                    name="entry.639858685"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="1">1</option>
                    <option readOnly="2">2</option>
                    <option readOnly="3">3</option>
                    <option readOnly="4">4</option>
                    <option readOnly="5">5</option>
                  </select>
                </div>
              </fieldset>
            </div>
          </div>
          <div
            className=" px-12 py-6 bg-Manga-100 bg-opacity-20  rounded-xl items-center my-8 w-full"
            id="section-3"
            style={{
              display: hiddenOrShow([4, 5].includes(this.state.teamSize)),
            }}
          >
            <div className=" flex flex-col items-start gap-4 rounded-lg  md:px-4 md:py-3 w-full mx-auto">
              <fieldset className="w-full">
                <legend className=" formlabel w-full" htmlFor="297319105">
                  Team Member Details
                </legend>
                <div className="form-group w-full"></div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="934191790">
                  Name
                </legend>
                <div className="form-group w-full">
                  <input
                    id="1193142679"
                    type="text"
                    name="entry.1193142679"
                    className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                    required={[4, 5].includes(this.state.teamSize)}
                  />
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel w-full" htmlFor="966119623">
                  Roll Number
                </legend>
                <div className="form-group w-full">
                  <input
                    id="1627949356"
                    type="text"
                    name="entry.1627949356"
                    className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                    required={[4, 5].includes(this.state.teamSize)}
                  />
                </div>
              </fieldset>

              <fieldset className="form-group w-full">
                <legend
                  htmlFor="1147559039"
                  className="text-bblue-200 text-xl py-2"
                >
                  College Name
                </legend>
                <div className="form-group">
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="entry.257862837"
                        value="CBIT"
                        required={[4, 5].includes(this.state.teamSize)}
                        onChange={() =>
                          this.handleCollegeOptionChange("group3", "CBIT")
                        }
                      />
                      CBIT
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="entry.257862837"
                        value="__other_option__"
                        required={[4, 5].includes(this.state.teamSize)}
                        onChange={() =>
                          this.handleCollegeOptionChange(
                            "group3",
                            "__other_option__"
                          )
                        }
                      />
                      Other
                    </label>
                    {this.state.collegeOptions.group3 && (
                      <input
                        type="text"
                        name="entry.257862837.other_option_response"
                        placeholder="Your Institute Name"
                        className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                      />
                    )}
                  </div>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="219766217">
                  Year
                </legend>
                <div className="form-group w-full">
                  <select
                    id="219766217"
                    name="entry.1324061005"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="First Year">First Year</option>
                    <option readOnly="Second Year">Second Year</option>
                    <option readOnly="Third Year">Third Year</option>
                    <option readOnly="Fourth Year">Fourth Year</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="625150825">
                  Branch
                </legend>
                <div className="form-group w-full">
                  <select
                    id="625150825"
                    name="entry.1284054994"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="CSE">CSE</option>
                    <option readOnly="CSE AI &amp; ML">CSE AI &amp; ML</option>
                    <option readOnly="CET">CET</option>
                    <option readOnly="IT">IT</option>
                    <option readOnly="AIDS">AIDS</option>
                    <option readOnly="CIVIL">CIVIL</option>
                    <option readOnly="MECHANICAL">MECHANICAL</option>
                    <option readOnly="ECE">ECE</option>
                    <option readOnly="EEE">EEE</option>
                    <option readOnly="CHEMICAL">CHEMICAL</option>
                    <option readOnly="BIOTECH">BIOTECH</option>
                    <option readOnly="MCA">MCA</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="291227852">
                  Section
                </legend>
                <div className="form-group w-full">
                  <select
                    id="291227852"
                    name="entry.11271393"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="1">1</option>
                    <option readOnly="2">2</option>
                    <option readOnly="3">3</option>
                    <option readOnly="4">4</option>
                    <option readOnly="5">5</option>
                  </select>
                </div>
              </fieldset>
            </div>
          </div>

          <div
            className=" px-12 py-6 bg-Manga-100 bg-opacity-20  rounded-xl items-center my-8 w-full"
            id="section-4"
            style={{
              display: hiddenOrShow([3, 4, 5].includes(this.state.teamSize)),
            }}
          >
            <div className=" flex flex-col items-start gap-4 rounded-lg  md:px-4 md:py-3 w-full mx-auto">
              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="1535613039">
                  Team Member Details
                </legend>
                <div className="form-group w-full"></div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel w-full" htmlFor="839804749">
                  Name
                </legend>
                <div className="form-group w-full">
                  <input
                    id="1369366464"
                    type="text"
                    name="entry.1369366464"
                    className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                    required={[3, 4, 5].includes(this.state.teamSize)}
                  />
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel w-full" htmlFor="1911951528">
                  Roll Number
                </legend>
                <div className="form-group w-full">
                  <input
                    id="1399044406"
                    type="text"
                    name="entry.1399044406"
                    className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                    required={[3, 4, 5].includes(this.state.teamSize)}
                  />
                </div>
              </fieldset>

              <fieldset className="form-group w-full">
                <legend
                  htmlFor="1289435999"
                  className="text-bblue-200 text-xl py-2"
                >
                  College Name
                </legend>
                <div className="form-group">
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="entry.443034656"
                        value="CBIT"
                        required={[3, 4, 5].includes(this.state.teamSize)}
                        onChange={() =>
                          this.handleCollegeOptionChange("group4", "CBIT")
                        }
                      />
                      CBIT
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="entry.443034656"
                        value="__other_option__"
                        required={[3, 4, 5].includes(this.state.teamSize)}
                        onChange={() =>
                          this.handleCollegeOptionChange(
                            "group4",
                            "__other_option__"
                          )
                        }
                      />
                      Other
                    </label>
                    {this.state.collegeOptions.group4 && (
                      <input
                        type="text"
                        name="entry.443034656.other_option_response"
                        placeholder="Your Institute Name"
                        className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                      />
                    )}
                  </div>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="471078577">
                  Year
                </legend>
                <div className="form-group w-full">
                  <select
                    id="471078577"
                    name="entry.962333022"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="First Year">First Year</option>
                    <option readOnly="Second Year">Second Year</option>
                    <option readOnly="Third Year">Third Year</option>
                    <option readOnly="Fourth Year">Fourth Year</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="1317916075">
                  Branch
                </legend>
                <div className="form-group w-full">
                  <select
                    id="1317916075"
                    name="entry.171849333"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="CSE">CSE</option>
                    <option readOnly="CSE AI &amp; ML">CSE AI &amp; ML</option>
                    <option readOnly="CET">CET</option>
                    <option readOnly="IT">IT</option>
                    <option readOnly="AIDS">AIDS</option>
                    <option readOnly="CIVIL">CIVIL</option>
                    <option readOnly="MECHANICAL">MECHANICAL</option>
                    <option readOnly="ECE">ECE</option>
                    <option readOnly="EEE">EEE</option>
                    <option readOnly="CHEMICAL">CHEMICAL</option>
                    <option readOnly="BIOTECH">BIOTECH</option>
                    <option readOnly="MCA">MCA</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="1725491973">
                  Section
                </legend>
                <div className="form-group w-full">
                  <select
                    id="1725491973"
                    name="entry.2122078574"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="1">1</option>
                    <option readOnly="2">2</option>
                    <option readOnly="3">3</option>
                    <option readOnly="4">4</option>
                    <option readOnly="5">5</option>
                  </select>
                </div>
              </fieldset>
            </div>
          </div>

          <div
            className=" px-12 py-6 bg-Manga-100 bg-opacity-20  rounded-xl items-center my-8 w-full"
            id="section-5"
            style={{
              display: hiddenOrShow([3, 4, 5].includes(this.state.teamSize)),
            }}
          >
            <div className=" flex flex-col items-start gap-4 rounded-lg  md:px-4 md:py-3 w-full mx-auto">
              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="494494688">
                  Team Member Details
                </legend>
                <div className="form-group w-full"></div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="684711812">
                  Name
                </legend>
                <div className="form-group w-full">
                  <input
                    id="1172486922"
                    type="text"
                    name="entry.1172486922"
                    className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                    required={[3, 4, 5].includes(this.state.teamSize)}
                  />
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="49335025">
                  Roll Number
                </legend>
                <div className="form-group w-full">
                  <input
                    id="1756258122"
                    type="text"
                    name="entry.1756258122"
                    className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                    required={[3, 4, 5].includes(this.state.teamSize)}
                  />
                </div>
              </fieldset>

              <fieldset className="form-group w-full">
                <legend
                  htmlFor="892138441"
                  className="text-bblue-200 text-xl py-2"
                >
                  College Name
                </legend>
                <div className="form-group">
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="entry.1327608088"
                        value="CBIT"
                        required={[3, 4, 5].includes(this.state.teamSize)}
                        onChange={() =>
                          this.handleCollegeOptionChange("group5", "CBIT")
                        }
                      />
                      CBIT
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="entry.1327608088"
                        value="__other_option__"
                        required={[3, 4, 5].includes(this.state.teamSize)}
                        onChange={() =>
                          this.handleCollegeOptionChange(
                            "group5",
                            "__other_option__"
                          )
                        }
                      />
                      Other
                    </label>
                    {this.state.collegeOptions.group5 && (
                      <input
                        type="text"
                        name="entry.1327608088.other_option_response"
                        placeholder="Your Institute Name"
                        className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                      />
                    )}
                  </div>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="650086981">
                  Year
                </legend>
                <div className="form-group w-full">
                  <select
                    id="650086981"
                    name="entry.1988676886"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="First Year">First Year</option>
                    <option readOnly="Second Year">Second Year</option>
                    <option readOnly="Third Year">Third Year</option>
                    <option readOnly="Fourth Year">Fourth Year</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="1580540328">
                  Branch
                </legend>
                <div className="form-group w-full">
                  <select
                    id="1580540328"
                    name="entry.1536308670"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="CSE">CSE</option>
                    <option readOnly="CSE AI &amp; ML">CSE AI &amp; ML</option>
                    <option readOnly="CET">CET</option>
                    <option readOnly="IT">IT</option>
                    <option readOnly="AIDS">AIDS</option>
                    <option readOnly="CIVIL">CIVIL</option>
                    <option readOnly="MECHANICAL">MECHANICAL</option>
                    <option readOnly="ECE">ECE</option>
                    <option readOnly="EEE">EEE</option>
                    <option readOnly="CHEMICAL">CHEMICAL</option>
                    <option readOnly="BIOTECH">BIOTECH</option>
                    <option readOnly="MCA">MCA</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="1352080404">
                  Section
                </legend>
                <div className="form-group w-full">
                  <select
                    id="1352080404"
                    name="entry.1511534131"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="1">1</option>
                    <option readOnly="2">2</option>
                    <option readOnly="3">3</option>
                    <option readOnly="4">4</option>
                    <option readOnly="5">5</option>
                  </select>
                </div>
              </fieldset>
            </div>
          </div>

          <div
            className=" px-12 py-6 bg-Manga-100 bg-opacity-20  rounded-xl tems-center my-8 w-full"
            id="section-6"
            style={{ display: hiddenOrShow(this.state.teamSize === 2) }}
          >
            <div className=" flex flex-col items-start gap-4 rounded-lg  md:px-4 md:py-3 w-full mx-auto">
              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="1716255882">
                  Team Member Details
                </legend>
                <div className="form-group w-full"></div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="1570443883">
                  Name
                </legend>
                <div className="form-group w-full">
                  <input
                    id="2120853261"
                    type="text"
                    name="entry.2120853261"
                    className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                    required={this.state.teamSize === 2}
                  />
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="717435800">
                  Roll Number
                </legend>
                <div className="form-group w-full">
                  <input
                    id="2011915937"
                    type="text"
                    name="entry.2011915937"
                    className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                    required={this.state.teamSize === 2}
                  />
                </div>
              </fieldset>

              <fieldset className="form-group w-full">
                <legend
                  htmlFor="1859382656"
                  className="text-bblue-200 text-xl py-2"
                >
                  College Name
                </legend>
                <div className="form-group">
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="entry.1137456307"
                        value="CBIT"
                        required={this.state.teamSize === 2}
                        onChange={() =>
                          this.handleCollegeOptionChange("group6", "CBIT")
                        }
                      />
                      CBIT
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="entry.1137456307"
                        value="__other_option__"
                        required={this.state.teamSize === 2}
                        onChange={() =>
                          this.handleCollegeOptionChange(
                            "group6",
                            "__other_option__"
                          )
                        }
                      />
                      Other
                    </label>
                    {this.state.collegeOptions.group6 && (
                      <input
                        type="text"
                        name="entry.1137456307.other_option_response"
                        placeholder="Your Institute Name"
                        className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                      />
                    )}
                  </div>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="1803766961">
                  Year
                </legend>
                <div className="form-group w-full">
                  <select
                    id="1803766961"
                    name="entry.232235344"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="First Year">First Year</option>
                    <option readOnly="Second Year">Second Year</option>
                    <option readOnly="Third Year">Third Year</option>
                    <option readOnly="Fourth Year">Fourth Year</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="2092753228">
                  Branch
                </legend>
                <div className="form-group w-full">
                  <select
                    id="2092753228"
                    name="entry.1312317868"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="CSE">CSE</option>
                    <option readOnly="CSE AI &amp; ML">CSE AI &amp; ML</option>
                    <option readOnly="CET">CET</option>
                    <option readOnly="IT">IT</option>
                    <option readOnly="AIDS">AIDS</option>
                    <option readOnly="CIVIL">CIVIL</option>
                    <option readOnly="MECHANICAL">MECHANICAL</option>
                    <option readOnly="ECE">ECE</option>
                    <option readOnly="EEE">EEE</option>
                    <option readOnly="CHEMICAL">CHEMICAL</option>
                    <option readOnly="BIOTECH">BIOTECH</option>
                    <option readOnly="MCA">MCA</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="w-full">
                <legend className=" formlabel" htmlFor="1047500206">
                  Section
                </legend>
                <div className="form-group w-full">
                  <select
                    id="1047500206"
                    name="entry.1679693985"
                    className="w-full form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 focus:bg-void"
                  >
                    <option readOnly="1">1</option>
                    <option readOnly="2">2</option>
                    <option readOnly="3">3</option>
                    <option readOnly="4">4</option>
                    <option readOnly="5">5</option>
                  </select>
                </div>
              </fieldset>
            </div>
          </div>
          <div
            className=" px-12 py-6 bg-Manga-100 bg-opacity-20  rounded-xl items-center my-8 w-full"
            id="section-7"
            style={{
              display: hiddenOrShow([1, 2].includes(this.state.teamSize)),
            }}
          >
            <fieldset className="w-full">
              <legend className=" formlabel" htmlFor="673550520">
                Team Member Details
              </legend>
              <div className="form-group w-full"></div>
            </fieldset>

            <fieldset className="w-full">
              <legend
                className=" text-bblue-200 py-2 md:text-lg"
                htmlFor="1085751915"
              >
                Which of the following tech stacks are you and your teammate (if
                any) familiar with?
              </legend>
              <div className="form-group w-full">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="entry.1744030706"
                    readOnly="Frontend Development"
                    // required={[1, 2].includes(this.state.teamSize)}
                  />
                  <label>Frontend Development</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="entry.1744030706"
                    readOnly="Backend  Development"
                    // required={[1, 2].includes(this.state.teamSize)}
                  />
                  <label>Backend Development</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="entry.1744030706"
                    readOnly="UI/UX"
                    // required={[1, 2].includes(this.state.teamSize)}
                  />
                  <label>UI/UX</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="entry.1744030706"
                    readOnly="Machine Learning and Artificial Intelligence"
                    //   required={[1, 2].includes(this.state.teamSize)}
                  />
                  <label>Machine Learning and Artificial Intelligence</label>
                </div>
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="entry.1744030706"
                      readOnly="__other_option__"
                    />
                  </label>
                  <input
                    type="text"
                    name="entry.1744030706.other_option_response"
                    placeholder="Others"
                    className=" rounded text-sm px-2 py-1 border shadow-md border-bgold-200 bg-Manga-100 bg-opacity-30"
                  />
                </div>
              </div>
            </fieldset>
            <div className=" hidden">
              <input type="none" name="fvv" readOnly="1" />
              <input type="none" name="fbzx" readOnly="7231037383997258336" />
              {/* <!--
                      CAVEAT: In multipages (multisection) forms, *pageHistory* field tells to google what sections we've currently completed.
                      This usually starts as "0" for the first page, then "0,1" in the second page... up to "0,1,2..N" in n-th page.
                      Keep this in mind if you plan to change this code to recreate any sort of multipage-feature in your exported form.
                      We're setting this to the total number of pages in this form because we're sending all fields from all the section together.
  --> */}
              <input type="none" name="pageHistory" readOnly="0,1,2,3,4,5,6" />
            </div>
          </div>
          <div id="section-8" className=" flex justify-center my-3 w-full">
            <input
              className="cursor-pointer px-4 py-2 bg-bblue-200 text-void text-xl rounded-lg border border-bgold-200 hover:bg-bblue-300 duration-300"
              type="submit"
              readOnly="Submit"
            />
          </div>
        </form>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
          strategy
          integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
          crossorigin="anonymous"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js"
          integrity="sha256-2Pjr1OlpZMY6qesJM68t2v39t+lMLvxwpa8QlRjJroA="
          crossorigin="anonymous"
        />
        <div className="align-items-center flex flex-col justify-center font-thin  md:flex-row items-center gap-4 text-bgold-200 w-full text-center md:text-base text-sm leading-6">
          To edit your response or if you are unable to register on the website,
          register using the Google form.
        </div>
        <div className=" mt-4 flex justify-center">
          <Link
            className="shimmerb mx-auto "
            href="https://forms.gle/pt1HRckW8i8gAMgv9"
          >
            <button className=" mx-auto px-4 py-2 rounded-lg bg-opacity-10 border border-bgold-200 shadow-md hover:bg-Manga-200 hover:bg-opacity-25 duration-300">
              Google Form
            </button>
          </Link>
        </div>
      </div>
    );
    {
      /* // This script requires jQuery and jquery-form plugin */
    }
    {
      /* // You can use these ones from Cloudflare CDN: */
    }
    {
    }
    {
    }
  }
}
{
  /* // © 2017 Stefano Brilli

            // Fork me on GitHub */
}

export default Form;
