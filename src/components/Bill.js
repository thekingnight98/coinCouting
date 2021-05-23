import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'



import OneThousand from '../asset/img/1000.jpg';
import FiveHundred from '../asset/img/500.png';
import OneHundred from '../asset/img/100.jpg';
import Fifty from '../asset/img/50.png';
import Twenty from '../asset/img/20.jpg';
import Ten from '../asset/img/10.jpg';
import Five from '../asset/img/5.jpg';
import Two from '../asset/img/2.jpg';
import One from '../asset/img/1.jpg';
import Dot50 from '../asset/img/dot50.jpg';
import Dot25 from '../asset/img/dot25.jpg';




import '../asset/css/Bill.css'
import translate from '../I18n/translate'



export default class Bill extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Total: 0,
            OneThousand: 1000,
            FiveHundred: 500,
            OneHundred: 100,
            Fifty: 50,
            Twenty: 20,
            Ten: 10,
            Five: 5,
            Two: 2,
            One: 1,
            Dot50: 0.50,
            Dot25: 0.25,
            CashCounting: 0,
            CoinCounting: 0,
            CashAndCoinCounting: 0,
            errorText: false
        }
    }
    CalculateCash = (val, CashCounter, CoinCounter) => {
        console.log("CashCounter = ", CashCounter);
        console.log("CoinCounter = ", CoinCounter);
        if (CashCounter) {
            console.log('เข้า cash !!');
            // if (this.state.CashCounting <= 10 && this.state.CashAndCoinCounting <= 1200) {
                if (this.state.CoinCounting !== 1000 && this.state.CashAndCoinCounting !== 1200) {
                this.setState({
                    Total: this.state.Total + val,
                    CashCounting: this.state.CashCounting + 1,
                    CashAndCoinCounting: (this.state.CashCounting + 1) + (this.state.CoinCounting),
                })
            }
            else {
                this.setState({
                    errorText: !this.state.errorText
                })
            }
        }
        if (CoinCounter) {
            console.log('เข้า coin !!');
            // if (this.state.CoinCounting <= 5 && this.state.CashAndCoinCounting <= 12) {
            if (this.state.CoinCounting !== 500 && this.state.CashAndCoinCounting !== 1200) {
                this.setState({
                    Total: this.state.Total + val,
                    CoinCounting: this.state.CoinCounting + 1,
                    CashAndCoinCounting: (this.state.CashCounting) + (this.state.CoinCounting + 1),
                })
            }
            else {
                this.setState({
                    errorText: !this.state.errorText
                })
            }
        }

    }

    ResetValue = () => {
        this.setState({
            Total: 0,
            CashCounting: 0,
            CoinCounting: 0,
            CashAndCoinCounting: 0,
            errorText: false
        })
    }

    render() {
        return (
            <div>
                <Container className="pb-5">
                    <Row>
                        <Col md={12}>
                            <h1 className="mt-2">
                                {translate('CoutingProgram')}
                            </h1>
                            {
                                this.state.errorText ? <div>
                                    <h2 className="error-text">เครื่องใส่เต็มจำนวนแล้ว</h2>
                                    <Button onClick={this.ResetValue} variant="danger">Reset</Button> 
                                </div> :
                                    <div className="mt-5">
                                        <h2>{translate('Amount')}  : {this.state.Total} บาท</h2>
                                        <h2>{translate('CashAmount')}   : {this.state.CashCounting} ใบ</h2>
                                        <h2>{translate('CoinAmount')}  : {this.state.CoinCounting} เหรียญ</h2>
                                        <h2>{translate('CashAndCoinAmount')} : {this.state.CashAndCoinCounting}</h2>
                                    </div>
                            }

                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Image onClick={() => this.CalculateCash(this.state.OneThousand, true, false)} className="cash-size cursor-pointer mt-2" src={OneThousand} rounded />

                        </Col>
                        <Col md={4}>
                            <Image onClick={() => this.CalculateCash(this.state.FiveHundred, true, false)} className="cash-size cursor-pointer " src={FiveHundred} rounded />
                        </Col>
                        <Col md={4}>
                            <Image onClick={() => this.CalculateCash(this.state.OneHundred, true, false)} className="cash-size cursor-pointer " src={OneHundred} rounded />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={4}>
                            <Image onClick={() => this.CalculateCash(this.state.Fifty, true, false)} className="cash-size cursor-pointer " src={Fifty} rounded />

                        </Col>
                        <Col md={4}>
                            <Image onClick={() => this.CalculateCash(this.state.Twenty, true, false)} className="cash-size cursor-pointer " src={Twenty} rounded />
                        </Col>

                    </Row>
                    <Row className="mt-5">
                        <Col md={4}>
                            <Image onClick={() => this.CalculateCash(this.state.Ten, false, true)} className="coin-size cursor-pointer " src={Ten} rounded />
                        </Col>
                        <Col md={4}>
                            <Image onClick={() => this.CalculateCash(this.state.Five, false, true)} className="coin-size cursor-pointer " src={Five} rounded />
                        </Col>
                        <Col md={4}>
                            <Image onClick={() => this.CalculateCash(this.state.Two, false, true)} className="coin-size cursor-pointer " src={Two} rounded />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={4}>
                            <Image onClick={() => this.CalculateCash(this.state.One, false, true)} className="coin-size cursor-pointer " src={One} rounded />
                        </Col>
                        <Col md={4}>
                            <Image onClick={() => this.CalculateCash(this.state.Dot50, false, true)} className="coin-size cursor-pointer " src={Dot50} rounded />
                        </Col>
                        <Col md={4}>
                            <Image onClick={() => this.CalculateCash(this.state.Dot25, false, true)} className="coin-size cursor-pointer " src={Dot25} rounded />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
