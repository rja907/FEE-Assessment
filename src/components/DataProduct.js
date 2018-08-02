import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

export default class DataProduct extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product } = this.props;
    return (
      <div className="col-md-3" style={mainDivStyle}>
        <strong style={productIDStyle}>Product ID: {product.id}</strong>
        <Card>
          <CardImg
            top
            width="100%"
            src={product.image}
            alt={product.title}
            style={imageStyle}
          />
          <CardBody>
            <CardTitle style={titleStyle}>{product.title}</CardTitle>
            <CardSubtitle style={subtitleStyle}>
              {product.subtitle}
            </CardSubtitle>
            <CardText style={CardTextStyle}>
              {product.tags.map(tag => {
                return (
                  <span style={spanStyle} key={tag}>
                    {tag}
                  </span>
                );
              })}
            </CardText>
            <div style={bigFontStyle}>&#x1F3E0; OVERVIEW</div>
            <div style={bigFontStyle}>&#x1F4CA; SALES</div>
          </CardBody>
        </Card>
        <img />
      </div>
    );
  }
}

const mainDivStyle = { marginLeft: '5px' };
const subtitleStyle = {
  fontWeight: '200',
  fontSize: '14px',
  maxWidth: '230px',
  marginLeft: '40px',
  marginBottom: '10px',
  marginTop: '10px'
};
const productIDStyle = { marginLeft: '25%', color: 'white', fontSize: '2' };
const titleStyle = { textAlign: 'center' };
const imageStyle = { borderBottom: '2px solid green', marginTop: '4px' };
const buttonStyle = { marginLeft: '80%' };
const spanStyle = {
  display: 'inline-block',
  margin: '4px',
  padding: '4px 10px 3px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  whiteSpace: 'nowrap'
};
const CardTextStyle = {
  borderBottom: '2px solid #ccc',
  borderTop: '2px solid #ccc'
};
const bigFontStyle = { fontSize: '1.5rem' };
const rotateIcon = {
  transform: 'rotate(270deg)'
};
