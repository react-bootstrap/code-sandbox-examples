import React, { useState, useEffect } from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";

import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import ListGroup from "react-bootstrap/ListGroup";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { LinkContainer } from "react-router-bootstrap";

// get our fontawesome imports
import { faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const Map = (mapView) => {
  console.log("in Map, view: ", mapView);
  if (mapView === "counties") return <CountyMap />;
  else if (mapView === "zip") return <ZipMap />;
};

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedTab: "county"
    };
  }

  handleTab = (value) => {
    console.log("In handleTab, value: ", value);
    this.setState({
      selectedTab: value
    });
  };

  render() {
    const mapImg = `img/${this.state.selectedTab}.png`;
    console.log("in render ", this.state.selectedTab);

    return (
      <MemoryRouter>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            Maryland Dept. of Health EPHT
          </Navbar.Brand>
        </Navbar>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            Maryland Department of Health EPHT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container fluid className="mt-4">
          <Row>
            <Col md="2" className="mb-4">
              <h3>Health</h3>

              <Accordion>
                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Asthma
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>

                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Birth Defects
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>

                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Cancer
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>

                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Carbon Monoxide
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>

                <Accordion>
                  <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    Childhood Lead
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="5">
                    <ul>
                      {/* Testing Rates */}
                      <li>
                        <Accordion>
                          <div>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="5-1"
                            >
                              Testing Rates
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5-1">
                              <ul>
                                <li className="ml-4">
                                  <a href="">Trends</a>
                                </li>
                                <li className="ml-4">
                                  <a href="">Equity and Disparity</a>
                                </li>
                                <li className="ml-4">
                                  <a href="">Interventions</a>
                                </li>
                              </ul>
                            </Accordion.Collapse>
                          </div>
                        </Accordion>
                      </li>
                      {/* Sources of Exposure */}
                      <li>
                        <Accordion>
                          <div>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="5-2"
                            >
                              Sources of Exposure
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5-2">
                              <ul>
                                <li className="ml-4">Subtopic 1</li>
                                <li className="ml-4">Subtopic 2</li>
                                <li className="ml-4">Subtopic 3</li>
                              </ul>
                            </Accordion.Collapse>
                          </div>
                        </Accordion>
                      </li>
                      {/* Interventions */}
                      <li>
                        <Accordion>
                          <div>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="5-3"
                            >
                              Interventions
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5-3">
                              <ul>
                                <li className="ml-4">Subtopic 1</li>
                                <li className="ml-4">Subtopic 2</li>
                                <li className="ml-4">Subtopic 3</li>
                              </ul>
                            </Accordion.Collapse>
                          </div>
                        </Accordion>
                      </li>
                    </ul>
                  </Accordion.Collapse>
                </Accordion>

                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="6">
                    COPD
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>
                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="7">
                    Heart Attacks
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>
                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="8">
                    Heat-Related Events
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>
                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="9">
                    Injuries
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="9">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>
                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="10">
                    Occupational Health
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="10">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>

                <h3 className="mt-4">Environmental</h3>
                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="11">
                    Air Quality
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="11">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>
                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="12">
                    Radon
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="12">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>
                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="13">
                    Pollen
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="13">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>
                <div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="14">
                    Climate Change
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="14">
                    <div className="ml-4">Subtopic</div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
              {/* <ButtonToolbar className='custom-btn-toolbar'>
            <LinkContainer to='/'>
              <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Button>About</Button>
            </LinkContainer>
            <LinkContainer to='/users'>
              <Button>Users</Button>
            </LinkContainer>
          </ButtonToolbar> */}
            </Col>

            <Col md="7" className="mb-5">
              <Breadcrumb>
                <Breadcrumb.Item href="">Childhood Lead</Breadcrumb.Item>
                <Breadcrumb.Item active>Testing Rates</Breadcrumb.Item>
              </Breadcrumb>
              <Card>
                <Card.Header
                  as="h5"
                  className="d-flex inline justify-content-between"
                >
                  Childhood Lead - Testing Rates
                  <span>
                    <Button variant="outline-primary">
                      Create Your Own View for this Data
                    </Button>
                  </span>
                </Card.Header>

                <div>
                  <Tabs
                    className="mb-1 ml-2"
                    id="controlled-tab-example"
                    activeKey={this.state.selectedTab}
                    onSelect={(e) => this.handleTab(e)}
                  >
                    <Tab eventKey="county" title="Blood Lead Levels" />
                    <Tab eventKey="housingage" title="Housing Age" />
                    <Tab eventKey="testing" title="Testing and Services" />
                  </Tabs>
                  <Card.Img className="mb-0" src={mapImg} />

                  <Card.Body>
                    <Card.Text />
                    <CardGroup className="mt-4">
                      <Card>
                        <Card.Body>
                          <Card.Title>
                            Trends
                            <FontAwesomeIcon
                              className="float-right icon-opacity"
                              icon={faExternalLinkAlt}
                            />
                          </Card.Title>
                          <p style={{ fontSize: 12 }}>
                            Number of Children 0-72 Months Tested for Lead and
                            Number Reported to Have Blood Lead Level >=10
                            &#181;g/dL: 2000 - 2018
                          </p>
                          {/* <Card.Img
                            variant="bottom"
                            className="mt-4"
                            src="img/trends.png"
                          /> */}
                          <BarLineChart />
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Body>
                          <Card.Title>
                            Equity and Disparity
                            <FontAwesomeIcon
                              className="float-right icon-opacity"
                              icon={faExternalLinkAlt}
                            />
                          </Card.Title>
                          <p style={{ fontSize: 13 }}>
                            Children's Blood Lead Levels in micrograms per
                            deciliter by Race and Birth Year
                          </p>
                          <LineChart />
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Body>
                          <Card.Title>
                            Intervention Impact
                            <FontAwesomeIcon
                              className="float-right icon-opacity"
                              icon={faExternalLinkAlt}
                            />
                          </Card.Title>
                          <p style={{ fontSize: 12 }}>
                            Percentage Change in Children One and Two Years Old
                            Tested for Lead 2000-2018
                          </p>
                          {/* <Card.Img
                            variant="bottom"
                            src="img/interventionimpact.png"
                          /> */}
                          <DoubleBarChart />
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </Card.Body>
                </div>
              </Card>
            </Col>

            {/* we'll want to use sections and appropriate h levels within the accordian */}
            <Col md="3">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Overview
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p>
                        Lead poisoning affects many children younger than 6
                        years old in Maryland. Lead is often a home health
                        hazard that can harm a child’s brain, causing lifelong
                        learning and behavior problems. The symptoms of lead
                        poisoning are not always easy to detect, but its effects
                        are long-lasting. While blood lead levels in children in
                        Maryland have decreased over the years, there are still
                        children newly exposed to lead every year. It is one of
                        the most important environmental problems for children
                        in Maryland.
                      </p>
                      <section>
                        <h6 className="font-weight-bold">
                          Where Lead is Found:
                        </h6>
                        <ul>
                          <li>
                            Chipping, peeling, flaking or deteriorating
                            lead-based paint
                          </li>
                          <li>Certain foods and spices</li>
                          <li>
                            Toys, jewelry, cosmetics, and other consumer
                            products
                          </li>
                          <li>
                            Drinking water, from aging lead pipes or some
                            fixtures
                          </li>
                          <li>Soil</li>
                          <li>Certain jobs</li>
                        </ul>
                      </section>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Download the data
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <p>
                        Download available data relating to this topic. [TBD]
                      </p>
                      <h6>Download links:</h6>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <a href="https://health.maryland.gov/pages/about.aspx">
                            Data link 1
                          </a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <a href="https://health.maryland.gov/pages/about.aspx">
                            Data link 2
                          </a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <a href="https://health.maryland.gov/pages/about.aspx">
                            Data link 3
                          </a>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    About these data
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <p>
                        Maryland Environmental Public Health Tracking (EPHT)
                        shows data on environmental measures like air pollution,
                        health measures like blood lead, and demographic factors
                        that can affect health. These data can be displayed in
                        different ways such as maps, charts, or tables.
                      </p>
                      <p className="font-weight-bold">
                        Where do the data come from?
                      </p>
                      <p>
                        EPHT gets data from other sources, including the
                        Maryland Department of the Environment, the Maryland
                        Cancer Registry, the Health Services Cost Review
                        Commission, the Maryland Birth Defects Registry, and the
                        U.S. Census. Click on the question mark beside each data
                        set to see more information in Metadata.
                        <em>[We'll need to link to the actual data sources]</em>
                      </p>
                      <p className="font-weight-bold">
                        Are these the same data as I would find reported by the
                        programs themselves?
                      </p>
                      <p>
                        Not necessarily. When we present the data, sometimes we
                        are not allowed to show certain counts. For example, we
                        can’t report on people with cancer who may be out of
                        state. In other cases, we may not have addresses that
                        can be shown in a map such as people whose address is a
                        P.O. Box. For the “official” counts and rates, you
                        should always use the original program’s official
                        reports (such as the Maryland Vital Statistics Annual
                        Reports).
                      </p>
                      <p className="font-weight-bold">
                        So what can the data in EPHT tell us?
                      </p>

                      <h6>
                        Tracking is an important tool in environmental public
                        health that can be used to:
                      </h6>
                      <ul>
                        <li>
                          Inform and guide public health programs or policies
                        </li>
                        <li>Identify patterns and trends</li>
                        <li>Provide data for studies and investigations</li>
                        <li>
                          Answer questions about environmental hazards,
                          exposures, or health conditions
                        </li>
                        <li>
                          Explore connections among environmental hazards and
                          health outcomes
                        </li>
                        <li>Produce ideas for research</li>
                        <li>
                          Generate ideas for research to explore connections
                          between our environment and our health
                        </li>
                      </ul>

                      <p className="font-weight-bold">
                        An Important Word about Using These Data
                      </p>
                      <p>
                        It is possible to show many different kinds of data in
                        EPHT. Some relationships are well known; for example,
                        the relationship between asthma and ozone or PM2.5. In
                        other cases, there may be no relationship, such as ozone
                        and blood lead. However, there are several reasons why
                        data in the same map or table might not have a
                        relationship to each other, including:
                      </p>
                      <ul>
                        <li>
                          Latency – Even if one environmental pollutant such as
                          a known cancer-causing chemical can be shown with
                          certain cancers, we know that the exposure that
                          triggers the cancer typically happened many years in
                          the past. So, showing the data on current amounts of
                          the chemical doesn’t necessarily relate to the
                          exposures that triggered the cancers being diagnosed
                          now.
                        </li>
                        <li>
                          Ecological fallacy – The idea of ecological fallacy is
                          that showing two things that occur at the same time
                          doesn’t necessarily mean they are related at the
                          individual level. Some data may show similar trends
                          but just by coincidence, rather than one causing the
                          other.
                        </li>
                        <li>
                          Comparing rates and counts– When looking at two or
                          more areas, rates can change a lot with only one or
                          two cases. This means, for example, that whether
                          cancer or asthma rates look “different” or “the same”
                          may only be the difference of one or two cases in a
                          particular area.
                        </li>
                      </ul>
                      <p>
                        While maps like these can show current or past
                        environmental and health conditions of a group, or of
                        several groups or areas, and may create new ideas for
                        possible research, they generally can’t be used to prove
                        a relationship between any particular environmental
                        hazard and health outcome. As a follow-up step, the user
                        should review results from published studies that use
                        more appropriate data analysis methods.
                      </p>
                      <hr />
                      <a href="resources/BloodLead.pdf">Blood Lead metadata</a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Services and more information
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <h6>Parents</h6>
                      <ul>
                        <li>
                          Lead test requirements to enroll a child in child care
                          or school:&nbsp;
                          <a href="https://phpa.health.maryland.gov/OEHFP/EH/Shared Documents/Final_MarylandDHMHBloodLeadTestingCertificate.pdf">
                            Maryland Blood Lead Testing Certificate (Form 4620)
                          </a>
                        </li>
                      </ul>

                      <h6 className="mt-2">Providers</h6>
                      <ul>
                        <li>
                          <a href="#">
                            2020 Guidelines for Assessment and Management of
                            Childhood Lead Exposure
                          </a>{" "}
                          [url TBD]
                        </li>
                        <li>
                          <a href="#">FAQs on 2019 change to lead law</a> [url
                          TBD]
                        </li>
                        <li>
                          <a href="http://www.dsd.state.md.us/COMAR/searchall.aspx">
                            Regulations On Lead Testing (Code of Maryland
                            Regulations 10.11.04 (Effective 3/28/2016)
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            2015 Maryland Targeting Plan for Areas At Risk of
                            Childhood Lead Poisoning
                          </a>{" "}
                          [url TBD]
                        </li>
                        <li>
                          <a href="http://www.cdc.gov/nceh/lead/acclpp/blood_lead_levels.htm">
                            2012 Centers for Disease Control and Prevention
                            Updated Lead Testing Guidance
                          </a>
                        </li>
                        <li>
                          <a href="#">Point of Care FAQs</a> [url TBD]
                        </li>
                        <li>
                          <a href="#">
                            Final Report on Blood Lead Point of Care Testing
                          </a>{" "}
                          [url TBD]
                        </li>
                      </ul>

                      <h6>Other Resources</h6>
                      <ul>
                        <li>
                          <a href="http://www.mde.state.md.us/programs/land/leadpoisoningprevention/Pages/index.aspx">
                            Maryland Department of the Environment Lead
                            Poisoning Prevention Program
                          </a>
                        </li>
                        <li>
                          <a href="http://www.greenandhealthyhomes.org/">
                            Green and Healthy Homes Initiative
                          </a>
                        </li>
                        <li>
                          <a href="http://www.mwph.org/programs/lead-treatment">
                            Mt. Washington Pediatric Hospital Lead Treatment
                            Program
                          </a>
                        </li>
                        <li>
                          <a href="http://kidsandenvironment.georgetown.edu/">
                            Mid-Atlantic Center for Children’s Health and the
                            Environment
                          </a>
                        </li>
                        <li>
                          <a href="http://www2.epa.gov/lead">
                            Environmental Protection Agency
                          </a>
                        </li>
                        <li>
                          <a href="http://www.cdc.gov/nceh/lead/">
                            Centers for Disease Control and Prevention
                          </a>
                        </li>
                        <li>
                          <a href="https://phpa.health.maryland.gov/OEHFP/EH/Pages/LeadVideos.aspx">
                            Videos for Lead Poisoning Prevention and Treatment
                          </a>
                        </li>
                        <li>
                          <a href="https://health.maryland.gov/newsroom/Pages/Maryland-Health-provides-lead-guidance-to-parents-and-providers.aspx">
                            Federal agencies raise safety concerns about
                            Magellan blood-lead analyzers
                          </a>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </MemoryRouter>
    );
  }
}

class LineChart extends React.Component {
  render() {
    const data = {
      labels: ["1990", "1995", "2000", "2005", "2010"],
      datasets: [
        {
          label: "Black",
          fill: false,
          lineTension: 0.3,
          pointRadius: 2,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          backgroundColor: "rgba(0,102,204,0.3)",
          borderColor: "rgba(0,102,204,1)",
          borderWidth: 2,
          data: [9.3, 7.7, 7.0, 5.7, 3.0]
        },
        {
          label: "White",
          fill: false,
          lineTension: 0.3,
          pointRadius: 2,
          pointHitRadius: 5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          backgroundColor: "rgba(204,0,0,0.3)",
          borderColor: "rgba(204,0,0,1)",
          borderWidth: 2,
          data: [5.3, 4.1, 3.0, 2.4, 1.0]
        }
      ]
    };

    return (
      <div>
        <Line
          data={data}
          options={{
            title: {
              display: false,
              text:
                "Children's Blood Level in micrograms per deciliter by Race and Birth Year",
              fontSize: 16,
              maintainAspectRatio: false
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        />
      </div>
    );
  }
}

class BarLineChart extends React.Component {
  render() {
    const data = {
      labels: [
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015"
      ],
      datasets: [
        {
          label: "Children with BLL > 10",
          type: "line",
          data: [
            3400,
            3200,
            3000,
            2700,
            2200,
            1500,
            1100,
            905,
            860,
            737,
            540,
            510,
            430,
            446,
            440
          ],
          fill: false,
          lineTension: 0.4,
          pointRadius: 1,
          pointHitRadius: 2,
          pointHoverRadius: 2,
          pointHoverBorderWidth: 2,
          backgroundColor: "rgba(204,0,0,1)",
          borderColor: "rgba(204,0,0,1)",
          yAxisID: "y-axis-2"
        },
        {
          type: "bar",
          label: "Children Tested",
          data: [
            70200,
            71000,
            80185,
            78000,
            108590,
            109021,
            110250,
            117400,
            118295,
            110250,
            111250,
            110750,
            110750,
            119750,
            120050
          ],
          fill: false,
          backgroundColor: "rgba(0,102,204,0.5)",
          borderColor: "rgba(0,102,204,1)",
          hoverBackgroundColor: "rgba(0,102,204,0.3)",
          hoverBorderColor: "rgba(0,102,204,1)",
          borderWidth: 1,
          yAxisID: "y-axis-1"
        }
      ]
    };

    const options = {
      responsive: true,
      tooltips: {
        mode: "label"
      },
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: true
            },
            labels: {
              show: false
            }
          }
        ],
        yAxes: [
          {
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1",
            gridLines: {
              display: false
            },
            labels: {
              show: false
            }
          },
          {
            type: "linear",
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          }
        ]
      },
      legend: {
        display: false,
        position: "bottom"
      }
    };

    const plugins = [
      {
        afterDraw: (chartInstance, easing) => {
          //const ctx = chartInstance.chart.ctx;
          //ctx.fillText("This text drawn by a plugin", 100, 100);
        }
      }
    ];

    return (
      <div>
        <Bar data={data} options={options} plugins={plugins} />
      </div>
    );
  }
}

class DoubleBarChart extends React.Component {
  render() {
    const data = {
      labels: [
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015"
      ],
      datasets: [
        {
          label: "Two Years",
          backgroundColor: "rgba(204,0,0,0.4)",
          borderColor: "rgba(204,0,0,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(204,0,0,0.2)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [
            21,
            23,
            24,
            23,
            29,
            31,
            30.4,
            34,
            35,
            37,
            36.4,
            36.1,
            37,
            39,
            39.3,
            40
          ]
        },
        {
          label: "One Year",
          backgroundColor: "rgba(0,102,204,0.6)",
          borderColor: "rgba(0,102,204,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0,102,204,0.2)",
          hoverBorderColor: "rgba(0,102,204,1)",
          data: [
            32,
            36,
            35,
            34,
            43,
            41,
            43.4,
            44,
            45,
            47,
            46.4,
            46.1,
            47,
            49,
            53.3,
            50
          ]
        }
      ]
    };

    const options = {
      responsive: true,
      tooltips: {
        mode: "label"
      },
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: true
            },
            labels: {
              show: false
            }
          }
        ],
        yAxes: [
          {
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1",
            gridLines: {
              display: false
            },
            labels: {
              show: false
            }
          },
          {
            type: "linear",
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          }
        ]
      },
      legend: {
        display: false,
        position: "bottom"
      }
    };

    return (
      <div>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }
}

export default App;
