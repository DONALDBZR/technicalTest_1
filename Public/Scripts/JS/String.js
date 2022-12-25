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
             * The value to be checked for a palindrome
             * @type {string}
             */
            input: "",
            /**
             * The needle to taken has referrence
             * @type {string}
             */
            needle: "",
            /**
             * The haystack to be compared against the needle
             * @type {string}
             */
            haystack: "",
            /**
             * The data returned by the server
             * @type {string}
             */
            message: "",
        };
    }
    /**
     * Handling the form submission
     * @param {Event} event
     */
    handleSubmit(event) {
        event.preventDefault();
        switch (event.target.id) {
            case 'needle':
                fetch("/Controllers/NeedleFinder.php", {
                    method: "POST",
                    body: JSON.stringify({
                        needle: this.state.needle,
                        haystack: this.state.haystack,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then((response) => response.json())
                    .then((data) =>
                        this.setState({
                            message: String(data.message),
                        })
                    );
                break;
            case 'palindrome':
                fetch("/Controllers/PalindromeFinder.php", {
                    method: "POST",
                    body: JSON.stringify({
                        input: this.state.input,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then((response) => response.json())
                    .then((data) =>
                        this.setState({
                            message: String(data.message),
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
                <div>String</div>
                <div>
                    <a href="/">Customer</a>
                </div>
                <div>
                    <a href="/Integer">Integer</a>
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
                    <form method="POST" onSubmit={this.handleSubmit.bind(this)} id="needle">
                        <div>Needle Finder</div>
                        <input type="text" name="needle" value={this.state.needle} onChange={this.handleChange.bind(this)} placeholder="Needle" required />
                        <input type="text" name="haystack" value={this.state.haystack} onChange={this.handleChange.bind(this)} placeholder="Haystack" required />
                        <div>
                            <button>Find</button>
                        </div>
                    </form>
                </div>
                <div>
                    <form method="POST" onSubmit={this.handleSubmit.bind(this)} id="palindrome">
                        <div>Palindrome Finder</div>
                        <input type="text" name="input" value={this.state.input} onChange={this.handleChange.bind(this)} placeholder="Value" required />
                        <div>
                            <button>Find</button>
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
