/**
 * The Application that is going to be rendered in the DOM
 */
class Application extends React.Component {
    constructor(props) {
        super(props);
        /**
         * States of the application
         */
        this.state = {
            /**
             * The value to be calculated
             * @type {int}
             */
            input1: 0,
            /**
             * The value to be calculated
             * @type {int}
             */
            input2: 0,
            /**
             * The data returned by the server
             * @type {int}
             */
            message: 0,
        };
    }
    /**
     * Handling the form submission
     * @param {Event} event
     */
    handleSubmit(event) {
        event.preventDefault();
        switch (event.target.id) {
            case 'factorial':
                fetch("/Controllers/FactorialCalculator.php", {
                    method: "POST",
                    body: JSON.stringify({
                        value: this.state.input1,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then((response) => response.json())
                    .then((data) =>
                        this.setState({
                            message: data.message,
                        })
                    );
                break;
            case 'modulo':
                fetch("/Controllers/ModuloCalculator.php", {
                    method: "POST",
                    body: JSON.stringify({
                        value: this.state.input2,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then((response) => response.json())
                    .then((data) =>
                        this.setState({
                            message: data.message,
                        })
                    );
                break;
        }
    }
    /**
     * Handling any change that is made in the user interface
     * @param {Event} event
     */
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }
    /**
     * Renders the components that are being returned
     * @returns {Application} Component
     */
    render() {
        return [<Header />, <Main />, <Footer />];
    }
}
/**
 * The component that is the header
 */
class Header extends Application {
    render() {
        return (
            <header>
                <div>Integer</div>
                <div>
                    <a href="/">Customer</a>
                </div>
                <div>
                    <a href="/String">String</a>
                </div>
            </header>
        );
    }
}
/**
 * The component that is the main
 */
class Main extends Application {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main>
                <div>
                    <form method="POST" onSubmit={this.handleSubmit.bind(this)} id="factorial">
                        <div>Factorial Calculator</div>
                        <input type="number" name="input1" value={this.state.input1} onChange={this.handleChange.bind(this)} placeholder="Value" required />
                        <div>
                            <button>Calculate</button>
                        </div>
                    </form>
                </div>
                <div>
                    <form method="POST" onSubmit={this.handleSubmit.bind(this)} id="modulo">
                        <div>Modulo Calculator</div>
                        <input type="number" name="input2" value={this.state.input2} onChange={this.handleChange.bind(this)} placeholder="Value" required />
                        <div>
                            <button>Calculate</button>
                        </div>
                    </form>
                </div>
                <div style={{ justifyContent: "center" }}>{this.state.message}</div>
            </main>
        );
    }
}
/**
 * The component that is the footer
 */
class Footer extends Application {
    render() {
        return <footer>Application</footer>;
    }
}
// Rendering the page
ReactDOM.render(<Application />, document.body);
