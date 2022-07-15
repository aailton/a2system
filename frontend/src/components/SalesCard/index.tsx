import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="a2system-card">
            <h2 className="a2system-sales-title">Vendas</h2>
            <div>
                <div className="a2system-form-control-container">
                    <input className="a2system-form-control" type="text" />
                </div>
                <div className="a2system-form-control-container">
                    <input className="a2system-form-control" type="text" />
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
    )
}

export default SalesCard