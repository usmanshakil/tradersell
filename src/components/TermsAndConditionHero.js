import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../views/_partials/navbar";

class TermsAndConditionHero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contact-hero-section">
        <NavBar {...this.props} showSvg={false} />
        <Container>
          <Row className="d-flex justify-content-center align-items-center  pt-4 pb-4">
            <Col className=" p-3 mb-2" lg={12} md={12} sm={12}>
          
            <h1 className="trade-your-car-heading">
            Terms and
          <span className="d-inline trader-sell-text pl-2">
          Condition 
          </span> 
        </h1>
             
              <h3 className="pt-3">Introduction</h3>
              <p>
                TNS Enterprises (TNS) is the owner and operator of this website.
                These Website Standard Terms and Conditions written on this
                webpage shall manage your use of our website, accessible at
                TraderSell.com.
              </p>
              <p>
                These Terms will be applied fully and affect to your use of this
                Website. By using this Website, you agreed to accept all terms
                and conditions written in here. You must not use this Website if
                you disagree with any of these Website Standard Terms and
                Conditions.
              </p>
              <p>
                Minors or people below 18 years old are not allowed to use this
                Website.
              </p>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <div>
                <h3 className="pt-1">Intellectual Property Rights </h3>
                <p>
                  Other than the content you own, under these Terms, TNS
                  Enterprises and/or its licensors own all the intellectual
                  property rights and materials contained in this Website.
                </p>
                <p>
                  You are granted limited license only for purposes of viewing
                  the material contained on this Website.
                </p>
              </div>

              <h3 className="pt-1">Restrictions</h3>
              <p>You are specifically restricted from all of the following: </p>

              <ul>
                <li> Publishing any Website material in any other media; </li>
                <li>
                  {" "}
                  Selling, sublicensing and/or otherwise commercializing any
                  Website material;{" "}
                </li>
                <li>
                  {" "}
                  Using this Website in any way that impacts user access to this
                  Website;
                </li>

                <li>
                  Using this Website contrary to applicable laws and
                  regulations, or in any way may cause harm to the Website, or
                  to any person or business entity;
                </li>
                <li>
                  Engaging in any data mining, data harvesting, data extracting
                  or any other similar activity in relation to this Website;
                </li>

                <li>
                  {" "}
                  Using this Website to engage in any advertising or marketing.{" "}
                </li>
              </ul>

              <p>
                {" "}
                Certain areas of this Website are restricted from being accessed
                by you and TNS may further restrict access by you to any areas
                of this Website, at any time, in absolute discretion. Any user
                ID and password you may have for this Website are confidential
                and you must maintain confidentiality as well.
              </p>

              <h3 className="pt-1"> Your Content</h3>
              <p>
                {" "}
                In these Website Standard Terms and Conditions, “Your Content”
                shall mean any audio, video text, images or other material you
                choose to display on this Website. By displaying Your Content,
                you grant TNS a non-exclusive, worldwide irrevocable, sub
                licensable license to use, reproduce, adapt, publish, translate
                and distribute it in any and all media.{" "}
              </p>
              <p>
                {" "}
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers' respective websites. What Are Cookies?{" "}
              </p>

              <h3 className="pt-1">No warranties</h3>
              <p>
                This Website is provided “as is,” with all faults, and TNS
                express no representations or warranties, of any kind related to
                this Website or the materials contained on this Website. Also,
                nothing contained on this Website shall be interpreted as
                advising you.{" "}
              </p>

              <h3 className="pt-1">Limitation of liability</h3>
              <p>
                In no event shall TNS, nor any of its officers, directors and
                employees, shall be held liable for anything arising out of or
                in any way connected with your use of this Website whether such
                liability is under contract. TNS, including its officers,
                directors and employees shall not be held liable for any
                indirect, consequential or special liability arising out of or
                in any way related to your use of this Website.{" "}
              </p>

              <h3 className="pt-1">Indemnification </h3>
              <p>
                {" "}
                You hereby indemnify to the fullest extent TNS from and against
                any and/or all liabilities, costs, demands, causes of action,
                damages and expenses arising in any way related to your breach
                of any of the provisions of these Terms.
              </p>

              <h3 className="pt-1">Severability</h3>
              <p>
                If any provision of these Terms is found to be invalid under any
                applicable law, such provisions shall be deleted without
                affecting the remaining provisions herein.{" "}
              </p>

              <h3 className="pt-1"> Variation of Terms</h3>
              <p>
                {" "}
                TNS is permitted to revise these Terms at any time as it sees
                fit, and by using this Website you are expected to review these
                Terms on a regular basis.{" "}
              </p>

              <h3 className="pt-1">Assignment </h3>
              <p>
                {" "}
                TNS is allowed to assign, transfer, and subcontract its rights
                and/or obligations under these Terms without any notification.
                However, you are not allowed to assign, transfer, or subcontract
                any of your rights and/or obligations under these Terms.
              </p>

              <h3 className="pt-1">Entire Agreement</h3>
              <p>
                {" "}
                These Terms constitute the entire agreement between TNS and you
                in relation to your use of this Website, and supersede all prior
                agreements and understandings.{" "}
              </p>
              <h3>Governing Law & Jurisdiction</h3>
              <p className="pt-1">
                These Terms will be governed by and interpreted in accordance
                with the laws of the State of Country, and you submit to the
                non-exclusive jurisdiction of the state and federal courts
                located in Country for the resolution of any disputes.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    vouched: state.app.vouched,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TermsAndConditionHero);
