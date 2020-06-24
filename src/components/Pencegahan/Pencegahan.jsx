import React, {Component} from "react";
import {Card, Row, Button, CardGroup} from 'react-bootstrap';
import styles from './Pencegahan.module.css'
import gambar1 from '../../../src/img/cucitangan-01.png';
import gambar2 from '../../../src/img/masker-01.png';
import gambar3 from '../../../src/img/buah-01.png';
import gambar4 from '../../../src/img/disentifektan-01.png';
import gambar5 from '../../../src/img/berkumpul-01.png';
import gambar6 from '../../../src/img/jabattangan-01.png';
import gambar7 from '../../../src/img/muka-01.png';
import gambar8 from '../../../src/img/bepergian-01.png';


class Pencegahan extends React.Component {
    render(){
        return (
            <div>
                <h1 className="text-center m-5">Cara Pencegahan dari Covid-19</h1>
                    <div className={styles.card}>
                        <Card>
                        <div className={styles.sukses}>
                        <Card.Header as="h4" >Hal yang disarankan</Card.Header>
                        </div>
                        <Card.Body>
                            <div className={styles.pencegahanlist}>
                                <img src={gambar1} widht={100} height={100} className="mr-4" alt=""/>
                                <Card.Text>
                                    <h5 className="m-0">Cuci Tangan dengan Baik</h5>
                                    <p className="m-0">Cuci tangan sesering mungkin dan sesuai arahan WHO</p>
                                </Card.Text>
                            </div>
                            <hr/>
                            <div className={styles.pencegahanlist}>
                                <img src={gambar2} widht={100} height={100} className="mr-4" alt=""/>
                                <Card.Text>
                                    <h5 className="m-0">Ingat Selalu Menggunakan Masker</h5>
                                    <p className="m-0">Gunakan masker saat beraktivitas di luar ruangan</p>
                                </Card.Text>
                            </div>
                            <hr/><div className={styles.pencegahanlist}>
                                <img src={gambar3} widht={100} height={100} className="mr-4" alt=""/>
                                <Card.Text>
                                    <h5 className="m-0">Mengkonsumsi Makanan Bergizi</h5>
                                    <p className="m-0">Selalu mencukupi konsumsi makanan bergizi untuk daya tahan</p>
                                </Card.Text>
                            </div>
                            <hr/><div className={styles.pencegahanlist}>
                                <img src={gambar4} widht={100} height={100}  className="mr-4" alt=""/>
                                <Card.Text>
                                    <h5 className="m-0">Bershinkan Benda di Sekitarmu</h5>
                                    <p className="m-0">Rajin membersihkan benda yang sering disentuh dengan disenfektan</p>
                                </Card.Text>
                            </div>                            
                        </Card.Body>
                        </Card>
                    </div>
                    <div className={styles.card}>
                    <Card>
                        <div className={styles.danger}>
                        <Card.Header as="h4">Hal yang tidak disarankan</Card.Header>
                        </div>
                        <Card.Body>
                            <div className={styles.pencegahanlist}>
                                <img src={gambar5} widht={100} height={100} className="mr-4" alt=""/>
                                <Card.Text>
                                    <h5 className="m-0">Hindari Berkumpul</h5>
                                    <p className="m-0">Hindari diam di tempat umum dan berkumpul dengan orang-orang</p>
                                </Card.Text>
                            </div>
                            <hr/>
                            <div className={styles.pencegahanlist}>
                                <img src={gambar6} widht={100} height={100} className="mr-4" alt=""/>
                                <Card.Text>
                                    <h5 className="m-0">Hindari Kontak Fisik</h5>
                                    <p className="m-0">Hindari berjabat tangan dan kotak fisik dengan orang lain</p>
                                </Card.Text>
                            </div>
                            <hr/><div className={styles.pencegahanlist}>
                                <img src={gambar7} widht={100} height={100} className="mr-4" alt=""/>
                                <Card.Text>
                                    <h5 className="m-0">Hindari Menyentuh Wajah</h5>
                                    <p className="m-0">Jangan menyentuh wajah, khususnya mata, hidung dan bibir</p>
                                </Card.Text>
                            </div>
                            <hr/><div className={styles.pencegahanlist}>
                                <img src={gambar8} widht={100} height={100}  className="mr-4" alt=""/>
                                <Card.Text>
                                    <h5 className="m-0">Hindari Berpergian</h5>
                                    <p className="m-0">Jangan bepergian dan tetap di rumah untuk mencegah penularan</p>
                                </Card.Text>
                            </div>                            
                        </Card.Body>
                        </Card>
                    </div>
            </div>
        )
    }
}

export default Pencegahan