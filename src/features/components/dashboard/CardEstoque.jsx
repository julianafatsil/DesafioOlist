import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';
import ImgEstoque from '../../../image/aguardando-estoque.png';
import Image from '../Image';

const qtdPedidoEstoque = 3;

const CardEstoque = () => {
  return (
    <Col className="card-step card-step-blue">
      <Row>
        <Col className="card-step-title">Aguardando estoque</Col>
      </Row>
      <Row className="card-step-content">
        <Col>
          <Image
            src={ImgEstoque}
            className="card-step-content-image"
            width={100}
            alt="Imagem com funcionários organizando estoque, trazendo produtos para completar as prateleiras"
          />
        </Col>
        <Col className="card-step-content-total">{qtdPedidoEstoque}</Col>
      </Row>
    </Col>
  );
};

export default CardEstoque;
