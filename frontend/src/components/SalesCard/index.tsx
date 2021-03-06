import NotificationButton from '../NotificationButton'
import './styles.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <main className="container-padding">
            <div className="a2system-card">
                <h2 className="a2system-sales-title">Vendas</h2>
                <br />
                <div className="a2system-date-control">
                    <div className="a2system-form-control-container">
                        <p>Data Inicial</p>
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="a2system-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="a2system-form-control-container">
                        <p>Data Final</p>
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="a2system-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>
                <div>
                    <table className="a2system-sales-table">
                        <thead>
                            <tr>
                                <th className="show-992">ID</th>
                                <th className="show-576">Data</th>
                                <th>Vendedor</th>
                                <th className="show-992">Visitas</th>
                                <th className="show-992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show-992">#341</td>
                                <td className="show-576">13/07/2022</td>
                                <td>Anakin</td>
                                <td className="show-992">15</td>
                                <td className="show-992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="a2system-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show-992">#341</td>
                                <td className="show-576">13/07/2022</td>
                                <td>Anakin</td>
                                <td className="show-992">15</td>
                                <td className="show-992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="a2system-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show-992">#341</td>
                                <td className="show-576">13/07/2022</td>
                                <td>Anakin</td>
                                <td className="show-992">15</td>
                                <td className="show-992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="a2system-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br />
            <p>A2 System - Desenvolvido por&nbsp;  
                <a href="https://www.instagram.com/_aailton/" target="_blank">@_aailton</a>.
            </p>
        </main>
    )
}

export default SalesCard