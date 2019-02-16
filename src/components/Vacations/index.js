import React from "react";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'reactstrap';
import "./Vacations.css";
class Vacations extends React.Component
{
	render()
	{
		return(

			<div>
				<article class="vacations">
        			<h1>Vacations</h1>
          			<div class="vacation-image">
            			<span class="images"><img src="https://cms.fkimg.com/trip-ideas/Tropical/Highlight-St.-Martin-St.-Maarten-Image.jpg" alt="Image"></img></span>
            			<span class="images"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvTyGctESmZx39NaV_vwKDb1ej60mBtIkPSBJ8jVYvg0gU1HZ" alt="Image"></img></span>
            			<span class="images"><img src="https://static.ticketbar.eu/logo/PARIS-1513078302.jpg" alt="Image"></img></span>
         			</div>
      			</article>
         		<article class="vacations-tag">
         			<br/>
         			<span class="heading">Explore By Category</span>
         			<Container>
         				<Row>
         					<Col>
         					Column1</Col>
         					<Col>
         					COlumn2
         					</Col>
         				</Row>
         				<Row>
         					<Col>
         						<Card style={{ width: '18rem',height:'14rem'}} class="cards">
  									<Card.Body>
				    					<Card.Title>Card Title</Card.Title>
    									<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    									<Card.Text>
    									</Card.Text>
    									<Card.Link href="#">Card Link</Card.Link>
    									<Card.Link href="#">Another Link</Card.Link>
  									</Card.Body>
								</Card>;
							</Col>
							<Col>
								<Card style={{ width: '18rem',height:'14rem'}} class="cards">
			  						<Card.Body>
							    		<Card.Title>Card Title</Card.Title>
			    						<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
			    						<Card.Text>
			    						</Card.Text>
			    						<Card.Link href="#">Card Link</Card.Link>
			    						<Card.Link href="#">Another Link</Card.Link>
			  						</Card.Body>
								</Card>;
							</Col>
						</Row>
					</Container>
					<Container>
         				<Row>
         					<Col sm={8}>
         						<Card style={{ width: '18rem',height:'14rem'}} class="cards">
  									<Card.Body>
				    					<Card.Title>Card Title</Card.Title>
    									<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    									<Card.Text>
    									</Card.Text>
    									<Card.Link href="#">Card Link</Card.Link>
    									<Card.Link href="#">Another Link</Card.Link>
  									</Card.Body>
								</Card>;
							</Col>
							<Col>
								<Card style={{ width: '18rem',height:'14rem'}} class="cards">
			  						<Card.Body>
							    		<Card.Title>Card Title</Card.Title>
			    						<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
			    						<Card.Text>
			    						</Card.Text>
			    						<Card.Link href="#">Card Link</Card.Link>
			    						<Card.Link href="#">Another Link</Card.Link>
			  						</Card.Body>
								</Card>;
							</Col>
						</Row>
					</Container>
					<Container>
         				<Row>
         					<Col sm={8}>
         						<Card style={{ width: '18rem',height:'14rem'}} class="cards">
  									<Card.Body>
				    					<Card.Title>Card Title</Card.Title>
    									<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    									<Card.Text>
    									</Card.Text>
    									<Card.Link href="#">Card Link</Card.Link>
    									<Card.Link href="#">Another Link</Card.Link>
  									</Card.Body>
								</Card>;
							</Col>
							<Col>
								<Card style={{ width: '18rem',height:'14rem'}} class="cards">
			  						<Card.Body>
							    		<Card.Title>Card Title</Card.Title>
			    						<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
			    						<Card.Text>
			    						</Card.Text>
			    						<Card.Link href="#">Card Link</Card.Link>
			    						<Card.Link href="#">Another Link</Card.Link>
			  						</Card.Body>
								</Card>;
							</Col>
						</Row>
					</Container>
         		</article>
         	</div>
		)
	}
}
export default Vacations;