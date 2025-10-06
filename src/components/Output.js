import React, { Component } from "react";

function makePhoneNum(input) {
  var inputArray = input.split("");
  inputArray.splice(3, 0, ".");
  inputArray.splice(7, 0, ".");
  return inputArray.join("");
}

function makeDepartment(input) {
  var inputDepartment = input.split(" ");
  return inputDepartment.join(" ");
}

export default class Output extends Component {
  constructor(props) {
    super(props);
    // these refs are never used?????
    this.titleRef = React.createRef;
    this.myDep = React.createRef;
    this.state = {
      value: "",
      copied: false,
      titleWidth: 0,
      depWidth: 0,
      widthSum: 0,
    };
  }

  componentDidMount() {
    console.log(this.titleRef);
  }

  componentDidUpdate() {
    console.log(this.titleRef);
  }
  render() {
    var pronounsStr = this.props.globalState.pronouns.replace(/[{()}]/g, "");
    pronounsStr = "(" + pronounsStr + ")";

    const Pronouns = <span className="pronouns">{pronounsStr}</span>;


    var myTitle = this.props.globalState.title;
    var titleArray = myTitle.split(" ");
    myTitle = titleArray.join("\xa0");

    const Job = (
      <span className="job">
        <div>
          <span id="title">{myTitle}</span>
        </div>
        <div>
          <span id="department">
            {makeDepartment(this.props.globalState.department)}
          </span>
        </div>
      </span>
    );

    const OfficeNum = (
      <span className="office-num">
        <br />
        +1 {makePhoneNum(this.props.globalState.officePhoneNum)}
        {" office"}
      </span>
    );

    const landAcknowledgement = (
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{
          fontFamily: '"Arial"',
          fontSize: "14px",
          color: "#716C6B",
          display: "block",
          width: "100%",
          maxWidth: "400px"
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                fontFamily: '"Arial',
                fontSize: "12px",
                color: "#716C6B",
                paddingTop: "15px",
                lineHeight: "1.4",
                width: "400px",
                textAlign: "left"
              }}
            >
              The Northwestern campus sits on the traditional homelands of the
              people of the Council of Three Fires (the Ojibwe, Potawatomi, and
              Odawa), as well as the Menominee, Miami, and Ho&#8209;Chunk
              nations.{" "}
              <a
                style={{ color: "#716C6B" }}
                href="https://www.northwestern.edu/native-american-and-indigenous-peoples/about/Land%20Acknowledgement.html"
              >
                Learn more
              </a>
              .
            </td>
          </tr>
        </tbody>
      </table>
    );

    const CellNum = (
      <span className="cell-num">
        <br />
        +1 {makePhoneNum(this.props.globalState.cellPhoneNum)}
        {" cell"}
      </span>
    );

    const addressStr = (
      <span className="address">{this.props.globalState.address}</span>
    );

    var undergradDesignation = "";
    for (var i = 0; i < this.props.globalState.underGradInfo.length; i++) {
      if (this.props.globalState.underGradInfo[i].isYearValid) {
        undergradDesignation =
          undergradDesignation +
          " ’" +
          this.props.globalState.underGradInfo[i].year.toString().slice(-2);
      }
    }

    var gradDesignation = "";
    // create gradDesignation
    if (this.props.globalState.isGradAlum) {
      gradDesignation = `${undergradDesignation.length > 0 ? ", " : " "}`;
      for (var i = 0; i < this.props.globalState.gradInfo.length; i++) {
        if (i < this.props.globalState.gradInfo.length - 1) {
          if (i === 0) {
            if (this.props.globalState.gradInfo[i].degree.length > 0) {
              gradDesignation =
                gradDesignation +
                "’" +
                this.props.globalState.gradInfo[i].year.toString().slice(-2) +
                " " +
                this.props.globalState.gradInfo[i].degree +
                ", ";
            }
          } else {
            if (this.props.globalState.gradInfo[i].degree.length > 0) {
              gradDesignation =
                gradDesignation +
                "’" +
                this.props.globalState.gradInfo[i].year.toString().slice(-2) +
                " " +
                this.props.globalState.gradInfo[i].degree +
                ", ";
            }
          }
        } else {
          if (this.props.globalState.gradInfo[i].degree.length > 0) {
            gradDesignation =
              gradDesignation +
              "’" +
              this.props.globalState.gradInfo[i].year.toString().slice(-2) +
              " " +
              this.props.globalState.gradInfo[i].degree;
          }
        }
      }
    }

    // create parentDesignation
    if (this.props.globalState.isParentAlum) {
      var parentDesignation = `${
        undergradDesignation.length > 0 || gradDesignation.length > 0
          ? ", "
          : " "
      }`;
      for (var i = 0; i < this.props.globalState.parentInfo.length; i++) {
        if (i < this.props.globalState.parentInfo.length - 1) {
          if (i === 0) {
            if (this.props.globalState.parentInfo[i].degree.length > 0) {
              parentDesignation =
                parentDesignation +
                "’" +
                this.props.globalState.parentInfo[i].year.toString().slice(-2) +
                " " +
                this.props.globalState.parentInfo[i].degree +
                ", ";
            }
          } else {
            if (this.props.globalState.parentInfo[i].degree.length > 0) {
              parentDesignation =
                parentDesignation +
                "’" +
                this.props.globalState.parentInfo[i].year.toString().slice(-2) +
                " " +
                this.props.globalState.parentInfo[i].degree +
                ", ";
            }
          }
        } else {
          if (this.props.globalState.parentInfo[i].degree.length > 0) {
            parentDesignation =
              parentDesignation +
              "’" +
              this.props.globalState.parentInfo[i].year.toString().slice(-2) +
              " " +
              this.props.globalState.parentInfo[i].degree;
          } else {
            parentDesignation = parentDesignation.replace(/,\s*$/, "");
          }
        }
      }
    }

    return (
      <section className="sig-result">
        <div className="sig-result__wrapper">
          <table
            cellPadding="0"
            cellSpacing="0"
            style={{
              borderTop: "1px solid #4e2a84",
              borderBottom: "1px solid #4e2a84",
              fontFamily: '"Arial"',
              fontSize: "14px",
              color: "#716C6B",
              maxWidth: "max-content",
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    fontFamily: '"Arial"',
                    fontSize: "16px",
                    color: "#4e2a84",
                    paddingTop: "10px",
                    lineHeight: "1.2",
                  }}
                >
                  <strong>
                    {this.props.globalState.firstName}{" "}
                    {`${
                      this.props.globalState.middleName.length > 0
                        ? this.props.globalState.middleName + " "
                        : ""
                    }`}
                    {this.props.globalState.lastName}
                    {this.props.globalState.isUndergradAlum &&
                    undergradDesignation.length > 3
                      ? undergradDesignation
                      : ""}
                    {this.props.globalState.isGradAlum &&
                    gradDesignation.length > 5
                      ? gradDesignation
                      : ""}
                    {this.props.globalState.isParentAlum &&
                      parentDesignation.length > 5 &&
                      parentDesignation}
                  </strong>
                </td>
              </tr>
              {this.props.globalState.hearMyNameLink.length > 0 && (<tr><td><a style={{color:"#4e2a84"}} href={this.props.globalState.hearMyNameLink}>Hear My Name</a></td></tr>)}
              <tr>
                <td
                  style={{
                    fontFamily: '"Arial"',
                    fontSize: "14px",
                    color: "#716C6B",
                    paddingTop: "10px",
                    lineHeight: "1.37",
                    width: "max-content",
                  }}
                >
                  {this.props.globalState.pronouns.length > 0 && Pronouns}
                  {this.props.globalState.title.length > 0 && Job}
                  <div>
                    <span className="org">{this.props.globalState.org}</span>
                  </div>
                  <div>
                    <span className="nu">Northwestern University</span>
                  </div>
                  <div
                    className="special-msg"
                    style={{
                      whiteSpace: "nowrap",
                      // width: "480px",
                    }}
                  >
                    <em>
                      {this.props.globalState.specialMsg === ""
                        ? this.props.globalState.specialMsg.replace(
                            "&#8209;",
                            "–"
                          )
                        : " "}
                    </em>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: '"Arial"',
                    fontSize: "14px",
                    color: "#716C6B",
                    paddingTop: "10px",
                    paddingBottom: "30px",
                    lineHeight: "1.37",
                  }}
                >
                  {this.props.globalState.address !== "None" && addressStr}
                  {this.props.globalState.phoneNumValidity.office && OfficeNum}
                  {this.props.globalState.phoneNumValidity.cell && CellNum}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <table
          cellPadding="0"
          cellSpacing="0"
          style={{
            fontFamily: '"Arial"',
            fontSize: "14px",
            color: "#716C6B",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  fontFamily: '"Arial"',
                  fontSize: "14px",
                  color: "#4e2a84",
                  paddingTop: "10px",
                  lineHeight: "1.37",
                }}
              >
                <strong>
                  <a
                    style={{
                      color: "#4e2a84",
                    }}
                    href="https://alumni.northwestern.edu/?utm_medium=Referral&utm_source=Email-signature&utm_campaign=Email-signature-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    alumni.northwestern.edu
                  </a>
                </strong>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontFamily: '"Arial"',
                  fontSize: "14px",
                  color: "#4e2a84",
                  paddingTop: "10px",
                  lineHeight: "1.37",
                }}
              >
                <strong>
                  <a
                    style={{
                      color: "#4e2a84",
                    }}
                    href="https://giving.northwestern.edu/?utm_medium=Referral&utm_source=Email-signature&utm_campaign=Email-signature-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    giving.northwestern.edu
                  </a>
                </strong>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontFamily: '"Arial"',
                  fontSize: "12px",
                  color: "#716C6B",
                  paddingTop: "10px",
                  lineHeight: "1.37",
                }}
              >
                <a
                  style={{ color: "#716C6B", textDecoration: "none" }}
                  href="https://www.instagram.com/northwesternalumni/"
                >
                  Instagram
                </a>
                {" | "}
                <a
                  style={{ color: "#716C6B", textDecoration: "none" }}
                  href="https://www.linkedin.com/company/northwestern-alumni-association/"
                >
                  LinkedIn
                </a>
                {" | "}
                <a
                  style={{ color: "#716C6B", textDecoration: "none" }}
                  href="https://www.facebook.com/northwesternalumni"
                >
                  Facebook
                </a>
                {" | "}
                <a
                  style={{ color: "#716C6B", textDecoration: "none" }}
                  href="https://www.youtube.com/NorthwesternAlumni"
                >
                  YouTube
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        {this.props.globalState.isAcknowledgement && landAcknowledgement}
      </section>
    );
  }
}
