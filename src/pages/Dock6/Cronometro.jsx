import React, { Component } from 'react';

class Cronometro extends Component {
    constructor() {
        super();
        this.state = {
            segundos: 0,
            minutos: 0,
            horas: 0,
            isRunning: false,
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.actualizarCronometro, 1000);

        // Iniciar el cronómetro automáticamente al montar el componente
        this.iniciarDetenerCronometro();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    iniciarDetenerCronometro = () => {
        this.setState((prevState) => ({
            isRunning: !prevState.isRunning,
        }));
    };

    reiniciarCronometro = () => {
        this.setState({
            segundos: 0,
            minutos: 0,
            horas: 0,
        });
    };

    actualizarCronometro = () => {
        if (this.state.isRunning) {
            this.setState((prevState) => {
                let segundos = prevState.segundos + 1;
                let minutos = prevState.minutos;
                let horas = prevState.horas;
                if (segundos === 60) {
                    segundos = 0;
                    minutos += 1;
                }
                if (minutos === 60) {
                    minutos = 0;
                    horas += 1;
                }
                return { segundos, minutos, horas };
            });
        }
    };

    render() {
        return (
            <div>
                <div>
                    <span>{String(this.state.horas).padStart(2, '0')}:</span>
                    <span>{String(this.state.minutos).padStart(2, '0')}:</span>
                    <span>{String(this.state.segundos).padStart(2, '0')}</span>
                </div>
                {/* <button onClick={this.iniciarDetenerCronometro}>
                    {this.state.isRunning ? 'Detener' : 'Iniciar'}
                </button>
                <button onClick={this.reiniciarCronometro}>Reiniciar</button> */}
            </div>
        );
    }
}

export default Cronometro;
