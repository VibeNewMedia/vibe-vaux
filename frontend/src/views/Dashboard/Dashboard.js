import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import DonutChart from "react-svg-donut-chart"
import { Link, Redirect } from 'react-router-dom'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { FaBeer,FaGrinBeam, FaCommentAlt, FaFileContract, FaFileAlt, FaPeopleCarry, FaSchool, FaBookMedical, FaBed,  FaMapMarkerAlt,FaRegWindowClose, FaSubway, FaMoneyCheck, FaIdCard, FaHandsHelping} from 'react-icons/fa';

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const items = [
  {
    // src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: '1 - 7',
    
  },
  {
    // src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: '7 - 28 '
  },
  {
    // src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: '29 +'
  }
];


// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My Completed Tasks',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My Completed Tasks',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};


// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      activeIndex: 0
    };
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }
  
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    const { activeIndex } = this.state;
    const dataPie = [
      {value: 100, stroke: "#22594e", strokeWidth: 6},
      {value: 60, stroke: "#2f7d6d"},
     
    ]
    const slides = items.map((item, i) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={i}
        >
        <DonutChart data={dataPie} />
        <CarouselCaption captionText={i.caption} captionHeader={i.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className="animated fadeIn">
      <Row>
          <Col className="profile-container">
        
            <img className="profile-image" src={'../../assets/img/avatars/9.jpg'} width="85px" height="85px" />
            <h1 className="profile-name">Levi Strange</h1>

            </Col>
      </Row>

       <Row>
          <Col>
              <CardHeader className="dashboard">
                Aims and Objectives
              </CardHeader>
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>

          </Col>
        </Row>
        <Row>
          {/* <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">Good - Keep it up!</div>
                <div>Current Monthly Goal Performance</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col> */}

          <Col xs="12" sm="6" lg="3">
            <CardHeader className="dashboard">
              Key Actions Get to 100%
            </CardHeader>
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
              <p className="card-content">Bank Account</p>
              <p className="card-content">Register at Job Centre</p>
              <p className="card-content">Register at Dr Surgery</p>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <CardHeader className="dashboard">
              Your Sections
            </CardHeader>
            <Card className="text-white bg-primary">
              <CardBody className="grid-dashboard pb-0">
              <Row className="grid-row">
                <Col xs="4" sm="4" lg="4">
                <FaCommentAlt className="picton-blue"/>
                 <Link to={'/Supervisor'} className="card-content">Supervisor</Link>

                </Col>
                <Col xs="4" sm="4" lg="4">
                <FaFileContract className="dodger-blue"/>
                <Link to={'/LicenseConditions'} className="card-content">License Conditions</Link>
                </Col>
                <Col xs="4" sm="4" lg="4">
                <FaFileAlt className="cornflower-blue"/>
                <Link to={'/LicenseNonAssociation'} className="card-content">License Non Association</Link>
                </Col>
              </Row>
              <Row className="grid-row">
                <Col xs="4" sm="4" lg="4">
                <FaRegWindowClose className="medium-purple"/>
                <Link to={'/ExclusionZones'} className="card-content">Exclusion Zones</Link>
                </Col>
                <Col xs="4" sm="4" lg="4">
                <FaBed className="wild-strawberry"/>
                <Link to={'/Residence'} className="card-content">Residence</Link>
                </Col>
                <Col xs="4" sm="4" lg="4">
                <FaPeopleCarry className="coral"/>
                <Link to={'/SupportNetwork'} className="card-content">Support Network</Link>
                </Col>
              </Row>
              <Row className="grid-row">
                <Col xs="4" sm="4" lg="4">
                <FaBookMedical className="blue" />
                <Link to={'/Health'} className="card-content">Health Needs / Support</Link>
                </Col>
                <Col xs="4" sm="4" lg="4">
                <FaIdCard className="indigo"/>
                <Link to={'/Employment'} className="card-content">Employment</Link>
                </Col>
                <Col xs="4" sm="4" lg="4">
                <FaMoneyCheck className="purple"/>
                <Link to={'/BudgetingFinance'} className="card-content">Budgeting &amp; Finance</Link>
                </Col>
              </Row>
              <Row className="grid-row">
                <Col xs="4" sm="4" lg="4">
                <FaSubway className="pink"/>
                <Link to={'/Transport'} className="card-content">Transport</Link>
                </Col>
                <Col xs="4" sm="4" lg="4">
                <FaGrinBeam className="red"/>
                <Link to={'/Leisure'} className="card-content">Leisure</Link>
                </Col>
                <Col xs="4" sm="4" lg="4">
                <FaSchool className="orange"/>
                <Link to={'/Education'} className="card-content">Education</Link>
                </Col>
              </Row>
              <Row className="grid-row no-border">
                <Col xs="4" sm="4" lg="4">
                <FaHandsHelping className="yellow"/>
                <Link to={'/ProfessionalSupport'} className="card-content">Professional Support</Link>
                </Col>
                <Col xs="4" sm="4" lg="4">
                <FaMapMarkerAlt className="green"/>
                <Link to={'/Maps'} className="card-content">My Maps</Link>
                </Col>
                <Col xs="4" sm="4" lg="4">
                <FaBeer className="teal"/>
                <Link to={'/Diary'} className="card-content">My Diary</Link>
                </Col>
              </Row>

              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    );
  }
}

export default Dashboard;
