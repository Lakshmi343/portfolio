
import React from 'react'
import Card from 'react-bootstrap/Card';
const Moredetails = () => {
  return (
    < div className='more--details'>
      <div className='edu'>
        <h1>Education</h1>
     <Card className='Education-text'>
      <Card.Header>Bachelor Of Computer Application</Card.Header>
      <Card.Body>
        <Card.Text>
        Completed Bachelors of  Degree in Computer Application  From Univercity of calicut in 2023.
        </Card.Text>
      </Card.Body>
    </Card></div>
      
      <div className='exp'>
    <h1>Expriance</h1>
     <Card className='expriance-text'>
      <Card.Header>Mern full stack intern-August 2023-Present<span>Softroniics,calicut</span></Card.Header>
      <Card.Body>
        <Card.Text>
        <h5>Front-end development</h5>
          Create user friendly - responsive web sites using Html.css,and   boostrap,javascript,react.j.
        </Card.Text>
      </Card.Body>
    </Card></div>



        </div>
     
  )
}

export default Moredetails