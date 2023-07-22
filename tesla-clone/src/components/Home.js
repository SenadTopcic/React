import React, { Component } from 'react'
import style, { styled } from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
          title="Model S"
          description="Order Online for Touchles Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model Y"
          description="Order Online for Touchles Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model 3"
          description="Order Online for Touchles Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model X"
          description="Order Online for Touchles Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        /> 
        <Section 
          title="Lowest Solar Panel in America"
          description="Money-back gurantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section 
          title="Lowest Solar for New Roofs"
          description="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section 
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`